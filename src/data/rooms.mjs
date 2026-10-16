// The home page's picker (one "Help me ..." tile per situation) and the pages under
// /for/<id>/, from one file. Each situation is a tile on the home page and a
// page of its own; pages/for/[id].astro renders every one with the same
// sections in the same order: the lede, What I do, First step, What you can
// check now, and Then read. components/Picker.astro reads the same list, so
// the picker and the pages cannot disagree.
//
// The text comes from the Work, Tools and Compare pages. Nothing here is a
// claim the site does not already make; "What you can check now" links only
// to things a reader can open or run today. There is no case study yet, so
// none is named.
//
// A link's href is a path on this site (with an optional #anchor) or a full
// https:// address. scripts/check-rooms.mjs runs after `astro build` and
// fails the build when a path or an anchor on this site does not exist.

/** @typedef {{ label: string, href: string }} Link */

const FIRST_STEP = 'Tell me what you run today and what you want to change. I will reply saying whether this is a fit.';

export const ROOMS = [
	{
		id: 'estate',
		label: 'Help me carve up a large estate',
		blurb: 'Hundreds of roots, or one state file shared by too many teams',
		title: 'Carve up a large estate',
		lede: 'A large estate gets choudoufu as its binary. Each resource gets its own lock and an owner tag, so splitting a team off becomes a tag rewrite and a permissions policy.',
		does: [
			'Same HCL, same providers, same plan. choudoufu is a build of OpenTofu.',
			'Ownership moves out of the state file and onto each resource, where your IAM policies can read it.',
			'AWS only, and experimental. A read-only check reports what refuses before you commit to anything.',
		],
		check: [
			{ label: 'The twenty claims, each one you can run', href: 'https://intentius.io/choudoufu/docs/claims/' },
			{ label: 'The gauntlet, 26 real configurations', href: 'https://intentius.io/choudoufu/docs/progress/' },
			{ label: 'The source', href: 'https://github.com/INTENTIUS/choudoufu' },
		],
		read: [
			{ label: 'Estate migration and carving', href: '/work/#estate-migration-and-carving' },
			{ label: 'choudoufu and the state file', href: '/compare/choudoufu-and-terraform-state/' },
		],
	},
	{
		id: 'moving',
		label: 'Help me move off another runner',
		blurb: 'Atlantis, Terraform Cloud or Spacelift',
		title: 'Move off another runner',
		lede: 'Repos move over from Atlantis, Terraform Cloud or Spacelift one at a time. Each one plans under terragucci before the old runner lets go of it.',
		does: [
			'One repo moves at a time, and the rest keep running where they are.',
			'Each repo plans under terragucci before the old runner lets go of it.',
			'Your runner settings map onto terragucci keys, and I tell you which ones have no equivalent.',
		],
		check: [
			{ label: 'Coming from Atlantis or OpenTaco', href: 'https://intentius.io/terragucci/guides/coming-from-atlantis-or-opentaco/' },
			{ label: 'Coming from HCP Terraform, Scalr or OTF', href: 'https://intentius.io/terragucci/guides/coming-from-hcp-terraform-scalr-or-otf/' },
			{ label: 'Coming from Spacelift or env0', href: 'https://intentius.io/terragucci/guides/coming-from-spacelift-or-env-zero/' },
		],
		read: [
			{ label: 'Moving from another runner', href: '/work/#moving-from-another-runner' },
			{ label: 'The control planes', href: '/compare/control-planes/' },
		],
	},
	{
		id: 'rollout',
		label: 'Help me roll out terragucci',
		blurb: 'Approvals, policy and traces, across your repos',
		title: 'Roll out terragucci',
		lede: 'terragucci across your repos, with approvals, policy and traces set up. It arrives as a pull request you review and merge.',
		does: [
			'I add terragucci to your repos, with the cloud roles and approvals your team needs.',
			'Plans, approvals and applies run as jobs in your own CI. State, plans and approvals stay in your git and your bucket.',
			'The whole change arrives as a pull request. You review it and merge it.',
		],
		check: [
			{ label: 'The terragucci tutorial', href: 'https://intentius.io/terragucci/tutorial/' },
			{ label: 'Add terragucci to a repo', href: 'https://intentius.io/terragucci/guides/add-to-a-repo/' },
			{ label: 'The source, Apache-2.0', href: 'https://github.com/INTENTIUS/terragucci' },
		],
		read: [
			{ label: 'Rollout', href: '/work/#rollout' },
			{ label: 'terragucci', href: '/terragucci/' },
		],
	},
	{
		id: 'agents',
		label: 'Help me run agents on real infrastructure',
		blurb: 'Approval gates, and the credential kept off the box',
		title: 'Run agents on real infrastructure',
		lede: 'An operation you run by hand becomes a program behind approval gates. Its credential stays outside the machine it runs on.',
		does: [
			'The operation becomes a program an agent or a person can start.',
			'Starting or approving it works the same way for an agent as for a person, and neither can hurry an approval.',
			'The credential is referenced by name and never lands on the machine that runs it.',
		],
		check: [
			{ label: 'chant for agents', href: 'https://intentius.io/chant/agents/' },
			{ label: 'The chant source', href: 'https://github.com/INTENTIUS/chant' },
		],
		read: [
			{ label: 'Agents against real infrastructure', href: '/work/#agents-against-real-infrastructure' },
			{ label: 'Tools', href: '/tools/#agents' },
		],
	},
	{
		id: 'releases',
		label: 'Help me generate deploys and pipelines',
		blurb: 'Compiled from one description of the service',
		title: 'Generate deploys and pipelines',
		lede: 'Describe a service as data and chant compiles its deploy and its pipeline from it.',
		does: [
			'The service is written as typed code and checked before anything runs.',
			'Its deploy goes to the three big clouds or Kubernetes from one project.',
			'The pipeline is generated from that same code, so adding a service does not mean writing another one.',
		],
		check: [
			{ label: 'The chant docs', href: 'https://intentius.io/chant/' },
			{ label: 'The chant source', href: 'https://github.com/INTENTIUS/chant' },
		],
		read: [
			{ label: 'Releases as compile targets', href: '/work/#releases-as-compile-targets' },
			{ label: 'chant, CDK and Pulumi', href: '/compare/chant-cdk-and-pulumi/' },
		],
	},
];

/** The same first step on every page: what to send. */
export const firstStep = () => FIRST_STEP;

export const room = (id) => {
	const r = ROOMS.find((x) => x.id === id);
	if (!r) throw new Error(`src/data/rooms.mjs: no room ${id}`);
	return r;
};

/** Every link on every room page, for scripts/check-rooms.mjs. */
export const roomLinks = () => ROOMS.flatMap((r) => [...r.check, ...r.read].map((l) => ({ room: r.id, ...l })));
