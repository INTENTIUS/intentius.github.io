---
title: "Intentius"
lede: "The creators of choudoufu and chant"
sub: "Our tools are free. Need help?"
problems:
  - title: "A Terraform estate nobody wants to inherit"
    body: "One state file, many teams, and a migration project every time the org chart moves. We move ownership onto the resources as tags, so handover is an IAM grant and a split is a tag rewrite."
    link: "Estate migration and carving"
    href: "/work/#estate-migration-and-carving"
  - title: "Agents that need production access"
    body: "You want an agent to run drift checks, nightly applies and migrations, and you do not want to hand it a cloud key. We set it up so the program makes the call and never holds the credential."
    link: "Agents against real infrastructure"
    href: "/work/#agents-against-real-infrastructure"
  - title: "A pipeline per forge, hand-maintained"
    body: "GitHub today, GitLab or Forgejo tomorrow, and a YAML file that drifts on each. We generate the pipeline from one typed project, with the approval gate as a fact in git."
    link: "Generated CI with gates"
    href: "/work/#generated-ci-with-gates"
---

<div class="tool">
  <div class="name">choudoufu</div>
  <p>OpenTofu plus identity hooks. Each AWS resource carries its identity as two tags, written on the create call and read back on every plan. The state file becomes a cache you are allowed to lose, and your IAM decides who may change what. Twenty claims, each with a smoke scenario you can run. <a href="https://intentius.io/choudoufu/">Docs</a> · <a href="/compare/choudoufu-and-terraform-state/">How it compares</a></p>
</div>
<div class="tool">
  <div class="name">chant</div>
  <p>A type system for operations. Infrastructure is declared in a statically evaluable subset of TypeScript and folded to the platform's own spec before anything runs. Seventeen lexicons, one project, generated pipelines, durable gates. <a href="https://intentius.io/chant/">Docs</a> · <a href="/compare/chant-cdk-and-pulumi/">How it compares</a></p>
</div>
<div class="tool">
  <div class="name">the standard</div>
  <p>Both tools are rated, alongside the alternatives, against the fourteen properties of <a href="https://accessibleops.net/">Accessible Ops</a>. That scorecard is the bar we consult against. <a href="/accessible-ops/">Read down a column</a></p>
</div>
