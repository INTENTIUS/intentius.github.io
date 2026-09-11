---
title: "The control planes and orchestration wrappers"
summary: "A category of products puts an approval loop around Terraform and calls it governance. Here is what each of their claims looks like when ownership lives on the resource."
weight: 30
---

The pitch is consistent across the category. Every change is planned, visible and approved. Nothing runs off-plan. The plan is the agent's work list, applied one effect at a time. Import brings existing infrastructure in as a reviewed diff. It scales to thousands of resources and speaks whatever transport agents use this year.

Strip the framing and the mechanism is a loop. Plan and apply one effect from that plan, then replan and go round again with a person or a policy between rounds. The safety property is a small reach for any one mistake, achieved by sequencing. It depends on the approval step catching the bad effect before it runs, and it depends on every actor going through the loop. Anything holding IAM credentials goes around it.

We answer the same claims from a different layer. Ownership is a tag on the resource, so your IAM is the boundary, and it holds whether or not the actor went through any tool.

## Claim by claim

| The claim | choudoufu | chant |
|---|---|---|
| Every change planned and approved, nothing off-plan | The plan file is the approval. The apply re-plans against live and refuses, exit 3, if anything moved. Measured on every estate. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-15-apply-exactly-what-was-approved" >}} | A durable gate whose resolution is a commit on a ledger branch, bound since chant 0.63 to the digest of the plan it approved; approve, change the root, re-run, and the run is refused by name. {{< status kind="shipped" date="2026-09-09" href="https://github.com/INTENTIUS/chant/pull/2338" >}} |
| The plan as a work list, one effect at a time | Blast radius by partition, not by sequencing. An estate is the set of resources sharing a marker, and a plan is scoped to it before any loop starts. `live-mv` moves the boundary by retagging. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-12-carve-by-retag" >}} | Owned-only by marker, with a per-environment removal cap. |
| Replan and converge | Every plan reads live by construction, because state is a cache. Every run already is the convergence loop. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-3-staleness-costs-reads-never-results" >}} | `ConvergeOp` runs a typed rule table on a schedule and `chant operator` ticks it durably off a git-ref lease. {{< status kind="shipped" href="https://intentius.io/chant/guide/converging-lifecycle/" >}} No example yet runs that loop on a choudoufu root. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1033" >}} |
| Import as a reviewed diff | `live-adopt`: a ledger, a gate, then two tags per resource. Nothing in the source changes. {{< status kind="shipped" href="https://intentius.io/choudoufu/docs/use/cicd/" >}} | `carve advise` ranks resources by how cleanly they peel, `carve emit` adopts one at a time into the platform's own spec, and refuses the rest by name. {{< status kind="measured" href="https://github.com/INTENTIUS/chant/blob/main/test/carve-emit-e2e.sh" >}} |
| Terraform, Ansible and Helm in one governed run | Out of scope; AWS only. | Seventeen lexicons, Ops from one project, the same gate for all of them. {{< status kind="shipped" >}} There is no Ansible lexicon, and no example yet combines Terraform, Helm and Kubernetes under one Op set. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2314" >}} |
| Honest compatibility, refuse loudly | The gauntlet: 26 real configurations run stage by stage against stock OpenTofu as the oracle, published with the emulator digest each row was measured on. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/progress/" >}} | A compatibility page is filed, not written. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2318" >}} |
| A control plane you can look at | | [behold](https://github.com/INTENTIUS/behold): the whole estate as one graph coloured by drift, read-only core, every write leaving through a gated chant Op. `npx @intentius/behold demo` needs no cloud account. {{< status kind="shipped" >}} |
| Any scale, thousands per stack | Measured: 79, 301 and 745 resources stage by stage against stock, 745 also against real AWS with throttles counted, and 3,705 through every active stage on the emulator. With 3,705 foreign resources in the account, an estate's read pass did not move by one call. The category publishes an adjective. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-20-scale---the-estate-boundary-holds-when-the-account-is-a-terralith" >}} | A synthetic bench to 200, and no claim. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2317" >}} |
| Model choice: hosted, local, or your own GPU | Makes no model calls. | chant makes no model calls either. The model is a field on a Fountain `Agent` resource, declared and linted like any other resource. {{< status kind="shipped" href="https://intentius.io/chant/" >}} |
| Agent-native, any transport | | `chant serve mcp` and `chant acp` exist over stdio; behold drives through the same tools. A transport says nothing about what the tools let an agent refuse. {{< status kind="shipped" >}} |

Three claims in the category's pitch have no answer on our side today and we are not going to pretend otherwise. Terraform Actions from 1.14 are not in choudoufu, whose base is 1.13, and OpenTofu itself has not decided how it will support them. A deferred-changes loop inside the language does not exist in choudoufu beyond upstream's data-source deferral. And there is no one-effect-at-a-time apply in either tool; the argument above is that partitioning makes the sequencing unnecessary, and it is an argument, not a feature.

## The question to ask any of them

Ask what stops someone using the CLI. Then ask where ownership is written, and whether IAM can read it there. If the answer is a state file or a database the product hosts, the loop is the only guard, and the loop is optional for anyone with a key.
