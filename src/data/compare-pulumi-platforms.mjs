// The Pulumi platforms comparison: plywood against Pulumi Cloud, and against
// Spacelift where it runs Pulumi. It has the shape of
// arenas.mjs (the Terraform one) and is drawn by the same Arenas.astro: every
// cell is a mark ("good", "warn", "bad"), a few words, and the source it
// rests on. Vendor pages were read on READ_ON; recheck them before changing a
// cell.
//
// A plywood cell claims only what plywood's published docs describe. The
// plunge arena claims only runs on plunge's claims page, and the behold arena
// only what behold's published docs describe.
//
// Logos: Pulumi's is the one public/brand/vendors already carries, and
// Spacelift's comes from its media page as in arenas.mjs. plywood's and
// plunge's are their own sites' pixel logos.

export const READ_ON = '2026-10-27';

export const LABEL = 'plywood, Pulumi Cloud and Spacelift compared';

export const GRADIENT = true;

export const VENDORS = [
	{ id: 'pw', name: 'plywood', logo: { dark: '/brand/vendors/plywood.png', light: '/brand/vendors/plywood.png' }, named: true, link: true, color: '#c98a3c', what: 'just pipelines', href: 'https://intentius.io/plywood/' },
	{ id: 'pc', name: 'Pulumi Cloud', logo: { dark: '/brand/vendors/pulumi-on-dark.svg', light: '/brand/vendors/pulumi-on-light.svg' }, icon: true, color: '#a35dc9', what: 'hosted', href: 'https://www.pulumi.com/docs/deployments/concepts/' },
	{ id: 'sl', name: 'Spacelift', logo: { dark: '/brand/vendors/spacelift-on-dark.svg', light: '/brand/vendors/spacelift-on-light.svg' }, color: '#4f7cff', what: 'hosted', href: 'https://docs.spacelift.io/vendors/pulumi' },
];

export const TRADEMARKS = 'Pulumi and the Pulumi logo are trademarks of Pulumi Corporation, and plywood and plunge have no tie to it. Spacelift and the Spacelift logo are trademarks of Spacelift, Inc. Logos are used to identify each product and are shown unaltered.';

const PW = 'https://intentius.io/plywood';
const PL = 'https://intentius.io/plunge';
const B = 'https://intentius.io/behold';
const P = 'https://www.pulumi.com/docs';
const PP = 'https://www.pulumi.com/pricing/';
const S = 'https://docs.spacelift.io';
const SP = 'https://spacelift.io/pricing';

// The plans each vendor sells, cheapest first. plywood has one.
export const PLANS = {
	pw: ['Included'],
	pc: ['Free', 'Essentials', 'Pro', 'Enterprise'],
	sl: ['Free', 'Starter+', 'Business', 'Enterprise', 'Enterprise+'],
};

export const GATED_BLURB = "Tick what you need. These are plywood's features; what it lacks is under The basics.";

