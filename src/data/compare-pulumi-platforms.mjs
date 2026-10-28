// The Pulumi platforms comparison: plywood against Pulumi Cloud, and against
// Spacelift and env zero where they run Pulumi. It has the shape of
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
// plunge's are their own sites' pixel logos. env zero has no file here, so
// its column is its name set as a wordmark.

export const READ_ON = '2026-10-27';

export const LABEL = 'plywood, Pulumi Cloud, Spacelift and env zero compared';

export const GRADIENT = true;

export const VENDORS = [
	{ id: 'pw', name: 'plywood', logo: { dark: '/brand/vendors/plywood.png', light: '/brand/vendors/plywood.png' }, named: true, link: true, color: '#c98a3c', what: 'just pipelines', href: 'https://intentius.io/plywood/' },
	{ id: 'pc', name: 'Pulumi Cloud', logo: { dark: '/brand/vendors/pulumi-on-dark.svg', light: '/brand/vendors/pulumi-on-light.svg' }, icon: true, color: '#a35dc9', what: 'hosted', href: 'https://www.pulumi.com/docs/deployments/concepts/' },
	{ id: 'sl', name: 'Spacelift', logo: { dark: '/brand/vendors/spacelift-on-dark.svg', light: '/brand/vendors/spacelift-on-light.svg' }, color: '#4f7cff', what: 'hosted', href: 'https://docs.spacelift.io/vendors/pulumi' },
	{ id: 'e0', name: 'env zero', color: '#3cc68a', what: 'hosted', href: 'https://docs.envzero.com/guides/admin-guide/templates/pulumi' },
];

export const TRADEMARKS = 'Pulumi and the Pulumi logo are trademarks of Pulumi Corporation, and plywood and plunge have no tie to it. Spacelift and the Spacelift logo are trademarks of Spacelift, Inc. env zero is a trademark of its owner. Logos are used to identify each product and are shown unaltered.';

const PW = 'https://intentius.io/plywood';
const PL = 'https://intentius.io/plunge';
const B = 'https://intentius.io/behold';
const P = 'https://www.pulumi.com/docs';
const PP = 'https://www.pulumi.com/pricing/';
const S = 'https://docs.spacelift.io';
const SP = 'https://spacelift.io/pricing';
const E = 'https://docs.envzero.com/guides';
const EP = 'https://www.envzero.com/pricing';

// The plans each vendor sells, cheapest first. plywood has one.
export const PLANS = {
	pw: ['Included'],
	pc: ['Free', 'Essentials', 'Pro', 'Enterprise'],
	sl: ['Free', 'Starter+', 'Business', 'Enterprise', 'Enterprise+'],
	e0: ['Free', 'Cloud Navigator', 'Cloud Pilot'],
};

export const GATED_BLURB = "Tick what you need. These are plywood's features; what it lacks is under The basics.";

