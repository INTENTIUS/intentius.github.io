---
title: "The control planes and orchestration wrappers"
summary: "If you are on Spacelift, Terraform Cloud or something like them, this is the page. Their pitch, claim by claim, and how each of our tools answers it."
weight: 30
---

The pitch is a loop. Plan and apply one effect, then replan and go round again with a person or a policy between rounds. It works only for actors that go through the loop. Anyone holding IAM credentials goes around it.

Our answer is a tag on the resource, so your IAM is the boundary whether or not the actor used any tool.

Read the left column for the claim and the other two for the answer from each tool.

| The claim | choudoufu | chant |
|---|---|---|
| Every change approved, nothing off-plan | The plan file is the approval. The apply re-plans against live and refuses if anything moved. | A gate whose resolution is a commit, bound to the plan digest since 0.63. |
| One effect at a time | Blast radius by partition, not sequencing. An estate is what shares a marker, and `live-mv` moves the boundary. | Owned-only by marker, with a per-environment removal cap. |
| Replan and converge | Every plan reads live, so every run is the loop. | `ConvergeOp` on a schedule, ticked by `chant operator`. Not yet shown on a choudoufu root. |
| Import as a reviewed diff | `live-adopt`: ledger, gate, then two tags per resource. | `carve`, one resource at a time. |
| Many tools in one governed run | Out of scope. | Seventeen lexicons, one gate. No Ansible, and no combined example yet. |
| Honest compatibility | The gauntlet: 26 real configurations against stock OpenTofu as the oracle. | Refusal by name, and a compatibility page still to come. |
| A control plane you can look at | | [behold](https://github.com/INTENTIUS/behold), read-only core, writes through gated Ops. |
| Any scale | 79, 301 and 745 resources measured, 745 against real AWS, 3,705 on the emulator. The category publishes an adjective. | A synthetic bench to 200. |
| Agent-native | | An MCP server with tools for build, lint and search, lifecycle snapshot and diff, and running and approving Ops, plus read-only pipeline tools from the GitHub, GitLab and Forgejo lexicons. `chant acp` for an editor or sandbox that drives chant directly. |
| Model choice | No model calls. | The model is a field on a Fountain `Agent` resource. |

No answer on our side, by design: Terraform Actions, deferred changes in the language, and a one-effect-at-a-time apply.

Ask any of them what stops someone using the CLI. Then ask where ownership is written, and whether IAM can read it there.