// The gating arena, as in arenas.mjs: `plan` indexes PLANS, `plan: null` is
// nothing equivalent, `tier: 'unpublished'` an offer no page puts on a plan.
export const GATED = [
	{ id: 'pr', label: 'Previews and updates from pull requests',
		pw: { plan: 0, note: 'GitHub, GitLab or Forgejo', src: `${PW}/getting-started/` },
		pc: { plan: 0, src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 0, note: 'feature preview', src: `${S}/vendors/pulumi` } },
	{ id: 'approval', label: 'An approval before an update',
		pw: { plan: 0, note: 'bound to one preview digest', src: `${PW}/concepts/waves-and-approvals/` },
		pc: { plan: null, src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 1, src: `${S}/concepts/policy/approval-policy` } },
	{ id: 'policy', label: 'Policy as code on every preview',
		pw: { plan: 0, note: 'Rego, and your CrossGuard packs', src: `${PW}/guides/use-policy-packs/` },
		pc: { plan: 2, src: PP },
		sl: { plan: 1, src: `${S}/vendors/pulumi` } },
	{ id: 'drift', label: 'Drift detection',
		pw: { plan: 0, note: 'one issue per stack', src: `${PW}/guides/turn-on-drift-checks/` },
		pc: { plan: 2, src: `${P}/deployments/concepts/drift/` },
		sl: { plan: 1, note: 'private workers only', src: `${S}/concepts/stack/drift-detection` } },
	{ id: 'ephemeral', label: 'A stack per pull request, with a TTL',
		pw: { plan: 0, note: 'destroyed on close or after its ttl', src: `${PW}/guides/review-stacks/` },
		pc: { plan: 2, src: `${P}/deployments/concepts/ttl/` },
		sl: { plan: 2, note: 'private workers only', src: `${S}/concepts/stack/scheduling` } },
	{ id: 'audit', label: 'Audit trail',
		pw: { plan: 0, note: 'rows in your repository, kept as long as you like', src: `${PW}/guides/read-the-audit-trail/` },
		pc: { plan: 2, src: `${P}/administration/concepts/audit-logs/` },
		sl: { plan: 3, note: '30 days', src: `${S}/integrations/audit-trail` } },
	{ id: 'sso', label: 'SSO',
		pw: { plan: 0, note: "your forge's", src: `${PW}/#limits` },
		pc: { plan: 2, src: `${P}/administration/guides/saml/` },
		sl: { plan: 3, src: SP } },
	{ id: 'private', label: 'Runs on your own runners',
		pw: { plan: 0, note: 'your CI', src: `${PW}/#limits` },
		pc: { plan: 3, src: `${P}/administration/concepts/customer-managed-runners/` },
		sl: { plan: 1, src: `${S}/concepts/worker-pools` } },
	{ id: 'selfhost', label: 'Nothing hosted by the vendor',
		pw: { plan: 0, note: 'nothing to host', src: `${PW}/concepts/how-it-works/` },
		pc: { plan: 3, src: `${P}/administration/self-hosting/` },
		sl: { plan: 4, src: SP } },
	{ id: 'waves', label: 'Updates in dependency order, a gate per wave',
		pw: { plan: 0, note: 'order from StackReference reads; each wave behind its gate', src: `${PW}/guides/stack-references/` },
		pc: { plan: null, note: 'no gate', src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: null, note: 'no wave gate', src: `${S}/concepts/stack/stack-dependencies` } },
	{ id: 'grouped', label: 'One preview note for every stack a change reaches',
		pw: { plan: 0, note: 'identical changes grouped, one approval for the set', src: `${PW}/concepts/why-previews-are-grouped/` },
		pc: { plan: null, src: `${P}/deployments/concepts/settings/` },
		sl: { plan: null, src: `${S}/concepts/policy/notification-policy` } },
	{ id: 'comment', label: 'Update from a pull request comment',
		pw: { plan: 0, note: '/plywood up before merge', src: `${PW}/guides/update-before-merge/` },
		pc: { plan: null, src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 1, src: `${S}/concepts/run/pull-request-comments` } },
	{ id: 'stale', label: 'Update only the preview that was approved',
		pw: { plan: 0, note: 'a moved preview updates nothing and names both digests', src: `${PW}/guides/fix-a-refused-wave/` },
		pc: { plan: null, src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 0, src: `${S}/concepts/run` } },
	{ id: 'notify', label: 'Slack, Teams and webhook notifications',
		pw: { plan: 0, note: 'signed webhook, Slack or Teams; approve from Slack', src: `${PW}/guides/notify-a-chat-channel/` },
		pc: { plan: 1, src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: 1, src: `${S}/integrations/webhooks` } },
	{ id: 'oidc', label: 'Short-lived credentials (OIDC)',
		pw: { plan: 0, note: 'a preview identity and an up identity, never the same', src: `${PW}/guides/scope-state-access/` },
		pc: { plan: 0, src: PP },
		sl: { plan: 1, src: `${S}/integrations/cloud-providers/oidc` } },
	{ id: 'review', label: 'A model reviews each pull request',
		pw: { plan: 0, note: 'your model key; approves nothing', src: `${PW}/guides/agent-review-a-pull-request/` },
		pc: { plan: 1, note: 'GitHub.com only', src: `${P}/ai/concepts/neo/code-reviews/` },
		sl: { plan: null, src: `${S}/concepts/run/summarization` } },
	{ id: 'estate', label: 'One view across every stack',
		pw: { plan: 0, note: 'plywood estate: a page with overdue drift checks', src: `${PW}/reference/cli/` },
		pc: { plan: 1, src: `${P}/discovery-governance/guides/search-resources/` },
		sl: { plan: 1, src: SP } },
];