// The gating arena, as in arenas.mjs: `plan` indexes PLANS, `plan: null` is
// nothing equivalent, `tier: 'unpublished'` an offer no page puts on a plan.
export const GATED = [
	{ id: 'pr', label: 'Previews and updates from pull requests',
		pw: { plan: 0, note: 'GitHub, GitLab or Forgejo', src: `${PW}/getting-started/` },
		pc: { plan: 0, note: 'Deployments: preview on the pull request, up on merge', src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 0, note: 'Pulumi is a feature preview', src: `${S}/vendors/pulumi` },
		e0: { plan: 0, note: 'plan on pull request', src: `${E}/admin-guide/templates/pulumi` } },
	{ id: 'approval', label: 'An approval before an update',
		pw: { plan: 0, note: 'bound to one preview digest', src: `${PW}/concepts/waves-and-approvals/` },
		pc: { plan: null, note: 'none in Deployments; an ESC open approval on the credentials stands in, Pro', src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 1, note: 'approval policies', src: `${S}/concepts/policy/approval-policy` },
		e0: { plan: 0, note: 'custom approval policies', src: `${E}/policies-governance/approval-policies` } },
	{ id: 'policy', label: 'Policy as code on every preview',
		pw: { plan: 0, note: 'Rego, and your CrossGuard packs', src: `${PW}/guides/use-policy-packs/` },
		pc: { plan: 2, note: 'advisory on Essentials, mandatory from Pro', src: PP },
		sl: { plan: 1, note: 'a plan policy reads the Pulumi plan', src: `${S}/vendors/pulumi` },
		e0: { plan: 0, note: 'OPA approval policies', src: `${E}/policies-governance/approval-policies` } },
	{ id: 'drift', label: 'Drift detection',
		pw: { plan: 0, note: 'one issue per stack', src: `${PW}/guides/turn-on-drift-checks/` },
		pc: { plan: 2, note: 'scheduled, with remediation', src: `${P}/deployments/concepts/drift/` },
		sl: { plan: 1, note: 'private workers only', src: `${S}/concepts/stack/drift-detection` },
		e0: { plan: 0, note: 'at most daily below Enterprise', src: `${E}/admin-guide/environments/drift-detection` } },
	{ id: 'ephemeral', label: 'A stack per pull request, with a TTL',
		pw: { plan: 0, note: 'destroyed on close or after its ttl', src: `${PW}/guides/review-stacks/` },
		pc: { plan: 2, note: 'review stacks; TTL stacks on Pro', src: `${P}/deployments/concepts/ttl/` },
		sl: { plan: 2, note: 'scheduled stack deletion, private workers only', src: `${S}/concepts/stack/scheduling` },
		e0: { plan: 0, note: 'an environment per pull request; TTL on Free', src: `${E}/admin-guide/environment-discovery/automatic-environment-creation-from-pull-request` } },
	{ id: 'audit', label: 'Audit trail',
		pw: { plan: 0, note: 'rows in your repository, kept as long as you like', src: `${PW}/guides/read-the-audit-trail/` },
		pc: { plan: 2, note: 'export to S3 or Sentinel on Enterprise', src: `${P}/administration/concepts/audit-logs/` },
		sl: { plan: 3, note: '30 days', src: `${S}/integrations/audit-trail` },
		e0: { plan: 0, note: 'on Free per the pricing page; docs say Enterprise', src: `${E}/admin-guide/audit-logs` } },
	{ id: 'sso', label: 'SSO',
		pw: { plan: 0, note: "your forge's", src: `${PW}/#limits` },
		pc: { plan: 2, note: 'SAML', src: `${P}/administration/guides/saml/` },
		sl: { plan: 3, note: 'SAML or OIDC', src: SP },
		e0: { plan: 0, note: 'SAML', src: EP } },
	{ id: 'private', label: 'Runs on your own runners',
		pw: { plan: 0, note: 'your CI', src: `${PW}/#limits` },
		pc: { plan: 3, note: 'customer-managed runners', src: `${P}/administration/concepts/customer-managed-runners/` },
		sl: { plan: 1, note: 'private workers', src: `${S}/concepts/worker-pools` },
		e0: { plan: 0, note: 'one runner on Free per the pricing page; docs say Enterprise', src: `${E}/admin-guide/self-hosted-kubernetes-agent/overview` } },
	{ id: 'selfhost', label: 'Nothing hosted by the vendor',
		pw: { plan: 0, note: 'nothing to host', src: `${PW}/concepts/how-it-works/` },
		pc: { plan: 3, note: 'self-hosted Pulumi Cloud', src: `${P}/administration/self-hosting/` },
		sl: { plan: 4, note: 'self-hosted', src: SP },
		e0: { plan: null, note: 'a self-hosted runner; the control plane stays hosted', src: EP } },
	{ id: 'waves', label: 'Updates in dependency order, a gate per wave',
		pw: { plan: 0, note: 'order from StackReference reads; each wave behind its gate', src: `${PW}/guides/stack-references/` },
		pc: { plan: 1, note: 'a deployment webhook runs another stack; no gate', src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: 1, note: 'stack dependencies; each stack confirmed on its own', src: `${S}/concepts/stack/stack-dependencies` },
		e0: { plan: 0, note: 'workflows order environments by their dependencies', src: `${E}/admin-guide/workflows` } },
	{ id: 'grouped', label: 'One preview note for every stack a change reaches',
		pw: { plan: 0, note: 'identical changes grouped, one approval for the set', src: `${PW}/concepts/why-previews-are-grouped/` },
		pc: { plan: null, note: 'each stack previews from its own deployment settings', src: `${P}/deployments/concepts/settings/` },
		sl: { plan: null, note: 'one comment per stack', src: `${S}/concepts/policy/notification-policy` },
		e0: { plan: null, note: 'a plan per environment', src: `${E}/admin-guide/environments/plan-on-pull-request` } },
	{ id: 'comment', label: 'Update from a pull request comment',
		pw: { plan: 0, note: '/plywood up before merge', src: `${PW}/guides/update-before-merge/` },
		pc: { plan: null, note: 'updates follow a merge or a tag', src: `${P}/deployments/concepts/triggers/` },
		sl: { plan: 1, note: '/spacelift comments, read by a push policy', src: `${S}/concepts/run/pull-request-comments` },
		e0: { plan: 0, note: 'plan and apply from comments', src: `${E}/admin-guide/environments/plan-and-apply-from-pr-comments` } },
	{ id: 'stale', label: 'Update only the preview that was approved',
		pw: { plan: 0, note: 'a moved preview updates nothing and names both digests', src: `${PW}/guides/fix-a-refused-wave/` },
		pc: { plan: null, note: 'no approval for a preview to match', src: `${P}/deployments/guides/gated-deployments/` },
		sl: { plan: 0, note: 'the stack stays locked from plan to confirm', src: `${S}/concepts/run` },
		e0: { plan: 0, note: 'up runs with --refresh after its own preview', src: `${E}/admin-guide/templates/pulumi` } },
	{ id: 'notify', label: 'Slack, Teams and webhook notifications',
		pw: { plan: 0, note: 'signed webhook, Slack or Teams; approve from Slack', src: `${PW}/guides/notify-a-chat-channel/` },
		pc: { plan: 1, note: 'JSON webhook, Slack or Teams', src: `${P}/deployments/concepts/webhooks/` },
		sl: { plan: 1, note: 'paid accounts', src: `${S}/integrations/webhooks` },
		e0: { plan: 0, note: 'Slack, Teams, email or webhook', src: `${E}/integrations/notifications` } },
	{ id: 'oidc', label: 'Short-lived credentials (OIDC)',
		pw: { plan: 0, note: 'a preview identity and an up identity, never the same', src: `${PW}/guides/scope-state-access/` },
		pc: { plan: 0, note: 'every edition', src: PP },
		sl: { plan: 1, note: 'paid accounts', src: `${S}/integrations/cloud-providers/oidc` },
		e0: { plan: 0, note: 'every plan', src: `${E}/integrations/oidc-integrations` } },
	{ id: 'review', label: 'A model reviews each pull request',
		pw: { plan: 0, note: 'your model key; approves nothing', src: `${PW}/guides/agent-review-a-pull-request/` },
		pc: { plan: 1, note: 'Neo code reviews, GitHub.com only, paid per token', src: `${P}/ai/concepts/neo/code-reviews/` },
		sl: { plan: null, note: 'summaries of failed runs', src: `${S}/concepts/run/summarization` },
		e0: { plan: null, note: 'run summaries on Cloud Pilot', src: EP } },
	{ id: 'estate', label: 'One view across every stack',
		pw: { plan: 0, note: 'plywood estate: a page with overdue drift checks', src: `${PW}/reference/cli/` },
		pc: { plan: 1, note: 'resource search', src: `${P}/discovery-governance/guides/search-resources/` },
		sl: { plan: 1, note: 'resource view; Free not in the plan table', src: SP },
		e0: { plan: 0, note: 'monitoring dashboards', src: EP } },
];

