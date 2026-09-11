---
title: "The control planes and orchestration wrappers"
summary: "A category of products puts an approval loop around Terraform and calls it governance. Here is what each of their claims looks like when ownership lives on the resource."
weight: 30
---

The pitch is consistent across the category. Every change is planned, visible and approved. Nothing runs off-plan. The plan is the agent's work list, applied one effect at a time. Import brings existing infrastructure in as a reviewed diff. It scales to thousands of resources. It is native to whatever transport agents use this year.

Strip the framing and the mechanism is a loop: plan, pick one effect, apply it, replan, repeat, with a person or a policy between rounds. The safety property is a small blast radius achieved by sequencing. It depends on the approval step catching the bad effect before it runs, and it depends on every actor going through the loop. Anything holding IAM credentials goes around it.

We answer the same claims from a different layer. Ownership is a tag on the resource, so your IAM is the boundary, and it holds whether or not the actor went through any tool.

## Claim by claim

| The claim | choudoufu | chant |
|---|---|---|
| Every change planned and approved, nothing off-plan | The plan file is the approval. The apply re-plans against live and refuses, exit 3, if anything moved. Measured on every estate. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-15-apply-exactly-what-was-approved" >}} | A durable gate whose resolution is a fact in git. The human half does not yet bind a plan identity. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2300" >}} |
| The plan as a work list, one effect at a time | Blast radius by partition, not by sequencing. An estate is the set of resources sharing a marker, and a plan is scoped to it before any loop starts. `live-mv` moves the boundary by retagging. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-12-carve-by-retag" >}} | Owned-only by marker, with a per-environment removal cap. |
| Replan and converge | Every plan reads live by construction, because state is a cache. Every run already is the convergence loop. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-3-staleness-costs-reads-never-results" >}} | Every change set is computed against live. |
| Import as a reviewed diff | `live-adopt`: a ledger, a gate, then two tags per resource. Nothing in the source changes. {{< status kind="documented" href="https://intentius.io/choudoufu/docs/use/cicd/" >}} | `carve`, one resource at a time, into the platform's own spec. |
| Terraform, Ansible and Helm in one governed run | Out of scope; AWS only. | Seventeen lexicons, Ops from one project, the same gate for all of them. {{< status kind="shipped" >}} |
| Honest compatibility, refuse loudly | The gauntlet: 26 real configurations run stage by stage against stock OpenTofu as the oracle, published with the emulator digest each row was measured on. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/progress/" >}} | A compatibility page is filed, not written. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2318" >}} |
| A control plane you can look at | | [behold](https://github.com/INTENTIUS/behold): the whole estate as one graph coloured by drift, read-only core, every write leaving through a gated chant Op. `npx @intentius/behold demo` needs no cloud account. {{< status kind="shipped" >}} |
| Any scale, thousands per stack | Measured: 79, 301 and 745 resources, the last against real AWS with throttles counted. With 3,705 foreign resources in the account, an estate's read pass did not move by one call. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-20-scale---the-estate-boundary-holds-when-the-account-is-a-terralith" >}} | A synthetic bench to 200. {{< status kind="documented" >}} |
| Agent-native, any transport | | `chant serve mcp` and `chant acp` exist over stdio; behold drives through the same tools. A transport says nothing about what the tools let an agent refuse. {{< status kind="shipped" >}} |

Two claims in the category's pitch have no answer on our side today and we are not going to pretend otherwise. Terraform Actions from 1.14 are not in choudoufu, whose base is 1.13, and OpenTofu itself has not decided how it will support them. A deferred-changes loop beyond upstream's data-source deferral does not exist in choudoufu.

## The question to ask any of them

Ask what stops someone using the CLI. Then ask where ownership is written, and whether IAM can read it there. If the answer is a state file or a database the product hosts, the loop is the only guard, and the loop is optional for anyone with a key.
