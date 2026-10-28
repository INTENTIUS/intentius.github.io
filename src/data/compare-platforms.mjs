// The combined comparison on /compare/terraform-platforms/: Intentius against
// HCP Terraform and Pulumi Cloud, with Spacelift as the column for a tool
// that runs both engines. It is assembled from the two engines' own
// data and adds no claim of its own:
//
// - LEAD, the shared story, repeats cells from arenas.mjs (Terraform) and
//   compare-pulumi-platforms.mjs (Pulumi) side by side, and works out the
//   tier each vendor needs for all of terragucci's and plywood's features;
// - TERRAFORM and PULUMI are those two files as they are, less their behold
//   arenas;
// - BEHOLD is both behold arenas as one, since behold reads both engines.
//   Rows the two files both ask are merged; a row only one engine's file
//   asks leaves the other engine's vendor uncompared (a dash).
//
// Each data file says where its cells come from and when they were read.

import * as tf from './arenas.mjs';
import * as pu from './compare-pulumi-platforms.mjs';

const T = 'https://intentius.io/terragucci';
const PW = 'https://intentius.io/plywood';
const B = 'https://intentius.io/behold';
const PL = 'https://intentius.io/plunge';

const cell = (data, arena, q, v) => {
	const row = data.ARENAS.find((a) => a.id === arena).rows.find((r) => r.q === q);
	if (!row) throw new Error(`compare-platforms.mjs: no row "${q}" in ${arena}`);
	return row[v];
};
const row = (data, arena, q) => data.ARENAS.find((a) => a.id === arena).rows.find((r) => r.q === q);
const named = (name, c) => [name, ...c];
const srcs = (...cells) => cells.flatMap((c) => (Array.isArray(c[2]) ? c[2] : [c[2]]));

// The tier a vendor needs for every feature in a gating arena, and how many
// of them it has no equivalent for at any tier.
const need = (data, v, whose) => {
	let max = -1, none = 0;
	for (const f of data.GATED) {
		const c = f[v];
		if (c.plan !== null) max = Math.max(max, c.plan);
		else if (c.tier !== 'unpublished') none++;
	}
	return none ? `${data.PLANS[v][max]} still lacks ${none} of ${whose} ${data.GATED.length}` : data.PLANS[v][max];
};

const INTENTIUS = { id: 'in', name: 'Intentius', named: true, link: true, color: '#c9a96e', what: 'terragucci, choudoufu, plywood, plunge, behold, chant', href: '/tools/' };
const HCP = tf.VENDORS.find((v) => v.id === 'hcp');
const PC = pu.VENDORS.find((v) => v.id === 'pc');
const SL = { ...tf.VENDORS.find((v) => v.id === 'sl'), what: 'hosted, both engines' };
const VENDORS = [INTENTIUS, HCP, PC, SL];

export const TRADEMARKS = `${tf.TRADEMARKS} ${pu.TRADEMARKS.replace(' Spacelift and the Spacelift logo are trademarks of Spacelift, Inc.', '').replace(' Logos are used to identify each product and are shown unaltered.', '')}`;

const GRAPH = 'Terraform and Pulumi on three clouds, in one graph';
const RUNS = 'Runs without calling the vendor';
const STATE = 'State stays in your own backend';

