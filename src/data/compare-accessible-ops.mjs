// The Accessible Ops properties (accessibleops.net), and how chant and
// choudoufu meet each one, as arenas for Arenas.astro. A cross means the tool
// doesn't do it itself: only through another product, the CI or by hand.
// Opt-in counts as doing it, and the rule is the same for both columns.
// Properties III to VI, X, XII and XIII have no cross and are left out.

export const LABEL = 'chant and choudoufu on Accessible Ops';

export const READ_ON = '2026-10-25';

export const VENDORS = [
	{ id: 'chant', name: 'chant', logo: { dark: '/brand/vendors/chant-on-dark.svg', light: '/brand/vendors/chant-on-light.svg' }, named: true, link: true, color: '#c9a96e', href: 'https://intentius.io/chant/' },
	{ id: 'cdf', name: 'choudoufu', logo: { dark: '/brand/vendors/choudoufu.svg', light: '/brand/vendors/choudoufu.svg' }, named: true, link: true, color: '#b3a797', href: 'https://intentius.io/choudoufu/' },
];

export const TRADEMARKS = 'OpenTofu is a trademark of The Linux Foundation.';

const A = 'https://accessibleops.net';
const N = '';

export const ARENAS = [
	{
		id: 'synthesis', title: 'Synthesis',
		rows: [
			{ q: 'I. Honor the lower layer', note: "Build in the platform's own terms, readable before anything runs.", href: `${A}/honor-the-lower-layer/`,
				chant: ['warn', 'folds to the native spec without running it; a file outside the subset runs', 'https://intentius.io/chant/cli/build/'],
				cdf: ['warn', 'declarative HCL, as upstream; the plan reads the cloud, not a state file', N] },
			{ q: 'II. The same check, left of the commit', note: 'A change proves itself at the keystroke, the same check for a human and an agent.', href: `${A}/correctness-left-of-the-commit/`,
				chant: ['warn', 'types and lint as you type, over LSP and MCP', 'https://intentius.io/chant/cli/lsp/'],
				cdf: ['warn', 'live-check flags what it would refuse, offline, with no credential', N] },
		],
	},
	{
		id: 'ops', title: 'Ops and lifecycle',
		rows: [
			{ q: 'VII. Reversible before risky', note: 'Undoable actions run on their own; the rest wait for a human.', href: `${A}/reversible-before-risky/`,
				chant: ['warn', "deletes gated per resource; rollback is CloudFormation's on AWS", 'https://intentius.io/chant/'],
				cdf: ['bad', 'no rollback; a destroy is not held apart', N] },
			{ q: 'VIII. Escalate the judgment', note: 'The newcomer executes; a human owns the call that matters.', href: `${A}/escalate-the-judgment/`,
				chant: ['warn', 'a durable gate holds the change for an approver', 'https://intentius.io/chant/'],
				cdf: ['warn', 'apply refuses a plan that no longer matches live', N] },
			{ q: 'IX. Attributable', note: 'Every change traces to who made it and who approved it.', href: `${A}/attributable/`,
				chant: ['warn', 'the approval and the change set it approved land in git', 'https://intentius.io/chant/'],
				cdf: ['bad', "the approval record needs chant's pipeline", N] },
		],
	},
	{
		id: 'truth', title: 'Truth and trust',
		rows: [
			{ q: 'XI. The live system is the truth', note: 'Truth lives in the running system, never a separate store you host.', href: `${A}/truth-lives-live/`,
				chant: ['warn', "no store of its own; on AWS the stack record is CloudFormation's", 'https://intentius.io/chant/'],
				cdf: ['bad', 'ownership is a tag; generated values sit in a record store you host', 'https://intentius.io/choudoufu/how-it-works/cache/'] },
			{ q: 'XIV. Verify the artifact', note: 'A deployable proves itself before it ships.', href: `${A}/verify-the-artifact/`,
				chant: ['warn', 'components: SBOM, provenance and a signature, checked before apply', 'https://intentius.io/chant/components/supply-chain/'],
				cdf: ['bad', 'the plan file must still match live; no provenance or signature', N] },
		],
	},
];
