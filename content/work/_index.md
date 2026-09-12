---
title: "Work"
summary: "Four kinds of engagement. Every tool involved is open source, so nothing you keep depends on Intentius."
---

The consulting is the product. Your estate stays ordinary Terraform throughout, and one command takes the tooling back out.

Every engagement starts with a read-only check against your configuration. No credentials, no cloud calls, and a report of what would refuse. The rest is sized from what it finds.

What lands at the end varies. Where it runs does not. It runs in your CI, on your infrastructure, under your accounts, with nothing of Intentius left in the path.

## Estate migration and carving

An estate is everything one team owns in a cloud account. One state file shared by more teams than it was built for makes every handover a migration project. Ownership moves onto the resources as two tags, and splitting a team off becomes a tag rewrite and a permissions policy.

How long depends on the estate. A published Terraform migration spent 38% of its engineering weeks on state work, and that chain set the calendar because everything else ran in parallel. Removing it is where [the estimate of roughly half the time](https://lex00.github.io/posts/choudoufu-cuts-terralith-optimization-time-in-half/) comes from, off someone else's case study rather than a measurement of your estate.

You keep your Terraform code, the tags and the policies. AWS only, and the [limits are written down](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and permissions

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

The engagement designs the boundaries and the policies over them, and says up front [where AWS enforces them](https://intentius.io/choudoufu/docs/use/governance/reach/). A mistake pointed at the wrong estate then fails at the cloud rather than at review.

## Agents against real infrastructure

The agent is a program with approval gates, and the credential never enters the machine it runs on. Confused or compromised, it cannot leak a key it was never given.

One operation you run by hand becomes a program running in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox, whose only way out swaps a placeholder for the real credential. Reaching an approval stops it, and the approval itself is a commit naming exactly what was approved.

## Releases as compile targets

Outside Kubernetes every service grows its own deploy pipeline, each a near copy of the last. Describe the service as data instead and the deploy is compiled from it, so the hundredth costs a declaration and no new pipeline. [The argument in full.](https://lex00.github.io/posts/a-release-is-a-compile-target/)

## Upstream

Changes to other people's projects arrive as small reviewable pieces, with tests.
