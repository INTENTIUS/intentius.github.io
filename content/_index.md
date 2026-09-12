---
title: "Intentius"
lede: "Infrastructure consulting"
sub: "The tools are free. Need help?"
intro: "Handing a team its own infrastructure should take an afternoon, not a quarter. Letting an agent run routine operations should not mean giving it a production key."
problems:
  - title: "Splitting a team off takes a quarter"
    body: "One file records who owns what, so every reorganisation is a migration project. In a published migration that work alone took 38% of the engineering weeks."
    link: "How that works"
    href: "/work/#estate-migration-and-carving"
  - title: "An agent doing ops, without the keys"
    body: "It runs routine operations behind approval gates. Confused or compromised, it cannot leak a key it was never given."
    link: "How that works"
    href: "/work/#agents-against-real-infrastructure"
  - title: "The hundredth service costs as much as the first"
    body: "Each brings its own deploy pipeline, a near copy of the last. Describe the component as data and both the deploy and its CI are generated."
    link: "How that works"
    href: "/work/#releases-as-compile-targets"
bridge: "Already on Spacelift or Terraform Cloud? Those put an approval loop around Terraform, and it only governs people who go through the loop. Intentius puts the record of who owns what where your cloud's own permissions can read it. [The comparison.](/compare/control-planes/)"
---

<div class="tool">
  <div class="name">choudoufu</div>
  <p>A build of OpenTofu that writes who owns each resource onto the resource itself. Twenty-six real Terraform configurations run through its test suite every release. <a href="https://intentius.io/choudoufu/">Docs</a> · <a href="/compare/choudoufu-and-terraform-state/">Compare</a></p>
</div>
<div class="tool">
  <div class="name">chant</div>
  <p>Infrastructure as typed code, checked before anything runs. Deploys to the three big clouds and Kubernetes, and generates the pipelines. <a href="https://intentius.io/chant/">Docs</a> · <a href="/compare/chant-cdk-and-pulumi/">Compare</a></p>
</div>
<div class="tool">
  <div class="name">no lock-in</div>
  <p>One command hands the estate back as an ordinary Terraform state file, and your HCL never changed. Both tools are open source and neither has a pricing page.</p>
</div>