export const LEAD = {
	PREFIX: 'lead-',
	GRADIENT: true,
	LABEL: 'Intentius compared with HCP Terraform, Pulumi Cloud and Spacelift',
	READ_ON: `${tf.READ_ON} for Terraform, ${pu.READ_ON} for Pulumi`,
	TRY: tf.TRY,
	VENDORS,
	ARENAS: [
		{
			id: 'story', title: "What's free here, against each vendor's top tier",
			rows: [
				{ q: 'Resource-level concurrency', def: 'Two changes to one stack or root, on different resources, apply at the same time.',
					in: { parts: [
						['Terraform', 'good', 'with choudoufu, both apply at once', 'https://intentius.io/choudoufu/'],
						['Pulumi', 'good', 'with plunge, both apply at once', `${PL}/claims/`],
					] },
					hcp: cell(tf, 'choudoufu', 'Two applies to one root, on different resources, run side by side', 'hcp'),
					pc: cell(pu, 'plunge', 'Two updates to one stack, on different resources, run side by side', 'pc'),
					sl: cell(tf, 'choudoufu', 'Two applies to one root, on different resources, run side by side', 'sl') },
				{ q: 'No stack lock', def: 'A change locks only the resources it touches, never the whole stack or root.',
					in: { parts: [
						['Terraform', 'good', 'with choudoufu, each resource locks alone', 'https://intentius.io/choudoufu/'],
						['Pulumi', 'good', 'with plunge, each resource locks alone', `${PL}/claims/`],
					] },
					hcp: ['bad', 'locks the whole workspace', cell(tf, 'concurrency', 'One apply locks less than a whole root', 'hcp')[2]],
					pc: ['bad', 'locks the whole stack', cell(pu, 'concurrency', 'One update locks less than a whole stack', 'pc')[2]],
					sl: ['bad', 'locks the whole stack', cell(tf, 'concurrency', 'One apply locks less than a whole root', 'sl')[2]] },
				{ q: "Every terragucci and plywood feature on one tier",
					in: ['good', `all ${tf.GATED.length} of terragucci's and all ${pu.GATED.length} of plywood's, free`, [`${T}/`, `${PW}/`]],
					hcp: ['bad', need(tf, 'hcp', "terragucci's"), 'https://www.hashicorp.com/en/pricing?product_intent=terraform'],
					pc: ['bad', need(pu, 'pc', "plywood's"), 'https://www.pulumi.com/pricing/'],
					sl: { parts: [
						['Terraform', 'bad', need(tf, 'sl', "terragucci's"), 'https://spacelift.io/pricing'],
						['Pulumi', 'bad', need(pu, 'sl', "plywood's"), 'https://spacelift.io/pricing'],
					] } },
				{ q: 'No licence or usage fees',
					in: cell(tf, 'basics', 'No licence or usage fees', 'tg'),
					hcp: cell(tf, 'basics', 'No licence or usage fees', 'hcp'),
					pc: cell(pu, 'basics', 'No licence or usage fees', 'pc'),
					sl: cell(tf, 'basics', 'No licence or usage fees', 'sl') },
				{ q: 'Runs on runners you control',
					in: ['good', 'your CI runners', [`${T}/reference/threat-model/`, `${PW}/#limits`]],
					hcp: cell(tf, 'basics', 'Runs on runners you control', 'hcp'),
					pc: cell(pu, 'basics', 'Runs on runners you control', 'pc'),
					sl: cell(tf, 'basics', 'Runs on runners you control', 'sl') },
				{ q: STATE, def: 'State: the record of what Terraform or Pulumi created.',
					in: { parts: [named('Terraform', cell(tf, 'data', STATE, 'tg')), named('Pulumi', cell(pu, 'data', STATE, 'pw'))] },
					hcp: cell(tf, 'data', STATE, 'hcp'),
					pc: cell(pu, 'data', STATE, 'pc'),
					sl: { parts: [named('Terraform', cell(tf, 'data', STATE, 'sl')), named('Pulumi', cell(pu, 'data', STATE, 'sl'))] } },
				{ q: GRAPH,
					in: ['good', `behold: ${cell(tf, 'behold', GRAPH, 'tg')[1]}`, `${B}/using/three-cloud/`],
					hcp: cell(tf, 'behold', GRAPH, 'hcp'),
					pc: cell(pu, 'behold', GRAPH, 'pc'),
					sl: cell(tf, 'behold', GRAPH, 'sl') },
				{ q: RUNS,
					in: { parts: [named('Terraform', cell(tf, 'data', RUNS, 'tg')), named('Pulumi', cell(pu, 'data', RUNS, 'pw'))] },
					hcp: cell(tf, 'data', RUNS, 'hcp'),
					pc: cell(pu, 'data', RUNS, 'pc'),
					sl: cell(tf, 'data', RUNS, 'sl') },
			],
		},
	],
};

