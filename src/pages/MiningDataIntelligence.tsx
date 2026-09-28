import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, BarChart3, Database, ShieldCheck, FileText, Eye } from "lucide-react";

const capabilities = [
  { icon: Database, title: "Production Data Capture", description: "GPS-tagged, timestamped production records from verified mine sites across Africa's lithium belt." },
  { icon: BarChart3, title: "Market Intelligence", description: "Real-time pricing data, demand signals, and trade flow analytics for African minerals." },
  { icon: Eye, title: "Regulatory Monitoring", description: "Track compliance status, license expirations, and regulatory changes across jurisdictions." },
  { icon: FileText, title: "Export Documentation Analytics", description: "Automated tracking of permits, customs documentation, and shipping records." },
];

const MiningDataIntelligence = () => {
  return (
    <Layout>
      <SEO
        title="Mining Data & Intelligence Platform"
        description="Beldium's mining data infrastructure provides real-time production intelligence, market analytics, and compliance monitoring for Africa's lithium sector."
        canonical="/resources/mining-data-intelligence"
        keywords="mining data platform, mineral intelligence Africa, lithium production data, mining analytics, African mining technology"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mining Data & Intelligence for Africa",
            "description": "Beldium's mining data infrastructure provides real-time production intelligence and compliance monitoring.",
            "url": "https://beldium.com/resources/mining-data-intelligence",
            "publisher": { "@type": "Organization", "name": "Beldium Inc", "url": "https://beldium.com" },
            "author": { "@type": "Person", "name": "David Obi", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "Beldium Inc" } },
            "datePublished": "2025-01-01",
            "dateModified": "2026-04-08",
          })}
        </script>
      </Helmet>

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/resources" className="inline-flex items-center text-sm text-primary hover:underline mb-4">← Back to Resources</Link>
            <span className="block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary">
                Data Infrastructure
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mining Data & Intelligence for Africa
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Structured, verified data from Africa's mineral value chain, powering decisions 
              for miners, buyers, regulators, and investors.
            </p>
            <Button size="lg" asChild>
              <a href="https://app.beldium.com/">Access the Platform <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Data Capabilities</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            From mine-level production tracking to macro market intelligence, Beldium captures and structures 
            the data that powers Africa's mineral economy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-elevated p-8 flex gap-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <cap.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Why Mining Data Matters</h2>
            <p className="text-muted-foreground mb-4">
              Africa's solid minerals sector is valued at over $3 trillion, yet most of the supply chain 
              operates without structured data. This creates information asymmetry, enables exploitation, 
              and blocks institutional investment.
            </p>
            <p className="text-muted-foreground mb-6">
              Beldium's data infrastructure closes this gap by capturing production, compliance, and trade data 
              at the source, then making it accessible to stakeholders who need it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild><Link to="/platform">Explore Platform Features</Link></Button>
              <Button variant="outline" asChild><Link to="/regulators">For Regulators</Link></Button>
            </div>
          </div>
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Data-Driven Decisions</h3>
            <ul className="space-y-3">
              {[
                "Miners gain visibility into fair market pricing",
                "Buyers verify supply origin and quality before purchase",
                "Regulators monitor compliance in real time",
                "Investors assess market opportunity with verified data",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-4">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><Link to="/resources/lithium-supply-chain">Lithium Supply Chain</Link></Button>
            <Button variant="outline" asChild><Link to="/miners">For Miners</Link></Button>
            <Button variant="outline" asChild><Link to="/buyers">For Buyers</Link></Button>
            <Button variant="outline" asChild><Link to="/about">About Beldium</Link></Button>
            <Button variant="outline" asChild><Link to="/governance">Governance</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MiningDataIntelligence;
