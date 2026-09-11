---
title: "Work"
summary: "Four kinds of engagement. Everything we build is open source, so nothing you keep depends on us."
---

## Estate migration and carving

A Terraform estate shared by more teams than it was built for. We move ownership onto the resources as two tags, and the state file becomes a cache. Carving a team out is one `live-mv` per resource and an IAM policy. Handover is a role grant.

You keep your HCL, the tags and the policies. One command hands a stock state file back if you want out. AWS only, and the [limits are enumerated](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and IAM design

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

We design the estate boundaries and the policies over them, and say up front [where AWS honours the condition](https://intentius.io/choudoufu/docs/use/governance/reach/). A mistake pointed at the wrong estate then fails at the cloud. You keep policies in your account, with nothing of ours in the path.

## Agents against real infrastructure

The agent is a program, the program has gates, and the credential never enters the machine the program runs on.

We take one operation you run by hand and write it as a chant Op. It runs in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox whose only route out is an egress broker, which swaps a placeholder for the real credential per request. Only bound secrets are protected this way, and self-hosted Fountain needs the broker configured. When the Op reaches a gate its turn ends, and the approval is a commit that names the plan it approves.

You keep the Ops, the lint rules and the audit trail. We will not promise the agent never surprises you. The gates are there because it will.

## Releases as compile targets

Off Kubernetes there is no shared apply verb, so every component grows its own pipeline and they drift apart. We describe each component as data instead, and the release compiles from it: typed and linted before anything runs, with cross-stack references resolved by name rather than scraped out with `jq`. One generic runner deploys every component in dependency order, and adding the hundredth costs one declaration and no new pipeline. [The argument in full.](https://lex00.github.io/posts/a-release-is-a-compile-target/)

The CI is generated from the same declarations, one thin job per component, for whichever of the three platforms you run. A write stops at an approval, and the approval is a commit, so an outage cannot lose it.

You keep one `chant.config.ts` and the workflows. A warden declares the org and its repositories too, if you want that. {{< wardens >}}

## Upstream

Our changes to other people's projects arrive as small reviewable stacks, with tests. The public pull request history is the evidence.
