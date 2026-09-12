---
title: "Work"
summary: "Four kinds of engagement. Every tool involved is open source, so nothing you keep depends on Intentius."
---

The consulting is the product. Your estate stays ordinary Terraform throughout, and one command takes the tooling back out.

Every engagement starts with a read-only check against your configuration, no credentials and no cloud calls, reporting what would refuse. The rest is sized from what it finds.

What lands at the end varies, but the shape does not: it runs in your CI, on your infrastructure, under your accounts, with nothing of Intentius left in the path.

## Estate migration and carving

An estate is everything one team owns in a cloud account. One state file shared by more teams than it was built for makes every handover a migration project. Ownership moves onto the resources as two tags, and carving a team out becomes one `live-mv` per resource and an IAM policy.

How long depends on the estate. A published Terraform migration spent 38% of its engineering weeks on state work, and that chain set the calendar because everything else ran in parallel. Removing it is where [the estimate of roughly half the time](https://lex00.github.io/posts/choudoufu-cuts-terralith-optimization-time-in-half/) comes from, off someone else's case study rather than a measurement of your estate.

You keep your HCL, the tags and the policies. AWS only, and the [limits are enumerated](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and IAM design

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

The engagement designs the boundaries and the policies over them, and says up front [where AWS honours the condition](https://intentius.io/choudoufu/docs/use/governance/reach/). A mistake pointed at the wrong estate then fails at the cloud.

## Agents against real infrastructure

The agent is a program with gates, and the credential never enters the machine it runs on. Confused or compromised, it cannot leak a key it was never given.

One operation you run by hand becomes a chant Op in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox, whose only route out swaps a placeholder for the real credential. Reaching a gate ends its turn, and the approval is a commit naming the plan.

## Releases as compile targets

Outside Kubernetes every service grows its own pipeline, each a near copy of the last. Describe the component as data and the release compiles from it, so the hundredth costs a declaration and no new pipeline. [The argument in full.](https://lex00.github.io/posts/a-release-is-a-compile-target/)

## Upstream

Changes to other people's projects arrive as small reviewable stacks, with tests.
