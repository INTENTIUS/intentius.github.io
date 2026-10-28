// The combined comparison on /compare/terraform-platforms/: Intentius against
// HCP Terraform and Pulumi Cloud, with Spacelift and env zero as the column
// for tools that run both engines. It is assembled from the two engines' own
// data and adds no claim of its own:
//
// - LEAD, the shared story, repeats cells from arenas.mjs (Terraform) and
//   compare-pulumi-platforms.mjs (Pulumi) side by side, and works out "the
//   plan you need" from their gating arenas;
// - TERRAFORM and PULUMI are those two files as they are, less their behold
//   arenas;
// - BEHOLD is both behold arenas as one, since behold reads both engines.
//
// Each data file says where its cells come from and when they were read.

import * as tf from './arenas.mjs';
import * as pu from './compare-pulumi-platforms.mjs';

const T = 'https://intentius.io/terragucci';
const PW = 'https://intentius.io/plywood';
const B = 'https://intentius.io/behold';

const cell = (data, arena, q, v) => data.ARENAS.find((a) => a.id === arena).rows.find((r) => r.q === q)[v];
const named = (name, c) => [name, ...c];

// The plan a vendor needs for every feature in a gating arena, and how many
// of them it has no equivalent for, as CompareTeaser.astro words it.
const need = (data, v) => {
	let max = -1, none = 0;
	for (const f of data.GATED) {
		const c = f[v];
		if (c.plan !== null) max = Math.max(max, c.plan);
		else if (c.tier !== 'unpublished') none++;
	}
	return data.PLANS[v][max] + (none ? `, still missing ${none} ${none === 1 ? 'feature' : 'features'}` : '');
};

const INTENTIUS = { id: 'in', name: 'Intentius', named: true, link: true, color: '#c9a96e', what: 'terragucci, choudoufu, plywood, plunge, behold', href: '/tools/' };
const HCP = tf.VENDORS.find((v) => v.id === 'hcp');
const PC = pu.VENDORS.find((v) => v.id === 'pc');
const CROSS = { id: 'x', name: 'Spacelift and env zero', color: '#4f7cff', what: 'hosted, both engines', href: 'https://docs.spacelift.io/vendors/pulumi' };
const VENDORS = [INTENTIUS, HCP, PC, CROSS];

export const TRADEMARKS = `${tf.TRADEMARKS} ${pu.TRADEMARKS.replace(' Spacelift and the Spacelift logo are trademarks of Spacelift, Inc.', '').replace(' Logos are used to identify each product and are shown unaltered.', '')}`;

