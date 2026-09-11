---
title: "chant, CDK and Pulumi"
summary: "All three take TypeScript. Only one refuses to run it."
weight: 20
---

CDK and Pulumi execute your program, and the output depends on what ran. [chant](https://intentius.io/chant/) accepts only the subset of TypeScript whose value is fixed by literals and references, and folds it to the platform's own spec with no execution. The [subset is a spec](https://github.com/INTENTIUS/typescript-as-data) with a conformance suite.

| Property | chant | CDK | Pulumi |
|---|---|---|---|
| Source predicts the spec | Folds, no run | Synthesizes, but a lookup can shift it | Engine preview only |
| Check at the keystroke | Type and fold diagnostics | Types; correctness needs synth and plan | Types; correctness needs a preview |
| Secrets by name | By reference, never held | Program can read them at runtime | Core stores them in state |
| Blast radius | Owned-only by marker, removal cap | Stack and IAM; refs widen reach | Stack and IAM; refs widen reach |
| Reversible before risky | Destructive gated, saga rollback | Auto-rollback, no gate | No rollback |
| Escalate the judgment | Durable gate | In the CI pipeline | Paid add-on |
| Live system is the truth | No state store | CloudFormation's record | Its own state |
| Adopt in place | Spec stays native | `cdk import`, then rewrite | `pulumi import`, then rewrite |
| Manage only what you declare | Deletes gated on a marker | Absence deletes | Absence deletes |
| Verify the artifact | SBOM, provenance, signature | CI add-ons | CI add-ons |

The [scorecard](/accessible-ops/) has the reasoning behind each mark.

## What they have that chant does not

Reach and years. A resource a lexicon does not model cannot be declared yet. A compatibility page is filed and not written. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2318" >}}

## Fixed, and still open

Until 0.63 an approval did not name the plan it approved. It does now. {{< status kind="shipped" date="2026-09-09" href="https://github.com/INTENTIUS/chant/pull/2338" >}} An agent on MCP can still answer its own gate. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2384" >}} No scale figure beyond a 200-entity bench. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2317" >}}
