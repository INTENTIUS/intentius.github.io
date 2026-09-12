---
title: "Work"
summary: "Four kinds of engagement. Every tool involved is open source, so nothing you keep depends on Intentius."
---

The consulting is the product. The tools are free, your estate stays ordinary Terraform throughout, and one command takes the tooling back out.

An estate is everything one team owns in a cloud account: the resources, and the right to change them.

## Estate migration and carving

One state file shared by more teams than it was built for, so every handover is a migration project. Ownership moves onto the resources as two tags, and carving a team out becomes one `live-mv` per resource and an IAM policy.

A published Terraform migration spent 38% of its engineering weeks on state work, and that chain set the calendar because the rest ran in parallel. Taking it out is where [the estimate of roughly half the time](https://lex00.github.io/posts/choudoufu-cuts-terralith-optimization-time-in-half/) comes from. It is an estimate from someone else's public case study, not a measurement of your estate.

You keep your HCL, the tags and the policies. AWS only, and the [limits are enumerated](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and IAM design

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

The engagement designs the boundaries and the policies over them, and says up front [where AWS honours the condition](https://intentius.io/choudoufu/docs/use/governance/reach/). A mistake pointed at the wrong estate then fails at the cloud.

## Agents against real infrastructure

The agent is a program, the program has gates, and the credential never enters the machine it runs on. Confused or compromised, it cannot leak a key it was never given.

One operation you run by hand becomes a chant Op, running in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox whose only route out swaps a placeholder for the real credential. Reaching a gate ends its turn, and the approval is a commit naming the plan.

Nothing here promises the agent will never surprise you. The gates exist because it will.

## Releases as compile targets

Outside Kubernetes every service grows its own pipeline, each a near copy of the last. Describe the component as data and the release compiles from it, so the hundredth costs a declaration and no new pipeline. [The argument in full.](https://lex00.github.io/posts/a-release-is-a-compile-target/)

## Upstream

Changes to other people's projects arrive as small reviewable stacks, with tests.
