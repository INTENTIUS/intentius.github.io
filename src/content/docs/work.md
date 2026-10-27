---
title: "Work"
description: "What I do for teams, one section per kind of job."
---

Everything I build runs in your CI, under your accounts, and stays yours.

## Estate migration and carving

A large estate keeps its OpenTofu code and runs it under [choudoufu](https://intentius.io/choudoufu/), which gives each resource its own record and an owner tag. Splitting a team off then becomes a tag rewrite and a permissions policy. It runs on AWS and Kubernetes with more on the way, and [plunge](https://intentius.io/plunge/) does the same for a Pulumi estate.

## Adding terragucci to more repos

<span id="moving-from-another-runner"></span>terragucci starts on one repo and plans there while your current runner keeps applying. Each repo switches when your team is ready, and HCP Terraform and Spacelift can [keep running beside it](/compare/terraform-platforms/).

## Rollout

I add terragucci to your repos, with the cloud roles and approvals your team needs. It arrives as a pull request you review and merge.

## Agents against real infrastructure

An operation you run by hand becomes a program behind approval gates. Its credential stays outside the machine it runs on.

## Releases as compile targets

Describe a service as data and [chant](https://intentius.io/chant/) compiles its deploy and its pipeline from it.