export const LEAD = {
	PREFIX: 'lead-',
	GRADIENT: true,
	LABEL: 'Intentius, HCP Terraform and Pulumi Cloud compared',
	READ_ON: `${tf.READ_ON} for Terraform, ${pu.READ_ON} for Pulumi`,
	TRY: tf.TRY,
	VENDORS,
	ARENAS: [
		{
			id: 'story', title: 'Everything included, in your own CI',
			blurb: 'terragucci and choudoufu for Terraform, plywood and plunge for Pulumi, and behold over both. Terraform and Pulumi in detail follow.',
			rows: [
				{ q: 'The plan you need for all of it',
					in: ['good', `${need(tf, 'tg')} for Terraform and for Pulumi`, [`${T}/`, `${PW}/`]],
					hcp: ['warn', need(tf, 'hcp'), 'https://www.hashicorp.com/en/pricing?product_intent=terraform'],
					pc: ['warn', need(pu, 'pc'), 'https://www.pulumi.com/pricing/'],
					x: { parts: [
						['Spacelift, Terraform', 'warn', need(tf, 'sl'), 'https://spacelift.io/pricing'],
						['Spacelift, Pulumi', 'warn', need(pu, 'sl'), 'https://spacelift.io/pricing'],
						['env zero, Pulumi', 'warn', need(pu, 'e0'), 'https://www.envzero.com/pricing'],
					] } },
				{ q: 'How you pay',
					in: cell(tf, 'basics', 'How you pay', 'tg'),
					hcp: cell(tf, 'basics', 'How you pay', 'hcp'),
					pc: cell(pu, 'basics', 'How you pay', 'pc'),
					x: { parts: [named('Spacelift', cell(tf, 'basics', 'How you pay', 'sl')), named('env zero', cell(pu, 'basics', 'How you pay', 'e0'))] } },
				{ q: 'Where runs execute',
					in: ['warn', 'your CI runners', [`${T}/reference/threat-model/`, `${PW}/#limits`]],
					hcp: cell(tf, 'basics', 'Where runs execute', 'hcp'),
					pc: cell(pu, 'basics', 'Where runs execute', 'pc'),
					x: { parts: [named('Spacelift', cell(tf, 'basics', 'Where runs execute', 'sl')), named('env zero', cell(pu, 'basics', 'Where runs execute', 'e0'))] } },
				{ q: 'State',
					in: ['good', 'your backend, where it already is', [`${T}/reference/state-backends/`, `${PW}/reference/backends/`]],
					hcp: cell(tf, 'data', 'State', 'hcp'),
					pc: cell(pu, 'data', 'State', 'pc'),
					x: { parts: [named('Spacelift, Terraform', cell(tf, 'data', 'State', 'sl')), named('Spacelift, Pulumi', cell(pu, 'data', 'State', 'sl')), named('env zero, Pulumi', cell(pu, 'data', 'State', 'e0'))] } },
				{ q: 'Terraform, Pulumi and chant on three clouds, in one graph',
					in: ['good', 'behold: choudoufu, plunge and chant members drawn together, edges from shared outputs', `${B}/using/three-cloud/`],
					hcp: cell(tf, 'behold', 'Terraform, Pulumi and chant on three clouds, in one graph', 'hcp'),
					pc: cell(pu, 'behold', 'Pulumi, Terraform and chant on three clouds, in one graph', 'pc'),
					x: { parts: [named('Spacelift', cell(tf, 'behold', 'Terraform, Pulumi and chant on three clouds, in one graph', 'sl')), named('env zero', cell(pu, 'behold', 'Pulumi, Terraform and chant on three clouds, in one graph', 'e0'))] } },
				{ q: 'A service every run depends on',
					in: ['good', 'none past your CI and cloud', [`${T}/concepts/how-it-works/`, `${PW}/concepts/how-it-works/`]],
					hcp: cell(tf, 'data', 'A service every run depends on', 'hcp'),
					pc: cell(pu, 'data', 'A service every run depends on', 'pc'),
					x: { parts: [named('Spacelift', cell(tf, 'data', 'A service every run depends on', 'sl')), named('env zero', cell(pu, 'data', 'A service every run depends on', 'e0'))] } },
			],
		},
	],
};

export const TERRAFORM = { ...tf, TRY: undefined, TRADEMARKS: undefined, ARENAS: tf.ARENAS.filter((a) => a.id !== 'behold') };

export const PULUMI = { ...pu, PREFIX: 'pulumi-', TRY: undefined, TRADEMARKS: undefined, ARENAS: pu.ARENAS.filter((a) => a.id !== 'behold') };

// behold's arena once, over both engines: the Terraform rows keep their
// HCP Terraform and Spacelift cells, the Pulumi rows their Pulumi Cloud,
// Spacelift and env zero cells, and the one row both files ask is merged.
const tfBehold = tf.ARENAS.find((a) => a.id === 'behold');
const puBehold = pu.ARENAS.find((a) => a.id === 'behold');
const BOTH_TF = 'Terraform, Pulumi and chant on three clouds, in one graph';
const BOTH_PU = 'Pulumi, Terraform and chant on three clouds, in one graph';
const bothTf = tfBehold.rows.find((r) => r.q === BOTH_TF);
const bothPu = puBehold.rows.find((r) => r.q === BOTH_PU);

export const BEHOLD = {
	PREFIX: 'graph-',
	HEAD: false,
	GRADIENT: true,
	LABEL: 'behold, HCP Terraform, Pulumi Cloud, Spacelift and env zero compared',
	VENDORS,
	TRADEMARKS,
	ARENAS: [
		{
			id: 'behold', title: 'One graph, every engine',
			blurb: 'behold is free. It reads Terraform through choudoufu and Pulumi through plunge. Kubernetes, Helm, Argo CD and Flux need chant.',
			lead: tfBehold.lead,
			rows: [
				{ q: BOTH_TF,
					in: ['good', 'four members on three engines (choudoufu, plunge and chant) on AWS, Azure and GCP; edges from shared outputs', `${B}/using/three-cloud/`],
					hcp: bothTf.hcp,
					pc: bothPu.pc,
					x: { parts: [named('Spacelift', bothTf.sl), named('env zero', bothPu.e0)] } },
				...puBehold.rows.filter((r) => r !== bothPu).map((r) => ({ q: r.q, in: r.pw, pc: r.pc, x: { parts: [named('Spacelift', r.sl), named('env zero', r.e0)] } })),
				...tfBehold.rows.filter((r) => r !== bothTf).map((r) => ({ q: r.q, in: r.tg, hcp: r.hcp, x: { parts: [named('Spacelift', r.sl)] } })),
			],
		},
	],
};
