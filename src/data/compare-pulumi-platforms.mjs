// The Pulumi platforms comparison: plywood against Pulumi Cloud, and against
// Spacelift where it runs Pulumi. It has the shape of
// arenas.mjs (the Terraform one) and is drawn by the same Arenas.astro: every
// cell is a mark ("good", "warn", "bad"), a few words, and the source it
// rests on. Vendor pages were read on READ_ON; recheck them before changing a
// cell.
//
// A plywood cell states only what plywood's published docs describe. The
// plunge arena states only what plunge's published docs describe, and the
// behold arena only what behold's published docs describe.
//
// Logos: Pulumi's is the one public/brand/vendors already carries, and
// Spacelift's comes from its media page as in arenas.mjs. plywood's and
// plunge's are their own sites' pixel logos.

export const READ_ON = '2026-10-27';

export const LABEL = 'plywood, Pulumi Cloud and Spacelift compared';

export const GRADIENT = true;

export const VENDORS = [
	{ id: 'pw', name: 'plywood', logo: { dark: '/brand/vendors/plywood.png', light: '/brand/vendors/plywood.png' }, named: true, link: true, color: '#c98a3c', what: 'CI pipelines, no hosted service', href: 'https://intentius.io/plywood/' },
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

export const GATED_BLURB = "Tick what you need. These are plywood's features.";

// The gating arena, as in arenas.mjs: `plan` indexes PLANS, `plan: null` is
// nothing equivalent, `tier: 'unpublished'` an offer no page puts on a plan.
export const GATED = [
	{ id: 'pr', label: 'Previews and updates from pull requests',
		pw: { plan: 0, note: 'GitHub, GitLab or Forgejo', src: `${PW}/getting-started/` },
		pc: { plan: 0, src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 0, note: 'feature preview', src: `${S}/vendors/pulumi` } },
	{ id: 'approval', label: 'An approval before an update',
		pw: { plan: 0, note: 'bound to one preview digest', src: `${PW}/concepts/waves-and-approvals/` },
		pc: { plan: null, note: 'none built in; ESC approvals gate credentials only', src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 1, src: `${S}/concepts/policy/approval-policy` } },
	{ id: 'policy', label: 'Policy as code on every preview',
		pw: { plan: 0, note: 'Rego, and your CrossGuard packs', src: `${PW}/guides/use-policy-packs/` },
		pc: { plan: 2, src: PP },
		sl: { plan: 1, src: `${S}/vendors/pulumi` } },
	{ id: 'drift', label: 'Drift detection', def: 'Drift: a change made outside your code.',
		pw: { plan: 0, note: 'one issue per stack', src: `${PW}/guides/turn-on-drift-checks/` },
		pc: { plan: 2, src: `${P}/deployments/concepts/drift/` },
		sl: { plan: 1, note: 'private workers only', src: `${S}/concepts/stack/drift-detection` } },
	{ id: 'ephemeral', label: 'A stack per pull request, deleted after a set time', def: 'Stack: one deployment of a Pulumi program, such as dev or prod.',
		pw: { plan: 0, note: 'deleted when the pull request closes or after a set time', src: `${PW}/guides/review-stacks/` },
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
	{ id: 'private', label: 'Runs on runners you control',
		pw: { plan: 0, note: 'your CI', src: `${PW}/#limits` },
		pc: { plan: 3, src: `${P}/administration/concepts/customer-managed-runners/` },
		sl: { plan: 1, src: `${S}/concepts/worker-pools` } },
	{ id: 'selfhost', label: 'Nothing hosted by the vendor',
		pw: { plan: 0, note: 'nothing to host', src: `${PW}/concepts/how-it-works/` },
		pc: { plan: 3, src: `${P}/administration/self-hosting/` },
		sl: { plan: 4, src: SP } },
	{ id: 'waves', label: 'Updates dependent stacks in order, with an approval between waves', def: 'Wave: a group of stacks updated together, after the ones they depend on.',
		pw: { plan: 0, note: 'order from StackReference reads; each wave behind its gate', src: `${PW}/guides/stack-references/` },
		pc: { plan: null, note: 'no gate between stacks', src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: null, note: 'no gate between waves', src: `${S}/concepts/stack/stack-dependencies` } },
	{ id: 'grouped', label: 'One pull request comment for every stack a change touches',
		pw: { plan: 0, note: 'identical changes grouped, one approval for the set', src: `${PW}/concepts/why-previews-are-grouped/` },
		pc: { plan: null, src: `${P}/deployments/concepts/settings/` },
		sl: { plan: null, src: `${S}/concepts/policy/notification-policy` } },
	{ id: 'comment', label: 'Update from a pull request comment',
		pw: { plan: 0, note: '/plywood up before merge', src: `${PW}/guides/update-before-merge/` },
		pc: { plan: null, src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 1, src: `${S}/concepts/run/pull-request-comments` } },
	{ id: 'stale', label: 'Update only the preview that was approved',
		pw: { plan: 0, note: 'if the preview changed after approval, nothing is updated', src: `${PW}/guides/fix-a-refused-wave/` },
		pc: { plan: null, note: 'no approval for a preview to match', src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 0, src: `${S}/concepts/run` } },
	{ id: 'notify', label: 'Slack, Teams and webhook notifications',
		pw: { plan: 0, note: 'signed webhook, Slack or Teams', src: `${PW}/guides/notify-a-chat-channel/` },
		pc: { plan: 1, src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: 1, src: `${S}/integrations/webhooks` } },
	{ id: 'oidc', label: 'Short-lived cloud credentials (OIDC)',
		pw: { plan: 0, note: 'a preview identity and an up identity, never the same', src: `${PW}/guides/scope-state-access/` },
		pc: { plan: 0, src: PP },
		sl: { plan: 1, src: `${S}/integrations/cloud-providers/oidc` } },
	{ id: 'review', label: 'A model reviews each pull request',
		pw: { plan: 0, note: 'your model key; approves nothing', src: `${PW}/guides/agent-review-a-pull-request/` },
		pc: { plan: 1, note: 'GitHub.com only', src: `${P}/ai/concepts/neo/code-reviews/` },
		sl: { plan: null, src: `${S}/concepts/run/summarization` } },
	{ id: 'estate', label: 'One view across every stack',
		pw: { plan: 0, note: 'one page for all stacks, flagging overdue drift checks', src: `${PW}/reference/cli/` },
		pc: { plan: 1, src: `${P}/discovery-governance/guides/search-resources/` },
		sl: { plan: 1, src: SP } },
	{ id: 'chat', label: 'Approve from Slack or Teams',
		pw: { plan: 0, note: 'a relay you run; plywood notify relay records it', src: `${PW}/guides/notify-a-chat-channel/` },
		pc: { plan: null, note: 'notifications only', src: `${P}/deployments/webhooks/` },
		sl: { plan: 1, note: 'Slack only', src: `${S}/integrations/chatops/slack` } },
	{ id: 'override', label: 'Policy overrides by named people',
		pw: { plan: 0, note: 'only people listed in .chant/overriders; each override recorded', src: `${PW}/guides/override-a-denial/` },
		pc: { plan: null, note: 'policy levels only', src: `${P}/discovery-governance/concepts/policy-as-code/policies/` },
		sl: { plan: null, note: 'denies are final', src: `${S}/concepts/policy/approval-policy` } },
	{ id: 'otel', label: 'Traces and metrics to your collector',
		pw: { plan: 0, note: 'OpenTelemetry over OTLP; your collector', src: `${PW}/guides/send-traces-and-metrics/` },
		pc: { plan: 0, note: 'CLI traces only', src: `${P}/iac/operations/debugging/performance-tracing/` },
		sl: { plan: 1, src: `${S}/integrations/observability/datadog` } },
	{ id: 'dora', label: 'DORA delivery metrics',
		pw: { plan: 0, note: 'on the estate page', src: `${PW}/reference/cli/` },
		pc: { plan: null, note: 'export and compute them yourself', src: 'https://www.pulumi.com/blog/import-your-pulumi-cloud-data-with-tap-pulumi-cloud/' },
		sl: { plan: null, tier: 'unpublished', src: `${S}/product/dashboard` } },
	{ id: 'import', label: 'Import from another platform',
		pw: { plan: 0, note: 'Pulumi Deployments, pulumi/actions, Spacelift, env zero', src: `${PW}/guides/from-pulumi-actions/` },
		pc: { plan: null, src: `${P}/iac/comparisons/spacelift/` },
		sl: { plan: null, note: 'HCP Terraform only', src: `${S}/product/migrating-to-spacelift` } },
	{ id: 'mcp', label: 'An MCP server for your coding agent',
		pw: { plan: 0, note: 'read-only: stacks, runs and reports', src: `${PW}/guides/agent-read-over-mcp/` },
		pc: { plan: 1, note: 'stack tools', src: `${P}/ai/mcp-server/` },
		sl: { plan: 0, src: `${S}/concepts/intelligence` } },
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
		],
	},
	{
		id: 'data', title: 'Where your things live',
		rows: [
			{ q: 'State stays in your own backend', def: 'State: the record of what Pulumi created.',
				pw: ['good', 'your own bucket, or Pulumi Cloud if you keep it', `${PW}/reference/backends/`],
				pc: ['bad', 'hosted, below Enterprise', [`${P}/iac/concepts/state-and-backends/`, `${P}/administration/self-hosting/`]],
				sl: ['good', '', `${S}/vendors/pulumi`] },
			{ q: 'Previews and run logs stay in your forge',
				pw: ['good', 'your forge', `${PW}/concepts/how-it-works/`],
				pc: ['bad', '', `${P}/deployments/concepts/`],
				sl: ['bad', '', `${S}/concepts/run`] },
			{ q: 'Audit trail in your own storage',
				pw: ['good', 'your repository, as rows in its git history', `${PW}/guides/read-the-audit-trail/`],
				pc: ['good', 'export, Enterprise', `${P}/administration/concepts/audit-logs/`],
				sl: ['bad', '30 days', `${S}/integrations/audit-trail`] },
			{ q: 'Runs without calling the vendor',
				pw: ['good', 'none past your CI, cloud and backend', `${PW}/concepts/how-it-works/`],
				pc: ['bad', 'below Enterprise', [`${P}/deployments/concepts/`, `${P}/administration/self-hosting/`]],
				sl: ['bad', 'below Enterprise+', [`${S}/concepts/worker-pools`, SP]] },
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
				pw: ['good', 'nothing to cancel; Apache-2.0', `${PW}/`],
				pc: ['good', 'monthly tiers', PP],
				sl: ['bad', 'annual plans', SP] },
		],
	},
	{
		id: 'attest', title: 'What the attestation covers',
		blurb: "A vendor's SOC 2 covers its own service, not your estate.",
		rows: [
			{ q: 'No third party added to your audit scope',
				pw: ['good', 'none', `${PW}/reference/threat-model/`],
				pc: ['bad', '', 'https://www.pulumi.com/security/'],
				sl: ['bad', '', `${S}/product/security`] },
		],
	},
	{
		id: 'ai', title: 'AI that does the work',
		rows: [
			{ q: 'AI writes changes and fixes drift',
				pw: ['good', 'writes the change from /plywood agent, fixes drift, reviews pull requests', [`${PW}/guides/agent-fix-drift/`, `${PW}/reference/config/`]],
				pc: ['bad', 'changes only, Essentials', `${P}/ai/concepts/neo/pull-requests/`],
				sl: ['bad', 'summaries only', `${S}/concepts/run/summarization`] },
			{ q: 'AI runs in your CI with your model key',
				pw: ['good', 'your CI, your model key, behind your approvals', `${PW}/guides/agent-fix-drift/`],
				pc: ['bad', 'Pulumi Cloud; your key on Enterprise', `${P}/ai/concepts/neo/settings/`],
				sl: ['bad', '', `${S}/concepts/intelligence`] },
			{ q: 'AI on every tier',
				pw: ['good', 'every install, no tier', `${PW}/`],
				pc: ['bad', 'Essentials and up', PP],
				sl: ['good', '', `${S}/concepts/intelligence`] },
		],
	},
	{
		id: 'concurrency', title: 'Two changes at once',
		rows: [
			{ q: 'One update locks less than a whole stack',
				pw: ['warn', 'one resource only with plunge; stock Pulumi locks the stack', `${PW}/concepts/locking-and-staleness/`],
				pc: ['bad', 'whole stack', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['bad', 'whole stack', `${S}/concepts/run`] },
			{ q: 'Updates to different stacks run side by side',
				pw: ['good', "side by side, up to your CI's capacity", `${PW}/#limits`],
				pc: ['good', 'Essentials', PP],
				sl: ['good', 'one per worker', `${S}/concepts/worker-pools`] },
		],
	},
	{
		id: 'plunge', title: 'The engine underneath',
		blurb: 'plunge is free. plywood runs it with engine: plunge.',
		lead: { name: 'plunge', logo: { dark: '/brand/vendors/plunge.png', light: '/brand/vendors/plunge.png' }, named: true, link: true, href: `${PL}/` },
		rows: [
			{ q: 'Two updates to one stack, on different resources, run side by side',
				pw: ['good', 'both apply; neither waits for a lock', `${PL}/`],
				pc: ['bad', 'second queues', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['bad', 'second waits', `${S}/concepts/run`] },
			{ q: 'Drift read for one resource alone',
				pw: ['good', 'one provider read, no stack refresh', `${PL}/`],
				pc: ['bad', 'whole stack', `${P}/deployments/concepts/drift/`],
				sl: ['bad', 'whole stack', `${S}/concepts/stack/drift-detection`] },
			{ q: 'Ownership recorded on the resource itself',
				pw: ['good', 'plunge-stack and plunge-urn tags on the resource itself', `${PL}/`],
				pc: ['bad', '', `${P}/iac/concepts/state-and-backends/`],
				sl: ['bad', '', `${S}/vendors/pulumi`] },
		],
	},
	{
		id: 'behold', title: 'One graph, every engine',
		blurb: 'behold is free. It reads Pulumi through plunge, and Terraform through choudoufu.',
		lead: { name: 'behold', logo: { dark: '/brand/vendors/behold-on-dark.svg', light: '/brand/vendors/behold-on-light.svg' }, named: true, link: true, href: `${B}/` },
		rows: [
			{ q: 'Terraform and Pulumi on three clouds, in one graph',
				pw: ['good', 'choudoufu and plunge projects drawn together across AWS, Azure and GCP, linked by shared outputs', `${B}/using/three-cloud/`],
				pc: ['good', 'Pro', `${P}/discovery-governance/concepts/discovery/`],
				sl: ['bad', 'list only', `${S}/concepts/resources`] },
			{ q: 'Drift, shown on the graph from each engine\'s own read',
				pw: ['good', 'plunge drift for Pulumi, choudoufu\'s plan for Terraform, chant\'s live read for chant', `${B}/using/three-cloud/#drift-per-engine`],
				pc: ['bad', 'not on a graph', `${P}/deployments/concepts/drift/`],
				sl: ['bad', 'not on a graph', `${S}/concepts/stack/drift-detection`] },
			{ q: "One approval over every engine's plan",
				pw: ['good', 'one approval covers the Pulumi and Terraform plans together; if any part changes, nothing applies', `${B}/using/three-cloud/#one-change-set-over-four-members`],
				pc: ['bad', 'no approval step', `${P}/deployments/guides/gated-deployments/`],
				sl: ['bad', 'per stack', `${S}/concepts/stack/stack-dependencies`] },
			{ q: 'Shows which run deployed each resource',
				pw: ['good', "commit, run, digest, actor and approver, from chant's release ledger", `${B}/using/reading-the-graph/#what-was-deployed-from-where`],
				pc: ['good', '', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', '', `${S}/concepts/run`] },
			{ q: 'Finds cloud resources no code manages',
				pw: ['good', 'one Adopt click opens a pull request', `${B}/using/acting/`],
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
