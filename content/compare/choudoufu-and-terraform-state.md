---
title: "choudoufu and the Terraform state file"
summary: "Same HCL, same providers, same plan. Ownership moves onto the resource."
weight: 10
---

A state file does three jobs. It says which live resource an address refers to, holds values the cloud cannot, and records that an effect happened. [choudoufu](https://intentius.io/choudoufu/) takes them apart, and the state file becomes a cache you may lose.

Everything else is stock OpenTofu, measured on 26 real configurations by the [gauntlet](https://intentius.io/choudoufu/docs/progress/).

| | `terraform.tfstate` | under choudoufu |
|---|---|---|
| The permission unit | one file | one resource |
| To narrow access | split the state | write a policy |
| Handover | export, migrate, re-import | grant a role |
| A rename | `state mv` | rewrite a tag |
| A crashed apply | an orphan | a resource the next plan finds |
| Two runs at once | a lock | the cloud's uniqueness constraint |

## The claims

Twenty of them, each a scenario that runs in a few minutes. Every one also runs inverted, so a check that cannot fail gets caught. Staleness costs reads and never results. Recovery is a re-run rather than surgery. The tag is the boundary, enforced by AWS rather than by the tool. [Run them yourself.](https://intentius.io/choudoufu/docs/claims/)

## Where it stops

AWS only, and experimental. About half the provider's types carry no tags, so they are identifiable but not governable by a tag condition. The identity of a resource has to be knowable before it is created, and a read-only check reports what refuses before you commit to anything.

<!-- scale claims held until the 10,000+ run lands (choudoufu#1051)
745 resources measured against real AWS. 3,705 on the emulator only.
-->

On the [scorecard](/accessible-ops/), choudoufu clears nine of fourteen. Terraform clears one.
