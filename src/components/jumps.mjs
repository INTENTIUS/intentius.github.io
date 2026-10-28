// In-page links for an arena's words. A comparison may carry LINKS, a map
// from a word to an anchor further down the page (`{ choudoufu:
// '#ar-choudoufu' }`), and a row may carry its own `links` that win over
// the comparison's. `jumps` splits a string into plain pieces and pieces to
// link, so Arenas.astro and ArenaCell.astro can draw each as text or as an
// <a>. Without LINKS a string comes back whole.
//
// "Terraform" inside "HCP Terraform" and "Pulumi" inside "Pulumi Cloud" are
// the vendors' products, so they stay plain.
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const GUARD = { Terraform: ['(?<!HCP )', ''], Pulumi: ['', '(?! Cloud)'] };

export const jumps = (text, links) => {
	if (typeof text !== 'string' || !links) return [{ t: text }];
	const words = Object.keys(links).sort((a, b) => b.length - a.length);
	if (!words.length) return [{ t: text }];
	const re = new RegExp(words.map((w) => `${GUARD[w]?.[0] ?? ''}\\b${esc(w)}\\b${GUARD[w]?.[1] ?? ''}`).join('|'), 'g');
	const out = [];
	let at = 0;
	for (const m of text.matchAll(re)) {
		if (m.index > at) out.push({ t: text.slice(at, m.index) });
		out.push({ t: m[0], href: links[m[0]] });
		at = m.index + m[0].length;
	}
	if (at < text.length) out.push({ t: text.slice(at) });
	return out;
};
