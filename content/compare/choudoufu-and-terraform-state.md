---
title: "choudoufu and the Terraform state file"
summary: "Same HCL, same providers, same plan. The one thing that moves is where ownership is written."
weight: 10
---

A Terraform or OpenTofu state file does three jobs. It says which live resource an address refers to. It holds values the cloud has nowhere to put. And it records that an effect happened. Bundling the three into one file is what turns persistence into a permission boundary, a secret, and a thing to lock.

[choudoufu](https://intentius.io/choudoufu/) takes them apart. Identity becomes two tags on the resource, written as part of the create call. Values with no cloud twin go in a small record store. Effects get a receipt you declare. The state file becomes a cache you are allowed to lose.

Everything else is stock OpenTofu, and the [gauntlet](https://intentius.io/choudoufu/docs/progress/) measures that on 26 real configurations, stage by stage, against the stock binary as the oracle.

## What changes for you

| | `terraform.tfstate` | under choudoufu |
|---|---|---|
| The permission unit | one file | one resource |
| Who may change the RDS but not the subnets | anyone who can write the file | whoever your IAM says |
| To narrow access | split the state | write a policy |
| Handover | export, migrate, re-import | grant a role |
| A rename | `state mv` | rewrite a tag |
| What is in it | open the JSON | `aws resourcegroupstaggingapi get-resources` |
| A crashed apply | an orphan no plan will mention again | a resource the next plan finds by name |
| Two runs at once | a lock, and `force-unlock` when it sticks | the cloud's own uniqueness constraint |

## The claims, and how to check them

Each of these is a smoke scenario in the repository, two to six minutes on Docker plus a local AWS emulator. Each also runs inverted: under `BREAK=1` it manufactures the exact corruption the claim guards against and passes only by catching it. [The full list is twenty.](https://intentius.io/choudoufu/docs/claims/)

- Owned resources cannot fall out of plans unnoticed. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-1-owned-resources-cannot-fall-out-of-plans-unnoticed" >}}
- Contention settles at the platform API, never in a lock. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-2-contention-settles-at-the-platform-api-never-in-a-lock" >}}
- Staleness costs reads, never results. A fresh, an ancient and a missing cache plan byte-identically. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-3-staleness-costs-reads-never-results" >}}
- Recovery is a re-run, never surgery. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-5-recovery-is-a-re-run-never-surgery" >}}
- The roundtrip: one command in, one file out. Stock stands an estate up, `live-import` adopts it, the cache hands a stock state file back. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-6-the-roundtrip---one-command-in-one-file-out" >}}
- Carve by retag. A 79-resource terralith is split into team estates with tag writes and no state surgery. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-12-carve-by-retag" >}}
- The tag is the boundary. Two roles fenced to two halves of one estate by an IAM condition; refused by AWS, not by the tool, and the same refusal lands on a plain CLI call. Reproduced on a real account with CloudTrail evidence. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-13-the-tag-is-the-boundary" >}}
- A plan costs its estate, not its account. Measured with 3,705 foreign resources in the account: the read pass did not move by one call. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-20-scale---the-estate-boundary-holds-when-the-account-is-a-terralith" >}}
- Apply exactly what was approved. The plan file is the approval; the apply re-plans against live and refuses, exit 3, if anything moved. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-15-apply-exactly-what-was-approved" >}}

## Where it does not reach

- AWS only, and experimental. There is no second cloud on the roadmap.
- About half the provider's resource types carry no tags. Their identity is composed from configuration or a tagged parent instead, which makes them identifiable but not governable by a tag condition. The [resource tier lookup](https://intentius.io/choudoufu/docs/use/resource-tiers/) says which is which, per type.
- Identity must be knowable before anything is created. A `for_each` keyed by a live ID, or a module output read in a `count`, stops a run. `choudoufu live-check` tells you in advance, with no cloud call. [What is refused](https://intentius.io/choudoufu/docs/use/compatibility/) is enumerated.
- The record store keeps generated secrets the way a state file does, unless you set `strict { secrets = "refuse" }`. Read [where things are stored](https://intentius.io/choudoufu/docs/use/storage/) before picking a backend.
- The largest estate measured against real AWS is 745 resources. A 3,705-resource estate has cleared every active stage on the emulator only; the real-account run has not happened. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1032" >}}
- Discovery cost is not flat per resource on large estates: the native sweep grows with unfiltered IAM list resources. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1037" >}}

## On the scorecard

choudoufu clears nine of the fourteen [Accessible Ops](/accessible-ops/) properties by design. Terraform and OpenTofu clear one. The five it does not clear are the three synthesis rows, which HCL cannot, plus rollback and artifact provenance, which are upstream's shape too.
