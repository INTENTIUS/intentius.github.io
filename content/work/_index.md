---
title: "Work"
summary: "Four kinds of engagement. Each one says what done looks like and what you keep. Everything we build is open source, so nothing you keep depends on us."
---

## Estate migration and carving

You have a Terraform or OpenTofu estate shared by more teams than it was designed for. Splitting it means state surgery, and every past split has shaped the repository rather than the system.

We run `choudoufu live-check` against your configuration first, with no credentials, and get a verdict on what would refuse. Then `live-import` reads the state file you already have and stamps two ownership tags on every resource that verifies. Carving a team out is one `live-mv` per resource and a copy of an IAM policy. Handover is a role grant.

Done looks like this. Each team's role is scoped to its estate by a tag condition, so a mistake pointed at the wrong estate fails at the cloud. An auditor can list what an estate holds with the tagging API and no binary. Every claim about the result is a [smoke scenario you can re-run](https://intentius.io/choudoufu/docs/claims/), and one command hands a stock state file back if you ever want out.

You keep your HCL, the tags on your resources, and your IAM policies. AWS only, and the [limits are enumerated](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and IAM design

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

We design the estate boundaries and the policies over them: a staging role denied on anything belonging to another estate, one ABAC policy that covers every team by session tag, a service control policy that denies creating anything unowned. We say up front [where AWS honours the condition](https://intentius.io/choudoufu/docs/use/governance/reach/) and which of your resource types cannot carry a tag.

Done looks like a boundary that is a condition, so moving it is an edit. Onboarding a team is a session tag. A change window on production is one more condition key. You keep policies in your account, with nothing of ours in the path.

## Agents against real infrastructure

Most teams either hand a model a shell and a cloud key and hope the prompt holds, or keep the agent in a chat window and copy its suggestions out by hand. There is a third shape. The agent is a program, the program has gates, and the credential never enters the machine the program runs on.

We start with one operation you run by hand and would like to stop running by hand. We write it as a chant Op, so the plan and its gates are code you can read. It runs in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox whose only route out is an egress broker: the sandbox holds a placeholder, and the broker substitutes the real credential per request. There is a per-run list of every host reached, on a route the agent cannot read.

Three caveats, up front. Only bound secrets are protected this way, so we bind the ones that matter. Brokered egress is on for hosted Fountain accounts and needs configuring on a self-hosted one. Where the runner cannot isolate, Fountain refuses the launch.

Done looks like an Op on its own cadence. When it reaches a gate its turn ends. The approval is a commit on a ledger branch, written by a person or a merged pull request, and it names the digest of the plan it approves. You keep the Ops as TypeScript in your repository, the lint rules in your CI, and an audit trail. chant is Apache 2.0 and Fountain's server is AGPL.

We will not promise the agent never does something surprising. The gates and the credential boundary are there because it will.

Bound-secret substitution has been on for hosted accounts since 2026-09-04. {{< status kind="shipped" date="2026-09-04" >}} An approval has been bound to its plan digest since chant 0.63. {{< status kind="shipped" date="2026-09-09" href="https://github.com/INTENTIUS/chant/pull/2338" >}} Two things are still open. Declaring the secret-to-host binding from chant source is one. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2388" >}} Closing the hole where an agent on the MCP or ACP channel answers its own gate is the other. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2384" >}}

## Generated CI with gates

A choudoufu estate's pipeline is five Ops over one live root, and each forge's YAML is generated from them. Two read on a pull request, two write on a push and stop at an approval first, and one sweeps the account on a cron for what carries your marker that nobody declared.

We write the chant project over your root and generate the workflows for your forge, checked in beside it. The gate is a fact in git: a run that reaches it records that it is waiting and ends, `chant approve` writes the resolution, and the re-run checks the approved plan against live before anything changes.

Done looks like branch protection requiring the Op names, and leaving one forge for another being a regeneration. You keep one `chant.config.ts` and the generated workflows. If you want the forge itself declared, there is a [warden](https://github.com/INTENTIUS/github-warden) for each of the three forges.

As of September 2026 the pipelines run on all three forges against the emulator. {{< status kind="measured" date="2026-09-09" href="https://github.com/INTENTIUS/choudoufu/issues/1018" >}} No forge has yet run against a real AWS account with OIDC-minted credentials. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/807" >}}

## How we work upstream

Our changes to other people's projects arrive as small reviewable stacks, with tests, on the maintainer's conventions. The public pull request history is the evidence.
