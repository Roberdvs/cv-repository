module.exports = {
  name: 'Roberto Devesa Fernández',
  title: 'Platform Engineer',
  facts: {
    'Residence': '<a href="https://maps.app.goo.gl/XoqR6URHaqseBfuM7"><i class="fa fa-home fact-icon"></i>Asturias, Spain</a>',
    'LinkedIn': '<a href="https://www.linkedin.com/in/roberdvs"><i class="fab fa-linkedin fact-icon"></i>roberdvs</a>',
    'GitHub': '<a href="https://github.com/roberdvs"><i class="fab fa-github fact-icon"></i>roberdvs</a>',
    'Email': '<a href="mailto:roberdvs@gmail.com"><i class="fa fa-envelope fact-icon"></i>roberdvs@gmail.com</a>'
  },
  skills: [
    ['Terraform', 100],
    ['Kubernetes', 100],
    ['AWS', 100],
    ['DevOps', 100],
    ['GitOps', 100]
  ],
  positions: [
    {
      title: 'Senior Platform Engineer',
      period: 'Feb 2022 – Present. Remote',
      skills: ['DevOps', 'Terraform', 'Kubernetes', 'AWS', 'EKS'],
      contents: `
Continue leading the evolution and roadmap of the Internal Developer Platform, nurturing a team around it as a tech lead while mentoring colleagues and teams on DevOps, SRE, and full-service ownership practices.

I'm currently working on optimizing cloud costs by moving the vast majority of workloads to ARM architecture.

Goals:
• Optimized infrastructure utilization by migrating from Kubernetes Cluster Autoscaler to Karpenter, reducing costs by 40%.
• Enhanced API performance and reduced infrastructure costs by collaborating with application teams to implement caching policies in our CDN.
• Spearheaded the migration from PagerDuty to BetterUptime for incident response.
• Automated Terraform code quality and security checks using GitHub Actions.
• Deployed an internal JupyterHub platform to provide Jupyter Notebooks for Data Engineers and Data Scientists.
`
    },
    {
      title: 'Platform Engineer',
      period: 'Feb 2021 - Feb 2022. Hybrid',
      skills: ['DevOps', 'Terraform', 'Kubernetes', 'AWS', 'EKS'],
      contents: `
As the company grew to +100 engineers, established the formation of the Platform Engineering Team as the next step in our DevOps journey; a team responsible for promoting DevOps practices at scale and addressing cross-cutting concerns by providing application teams with an Internal Developer Platform that they can leverage to develop, deploy and operate their apps in a self-service fashion.

• Led the creation and evolution of the Kubernetes-based Internal Developer Platform, leveraging AWS EKS, IaC and open source tooling like Rancher, ArgoCD, Harbor, Prometheus, Grafana, ElasticSearch... while integrating Single Sign-on + RBAC.
• Migrated workloads from AWS ECS to AWS EKS, using Helm charts and GitOps practices.
• Architected and implemented a cloud-agnostic solution for running Big Data Spark Jobs on our Kubernetes platform, leveraging the spark-operator, Argo Workflows, and autoscaling capabilities, migrating from a previous AWS EMR setup and reducing vendor lock-in.
• Simplified the company's AWS user management by leveraging AWS SSO and integrating Google Workspace as Identity Provider.
• Improved security posture by integrating AWS WAF.
• Drove infrastructure cost savings through increased use of spot instances.
• Developed opinionated Terraform modules with embedded best practices.
• Led the migration of legacy systems to modern, simpler & more maintainable alternatives, like moving from an in-house VPN solution to Tailscale.
`
    },
    {
      title: 'DevOps Engineer',
      period: 'Nov 2016 - Feb 2021',
      skills: ['DevOps', 'Terraform', 'AWS'],
      contents: `
Being a small company of ~20 people I used to wear many hats without a clearly defined role and help where I could, ranging from office IT to managing cloud infrastructure and everything in between, but I always gravitated more to DevOps-related tasks from which I'd highlight:

• Migrated from Atlassian Bamboo to Jenkins for Continuous Integration; configuring pipelines as code with reusable libraries among projects.
• Integrated new tools like SonarQube into the CI/CD process to improve SDLC.
• Managed cloud resources with Terraform and implemented collaborative IaC workflows using Atlantis.
• Worked on migrating static websites to simpler, cheaper, and more reliable hosting using S3 + CloudFront.
• Containerized applications with Docker and orchestrated deployments with AWS ECS.
• Improved scalability and reliability of backend services by applying SRE practices and leveraging Prometheus, Grafana, and the Elastic Stack.
• Implemented auto-scaling on our backend services to automatically adjust the capacity based on demand.
• Played a key role in scaling infrastructure to support high traffic during major events like Black Friday, while reducing the manual steps involved in the process of dealing with subsequent large-scale events.
• Be part of an on-call rotation, resolving incidents and writing blameless post-mortems, figuring out root causes, and taking action to prevent them from happening again.
`
    }
  ]
};
