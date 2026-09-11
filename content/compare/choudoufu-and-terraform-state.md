---
title: "choudoufu and the Terraform state file"
summary: "Same HCL, same providers, same plan. Ownership moves onto the resource."
weight: 10
---

A state file says which live resource an address refers to, holds values the cloud cannot, and records that an effect happened. [choudoufu](https://intentius.io/choudoufu/) takes the three apart. Identity becomes two tags on the resource. Values go in a small record store. Effects get a receipt. The state file becomes a cache you may lose.

Everything else is stock OpenTofu, measured on 26 real configurations by the [gauntlet](https://intentius.io/choudoufu/docs/progress/).

| | `terraform.tfstate` | under choudoufu |
|---|---|---|
| The permission unit | one file | one resource |
| To narrow access | split the state | write a policy |
| Handover | export, migrate, re-import | grant a role |
| A rename | `state mv` | rewrite a tag |
| A crashed apply | an orphan | a resource the next plan finds by name |
| Two runs at once | a lock | the cloud's uniqueness constraint |

## The claims

Each is a smoke scenario, a few minutes on Docker plus an emulator, and each also runs inverted under `BREAK=1` to prove it can fail. [All twenty.](https://intentius.io/choudoufu/docs/claims/)

- Owned resources cannot fall out of plans unnoticed. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-1-owned-resources-cannot-fall-out-of-plans-unnoticed" >}}
- Contention settles at the API, never in a lock. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-2-contention-settles-at-the-platform-api-never-in-a-lock" >}}
- Staleness costs reads, never results. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-3-staleness-costs-reads-never-results" >}}
- Recovery is a re-run, never surgery. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-5-recovery-is-a-re-run-never-surgery" >}}
- One command in, one file out. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-6-the-roundtrip---one-command-in-one-file-out" >}}
- Carve by retag. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-12-carve-by-retag" >}}
- The tag is the boundary, refused by AWS and not by the tool. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-13-the-tag-is-the-boundary" >}}
- A plan costs its estate, not its account. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-20-scale---the-estate-boundary-holds-when-the-account-is-a-terralith" >}}
- Apply exactly what was approved. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-15-apply-exactly-what-was-approved" >}}

## Where it stops

- AWS only, and experimental.
- About half the provider's types carry no tags. They are identifiable, not governable by a tag condition. [Per type.](https://intentius.io/choudoufu/docs/use/resource-tiers/)
- Identity must be knowable before create. `live-check` tells you what refuses, with no cloud call.
- The record store keeps generated secrets like state does, unless `strict { secrets = "refuse" }`.
- 745 resources measured against real AWS. 3,705 on the emulator only. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1032" >}}
- Discovery cost grows with unfiltered IAM list resources. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1037" >}}

On the [scorecard](/accessible-ops/), choudoufu clears nine of fourteen. Terraform clears one.