// The arenas after the gating one. Each row: a question, then a cell per vendor.
export const ARENAS = [
	{
		id: 'basics', title: 'The basics',
		rows: [
			{ q: 'No licence or usage fees',
				pw: ['good', 'nothing; Apache-2.0', `${PW}/`],
				pc: ['bad', 'per resource-hour', PP],
				sl: ['bad', 'per worker', SP] },
			{ q: 'Runs on runners you control',
				pw: ['good', 'your CI runners', `${PW}/#limits`],
				pc: ['good', 'Enterprise', `${P}/deployments/concepts/`],
				sl: ['good', 'Starter+', `${S}/concepts/worker-pools`] },
			{ q: 'Nothing for you to run',
				pw: ['bad', 'CI runners, your backend, OIDC roles', `${PW}/getting-started/`],
				pc: ['good', '', `${P}/deployments/concepts/`],
				sl: ['good', '', `${S}/concepts/stack/drift-detection`] },
			{ q: 'Vendor support',
				pw: ['warn', 'GitHub issues; paid setup help from Intentius', 'https://intentius.io/work/'],
				pc: ['good', '', PP],
				sl: ['good', '', `${S}/product/support`] },
			{ q: "A web UI for people who don't write Pulumi",
				pw: ['bad', 'none; changes arrive as pull requests', `${PW}/#limits`],
				pc: ['good', 'Pro', PP],
				sl: ['good', 'Business', `${S}/concepts/blueprint`] },
			{ q: 'Bitbucket or Azure DevOps',
				pw: ['bad', 'GitHub, GitLab and Forgejo only', `${PW}/#limits`],
				pc: ['good', '', `${P}/deployments/concepts/review-stacks/`],
				sl: ['good', '', `${S}/integrations/source-control`] },
		],
	},
	{
		id: 'data', title: 'Where your things live',
		rows: [
			{ q: 'State stays in your own backend',
				pw: ['good', 'stays in your backend: Pulumi Cloud or your own bucket', `${PW}/reference/backends/`],
				pc: ['bad', 'hosted', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', '', `${S}/vendors/pulumi`] },
			{ q: 'Previews and run logs stay in your forge',
				pw: ['good', 'your forge', `${PW}/concepts/how-it-works/`],
				pc: ['bad', '', `${P}/deployments/concepts/`],
				sl: ['bad', '', `${S}/concepts/run`] },
			{ q: 'Audit trail in your own storage',
				pw: ['good', 'your repository, as ledger rows', `${PW}/guides/read-the-audit-trail/`],
				pc: ['good', 'export, Enterprise', `${P}/administration/concepts/audit-logs/`],
				sl: ['bad', '30 days', `${S}/integrations/audit-trail`] },
			{ q: 'No vendor service in every run',
				pw: ['good', 'none past your CI, cloud and backend', `${PW}/concepts/how-it-works/`],
				pc: ['bad', '', `${P}/deployments/concepts/`],
				sl: ['bad', '', `${S}/concepts/worker-pools`] },
		],
	},
	{
		id: 'leaving', title: 'Leaving',
		rows: [
			{ q: 'Your state stays put when you leave',
				pw: ['good', 'never moved', `${PW}/reference/backends/`],
				pc: ['bad', 'stack migrate', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', '', `${S}/vendors/pulumi`] },
			{ q: 'Your pipeline leaves with you',
				pw: ['good', 'plain CI files in your repo', `${PW}/guides/add-to-a-repo/`],
				pc: ['bad', '', `${P}/deployments/concepts/settings/`],
				sl: ['bad', '', `${S}/concepts/stack`] },
			{ q: 'Your policies run anywhere',
				pw: ['good', 'Rego and CrossGuard packs, run anywhere', `${PW}/guides/write-a-policy/`],
				pc: ['good', '', `${P}/discovery-governance/guides/policies-in-ci-cd/`],
				sl: ['bad', 'Spacelift fields', `${S}/concepts/policy`] },
			{ q: 'Cancel at any time',
				pw: ['good', 'none; Apache-2.0', `${PW}/`],
				pc: ['good', 'monthly plans', PP],
				sl: ['bad', 'annual plans', SP] },
		],
	},
	{
		id: 'concurrency', title: 'Two changes at once',
		rows: [
			{ q: 'One update locks less than a whole stack',
				pw: ['good', 'one stack; with plunge, one resource', `${PW}/concepts/locking-and-staleness/`],
				pc: ['bad', 'whole stack', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['bad', 'whole stack', `${S}/concepts/run`] },
			{ q: 'Updates to different stacks run side by side',
				pw: ['good', "side by side, up to your CI's capacity", `${PW}/#limits`],
				pc: ['good', 'unlimited from Pro', PP],
				sl: ['good', 'one per worker', `${S}/concepts/worker-pools`] },
		],
	},
	{
		id: 'plunge', title: 'The engine underneath',
		blurb: 'plunge is free. plywood runs it with engine: plunge. Each row is a recorded run on plunge\'s claims page.',
		lead: { name: 'plunge', logo: { dark: '/brand/vendors/plunge.png', light: '/brand/vendors/plunge.png' }, named: true, link: true, href: `${PL}/` },
		rows: [
			{ q: 'Two updates to one stack, on different resources, run side by side',
				pw: ['good', 'both land, and no lock object appears', `${PL}/claims/`],
				pc: ['bad', 'second queues', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['bad', 'second waits', `${S}/concepts/run`] },
			{ q: 'Drift read for one resource alone',
				pw: ['good', 'one provider read, no stack refresh', `${PL}/claims/`],
				pc: ['bad', 'whole stack', `${P}/deployments/concepts/drift/`],
				sl: ['bad', 'whole stack', `${S}/concepts/stack/drift-detection`] },
			{ q: 'Ownership recorded on the resource itself',
				pw: ['good', 'plunge-stack and plunge-urn tags on the resource itself', `${PL}/claims/`],
				pc: ['bad', '', `${P}/iac/concepts/state-and-backends/`],
				sl: ['bad', '', `${S}/vendors/pulumi`] },
		],
	},
	{
		id: 'behold', title: 'One graph, every engine',
		blurb: 'behold is free. It reads Pulumi through plunge, and Terraform through choudoufu.',
		lead: { name: 'behold', logo: { dark: '/brand/vendors/behold-on-dark.svg', light: '/brand/vendors/behold-on-light.svg' }, named: true, link: true, href: `${B}/` },
		rows: [
			{ q: 'Pulumi, Terraform and chant on three clouds, in one graph',
				pw: ['good', 'four members on three engines, edges drawn from shared outputs', `${B}/using/three-cloud/`],
				pc: ['good', 'Pro', `${P}/discovery-governance/concepts/discovery/`],
				sl: ['bad', 'list only', `${S}/concepts/resources`] },
			{ q: 'Drift, shown by each engine\'s own read',
				pw: ['good', 'plunge drift for Pulumi, choudoufu\'s plan for Terraform, chant\'s live read for chant', `${B}/using/three-cloud/#drift-per-engine`],
				pc: ['bad', 'Pulumi only', `${P}/deployments/concepts/drift/`],
				sl: ['bad', 'per stack', `${S}/concepts/stack/drift-detection`] },
			{ q: "One approval over every engine's plan",
				pw: ['good', 'one change-set digest across the Pulumi, Terraform and chant plans; a moved part refuses the set', `${B}/using/three-cloud/#one-change-set-over-four-members`],
				pc: ['bad', '', `${P}/deployments/guides/gated-deployments/`],
				sl: ['bad', 'per stack', `${S}/concepts/stack/stack-dependencies`] },
			{ q: 'The run that deployed each part',
				pw: ['good', "commit, run, digest, actor and approver, from chant's release ledger", `${B}/using/reading-the-graph/#what-was-deployed-from-where`],
				pc: ['good', '', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', '', `${S}/concepts/run`] },
			{ q: 'A resource nothing manages',
				pw: ['good', 'Adopt opens a pull request through your ReconcileOp', `${B}/using/acting/`],
				pc: ['good', 'Essentials', `${P}/discovery-governance/concepts/discovery/`],
				sl: ['bad', 'not for Pulumi', `${S}/vendors/pulumi`] },
		],
	},
];

// The features a buyer asks about first; the rest open with "show all".
export const FEATURED = ['pr', 'approval', 'policy', 'drift', 'ephemeral', 'audit', 'sso', 'private'];

export const TRY = [
	['Boot the plywood tutorial', `${PW}/tutorial/`],
];
