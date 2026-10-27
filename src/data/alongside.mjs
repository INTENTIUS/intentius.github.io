// The tools a team already runs, and the Intentius tools that work beside
// each one, for Alongside.astro (the home page and /compare/). Each entry
// has the parts that stay as they are, the Intentius tools that add to them,
// and the way behold draws them.
// Nothing here scores one tool against another. Check a line against the
// product's own docs before changing it:
//   terragucci   intentius.io/terragucci/guides/coming-from-*/ and approve-a-wave/#roots-on-hcp-terraform
//   choudoufu    intentius.io/choudoufu/docs/claims/ and docs/progress/
//   plunge       github.com/INTENTIUS/plunge README (v0.1.0)
//   plywood      github.com/INTENTIUS/plywood README (reserved, nothing built)
//   behold       intentius.io/behold/using/{terraform,terragucci,choudoufu,three-cloud}/
//
// Logos are the files under public/brand/vendors/, shown unaltered, and
// TRADEMARKS credits their owners.

export const TRADEMARKS = 'Terraform and HCP Terraform are trademarks of HashiCorp, an IBM Company. OpenTofu is a trademark of The Linux Foundation. Spacelift is a trademark of Spacelift, Inc. Pulumi is a trademark of Pulumi Corporation. Logos are used to identify each product and are shown unaltered.';

const T = 'https://intentius.io/terragucci';
const C = 'https://intentius.io/choudoufu';
const B = 'https://intentius.io/behold';

export const PLATFORMS = [
	{
		id: 'terraform', name: 'Terraform',
		logo: { dark: '/brand/vendors/terraform-on-dark.svg', light: '/brand/vendors/terraform-on-light.svg' },
		keeps: 'Your HCL, providers, modules and state backend stay as they are.',
		adds: [
			['terragucci', `${T}/`, 'plans, approves and applies each root from pull requests, as jobs in your own CI.'],
		],
		behold: ['behold', `${B}/using/terraform/`, 'draws every root from the repo with no cloud account, and reads the plan on each root when you ask.'],
	},
	{
		id: 'opentofu', name: 'OpenTofu',
		logo: { dark: '/brand/vendors/opentofu-on-dark.svg', light: '/brand/vendors/opentofu-on-light.svg' },
		keeps: 'Your HCL, providers, modules and state backend stay as they are.',
		adds: [
			['terragucci', `${T}/`, 'runs tofu the same way it runs terraform.'],
			['choudoufu', `${C}/`, 'is a build of OpenTofu that records each resource\'s owner on the resource, on AWS and Kubernetes.'],
		],
		behold: ['behold', `${B}/using/choudoufu/`, 'draws the roots the same way, and shows each resource of a choudoufu estate as bound, unowned or pending.'],
	},
	{
		id: 'hcp', name: 'HCP Terraform',
		logo: { dark: '/brand/vendors/hcp-terraform-on-dark.svg', light: '/brand/vendors/hcp-terraform-on-light.svg' },
		keeps: 'Your workspaces and their state stay in HCP Terraform.',
		adds: [
			['terragucci', `${T}/guides/coming-from-hcp-terraform-scalr-or-otf/`, 'plans each workspace\'s root in your CI with one plan note on the pull request. A workspace on local execution keeps its cloud block.'],
		],
		behold: ['behold', `${B}/using/terraform/`, 'draws those roots from the repo, the same as any Terraform.'],
	},
	{
		id: 'sl', name: 'Spacelift',
		logo: { dark: '/brand/vendors/spacelift-on-dark.svg', light: '/brand/vendors/spacelift-on-light.svg' },
		keeps: 'Your stacks, policies, drift detection and run history stay in Spacelift.',
		adds: [
			['terragucci', `${T}/guides/coming-from-spacelift-or-env-zero/`, 'plans the stacks\' roots in your CI with one plan note on the pull request. A stack on your own backend keeps that backend.'],
		],
		behold: ['behold', `${B}/using/terraform/`, 'draws the stacks\' roots from the repo, the same as any Terraform.'],
	},
	{
		id: 'pulumi', name: 'Pulumi',
		logo: { dark: '/brand/vendors/pulumi-on-dark.svg', light: '/brand/vendors/pulumi-on-light.svg' },
		keeps: 'Your programs, SDKs, language hosts and providers stay as they are.',
		adds: [
			['plunge', 'https://intentius.io/plunge/', 'is a build of Pulumi that records each resource\'s owner on the resource. Version 0.1.0 is out.'],
			['plywood', 'https://github.com/INTENTIUS/plywood', 'will be the Pulumi CI on chant\'s runtime. The name is reserved and nothing is built yet.'],
		],
		behold: ['behold', `${B}/using/three-cloud/`, 'draws a Pulumi program as a member of a chant workspace, and on plunge reads each resource\'s drift.'],
	},
];
