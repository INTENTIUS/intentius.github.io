// plunge against the stock Pulumi checkpoint, as arenas for Arenas.astro.
// Same shape as compare-choudoufu-state.mjs. plunge cells state only what
// plunge's published docs describe.

export const LABEL = 'plunge and the Pulumi checkpoint compared';

export const READ_ON = '2026-11-17';

export const PREFIX = 'pl-';

export const HEAD = false;

export const LEVEL = 3;

export const TRADEMARKS = 'Pulumi and the Pulumi logo are trademarks of Pulumi Corporation, and plunge has no tie to it.';

export const VENDORS = [
	{ id: 'pl', name: 'plunge', logo: { dark: '/brand/vendors/plunge.png', light: '/brand/vendors/plunge.png' }, named: true, link: true, color: '#4a9fd0', href: 'https://intentius.io/plunge/' },
	{ id: 'pu', name: 'Pulumi', logo: { dark: '/brand/vendors/pulumi-on-dark.svg', light: '/brand/vendors/pulumi-on-light.svg' }, icon: true, color: '#a35dc9', href: 'https://www.pulumi.com/docs/iac/concepts/state-and-backends/' },
];

const P = 'https://intentius.io/plunge';
const S = 'https://www.pulumi.com/docs/iac/concepts/state-and-backends/';

export const ARENAS = [
	{
		id: 'access', title: 'Who can touch what',
		rows: [
			{ q: 'The permission unit',
				pl: ['good', 'one resource', `${P}/how-it-works/identity/`],
				pu: ['warn', 'one stack', S] },
			{ q: 'Narrowing access',
				pl: ['good', 'an IAM condition on the plunge-stack tag', `${P}/aws/gate/`],
				pu: ['warn', 'split the stack', S] },
		],
	},
	{
		id: 'failure', title: 'When something breaks',
		blurb: 'A crash, a killed run, a delete nobody meant.',
		rows: [
			{ q: 'A create that already landed',
				pl: ['good', 'the next create lists by marker and binds it', `${P}/how-it-works/concurrency/`],
				pu: ['warn', 'a pending operation to resolve', S] },
			{ q: 'A run that would delete an object',
				pl: ['good', 'checks the live marker first', `${P}/how-it-works/deletes/`],
				pu: ['warn', 'deletes what the checkpoint lists', S] },
			{ q: 'Losing the store',
				pl: ['warn', 'records hold full state; bucket versioning keeps their versions', `${P}/how-it-works/records/`],
				pu: ['warn', 'restore the checkpoint from a backup', S] },
		],
	},
	{
		id: 'concurrency', title: 'Two changes at once',
		rows: [
			{ q: 'What one update holds',
				pl: ['good', 'no stack lock; each record is its own write', `${P}/how-it-works/concurrency/`],
				pu: ['warn', 'the stack lock', S] },
			{ q: 'Updates on different resources',
				pl: ['good', 'both land', `${P}/how-it-works/concurrency/`],
				pu: ['warn', 'one at a time per stack', S] },
			{ q: 'A saved plan another run made stale',
				pl: ['good', 'refused, naming the moved record', `${P}/how-it-works/concurrency/`],
				pu: ['warn', 'checked against the plan\'s constraints', 'https://www.pulumi.com/docs/iac/concepts/update-plans/'] },
		],
	},
	{
		id: 'reach', title: 'Where it runs',
		rows: [
			{ q: 'Platforms',
				pl: ['warn', 'AWS, Kubernetes, GCP and Azure', `${P}/`],
				pu: ['good', 'every provider', S] },
			{ q: 'Stack history',
				pl: ['warn', 'not kept; record versions stay in the bucket', `${P}/how-it-works/`],
				pu: ['good', 'kept', S] },
		],
	},
];