// Each engine's section opens on concurrency and its engine arena (choudoufu
// or plunge), ahead of the tier picker: resource-level concurrency and no
// stack lock lead the comparison.
const FIRST = new Set(['concurrency', 'choudoufu', 'plunge']);
const lead = (arenas) => arenas.filter((a) => a.id !== 'behold').map((a) => (FIRST.has(a.id) ? { ...a, first: true } : a));

export const TERRAFORM = { ...tf, LEVEL: 3, TRY: undefined, TRADEMARKS: undefined, ARENAS: lead(tf.ARENAS) };

export const PULUMI = { ...pu, PREFIX: 'pulumi-', LEVEL: 3, TRY: undefined, TRADEMARKS: undefined, ARENAS: lead(pu.ARENAS) };

// behold's arena once, over both engines. Three questions are asked by both
// files and are merged into one row each, judged in every column: the graph
// across engines, drift on the graph, and unmanaged resources. Every other
// row keeps the cells its file has, and the engine it doesn't cover shows
// the "not compared" dash.
const tfB = tf.ARENAS.find((a) => a.id === 'behold');
const puB = pu.ARENAS.find((a) => a.id === 'behold');
const tfGraph = row(tf, 'behold', GRAPH), puGraph = row(pu, 'behold', GRAPH);
const tfDrift = row(tf, 'behold', 'Drift, shown on the graph'), puDrift = row(pu, 'behold', "Drift, shown on the graph from each engine's own read");
const tfFind = row(tf, 'behold', 'Finding cloud resources nothing manages'), puFind = row(pu, 'behold', 'Finds cloud resources no code manages');
const merged = new Set([tfGraph, puGraph, tfDrift, puDrift, tfFind, puFind]);
if (merged.has(undefined)) throw new Error('compare-platforms.mjs: a merged behold row is missing');

export const BEHOLD = {
	PREFIX: 'graph-',
	LEVEL: 3,
	GRADIENT: true,
	LABEL: 'behold, HCP Terraform, Pulumi Cloud and Spacelift compared',
	READ_ON: `${tf.READ_ON} for Terraform, ${pu.READ_ON} for Pulumi`,
	VENDORS,
	TRADEMARKS,
	ARENAS: [
		{
			id: 'behold', title: 'One graph, every engine',
			blurb: 'behold is free. It reads Terraform through choudoufu and Pulumi through plunge. Kubernetes, Helm, Argo CD and Flux need chant.',
			lead: tfB.lead,
			rows: [
				{ q: GRAPH, in: tfGraph.tg, hcp: tfGraph.hcp, pc: puGraph.pc, sl: tfGraph.sl },
				{ q: 'Drift, shown on the graph from each engine\'s own read', def: 'Drift: a change made outside your code.',
					in: ['good', "live, from each engine's own read: plunge drift for Pulumi, choudoufu's plan for Terraform, chant's live read for chant", srcs(tfDrift.tg, puDrift.pw)],
					hcp: tfDrift.hcp, pc: puDrift.pc, sl: tfDrift.sl },
				{ q: 'Finds cloud resources no code manages',
					in: ['good', 'with choudoufu, each shown as unowned; one Adopt click opens a pull request', srcs(tfFind.tg, puFind.pw)],
					hcp: tfFind.hcp, pc: puFind.pc,
					sl: { parts: [named('Terraform', tfFind.sl), named('Pulumi', puFind.sl)] } },
				...puB.rows.filter((r) => !merged.has(r)).map((r) => ({ q: r.q, in: r.pw, pc: r.pc, sl: r.sl })),
				...tfB.rows.filter((r) => !merged.has(r)).map((r) => ({ q: r.q, in: r.tg, hcp: r.hcp, sl: r.sl })),
			],
		},
	],
};
