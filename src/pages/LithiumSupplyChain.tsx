import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle, Globe, ShieldCheck, BarChart3, Truck } from "lucide-react";

const keyPoints = [
  { icon: Globe, title: "African Lithium Origin Tracking", description: "Every kilogram of lithium traced from mine site to export terminal with full chain-of-custody documentation." },
  { icon: ShieldCheck, title: "Compliance-First Infrastructure", description: "Built-in regulatory compliance covering Nigerian mining law, OECD due diligence, and international export standards." },
  { icon: BarChart3, title: "Real-Time Production Intelligence", description: "Live dashboards tracking production volumes, quality grades, and pricing across verified mining cooperatives." },
  { icon: Truck, title: "End-to-End Logistics Coordination", description: "Structured logistics from mine to port, with documentation, customs clearance, and shipping coordination." },
];

const stats = [
  { value: "3T+", label: "Africa's Solid Minerals Market Value" },
  { value: "70%", label: "of Global Lithium Demand Growth by 2030" },
  { value: "50+", label: "Mining Cooperatives in Pipeline" },
];

const LithiumSupplyChain = () => {
  return (
    <Layout>
      <SEO
        title="Africa's Lithium Supply Chain Infrastructure"
        description="Beldium digitizes Africa's lithium supply chain with traceability, compliance, and logistics infrastructure connecting verified miners to global buyers."
        canonical="/resources/lithium-supply-chain"
        keywords="lithium supply chain Africa, African lithium mining, lithium traceability, mineral supply chain infrastructure, Nigerian lithium"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Africa's Lithium Supply Chain Infrastructure",
            "description": "Beldium digitizes Africa's lithium supply chain with traceability, compliance, and logistics infrastructure.",
            "url": "https://beldium.com/resources/lithium-supply-chain",
            "publisher": { "@type": "Organization", "name": "Beldium Inc", "url": "https://beldium.com" },
            "author": { "@type": "Person", "name": "David Obi", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "Beldium Inc" } },
            "datePublished": "2025-01-01",
            "dateModified": "2026-04-08",
            "about": { "@type": "Thing", "name": "African Lithium Supply Chain" },
          })}
        </script>
      </Helmet>

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/resources" className="inline-flex items-center text-sm text-primary hover:underline mb-4">← Back to Resources</Link>
            <span className="block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary">
                Supply Chain Intelligence
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Africa's Lithium Supply Chain, Digitized
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From artisanal mine sites to global battery manufacturers, Beldium provides the infrastructure 
              layer that makes African lithium tradeable, traceable, and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/coming-soon">Join the Infrastructure <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Speak to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {keyPoints.map((point) => (
              <div key={point.title} className="card-elevated p-8 flex gap-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">{point.title}</h2>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            How Beldium Structures the Supply Chain
          </h2>
          <div className="max-w-2xl mx-auto">
            {[
              "Miners register and verify identity, licenses, and cooperative membership",
              "Production data is captured at mine sites with GPS-tagged records",
              "Quality testing and grading standardizes ore classification",
              "Compliance checks run against regulatory requirements automatically",
              "Buyers access verified supply through a structured marketplace",
              "Logistics coordination moves minerals from mine to port with full documentation",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Explore More</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Learn how different stakeholders participate in Africa's structured lithium economy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><Link to="/miners">For Miners</Link></Button>
            <Button variant="outline" asChild><Link to="/buyers">For Buyers</Link></Button>
            <Button variant="outline" asChild><Link to="/regulators">For Regulators</Link></Button>
            <Button variant="outline" asChild><Link to="/platform">Platform Features</Link></Button>
            <Button variant="outline" asChild><Link to="/compliance">Compliance</Link></Button>
            <Button variant="outline" asChild><Link to="/resources/mining-data-intelligence">Mining Data Intelligence</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LithiumSupplyChain;
