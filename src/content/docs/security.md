---
title: "Access and data"
description: "The read-only access the Intentius audit asks for, what the tools can do with it, and where the results go."
---

The audit reads your estate and changes nothing in it. This page lists the access we ask for and what happens to what we read.

## The access we ask for

You create each grant for the audit and remove it when we finish.

| Where | Grant | Notes |
| --- | --- | --- |
| AWS | A role our account assumes with an external ID, carrying the managed `ReadOnlyAccess` and `SecurityAudit` policies | Add a deny for data reads such as S3 objects, Secrets Manager values and SSM parameters if you want one. A few resource types, such as load balancer trust stores, need one of those reads to be listed and then drop out of the inventory |
| GCP | `roles/viewer` and `roles/iam.securityReviewer` on the projects in scope | The audit does not enable any API on your projects |
| Azure | `Reader` on the subscriptions in scope | |
| Kubernetes | A ServiceAccount bound to the built-in `view` ClusterRole, with a token that expires after 24 hours | `view` does not include Secrets |
| Repositories | Read access to the IaC and CI repos in scope | |

If you would rather grant nothing, we run the same tools on your machine over a screen share and you keep every output.

## What the tools can do with it

The audit runs [behold](https://intentius.io/behold/) and [chant](https://intentius.io/chant/). Both are open source, so your team can read the code that touches your accounts.

The cloud inventory is read-only in the code as well as in the role. Every request it sends is checked against an allowlist before it leaves the machine, and any other call is refused. The allowed calls are:

- AWS Cloud Control `ListResources`
- an Azure Resource Graph query
- GCP Cloud Asset `searchAllResources`
- Kubernetes `GET` discovery and list calls, never `watch`

Nothing is installed in your accounts or clusters, and no state file moves.

behold can also deploy, using whatever credentials it was started with. The audit starts it with the read-only grants above, so a deploy has nothing to write with.

## Where the results go

The tools run on our machine, or on yours in a screen share. The graphs, the inventory and the drift report are written to local files on that machine and sent to you at the end of the audit, with the recorded walkthrough.

Questions from your security team are welcome before the scoping call. Write to [info@intentius.io](mailto:info@intentius.io).
