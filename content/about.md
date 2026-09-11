---
title: "About"
summary: "Intentius is an infrastructure consultancy. The tools came out of the work."
---

Intentius does infrastructure work for teams that inherited more than they built: shared production accounts, state files nobody wants to touch, and now agents that need production access without production keys.

The tools exist because the work kept hitting the same wall. Every infrastructure tool outside Kubernetes keeps a private ledger of what it owns, and the ledger is where the permission boundary, the secrets and the lock end up. An entire industry sells workarounds for that ledger from a layer above it. We wanted the record where IAM could read it.

[choudoufu](https://intentius.io/choudoufu/) is the smallest possible change to OpenTofu that does this for AWS: two tags per resource, and the state file becomes a cache. [chant](https://intentius.io/chant/) goes the other way, out of Terraform and into the platform's own spec, across many platforms, with the same property. Both are open source, both are documented to the point of naming their own gaps, and neither has a pricing page.

The thinking behind the tools is written up at length on [our blog](https://lex00.github.io/). The [Accessible Ops](https://accessibleops.net/) spec, which this site rates every tool against, was seeded in part by that writing.

## How we work

Measured, not argued. A claim about our own tools links to the test that proves it or the issue that says it is not done. When a check fails once and passes on a re-run, that is a finding, not a flake.

Upstream, in small pieces. Changes to other people's projects go in as reviewable stacks with tests, on the maintainer's conventions.

Nothing to buy. Everything we build is open source and stays yours. If you want help using it, or help with an estate that has nothing to do with our tools, [ask](/contact/).
