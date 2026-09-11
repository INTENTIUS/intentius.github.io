---
title: "Intentius"
lede: "Infrastructure consulting"
sub: "The tools are free. Need help?"
intro: "Intentius helps teams whose Terraform has outgrown one shared state file, and teams that want an agent doing routine operations without holding a production key. The two tools it built for that work are free."
problems:
  - title: "Your Terraform has outgrown one shared state file"
    body: "Teams stepping on each other, and a handover that takes a migration project. Ownership moves onto the resources themselves, so splitting the work or handing it over is a permissions change rather than a rewrite."
    link: "How that works"
    href: "/work/#estate-migration-and-carving"
  - title: "You want an agent doing ops, without giving it the keys"
    body: "The agent runs your routine operations as a program with approval gates, and it never sees the production credential."
    link: "How that works"
    href: "/work/#agents-against-real-infrastructure"
  - title: "Every service has its own deploy pipeline"
    body: "Describe each one as data, and the deploy and its CI are generated. The hundredth service costs the same as the first."
    link: "How that works"
    href: "/work/#releases-as-compile-targets"
bridge: "Already on Spacelift or Terraform Cloud? Those put an approval loop around Terraform, and it only governs people who go through the loop. Intentius puts the record of who owns what where your cloud's own permissions can read it, so the rule holds for anyone with a key. [The comparison.](/compare/control-planes/)"
---

<div class="tool">
  <div class="name">choudoufu</div>
  <p>A build of OpenTofu, the open-source Terraform, that writes who owns each resource onto the resource itself. The state file stops being the thing everyone fights over. <a href="https://intentius.io/choudoufu/">Docs</a> · <a href="/compare/choudoufu-and-terraform-state/">Compare</a></p>
</div>
<div class="tool">
  <div class="name">chant</div>
  <p>Infrastructure written as typed code and checked before anything runs. It deploys to the three big clouds and Kubernetes, and generates the pipelines for you. <a href="https://intentius.io/chant/">Docs</a> · <a href="/compare/chant-cdk-and-pulumi/">Compare</a></p>
</div>
<div class="tool">
  <div class="name">the standard</div>
  <p>Both are rated against the fourteen properties of <a href="https://accessibleops.net/">Accessible Ops</a>, alongside the tools you already use. <a href="/accessible-ops/">The scorecard</a></p>
</div>
