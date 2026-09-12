---
title: "Tools"
summary: "All open source. Two are the reason the company exists."
---

## choudoufu

OpenTofu plus identity hooks. Each AWS resource carries its identity as two tags, so the state file becomes a cache you may lose. Twenty claims, each a runnable smoke scenario. Experimental and AWS only.

[Docs](https://intentius.io/choudoufu/) · [Source](https://github.com/INTENTIUS/choudoufu) · [Claims](https://intentius.io/choudoufu/docs/claims/) · [Compare](/compare/choudoufu-and-terraform-state/)

## chant

A type system for operations. Typed source folded to the platform's own spec with no execution, deployed to the three big clouds and Kubernetes from one project. A release is a compile target, so the CI comes out of the same declarations as the deploy. Seventeen lexicons.

[Docs](https://intentius.io/chant/) · [Source](https://github.com/INTENTIUS/chant) · [The subset as a spec](https://github.com/INTENTIUS/typescript-as-data) · [Compare](/compare/chant-cdk-and-pulumi/)

### Audit

`chant audit` reads a repository that has never heard of chant and runs a few hundred checks over its pipelines and infrastructure config. Mechanical fixes come back as ready-to-apply diffs. [blacklight](https://blacklight.intentius.io) is the same audit, hosted.

### Agents

`chant init` writes the MCP server into your editor's config. An agent can build and lint the project, diff the lifecycle against live, and run or approve an Op. It meets a gate the same way a person does.

### Fountain lexicon

Declares an agent's sandbox, vault and schedule as typed resources and diffs them against what is running.

## behold

The whole estate as one graph. Read-only core, every write through a gated chant Op. `npx @intentius/behold demo` needs no account. [Source](https://github.com/INTENTIUS/behold)

## Wardens

An org and its repositories kept in a declared state, with drift correction. {{< wardens >}}

## Emulators

Local targets so the tools run without an account. [mudflaps](https://github.com/INTENTIUS/mudflaps) and [spritzer](https://github.com/INTENTIUS/spritzer) for Fly, [m80](https://github.com/INTENTIUS/m80) for KubeMicroVM, [floci](https://github.com/lex00/floci) for AWS.

## Also

[pinhole](https://github.com/INTENTIUS/pinhole) draws the graph. [spicypath](https://spicypath.intentius.workers.dev) inspects a profile.
