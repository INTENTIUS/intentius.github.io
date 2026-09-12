---
title: "The control planes and orchestration wrappers"
summary: "If you are on Spacelift, Terraform Cloud or something like them, this is the page."
weight: 30
---

Changes go through their loop, someone approves each one, and nothing runs unreviewed. That governs everyone who uses the loop. The on-call engineer at 2am has a key, and so do the nightly script and the contractor from last month.

## The record goes where the cloud can read it

Every resource choudoufu creates is stamped with its owner, on the resource. Your permissions read that stamp, so a staging role is denied by AWS rather than by a policy engine in front of it. The rule holds without anyone routing through anything.

## No copy between stacks

A stack needing another's VPC reads the live resource, filtered by tags every resource already carries. Reading state across stacks is refused, so a dependency cannot go stale.

## The pipeline is derived

Workflow files are generated from the declarations that describe the deploy, and a guard holds every committed file to what the generator emits, byte for byte. The job names your branch protection requires are derived rather than maintained.

## Where it does not fit

choudoufu is AWS only and experimental. If you are on Azure or GCP, or you want one hosted thing your whole company logs into, buy the product.

If the guardrail stopping at the edge of the tool is your problem, [get in touch](/contact/).
