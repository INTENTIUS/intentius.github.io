---
title: "chant, CDK and Pulumi"
summary: "All three take TypeScript. Only one refuses to run it."
weight: 20
---

CDK and Pulumi execute your program, so the output depends on what ran. [chant](https://intentius.io/chant/) takes only the subset of TypeScript whose value is fixed by literals and references, and folds it to the platform's own spec without executing anything. The [subset is a spec](https://github.com/INTENTIUS/typescript-as-data) with a conformance suite.

| Property | chant | CDK | Pulumi |
|---|---|---|---|
| Source predicts the spec | Folds, no run | A lookup can shift it | Preview only |
| Check at the keystroke | Type and fold | Needs a plan | Needs a preview |
| Secrets by name | Never held | Read at runtime | Stored in state |
| Blast radius | Owned-only, removal cap | Refs widen reach | Refs widen reach |
| Reversible before risky | Gated, with rollback | No gate | No rollback |
| Escalate the judgment | Durable gate | In the pipeline | Paid add-on |
| Live system is the truth | No state store | CloudFormation's | Its own state |
| Adopt in place | Spec stays native | Import, then rewrite | Import, then rewrite |
| Manage only what you declare | Deletes gated | Absence deletes | Absence deletes |
| Verify the artifact | Signed at synthesis | CI add-ons | CI add-ons |

The [scorecard](/accessible-ops/) has the reasoning behind each mark.
