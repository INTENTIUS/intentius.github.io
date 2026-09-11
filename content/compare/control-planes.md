---
title: "The control planes and orchestration wrappers"
summary: "An approval loop around Terraform, sold as governance. Here is each claim when ownership lives on the resource."
weight: 30
---

The pitch is a loop. Plan and apply one effect, then replan and go round again with a person or a policy between rounds. It works only for actors that go through the loop. Anyone holding IAM credentials goes around it.

Our answer is a tag on the resource, so your IAM is the boundary whether or not the actor used any tool.

| The claim | choudoufu | chant |
|---|---|---|
| Every change approved, nothing off-plan | The plan file is the approval. The apply re-plans against live and refuses if anything moved. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-15-apply-exactly-what-was-approved" >}} | A gate whose resolution is a commit, bound to the plan digest since 0.63. {{< status kind="shipped" date="2026-09-09" href="https://github.com/INTENTIUS/chant/pull/2338" >}} |
| One effect at a time | Blast radius by partition, not sequencing. An estate is what shares a marker, and `live-mv` moves the boundary. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-12-carve-by-retag" >}} | Owned-only by marker, with a per-environment removal cap. |
| Replan and converge | Every plan reads live, so every run is the loop. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-3-staleness-costs-reads-never-results" >}} | `ConvergeOp` on a schedule, ticked by `chant operator`. {{< status kind="shipped" href="https://intentius.io/chant/guide/converging-lifecycle/" >}} Not yet shown on a choudoufu root. {{< status kind="open" href="https://github.com/INTENTIUS/choudoufu/issues/1033" >}} |
| Import as a reviewed diff | `live-adopt`: ledger, gate, then two tags per resource. {{< status kind="shipped" href="https://intentius.io/choudoufu/docs/use/cicd/" >}} | `carve`, one resource at a time. {{< status kind="measured" href="https://github.com/INTENTIUS/chant/blob/main/test/carve-emit-e2e.sh" >}} |
| Many tools in one governed run | Out of scope. | Seventeen lexicons, one gate. {{< status kind="shipped" >}} No Ansible, and no combined example yet. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2314" >}} |
| Honest compatibility | The gauntlet: 26 real configurations against stock OpenTofu as the oracle. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/progress/" >}} | Page filed, not written. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2318" >}} |
| A control plane you can look at | | [behold](https://github.com/INTENTIUS/behold), read-only core, writes through gated Ops. {{< status kind="shipped" >}} |
| Any scale | 79, 301 and 745 resources measured, 745 against real AWS, 3,705 on the emulator. The category publishes an adjective. {{< status kind="measured" href="https://intentius.io/choudoufu/docs/claims/#claim-20-scale---the-estate-boundary-holds-when-the-account-is-a-terralith" >}} | A synthetic bench to 200. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2317" >}} |
| Agent-native | | `chant serve mcp` and `chant acp`, over stdio. {{< status kind="shipped" >}} |
| Model choice | No model calls. | The model is a field on a Fountain `Agent` resource. {{< status kind="shipped" >}} |

No answer on our side, by design: Terraform Actions, deferred changes in the language, and a one-effect-at-a-time apply.

Ask any of them what stops someone using the CLI. Then ask where ownership is written, and whether IAM can read it there.
