import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  MapPin,
  ShieldCheck,
  LineChart,
  Store,
  Truck,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const coreFeatures = [
  {
    icon: MapPin,
    title: "Mineral Traceability",
    description:
      "Every batch of lithium is tracked from mine site to export terminal, giving buyers and regulators a verified chain of custody across Africa's mineral supply chain.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Scoring",
    description:
      "Automated compliance verification scores each miner and shipment against licensing, environmental, and export standards, so partners can trade with confidence.",
  },
  {
    icon: Store,
    title: "Verified Marketplace Access",
    description:
      "A structured lithium marketplace connects verified miners directly with vetted buyers, removing the informal intermediaries that erode fair pricing.",
  },
  {
    icon: LineChart,
    title: "Real-Time Production Data",
    description:
      "Live dashboards surface production volumes, quality grades, and pricing trends, powering data-driven decisions across the mineral value chain.",
  },
  {
    icon: FileCheck,
    title: "Digital Licensing & Documentation",
    description:
      "License renewals, KYC records, and export paperwork are digitized and centralized, cutting the friction out of regulatory compliance.",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
    description:
      "Structured, end-to-end logistics infrastructure moves minerals from mine to port with full documentation and verified haulage partners.",
  },
];

const Features = () => {
  return (
    <Layout>
      <SEO
        title="Core Features"
        description="Explore Beldium's core features: lithium mineral traceability, compliance scoring, a verified marketplace, and real-time mining data infrastructure for Africa."
        canonical="/features"
        keywords="lithium supply chain platform, mining compliance software, mineral traceability technology, digitized mining infrastructure, African lithium technology platform"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Beldium Platform Features",
            description:
              "Core infrastructure features for Africa's lithium supply chain: mineral traceability, compliance scoring, a verified marketplace, and real-time production data.",
            provider: {
              "@type": "Organization",
              name: "Beldium Inc",
              url: "https://beldium.com",
            },
            areaServed: "Africa",
            serviceType: "Mineral Supply Chain Software Platform",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              Core Platform Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Built for Africa's Structured Lithium Economy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Beldium's digitized mining infrastructure gives miners, buyers, and regulators
              the traceability, compliance, and marketplace tools needed to trade lithium
              transparently across the African lithium technology platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link to="/coming-soon">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/marketplace">Explore the Marketplace</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="card-elevated p-8">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="card-elevated p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Want the Full Platform Breakdown?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how miner verification, production reporting, and API integrations fit
              together across Beldium's complete mining compliance software.
            </p>
            <Button size="lg" asChild>
              <Link to="/platform">
                View Platform Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Trade on Verified Infrastructure?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Join miners, buyers, and regulators building Africa's structured lithium future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/coming-soon">Join the Waitlist</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link to="/contact">Talk to Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="section-padding bg-background text-center">
        <div className="container-wide">
          <h2 className="text-2xl font-bold text-foreground mb-6">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><Link to="/">Home</Link></Button>
            <Button variant="outline" asChild><Link to="/marketplace">Marketplace</Link></Button>
            <Button variant="outline" asChild><Link to="/compliance">Compliance</Link></Button>
            <Button variant="outline" asChild><Link to="/about">About</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
