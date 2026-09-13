---
title: "Work"
summary: "Four kinds of engagement. Everything you keep is open source and yours."
---

You are hiring the work. Your estate stays ordinary Terraform throughout, and one command takes the tooling back out.

Everything starts with a read-only check against your configuration. It reads the code and reports what would refuse. Whatever gets built runs in your CI, under your accounts, yours to keep.

## Estate migration and carving

An estate is everything one team owns in a cloud account. Inherit one and the state file is the only thing telling you which resources are yours. Share it across more teams than it was built for and every handover turns into a migration project.

Ownership moves onto the resources as two tags. Splitting a team off becomes a tag rewrite and a permissions policy, and who owns this becomes a tag query with one name as the answer. A hosted product would copy your resources into a record it holds. These tags sit on your own resources and stay there whether you keep the tooling or not.

How long depends on the estate. A published Terraform migration spent 38% of its engineering weeks on state work, and removing that is where [the estimate of roughly half the time](https://lex00.github.io/posts/choudoufu-cuts-terralith-optimization-time-in-half/) comes from. AWS only, and the [limits are written down](https://intentius.io/choudoufu/docs/use/compatibility/).

## Ownership and permissions

Tag-based access control has been in AWS for years. What stopped teams using it was tags they could not trust.

The boundaries and the policies over them get designed together, with [where AWS enforces them](https://intentius.io/choudoufu/docs/use/governance/reach/) said up front. A mistake pointed at the wrong estate fails at the cloud, console changes included.

## Agents against real infrastructure

The agent is a program with approval gates. The credential stays outside the machine it runs on, so a confused or compromised agent leaks a placeholder.

One operation you run by hand becomes a program in a [Fountain](https://github.com/BinaryBourbon/fountain) sandbox, whose only way out swaps a placeholder for the real credential. Reaching an approval stops it, and the approval is a commit naming what was approved.

## Releases as compile targets

Outside Kubernetes every service grows its own deploy pipeline, each a near copy of the last. Describe the service as data instead and the deploy is compiled from it, so the hundredth costs a declaration and no new pipeline. [The argument in full.](https://lex00.github.io/posts/a-release-is-a-compile-target/)

## Upstream

Bugs found in other people's projects get fixed there.
