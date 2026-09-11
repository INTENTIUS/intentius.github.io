---
title: "chant, CDK and Pulumi"
summary: "All three take TypeScript. Only one refuses to run it."
weight: 20
---

CDK and Pulumi execute your program, and the output depends on what ran. [chant](https://intentius.io/chant/) accepts only the subset of TypeScript whose value is fixed by literals and references, and folds it to the platform's own spec with no execution. It deploys to the three big clouds and Kubernetes from one project. The [subset is a spec](https://github.com/INTENTIUS/typescript-as-data) with a conformance suite.

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

## Where it stands

An approval names the plan it approved. An agent driving chant over MCP can still answer its own gate, and there is no scale figure beyond a synthetic bench. Both are tracked in the open.