// The arenas after the gating one. Each row: a question, then a cell per vendor.
export const ARENAS = [
	{
		id: 'basics', title: 'The basics',
		rows: [
			{ q: 'How you pay',
				pw: ['good', 'nothing; Apache-2.0', `${PW}/`],
				pc: ['warn', 'per managed resource per hour; Free is one user', PP],
				sl: ['warn', 'priced by workers, annual on most paid plans; Free is 2 users and 1 public worker', SP],
				e0: ['warn', 'per successful apply or environment, by quote; Free is 250 runs a month', EP] },
			{ q: 'Where runs execute',
				pw: ['warn', 'your CI runners', `${PW}/#limits`],
				pc: ['warn', "Pulumi's runners, or runners you host on Enterprise", `${P}/deployments/concepts/`],
				sl: ['warn', "Spacelift's public workers, or private workers you host", `${S}/concepts/worker-pools`],
				e0: ['warn', "env zero's runners, or an agent you host", `${E}/admin-guide/self-hosted-kubernetes-agent/overview`] },
			{ q: 'What you run yourself',
				pw: ['warn', 'CI runners, your backend, OIDC roles', `${PW}/getting-started/`],
				pc: ['good', 'nothing, unless you host runners', `${P}/deployments/concepts/`],
				sl: ['good', 'nothing on public workers; private workers for drift', `${S}/concepts/stack/drift-detection`],
				e0: ['good', 'nothing, unless you host an agent', `${E}/admin-guide/self-hosted-kubernetes-agent/overview`] },
			{ q: 'Who you call',
				pw: ['warn', 'GitHub issues; paid setup help from Intentius', 'https://intentius.io/work/'],
				pc: ['good', 'Pulumi support; paid plans from $625 a month', PP],
				sl: ['good', 'Spacelift support; 1 to 4 hour first response on critical, by tier', `${S}/product/support`],
				e0: ['good', 'email support; an enterprise SLA on Cloud Pilot', EP] },
			{ q: "A web UI for people who don't write Pulumi",
				pw: ['bad', 'none; changes arrive as pull requests', `${PW}/#limits`],
				pc: ['good', 'an internal developer platform with private templates, Pro and up', PP],
				sl: ['good', 'Blueprints, Business and up', `${S}/concepts/blueprint`],
				e0: ['good', 'managed self-service', EP] },
			{ q: 'Bitbucket or Azure DevOps',
				pw: ['bad', 'GitHub, GitLab and Forgejo only', `${PW}/#limits`],
				pc: ['good', 'both', `${P}/deployments/concepts/review-stacks/`],
				sl: ['good', 'both', `${S}/integrations/source-control`],
				e0: ['good', 'both', `${E}/admin-guide/environments/plan-on-pull-request`] },
		],
	},
	{
		id: 'data', title: 'Where your things live',
		rows: [
			{ q: 'State',
				pw: ['good', 'your backend, where it already is: Pulumi Cloud or your bucket', `${PW}/reference/backends/`],
				pc: ['warn', 'hosted by Pulumi Cloud', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', 'your Pulumi backend; Spacelift logs in to it', `${S}/vendors/pulumi`],
				e0: ['good', 'your Pulumi backend; env zero stores no Pulumi state', `${E}/admin-guide/templates/pulumi`] },
			{ q: 'Previews and run logs',
				pw: ['good', 'your forge', `${PW}/concepts/how-it-works/`],
				pc: ['warn', 'Pulumi Cloud', `${P}/deployments/concepts/`],
				sl: ['warn', 'Spacelift', `${S}/concepts/run`],
				e0: ['warn', 'env zero', `${E}/admin-guide/environments/plan-on-pull-request`] },
			{ q: 'Audit trail',
				pw: ['good', 'your repository, as ledger rows', `${PW}/guides/read-the-audit-trail/`],
				pc: ['warn', 'Pulumi Cloud, Pro and up', `${P}/administration/concepts/audit-logs/`],
				sl: ['warn', 'Spacelift, 30 days, Enterprise', `${S}/integrations/audit-trail`],
				e0: ['warn', 'env zero', `${E}/admin-guide/audit-logs`] },
			{ q: 'A service every run depends on',
				pw: ['good', 'none past your CI, cloud and backend', `${PW}/concepts/how-it-works/`],
				pc: ['warn', "Pulumi Cloud's control plane", `${P}/deployments/concepts/`],
				sl: ['warn', "Spacelift's control plane, on any worker", `${S}/concepts/worker-pools`],
				e0: ['warn', "env zero's control plane, on any agent", `${E}/admin-guide/self-hosted-kubernetes-agent/overview`] },
		],
	},
	{
		id: 'leaving', title: 'Leaving',
		rows: [
			{ q: 'Your state',
				pw: ['good', 'never moved', `${PW}/reference/backends/`],
				pc: ['warn', 'pulumi stack migrate, one stack at a time', `${P}/iac/concepts/state-and-backends/`],
				sl: ['good', 'never in Spacelift', `${S}/vendors/pulumi`],
				e0: ['good', 'never in env zero', `${E}/admin-guide/templates/pulumi`] },
			{ q: 'Your pipeline',
				pw: ['good', 'plain CI files in your repo', `${PW}/guides/add-to-a-repo/`],
				pc: ['bad', 'deployment settings, schedules and review stacks stay in Pulumi Cloud', `${P}/deployments/concepts/settings/`],
				sl: ['bad', 'stacks and their dependencies stay in Spacelift', `${S}/concepts/stack`],
				e0: ['bad', 'templates, environments and workflows stay in env zero', `${E}/admin-guide/workflows`] },
			{ q: 'Your policies',
				pw: ['good', 'Rego and CrossGuard packs, run anywhere', `${PW}/guides/write-a-policy/`],
				pc: ['good', 'CrossGuard packs run with --policy-pack anywhere', `${P}/discovery-governance/guides/policies-in-ci-cd/`],
				sl: ['warn', 'Rego that reads input.spacelift fields', `${S}/concepts/policy`],
				e0: ['warn', "OPA rules over env zero's input", `${E}/policies-governance/approval-policies`] },
			{ q: 'Your contract',
				pw: ['good', 'none; Apache-2.0', `${PW}/`],
				pc: ['warn', 'monthly, or annual on Pro and Enterprise', PP],
				sl: ['warn', "annual on most paid plans; an annual plan can't be cancelled once activated", SP],
				e0: ['warn', 'a quote per apply or environment', EP] },
		],
	},
	{
		id: 'concurrency', title: 'Two changes at once',
		rows: [
			{ q: 'What one update locks',
				pw: ['good', 'one stack; with plunge, one resource', `${PW}/concepts/locking-and-staleness/`],
				pc: ['warn', 'the stack; its deployments run in queue order', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['warn', 'the stack, exclusively', `${S}/concepts/run`],
				e0: ['warn', 'the environment; a second apply queues', `${E}/admin-guide/environments/plan-and-apply-from-pr-comments`] },
			{ q: 'Updates across stacks at once',
				pw: ['warn', "side by side, up to your CI's capacity", `${PW}/#limits`],
				pc: ['warn', 'one on Free, five on Essentials, unlimited from Pro', PP],
				sl: ['warn', 'side by side, one per worker', `${S}/concepts/worker-pools`],
				e0: ['warn', 'one on Free, unlimited on paid plans', EP] },
		],
	},
	{
		id: 'plunge', title: 'The engine underneath',
		blurb: 'plunge is free. plywood runs it with engine: plunge. Each row is a recorded run on plunge\'s claims page.',
		lead: { name: 'plunge', logo: { dark: '/brand/vendors/plunge.png', light: '/brand/vendors/plunge.png' }, named: true, link: true, href: `${PL}/` },
		rows: [
			{ q: 'Two updates to one stack, on different resources',
				pw: ['good', 'both land, and no lock object appears', `${PL}/claims/`],
				pc: ['warn', 'the second queues', `${P}/deployments/concepts/settings/skip-intermediate-deployments/`],
				sl: ['warn', 'the second waits', `${S}/concepts/run`],
				e0: ['warn', 'the second queues', `${E}/admin-guide/environments/plan-and-apply-from-pr-comments`] },
			{ q: 'Drift of one resource',
				pw: ['good', 'one provider read, no stack refresh', `${PL}/claims/`],
				pc: ['warn', 'a preview-only refresh of the whole stack', `${P}/deployments/concepts/drift/`],
				sl: ['warn', 'a proposed run of the whole stack', `${S}/concepts/stack/drift-detection`],
				e0: ['warn', 'a scheduled deployment of the whole environment', `${E}/admin-guide/environments/drift-detection`] },
			{ q: 'The record of who owns a resource',
				pw: ['good', 'plunge-stack and plunge-urn tags on the resource itself', `${PL}/claims/`],
				pc: ['warn', "the stack's state, hosted by Pulumi Cloud", `${P}/iac/concepts/state-and-backends/`],
				sl: ['warn', "the stack's state, in your Pulumi backend", `${S}/vendors/pulumi`],
				e0: ['warn', "the stack's state, in your Pulumi backend", `${E}/admin-guide/templates/pulumi`] },
		],
	},
	{
		id: 'behold', title: 'One graph, every engine',
		blurb: 'behold is free. It reads Pulumi through plunge, and Terraform through choudoufu.',
		lead: { name: 'behold', logo: { dark: '/brand/vendors/behold-on-dark.svg', light: '/brand/vendors/behold-on-light.svg' }, named: true, link: true, href: `${B}/` },
		rows: [
			{ q: 'Pulumi, Terraform and chant on three clouds, in one graph',
				pw: ['good', 'four members on three engines, edges drawn from shared outputs', `${B}/using/three-cloud/`],
				pc: ['warn', "Discovery lists any tool's resources in a table, Essentials and up; graph queries by API on Pro", `${P}/discovery-governance/concepts/discovery/`],
				sl: ['warn', 'a list of resources from every stack, whatever the tool', `${S}/concepts/resources`],
				e0: ['warn', 'Cloud Analyst dashboards, Cloud Pilot', EP] },
			{ q: 'Drift, shown by each engine\'s own read',
				pw: ['good', 'plunge drift for Pulumi, choudoufu\'s plan for Terraform, chant\'s live read for chant', `${B}/using/three-cloud/#drift-per-engine`],
				pc: ['warn', "a Drift tab per stack, Pro and up", `${P}/deployments/concepts/drift/`],
				sl: ['warn', 'a drift run per stack, on private workers', `${S}/concepts/stack/drift-detection`],
				e0: ['warn', 'a drift status per environment', `${E}/admin-guide/environments/drift-detection`] },
			{ q: "One approval over every engine's plan",
				pw: ['good', 'one change-set digest across the Pulumi, Terraform and chant plans; a moved part refuses the set', `${B}/using/three-cloud/#one-change-set-over-four-members`],
				pc: ['bad', 'no approval gate in Deployments', `${P}/deployments/guides/gated-deployments/`],
				sl: ['warn', 'each stack confirmed on its own', `${S}/concepts/stack/stack-dependencies`],
				e0: ['warn', 'an approval per environment', `${E}/policies-governance/approval-policies`] },
			{ q: 'The run that deployed each part',
				pw: ['good', "commit, run, digest, actor and approver, from chant's release ledger", `${B}/using/reading-the-graph/#what-was-deployed-from-where`],
				pc: ['warn', 'update history per stack, in Pulumi Cloud', `${P}/iac/concepts/state-and-backends/`],
				sl: ['warn', 'run history per stack, in Spacelift', `${S}/concepts/run`],
				e0: ['warn', 'deployments per environment, in env zero', `${E}/admin-guide/environments/drift-detection`] },
			{ q: 'A resource nothing manages',
				pw: ['good', 'Adopt opens a pull request through your ReconcileOp', `${B}/using/acting/`],
				pc: ['warn', 'Visual Import writes Pulumi code, Essentials and up', `${P}/discovery-governance/concepts/discovery/`],
				sl: ['bad', 'import not supported for Pulumi', `${S}/vendors/pulumi`],
				e0: ['warn', 'IaC coverage tracking, Cloud Navigator and up', EP] },
		],
	},
];

// The features a buyer asks about first; the rest open with "show all".
export const FEATURED = ['pr', 'approval', 'policy', 'drift', 'ephemeral', 'audit', 'sso', 'private'];

export const TRY = [
	['Boot the plywood tutorial', `${PW}/tutorial/`],
];
