---
title: "chant, CDK and Pulumi"
summary: "All three let you write infrastructure in TypeScript. Only one of them refuses to run it."
weight: 20
---

CDK and Pulumi are programs. You write TypeScript, the tool executes it, and what comes out depends on what ran: a context lookup, an environment variable, a call into the SDK. CDK synthesizes a CloudFormation template you can read afterwards. Pulumi keeps its own state and shows you a preview.

[chant](https://intentius.io/chant/) is source. It accepts the subset of TypeScript whose value is fully determined by literals, constants and references, and folds that source to the platform's own spec, CloudFormation or a Kubernetes manifest or a Fly machine config, with no module execution. A call-as-value is not refused by a lint rule; it is unrepresentable. The [specification](https://github.com/INTENTIUS/typescript-as-data) and a conformance suite are public.

That one difference decides most of the rows below.

## Row by row

| Property | chant | CDK | Pulumi |
|---|---|---|---|
| The source predicts the platform spec | Folds to native spec, no run | Synthesizes a template, but a lookup can shift it when it runs | Runs the program; no static spec, only an engine preview |
| The same check at the keystroke | Type and fold diagnostics, human and agent alike | TypeScript types check; infra correctness needs synth and a plan | TypeScript types check; infra correctness needs a preview |
| Every change is one diff in one place | One typed change set against live | `cdk deploy` | `pulumi up` |
| Secrets by name, least privilege | By reference, never held, keyless signing | Refs and IAM, but the program can read secrets at runtime | ESC gives references, but core stores secrets in state |
| Bounded blast radius | Owned-only by marker, a per-environment removal cap, a blast-radius graph | Stack and IAM boundaries; refs can widen reach | Stack and IAM boundaries; refs can widen reach |
| Reversible before risky | Reversible runs ungated; destructive gated with saga rollback | CloudFormation auto-rollback; no gate on an irreversible change | No rollback; re-apply a prior state |
| Escalate the judgment | A durable approval gate that survives a crash | Approval in the CI pipeline | Approval via a paid add-on |
| The live system is the truth | No state store | No tool-side copy; CloudFormation's own record | Keeps its own authoritative state |
| Adopt in place | Imports a template or a live estate; the spec stays native | `cdk import`, then rewrite as code | `pulumi import`, then rewrite as code |
| Manage only what you declare | Deletes gated on an ownership marker | Absence in the template deletes | Absence in the program deletes |
| Verify the artifact | SBOM, provenance and a signature at synthesis, verified at the deploy gate | CI add-ons | CI add-ons |

The [full scorecard](/accessible-ops/) has the reasoning behind each mark and the two rows this table leaves out.

## What CDK and Pulumi have that chant does not

Reach and years. CDK covers every CloudFormation resource and Pulumi covers every provider Terraform does. chant covers seventeen platforms through its lexicons, and a resource a lexicon does not model is not something you can declare yet. The [lexicon list](https://intentius.io/chant/) is the honest boundary, and a compatibility page in the shape of the one above is filed and not yet written. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2318" >}}

## Where we are waiting

- The human approval gate records who approved and when, but does not yet bind the identity of the plan being approved. Approve, edit the root, re-run, and the edited change applies. The exit-3 check in choudoufu closes the plan-to-apply window; the approval-to-re-run window is open. {{< status kind="open" href="https://github.com/INTENTIUS/chant/issues/2300" >}}
- The largest synthetic benchmark is 200 resources. There is no measured scale figure for chant comparable to choudoufu's 745. {{< status kind="documented" >}}
