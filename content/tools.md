---
title: "Tools"
summary: "Everything Intentius builds is open source. Two of these are the reason the company exists. The rest exist so the two can be run, watched and tested without a cloud account."
---

## choudoufu

OpenTofu plus identity hooks. Each AWS resource carries its identity as two tags, written as part of the create call and read back live on the next plan. The tags are `tofu-estate` and `tofu-address`. The state file is a cache you are allowed to lose, and the IAM you already run decides who may read or change what. Handover is granting a role, a split is a tag rewrite, adoption is a tag you write. Twenty claims, each a smoke scenario with its failure demonstrated. Experimental, AWS only, MPL-2.0 like upstream.

[Docs](https://intentius.io/choudoufu/) · [Source](https://github.com/INTENTIUS/choudoufu) · [The claims](https://intentius.io/choudoufu/docs/claims/) · [How it compares](/compare/choudoufu-and-terraform-state/)

## chant

A type system for operations. Infrastructure is declared in a statically evaluable subset of TypeScript and folded to the platform's own spec with no module execution. Seventeen lexicons cover the three big clouds and Kubernetes. Others reach the three forges. Fly, Fountain and Terraform have lexicons too. One project generates the pipeline for each forge, and gates are durable facts in git. `chant serve mcp` and `chant acp` let an agent drive it over stdio. It is licensed Apache 2.0.

[Docs](https://intentius.io/chant/) · [Source](https://github.com/INTENTIUS/chant) · [The TypeScript subset, as a spec](https://github.com/INTENTIUS/typescript-as-data) · [How it compares](/compare/chant-cdk-and-pulumi/)

### The Fountain lexicon

chant can declare a [Fountain](https://github.com/BinaryBourbon/fountain) estate the way it declares cloud infrastructure, in TypeScript, applied through one call and diffed against what is live. The kinds it models are agents and their environments, vaults and teammates, and schedules and webhook receivers. Thirteen lint rules run before anything is sent, and they exist because of how agents fail: an environment that never said what network it wanted, a cloud key sitting in plain environment variables, an MCP server handed a literal token, a vault key silently shadowing an environment key. An agent is a declared resource with per-tool permission verdicts and a sandbox mode, and so are a teammate and a schedule. Most products let you talk to an agent. This lets you declare one and diff it against what is actually running.

The six Fountain kinds chant models are modeled completely. The remaining API surface is excluded with recorded reasons.

## behold

A live control plane on chant. The whole estate, every substrate, as one graph coloured by drift, then action through delegated, gated Ops. The core is read-only; every write leaves through chant. `npx @intentius/behold demo` puts it on localhost with no cloud account.

[Source](https://github.com/INTENTIUS/behold) · [Docs](https://intentius.io/behold/)

## The wardens

Keep a GitHub org, a GitLab group or a Forgejo org and its repositories in a declared state, with guardrails and drift correction. Three packages, one shape.

[github-warden](https://github.com/INTENTIUS/github-warden) · [gitlab-warden](https://github.com/INTENTIUS/gitlab-warden) · [forgejo-warden](https://github.com/INTENTIUS/forgejo-warden)

## The emulators

Stateful local emulators so the tools above can be tested without an account. [mudflaps](https://github.com/INTENTIUS/mudflaps) for Fly Machines, [spritzer](https://github.com/INTENTIUS/spritzer) for Fly Sprites, [m80](https://github.com/INTENTIUS/m80) for KubeMicroVM. choudoufu's gauntlet runs against [floci](https://github.com/lex00/floci), an AWS emulator we contribute to.

## Also

[pinhole](https://github.com/INTENTIUS/pinhole) draws chant's resolved graph as diagrams. [blacklight](https://blacklight.intentius.io) is a hosted chant audit: paste a public repo URL and get its misconfigurations back as ready-made diffs. [spicypath](https://spicypath.intentius.workers.dev) inspects any profile in the browser.
