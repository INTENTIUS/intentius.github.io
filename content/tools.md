---
title: "Tools"
summary: "All open source."
---

## choudoufu

A build of OpenTofu where every AWS resource records who owns it, written into the cloud as two tags. The state file becomes a copy you are allowed to lose. Twenty claims about it, each one you can run yourself. Experimental, and AWS only.

[Docs](https://intentius.io/choudoufu/) · [Source](https://github.com/INTENTIUS/choudoufu) · [Claims](https://intentius.io/choudoufu/docs/claims/) · [Compare](/compare/choudoufu-and-terraform-state/)

## chant

Infrastructure written as typed code and checked before anything runs, then deployed to the three big clouds and Kubernetes from one project. The deploy pipeline is generated from that same code, so adding a service does not mean writing another one.

[Docs](https://intentius.io/chant/) · [Source](https://github.com/INTENTIUS/chant) · [Compare](/compare/chant-cdk-and-pulumi/)

### Audit

Point it at a repository that has never heard of chant and it runs a few hundred security and correctness checks over whatever it finds. The fixes that are safe to make come back ready to apply. [blacklight](https://blacklight.intentius.io) is the same thing, hosted.

### Agents

An agent can build the project and check it, then compare what is written against what is running. Starting or approving a deployment works the same way for an agent as for a person, and neither can hurry an approval.

### Fountain

Declares an agent's sandbox, its secrets and its schedule as ordinary infrastructure, then compares them against what is really running.

## behold

The whole estate as one picture, coloured by what has drifted. It only reads. Every change leaves through an approval.

## Wardens

An org and its repositories kept in the state you declared, with drift corrected. {{< wardens >}}

## Emulators

Local stand-ins so the tools run without a cloud account. [mudflaps](https://github.com/INTENTIUS/mudflaps) and [spritzer](https://github.com/INTENTIUS/spritzer) for Fly, [m80](https://github.com/INTENTIUS/m80) for KubeMicroVM, [floci](https://github.com/lex00/floci) for AWS.

## Also

[pinhole](https://github.com/INTENTIUS/pinhole) draws the picture. [spicypath](https://spicypath.intentius.workers.dev) inspects a profile in the browser.
