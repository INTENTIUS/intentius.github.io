---
title: "The control planes and orchestration wrappers"
summary: "If you are on Spacelift, Terraform Cloud or something like them, this is the page."
weight: 30
---

They all sell the same shape. Your changes go through their loop, a person or a policy approves each one, and nothing runs unreviewed. It works, and it is worth paying for if the loop is the only way anyone touches your infrastructure.

It never is. Someone has a key. The on-call engineer fixing an outage at 2am has a key, the script that has run every night since 2019 has a key, and the contractor you onboarded last month has a key. None of them go through the loop, and the loop cannot see them.

That is the gap these tools are built for.

## Put the record where the cloud can read it

Every resource choudoufu creates is stamped with who owns it, in the cloud, on the resource itself. Your own permissions read that stamp. A staging role that may not touch production gets denied by AWS rather than by a policy engine sitting in front of AWS. The rule holds for the console and the CLI, and for the nightly script and the contractor too.

Nobody has to route through anything for it to work. That is the difference, and it is the whole argument.

## What you get on top

Your Terraform keeps working. Same HCL, same providers, same plan, because [choudoufu](/compare/choudoufu-and-terraform-state/) is a build of OpenTofu rather than a wrapper around it.

Handing a team its own slice becomes a permissions change. No state surgery, no repository reshuffle, no maintenance window.

An approved plan cannot drift into a different one. The apply re-reads the live system, compares it against what was approved, and stops if anything moved.

## One stack reading another, with no copy in between

Cross-stack wiring is what the category sells hardest. One stack's outputs feed the next, held in their store and ordered by their runner, with the product keeping the two in step.

There is nothing to keep in step. A stack that needs another stack's VPC or role reads the live resource directly, filtered by the ownership tags every managed resource already carries. No stored copy of an ID, no output block to maintain, and no scraping one stack's state file for another stack's input. Reading state across stacks is refused outright, because a value copied out of a state file can be wrong and a value read off the resource cannot.

So a dependency cannot go stale. Change the producer and the consumer's next plan reads what is actually there, which is the same thing anyone with the console would see.

## The pipeline is derived, not maintained

The workflow files are generated from the same declarations that describe the deploy, and a guard compares every committed file against what the generator emits, byte for byte. Regenerating a clean tree changes nothing, and a stale one fails the build. The job names your branch protection requires come out of those declarations rather than out of a YAML file somebody has to remember to update.

It runs on your GitHub, GitLab or Forgejo, and the approvals are commits in your repository. Nothing is hosted here, so there is no seat to buy and no account to lose access to.

## The honest part

Intentius is a consultancy that gives its tools away, so the answer is sometimes no. choudoufu is AWS only and experimental. If you are on Azure or GCP, or you want one hosted thing your whole company logs into, buy the product.

If your problem is that the guardrail stops at the edge of the tool, [get in touch](/contact/).
