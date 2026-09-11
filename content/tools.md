---
title: "Tools"
summary: "All open source. Two are the reason the company exists."
---

## choudoufu

OpenTofu plus identity hooks. Each AWS resource carries its identity as two tags, written on create and read back on every plan. The state file is a cache you may lose. Twenty claims, each a smoke scenario. It is experimental and AWS only, under MPL-2.0.

[Docs](https://intentius.io/choudoufu/) · [Source](https://github.com/INTENTIUS/choudoufu) · [Claims](https://intentius.io/choudoufu/docs/claims/) · [Compare](/compare/choudoufu-and-terraform-state/)

## chant

A type system for operations. Infrastructure in a statically evaluable subset of TypeScript, folded to the platform's own spec with no execution. It deploys to the three big clouds and Kubernetes from one project. A release is a compile target: components described as data, the deploy order from the dependency graph, and the CI generated from the same declarations. Seventeen lexicons in all, under Apache 2.0.

[Docs](https://intentius.io/chant/) · [Source](https://github.com/INTENTIUS/chant) · [The subset as a spec](https://github.com/INTENTIUS/typescript-as-data) · [Compare](/compare/chant-cdk-and-pulumi/)

### Audit

`chant audit` reads an existing repository, with no chant project required, and runs a few hundred security and correctness checks over its pipelines and infrastructure config. It reads the CI workflows for all three platforms and the Kubernetes and Helm config beside them. It reads Dockerfiles and Terraform roots. It reads the cloud templates for AWS, Azure and GCP, and it scans every file for secrets. Findings that are safe to fix mechanically come back as ready-to-apply diffs. Point it at a local path or a public URL, or use [blacklight](https://blacklight.intentius.io), which is the same audit hosted.

### Agents

`chant init` writes the MCP server into your editor's config and installs a skill per platform. Over MCP an agent can build and lint the project or search it. It can take a lifecycle snapshot and diff it against live. It can run an Op and approve or report on one. The GitHub, GitLab and Forgejo lexicons add read-only tools that answer questions about a pipeline before it runs: what it does, what it pulls in and whether that is pinned, what re-runs if a job changes. An agent meets a gate the same way a person does.

### Fountain lexicon

The Fountain lexicon declares an agent's sandbox, vault and schedule as typed resources and diffs them against what is running. Thirteen lint rules catch the ways agents fail before anything is sent.

## behold

The whole estate as one graph. Read-only core, every write through a gated chant Op. `npx @intentius/behold demo` needs no account. [Source](https://github.com/INTENTIUS/behold)

## Wardens

An org and its repositories kept in a declared state, with drift correction. One warden per platform. {{< wardens >}}

## Emulators

Stateful local targets so the tools run without an account. [mudflaps](https://github.com/INTENTIUS/mudflaps) for Fly Machines, [spritzer](https://github.com/INTENTIUS/spritzer) for Fly Sprites, [m80](https://github.com/INTENTIUS/m80) for KubeMicroVM. The gauntlet runs on [floci](https://github.com/lex00/floci), an AWS emulator we contribute to.

## Also

[pinhole](https://github.com/INTENTIUS/pinhole) draws the graph. [blacklight](https://blacklight.intentius.io) audits a public repo from its URL. [spicypath](https://spicypath.intentius.workers.dev) inspects a profile in the browser.
