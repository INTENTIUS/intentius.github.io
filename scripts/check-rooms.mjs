// Runs after `astro build` (npm run build) and fails it when a page under
// /for/, the home page or src/data/rooms.mjs links a page or an anchor of
// this site that does not exist. Links to other sites are left alone. It
// also fails when the sidebar's "Help me" group and the rooms
// disagree.

import { existsSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROOMS, roomLinks } from '../src/data/rooms.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const problems = [];

const ids = new Map();
const idsOf = (file) => {
	if (!ids.has(file)) ids.set(file, new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
	return ids.get(file);
};

/** The built file a site path is served from, or undefined. */
const target = (path) => {
	const p = join(dist, decodeURIComponent(path));
	if (existsSync(p) && statSync(p).isFile()) return p;
	if (existsSync(join(p, 'index.html'))) return join(p, 'index.html');
	return undefined;
};

/** Why a site address leads nowhere, or undefined when it resolves. `from` is the page it sits on. */
const broken = (href, from) => {
	if (/^(https?:|mailto:|data:|\/\/)/.test(href)) return undefined;
	const [path, anchor] = href.split('#');
	let file = from;
	if (path) {
		file = target(path.split('?')[0]);
		if (!file) return `${href} leads nowhere`;
	}
	if (anchor && file?.endsWith('.html') && !idsOf(file).has(decodeURIComponent(anchor))) return `${href} names an anchor the page does not have`;
	return undefined;
};

if (!existsSync(dist)) {
	console.error('dist is missing: run astro build first');
	process.exit(1);
}

for (const l of roomLinks()) {
	const why = broken(l.href);
	if (why) problems.push(`src/data/rooms.mjs: room ${l.room} links "${l.label}": ${why}`);
}

// Every link in the main column of the home page and the room pages.
const pages = [join(dist, 'index.html'), ...ROOMS.map((r) => join(dist, 'for', r.id, 'index.html'))];
for (const f of pages) {
	if (!existsSync(f)) {
		problems.push(`${relative(dist, f)}: not built`);
		continue;
	}
	const page = readFileSync(f, 'utf8');
	const html = page.slice(page.indexOf('<main'), page.lastIndexOf('</main>'));
	if (!html) problems.push(`${relative(dist, f)}: no <main> to check`);
	for (const [, raw] of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
		const why = broken(raw.replace(/&amp;/g, '&'), f);
		if (why) problems.push(`${relative(dist, f)}: ${why}`);
	}
}

// The sidebar's "Help me" group, against the rooms.
const config = readFileSync(join(root, 'astro.config.mjs'), 'utf8');
const listed = [...config.matchAll(/link: '\/for\/([^/']+)\/'/g)].map((m) => m[1]);
const rooms = ROOMS.map((r) => r.id);
if (listed.join(' ') !== rooms.join(' ')) {
	problems.push(`astro.config.mjs: "Help me" lists ${listed.join(', ')}, but rooms.mjs has ${rooms.join(', ')}`);
}

for (const p of problems) console.error(p);
if (problems.length) process.exit(1);
console.log(`rooms: ${rooms.length} rooms and the home page, every link resolves`);
