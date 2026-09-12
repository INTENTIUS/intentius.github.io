---
title: "The control planes and orchestration wrappers"
summary: "If you are on Spacelift, Terraform Cloud or something like them, this is the page."
weight: 30
---

Ownership means two different things, and the category sells the one it cannot deliver.

One is accountability. Who gets paged, who takes the blame, which team owns the outcome. No vendor settles that for you, and none of them can.

The other is identity. A record on the resource of which team created it and under what name. That one is buyable. Terraform has nowhere to keep it, so inheriting an estate means inheriting a state file and a hope.

The loop they sell governs everyone who goes through the loop. The on-call engineer at 2am has a key, and so do the nightly script and the contractor from last month.

## The record goes where the cloud can read it

Every resource choudoufu creates is stamped with its owner, on the resource. Your permissions read that stamp, so a staging role is denied by AWS rather than by a policy engine in front of it. The rule holds without anyone routing through anything.

## No copy between stacks

A stack needing another's network reads the live resource, filtered by tags every resource already carries. Nothing is copied, so nothing goes stale. The alternative keeps the link inside the vendor's platform, where nobody reading your repository can see that it exists.

## The pipeline is derived

Workflow files are generated from the declarations that describe the deploy, and a guard holds every committed file to what the generator emits, byte for byte. The job names your branch protection requires are derived rather than maintained.

## Where it does not fit

choudoufu is AWS only and experimental. If you are on Azure or GCP, or you want one hosted thing your whole company logs into, buy the product.

If the guardrail stopping at the edge of the tool is your problem, [get in touch](/contact/).
