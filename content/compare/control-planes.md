---
title: "The control planes and orchestration wrappers"
summary: "If you are on Spacelift, Terraform Cloud or something like them, this is the page."
weight: 30
---

They all sell the same shape. Your changes go through their loop, a person or a policy approves each one, and nothing runs unreviewed. It works, and it is worth paying for if the loop is the only way anyone touches your infrastructure.

It never is. Someone has a key. The on-call engineer fixing an outage at 2am has a key, the script that has run every night since 2019 has a key, and the contractor you onboarded last month has a key. None of them go through the loop, and the loop cannot see them.

That is the gap we build for.

## Put the record where the cloud can read it

Every resource we create is stamped with who owns it, in the cloud, on the resource itself. Your own permissions read that stamp. A staging role that may not touch production gets denied by AWS rather than by a policy engine sitting in front of AWS. The rule holds for the console and the CLI, and for the nightly script and the contractor too.

Nobody has to route through anything for it to work. That is the difference, and it is the whole argument.

## What you get on top

Your Terraform keeps working. Same HCL, same providers, same plan, because [choudoufu](/compare/choudoufu-and-terraform-state/) is a build of OpenTofu rather than a wrapper around it.

Handing a team its own slice becomes a permissions change. No state surgery, no repository reshuffle, no maintenance window.

An approved plan cannot drift into a different one. The apply re-reads the live system, compares it against what was approved, and stops if anything moved.

Your pipeline is yours. It runs on your GitHub, GitLab or Forgejo, and the approvals are commits in your repository. Nothing is hosted by us, so there is no seat to buy and no account to lose access to.

## The honest part

We are a consultancy that gives its tools away, so we will tell you when the answer is no. choudoufu is AWS only and experimental. If you are on Azure or GCP, or you want one hosted thing your whole company logs into, buy the product.

If your problem is that the guardrail stops at the edge of the tool, [talk to us](/contact/).
