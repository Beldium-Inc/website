import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Lock, Database, Shield, Server, CheckCircle, ArrowRight, Eye, Globe } from "lucide-react";

const layers = [
  {
    icon: Database,
    title: "Data Ownership Model",
    description: "Beldium operates on the principle that mineral data belongs to the participants who generate it. Miners own their production data. Governments access aggregate intelligence. Buyers receive verified supply data through permissioned channels.",
    points: [
      "Miner-owned production records with full export control",
      "Government access to anonymized, aggregate sector data",
      "Buyer access limited to verified, permissioned supply data",
      "No third-party data monetization without participant consent",
    ],
  },
  {
    icon: Shield,
    title: "Security Framework",
    description: "Enterprise-grade security architecture protecting Africa's most sensitive mineral intelligence, from mine-level GPS coordinates to trade flow data.",
    points: [
      "End-to-end encryption for all data in transit and at rest",
      "Role-based access control with multi-factor authentication",
      "Regular third-party security audits and penetration testing",
      "Incident response and data breach notification protocols",
    ],
  },
  {
    icon: Server,
    title: "Infrastructure Architecture",
    description: "Built for reliability, scalability, and African data residency. Beldium's infrastructure is designed to serve the continent's growing mineral economy.",
    points: [
      "Cloud-native architecture with African data residency options",
      "API-first design for institutional integration",
      "Real-time data processing for production and compliance monitoring",
      "Offline-capable mobile applications for remote mine sites",
    ],
  },
  {
    icon: Eye,
    title: "Public Transparency",
    description: "Beldium believes institutional trust requires public accountability. Key governance, compliance, and operational data is made available for public scrutiny.",
    points: [
      "Published governance framework and compliance standards",
      "Open methodology for miner verification and grading",
      "Public reporting on platform participation and trade volumes",
      "Transparent pricing methodology and fee structures",
    ],
  },
];

const DataArchitecture = () => {
  return (
    <Layout>
      <SEO
        title="Data Architecture & Security"
        description="Beldium's data architecture, ownership model, and security framework for Africa's lithium supply chain. Built for transparency, sovereignty, and institutional trust."
        canonical="/data-architecture"
        keywords="mining data architecture, mineral data security, data sovereignty Africa, lithium data infrastructure, mining technology security"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Beldium Data Architecture & Security",
            "description": "Data ownership model, security framework, and infrastructure architecture for Africa's lithium supply chain.",
            "url": "https://beldium.com/data-architecture",
            "publisher": { "@type": "Organization", "name": "Beldium Inc" },
          })}
        </script>
      </Helmet>

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              Technical Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Data Architecture & Security
            </h1>
            <p className="text-xl text-muted-foreground">
              How Beldium structures, secures, and governs mineral data across Africa's lithium supply chain, 
              with ownership, transparency, and sovereignty at the core.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide space-y-12">
          {layers.map((layer) => (
            <div key={layer.title} className="card-elevated p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <layer.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{layer.title}</h2>
                  <p className="text-muted-foreground mb-6">{layer.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {layer.points.map((point) => (
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
      </section>

      <section className="section-padding bg-secondary/50 text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Our Data Practices?</h2>
          <p className="text-muted-foreground mb-8">
            Beldium is committed to full transparency in how we handle mineral data. 
            Contact us for detailed technical documentation or institutional inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild><Link to="/contact">Contact Our Team <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            <Button variant="outline" asChild><Link to="/governance">Governance Framework</Link></Button>
            <Button variant="outline" asChild><Link to="/partnerships">Partnerships</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DataArchitecture;
