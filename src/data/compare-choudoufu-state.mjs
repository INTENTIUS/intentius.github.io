// choudoufu against the Terraform or OpenTofu state file, as arenas for
// Arenas.astro. Same shape as arenas.mjs: every cell is a mark ("good" for
// the best answer in its row, "warn", or "bad" for doesn't do it), a few
// words, and its source.

export const LABEL = 'choudoufu and the Terraform state file compared';

export const READ_ON = '2026-10-25';

export const TRADEMARKS = 'Terraform is a trademark of HashiCorp, an IBM Company. OpenTofu is a trademark of The Linux Foundation.';

export const VENDORS = [
	{ id: 'cdf', name: 'choudoufu', logo: { dark: '/brand/vendors/choudoufu.svg', light: '/brand/vendors/choudoufu.svg' }, named: true, link: true, color: '#c9a96e', href: 'https://intentius.io/choudoufu/' },
	{ id: 'tf', name: 'Terraform or OpenTofu', logo: { dark: '/brand/vendors/terraform-on-dark.svg', light: '/brand/vendors/terraform-on-light.svg' }, logo2: { dark: '/brand/vendors/opentofu-on-dark.svg', light: '/brand/vendors/opentofu-on-light.svg' }, color: '#8a5cd6', href: 'https://opentofu.org/docs/language/state/' },
];

const C = 'https://intentius.io/choudoufu';
const H = 'https://developer.hashicorp.com/terraform';

export const ARENAS = [
	{
		id: 'access', title: 'Who can touch what',
		rows: [
			{ q: 'The permission unit',
				cdf: ['good', 'one resource', `${C}/how-it-works/identity/`],
				tf: ['warn', 'one state file', `${H}/language/state`] },
			{ q: 'Narrowing access',
				cdf: ['good', 'write an IAM policy on the tag', `${C}/how-it-works/identity/`],
				tf: ['warn', 'split the state', `${H}/language/state`] },
		],
	},
	{
		id: 'failure', title: 'When something breaks',
		blurb: 'A crash, a killed job, a lost file.',
		rows: [
			{ q: 'An apply killed after a create',
				cdf: ['good', 'the next plan finds the resource by its tag', `${C}/`],
				tf: ['bad', 'an orphan the re-run doesn\'t know about', `${C}/`] },
			{ q: 'The lock a killed apply leaves',
				cdf: ['good', 'none to release', `${C}/`],
				tf: ['warn', 'on S3, GCS or azurerm, held until force-unlock', `${H}/cli/commands/force-unlock`] },
			{ q: 'Losing the state file',
				cdf: ['good', 'it was a cache; the next plan rebuilds it', `${C}/docs/model/cache/`],
				tf: ['bad', 're-import every resource', `${H}/language/import`] },
		],
	},
	{
		id: 'concurrency', title: 'Two changes at once',
		rows: [
			{ q: 'What one apply holds',
				cdf: ['good', 'no lock; each resource is its own record', `${C}/how-it-works/locking/`],
				tf: ['warn', 'the whole state file', `${H}/language/state/locking`] },
			{ q: 'Applies on different resources',
				cdf: ['good', 'both land', `${C}/docs/model/concurrency/`],
				tf: ['warn', 'the second waits for the lock', `${H}/language/state/locking`] },
			{ q: 'A saved plan another apply made stale',
				cdf: ['good', 'refused, naming the resource that moved', `${C}/`],
				tf: ['warn', 'the whole plan refused as stale', `${H}/cli/commands/apply`] },
		],
	},
	{
		id: 'reach', title: 'Where it runs',
		rows: [
			{ q: 'Platforms',
				cdf: ['warn', 'AWS and Kubernetes, more on the way', `${C}/docs/progress/`],
				tf: ['good', 'every provider', `${H}/language/backend`] },
			{ q: 'A backend block or a non-default workspace',
				cdf: ['warn', 'refused; choudoufu live-check reports it before you start', `${C}/docs/progress/`],
				tf: ['good', 'supported', `${H}/language/backend`] },
		],
	},
];
