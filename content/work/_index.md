---
title: "Work"
summary: "Four kinds of engagement. Each says what it looks like, what done looks like, and what you keep. Everything we build is open source, so nothing you keep depends on us."
---

## Estate migration and carving

You have a Terraform or OpenTofu estate, probably one state file per environment, probably shared by more teams than it was designed for. Splitting it means state surgery, and every past split has shaped the repository rather than the system.

What it looks like. We run `choudoufu live-check` against your configuration first, with no credentials, and get a verdict on what would refuse and why. Then `live-import` reads the state file you already have and stamps two ownership tags on every resource that verifies. The state file becomes a cache. From there, carving a team out is a `live-mv` per resource and a copy of an IAM policy; nothing is rebuilt, and both sides plan clean. Handover to another team is a role grant.

What done looks like. Each team's role is scoped to its own estate by a tag condition your IAM evaluates. A mistake pointed at the wrong estate fails at the cloud, not at review. An auditor can list what an estate holds with the tagging API and no binary. Every claim we make about the result is a [smoke scenario you can re-run](https://intentius.io/choudoufu/docs/claims/), and the estate is [round-trippable](https://intentius.io/choudoufu/docs/claims/#claim-6-the-roundtrip---one-command-in-one-file-out): one command hands a stock state file back if you ever want out.

What you keep. Your HCL, unchanged except where the compatibility reference said it had to change. The tags, on your resources in your account. The IAM policies, yours. A [progress page](https://intentius.io/choudoufu/docs/progress/) that says which real-world configurations clear which stages, updated by running them.

What we will not promise. That every configuration migrates. AWS only, and the [limits are enumerated](https://intentius.io/choudoufu/docs/use/compatibility/). Our own estimate for a large migration is roughly half the calendar time of a state-based one, and that figure is an [estimate from a public case study](https://lex00.github.io/posts/choudoufu-cuts-terralith-optimization-time-in-half/), not a measurement.

## Ownership and IAM design

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust: `default_tags` misses types that take none and modules that override it, and nothing reads a tag back.

What it looks like. We design the estate boundaries and the policies over them: a staging role denied on anything belonging to another estate, one ABAC policy that covers every team by session tag, a service control policy that denies creating anything unowned. We tell you up front [where AWS honours the condition](https://intentius.io/choudoufu/docs/use/governance/reach/) and which of your resource types cannot carry a tag.

What done looks like. The boundary is a condition, so moving it is an edit rather than a restructuring. Onboarding a team is a session tag. A change window or an MFA requirement on production is one more condition key.

What you keep. Policies in your account, on tags every create carries. No second permission model, and nothing of ours in the path.

## Agents against real infrastructure

Most teams that try agents on production do one of two things. They hand a model a shell and a cloud credential and hope the prompt holds, or they keep the agent in a chat window and copy its suggestions out by hand. The first is a breach waiting for a bad day. The second is a slower way of doing what you already did.

There is a third shape. The agent is a program, the program has gates, and the credential never enters the machine the program runs on.

What it looks like. We start with one operation you already run by hand and would like to stop running by hand: a drift check that opens a ticket, a nightly apply behind an approval, a migration that has to pause for a human at three specific points. We write it as a chant Op, which means the plan, the gates and the apply are code you can read, and the gates are named. We run it in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox with an environment that names its network allowlist and a vault that holds nothing in plaintext. The cloud credential is bound to a host rather than handed to the process: the sandbox holds a placeholder, the egress broker substitutes the real value on each request, and the sandbox's only route out is the broker. Every mutation is audited by the context that performed it, with field names and never values, and there is a per-run list of every host reached, on a route the agent itself cannot read.

Three things we say up front, because you would ask in the first ten minutes. Only bound secrets are protected this way; an unbound secret enters the sandbox in the clear, so we bind the ones that matter. Brokered egress is on for hosted Fountain accounts; a self-hosted instance needs it configured. And where the runner cannot isolate, Fountain refuses the launch rather than pretending, which is the behaviour you want.

What done looks like. The Op runs on its own cadence. When it reaches a gate it stops, a person answers, and the run continues. A denied gate is recorded and the run ends cleanly. Nobody on your team can name a place where a live cloud key sits inside an agent's environment, and chant's lint rules would fail the build if someone added one.

What you keep. The Ops, as TypeScript in your repository. The lint rules, in your CI. The agent, environment and vault declarations, applied by chant and diffable against what is running. A Fountain instance you host, or the hosted one. An audit trail you can hand to whoever asks. chant is Apache 2.0 and Fountain's server is AGPL; none of it is licensed from us.

What we will not promise. That the agent will never do something surprising. The gates and the credential boundary are there because it will. The work is putting the surprises where they can be caught.

Status. Bound-secret substitution at the egress broker, on hosted accounts since 2026-09-04. {{< status kind="shipped" date="2026-09-04" >}} `chant acp`, chant as a deterministic agent over the Agent Client Protocol. {{< status kind="shipped" >}} Declaring which secret binds to which host from chant source. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2388" >}} An approval that outlives the session and names the plan it covers. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2384" >}}

## Generated CI with gates

A choudoufu estate's pipeline is five Ops over one live root, and each forge's YAML is generated from them. `live-check` and `live-plan` on a pull request, reading and nothing else. `live-apply` on a push to main and `live-adopt` on a push to staging, both stopping at an approval first. `live-discover` on a cron, sweeping the account for what carries your marker that nobody declared.

What it looks like. We write the chant project over your root, generate the workflows for GitHub, GitLab or Forgejo, and check them in beside it. The gate is a fact in git rather than a runner held open: a run that reaches it records that it is waiting and ends; `chant approve` writes the resolution; the re-run walks through it and the apply re-checks the approved plan against live before anything changes.

What done looks like. Branch protection requires the Op names. Leaving one forge for another is regenerating the YAML. An outage cannot lose a pending approval, because the approval is a commit.

What you keep. One `chant.config.ts`, the generated workflows, and the wardens if you want the forge itself declared: [github-warden](https://github.com/INTENTIUS/github-warden), [gitlab-warden](https://github.com/INTENTIUS/gitlab-warden), [forgejo-warden](https://github.com/INTENTIUS/forgejo-warden) keep an org and its repos in a declared state with drift correction.

Status. A local smoke proves all five Ops, gate included. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/use/cicd/" >}} End-to-end runs exist for GitLab only, and no forge has yet run the generated pipeline against a real cloud account. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1018" >}}

## How we work upstream

Our changes to other people's projects arrive as small reviewable stacks, with tests, on the maintainer's conventions. The public pull request history on the projects we contribute to is the evidence. Your estate is not the place we learn that discipline.
