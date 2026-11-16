---
title: "Work with us"
description: "Four offers in the order most teams take them: a read-only audit, a drift lifecycle sprint, a governance sprint and a fractional retainer."
---

Four ways to work with us, in the order most teams take them. Each starts with a 15-minute scoping call so we agree on scope before any work begins.

## Read-only stack audit, $950

Half a day. You see your estate before anyone changes it.

We run [behold](https://intentius.io/behold/) and `chant audit` against your repos, clusters and cloud accounts using read-only access you grant for the session only. That means a cloud role with read-only policies, a Kubernetes `view` role and read access to the repos. No agent is installed and no state file moves.

You get:

- a graph of your Terraform, Pulumi and Kubernetes manifests, read from the files
- a graph of your live cluster, each object with what it references and what references it
- an inventory of each cloud account, with resources no IaC declares marked
- a drift report comparing the live estate to your configuration
- a recorded walkthrough and a 30-day plan in priority order

If you would rather not grant access ahead of time, we run the tools on your machine over a screen share.

[Book a scoping call](/contact/)

## Drift lifecycle sprint, $1,800

One day. The first thing that runs, and it keeps the audit from going stale.

We pair with your lead engineer to add a [chant](https://intentius.io/chant/) lifecycle to the pipelines you already run in GitHub Actions or GitLab. It checks the live estate against your configuration on a schedule and reports drift to your team when someone changes a resource by hand. It works alongside your existing Terraform, OpenTofu or Pulumi.

If the day ends with work left, you get a working lifecycle for part of the estate and written steps for the rest.

[Book a scoping call](/contact/)

## Governance sprint, $2,200

One day, for Terraform or for Pulumi. Teams evaluating Spacelift, HCP Terraform or Pulumi Cloud usually start here.

Terraform and OpenTofu teams get [terragucci](https://intentius.io/terragucci/), and Pulumi teams get [plywood](https://intentius.io/plywood/). Either way, a pull request gets a plan or preview for every stack it touches, changes roll out behind recorded approvals, and every job runs in your own CI under your existing cloud IAM. Where teams share an estate, [choudoufu](https://intentius.io/choudoufu/) or [plunge](https://intentius.io/plunge/) give each resource an owner the platform can check.

The configuration lives in your repos as plain files, and it keeps working after we leave.

[Book a scoping call](/contact/)

## Fractional DevOps retainer, from $8,000 a month

Ongoing. A senior infrastructure engineer for your team, month to month.

A senior DevOps hire costs over $200,000 a year and usually takes months to fill. A retainer starts in the first week and covers the work after the audit. That includes moving IaC and CI/CD onto chant and managing releases. Where it makes sense, we move Terraform resources to native AWS CloudFormation without recreating them.

Everything we build uses open-source tools your team keeps.

[Schedule an intro call](/contact/)

## Running audits for your own clients?

behold and chant are free and open source, and they work inside whatever your client already runs.

On the first day, behold draws a client's Terraform, Pulumi and Kubernetes from read-only access, with nothing to install in their environment. On the second, chant adds a drift lifecycle to their GitHub Actions or GitLab. The jobs run on the client's runners under the client's IAM, so their security team reviews configuration in their own repos and no outside service.

For larger migrations we work alongside you. [Get in touch](/contact/), or start from [behold and chant on GitHub](https://github.com/INTENTIUS).
