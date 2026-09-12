#!/usr/bin/env node
// Prose lint on the `sentences` trope ruleset, the same engine the chant
// docs and the wardens gate on. This site is new, so there is no baseline:
// any finding of severity high or medium fails; low and candidate print
// as leads. Front matter is stripped first so titles and summaries are
// linted as prose too.
import { readFileSync } from "node:fs";
import { RULES } from "sentences/lint/registry";
import { runRules } from "sentences/lint/engine";
import { buildDocAnalysis } from "sentences/lint/build-doc";
import { buildReport } from "sentences/lint/report";
import { extractProse } from "sentences/lint/markdown-prose";

const verbose = process.argv.includes("--verbose");
const files = process.argv.slice(2).filter((a) => !a.startsWith("--"));

function frontMatterAsProse(raw) {
  // Keep quoted front-matter strings (title, summary, lede, body) as prose
  // lines; blank out the keys so offsets still map onto the file.
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return raw;
  const fm = m[1].replace(/^([^:\n]*:\s*)"(.*)"$/gm, (_, k, v) => " ".repeat(k.length) + " " + v + " ")
                 .replace(/^(?!\s+")[^\n]*$/gm, (l) => (/"/.test(l) ? l : " ".repeat(l.length)));
  return "---\n" + fm + "\n---\n" + raw.slice(m[0].length);
}

function lineOf(text, offset) {
  return text.slice(0, offset).split("\n").length;
}

// Local rules the `sentences` ruleset does not cover, added because this is a
// company site rather than documentation. A colon mid-sentence is the
// nameplate-then-explanation move that reads as a reference manual, and a
// semicolon is a sentence that should have been two.
function localRules(text) {
  const out = [];
  const strip = text
    .replace(/`[^`\n]*`/g, (m) => " ".repeat(m.length))      // inline code
    .replace(/\]\([^)\n]*\)/g, (m) => " ".repeat(m.length))  // link targets
    .replace(/https?:\/\/\S+/g, (m) => " ".repeat(m.length));
  for (const m of strip.matchAll(/\S: /g)) {
    out.push({ start: m.index, rule: "prose/colon", msg: "a colon mid-sentence reads as documentation" });
  }
  for (const m of strip.matchAll(/;/g)) {
    out.push({ start: m.index, rule: "prose/semicolon", msg: "a semicolon is two sentences" });
  }
  return out;
}

let gate = 0;
let total = 0;
for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const withFm = frontMatterAsProse(raw);
  // Blank Hugo shortcodes and list markers to spaces so they neither read as
  // sentence openers nor shift offsets; extractProse keeps offsets too.
  const blanked = withFm
    .replace(/^---\n[\s\S]*?\n---\n/, (s) => s.replace(/^---$/gm, "   "))
    .replace(/\{\{<[\s\S]*?>\}\}/g, (m) => " ".repeat(m.length))
    .replace(/^(\s*)[-*+] /gm, (m) => " ".repeat(m.length))
    // Heading markers are punctuation, not words: blank the hashes and keep
    // the heading text, so a run of short sections is not read as anaphora.
    .replace(/^#{1,6} /gm, (m) => " ".repeat(m.length));
  const text = extractProse(blanked);
  const doc = buildDocAnalysis(text);
  const { findings, errors } = runRules(RULES, doc);
  const report = buildReport(text, findings, errors, RULES);
  const blocking = report.findings.filter((f) => f.severity === "high" || f.severity === "medium");
  gate += blocking.length;
  total += report.counts.findings;
  const local = localRules(text);
  gate += local.length;
  total += local.length;
  if (local.length > 0) {
    console.log(`${file}: ${local.length} house-style finding(s)`);
    for (const f of local) {
      const snippet = text.slice(Math.max(0, f.start - 40), f.start + 30).replace(/\s+/g, " ");
      console.log(`  ${file}:${lineOf(text, f.start)} [medium] ${f.rule}: ${f.msg} :: "...${snippet}..."`);
    }
  }
  if (blocking.length > 0 || verbose) {
    console.log(`${file}: ${report.counts.findings} finding(s), ${blocking.length} blocking, stink ${report.score.total.toFixed(1)}`);
    for (const f of report.findings) {
      if (!verbose && f.severity !== "high" && f.severity !== "medium") continue;
      const snippet = text.slice(f.span.start, f.span.end).replace(/\s+/g, " ").slice(0, 70);
      console.log(`  ${file}:${lineOf(text, f.span.start)} [${f.severity}] ${f.ruleId}: ${f.message} :: "${snippet}"`);
    }
    for (const e of report.errors) console.log(`  rule error ${e.ruleId}: ${e.message}`);
  }
}
console.log(`Prose lint: ${files.length} file(s), ${total} finding(s), ${gate} blocking.`);
process.exit(gate > 0 ? 1 : 0);
