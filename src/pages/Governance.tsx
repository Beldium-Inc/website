import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Shield, Scale, Globe, Eye, FileText, Users, CheckCircle, ArrowRight } from "lucide-react";

const frameworks = [
  {
    icon: Scale,
    title: "Regulatory Alignment",
    description: "Beldium's infrastructure is designed to align with Nigerian mining regulations, OECD Due Diligence Guidance, and international mineral trade standards.",
    points: [
      "Nigerian Minerals and Mining Act compliance",
      "OECD Due Diligence Guidance for Responsible Supply Chains",
      "EU Conflict Minerals Regulation readiness",
      "Extractive Industries Transparency Initiative (EITI) alignment",
    ],
  },
  {
    icon: Globe,
    title: "Data Sovereignty Model",
    description: "African mineral data stays under African governance. Beldium's architecture ensures that data generated from African mineral resources is owned, controlled, and governed by African institutions.",
    points: [
      "Data residency within African jurisdictions",
      "Government access to aggregate mining intelligence",
      "Community-level data ownership for artisanal miners",
      "Transparent data sharing agreements with all stakeholders",
    ],
  },
  {
    icon: Shield,
    title: "Corporate Governance Standards",
    description: "Beldium operates under ISO-aligned governance standards, ensuring accountability, transparency, and ethical decision-making across all operations.",
    points: [
      "ISO 37000 Corporate Governance alignment",
      "ISO 37301 Compliance Management systems",
      "ISO 31000 Risk Management framework",
      "Independent board oversight and advisory structures",
    ],
  },
  {
    icon: Eye,
    title: "Transparency Framework",
    description: "Every transaction, verification, and compliance check within the Beldium ecosystem is auditable, creating an institutional-grade transparency layer.",
    points: [
      "Full audit trail for all mineral transactions",
      "Public compliance status for verified participants",
      "Regulatory reporting automation",
      "Stakeholder access to aggregated industry data",
    ],
  },
];

const Governance = () => {
  return (
    <Layout>
      <SEO
        title="Governance Framework"
        description="Beldium's governance framework covers regulatory alignment, data sovereignty, corporate governance standards, and institutional transparency for Africa's lithium sector."
        canonical="/governance"
        keywords="mining governance Africa, data sovereignty minerals, regulatory compliance mining, corporate governance lithium, OECD due diligence mining"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Beldium Governance Framework",
            "description": "Regulatory alignment, data sovereignty, and institutional governance standards for Africa's lithium supply chain.",
            "url": "https://beldium.com/governance",
            "publisher": { "@type": "Organization", "name": "Beldium Inc" },
            "about": [
              { "@type": "Thing", "name": "Mining Governance" },
              { "@type": "Thing", "name": "Data Sovereignty" },
              { "@type": "Thing", "name": "Regulatory Compliance" },
            ],
            "spatialCoverage": { "@type": "Place", "name": "Africa" },
          })}
        </script>
      </Helmet>

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              Institutional Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Governance Framework
            </h1>
            <p className="text-xl text-muted-foreground">
              Beldium operates under a governance framework designed for regulatory alignment, 
              data sovereignty, and institutional accountability across Africa's mineral economy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-12">
            {frameworks.map((framework) => (
              <div key={framework.title} className="card-elevated p-8 md:p-10">
                <div className="flex items-start gap-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <framework.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-3">{framework.title}</h2>
                    <p className="text-muted-foreground mb-6">{framework.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {framework.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50 text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Institutional Collaboration</h2>
          <p className="text-muted-foreground mb-8">
            Beldium welcomes collaboration with regulatory bodies, international institutions, 
            and governance organizations working to strengthen Africa's mineral economy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link to="/contact">Partner with Beldium <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            <Button variant="outline" asChild><Link to="/compliance">Compliance Infrastructure</Link></Button>
            <Button variant="outline" asChild><Link to="/data-architecture">Data Architecture</Link></Button>
            <Button variant="outline" asChild><Link to="/partnerships">Partnerships</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Governance;
