import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
  ShieldCheck,
  Handshake,
  BadgeCheck,
  LineChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const marketplaceBenefits = [
  {
    icon: BadgeCheck,
    title: "Verified Mineral Buyers",
    description:
      "Every buyer on the Beldium lithium marketplace is KYC-verified, giving miners confidence they're trading with legitimate, structured demand.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow-Backed Transactions",
    description:
      "Secure escrow protects both sides of a lithium trading platform transaction until quality and quantity are confirmed at delivery.",
  },
  {
    icon: LineChart,
    title: "Transparent Spot Pricing",
    description:
      "Live pricing data replaces opaque, negotiated deals, supporting structured mineral trade across Africa's lithium marketplace.",
  },
  {
    icon: Handshake,
    title: "Direct Miner-to-Buyer Trade",
    description:
      "Verified cooperatives connect straight to global buyers, cutting out exploitative middlemen from the value chain.",
  },
];

const howItWorks = [
  "Miners list verified production volumes with quality grades and location data",
  "Buyers browse structured listings and request samples or documentation",
  "Compliance checks confirm licensing and export eligibility automatically",
  "Both parties agree terms and funds move into secure escrow",
  "Logistics coordination handles transport from mine site to the buyer's terminal",
  "Escrow releases once delivery and quality are confirmed",
];

const Marketplace = () => {
  return (
    <Layout>
      <SEO
        title="Lithium Marketplace"
        description="Buy and sell lithium from Africa on Beldium's verified marketplace: KYC-checked buyers, escrow-backed trades, and transparent pricing for structured mineral trade."
        canonical="/marketplace"
        keywords="lithium marketplace Africa, verified mineral buyers, lithium trading platform, structured mineral trade, buy lithium from Africa"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Beldium Lithium Marketplace",
            description:
              "A verified marketplace connecting African lithium miners with KYC-checked global buyers through escrow-backed, transparent transactions.",
            provider: {
              "@type": "Organization",
              name: "Beldium Inc",
              url: "https://beldium.com",
            },
            areaServed: "Africa",
            serviceType: "Mineral Trading Marketplace",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary to-navy-light">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium text-primary-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-mineral-teal" />
              Structured Trade Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              A Verified Marketplace for African Lithium
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Buy lithium from Africa or sell into global demand through a lithium trading
              platform built on verified identities, escrow protection, and transparent
              pricing, no exploitative middlemen required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/coming-soon">
                  Join the Marketplace
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/features">Explore Core Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Trade on Beldium's Marketplace
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured mineral trade infrastructure designed for verified mineral buyers
              and miners across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceBenefits.map((benefit) => (
              <div key={benefit.title} className="card-elevated p-6 text-center">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            How the Marketplace Works
          </h2>
          <div className="max-w-2xl mx-auto">
            {howItWorks.map((step, i) => (
              <div key={i} className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Get Early Access to the Marketplace
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Be among the first verified miners and buyers trading on Africa's structured
            lithium marketplace.
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
              <Link to="/compliance">View Compliance Standards</Link>
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
            <Button variant="outline" asChild><Link to="/features">Core Features</Link></Button>
            <Button variant="outline" asChild><Link to="/miners">For Miners</Link></Button>
            <Button variant="outline" asChild><Link to="/buyers">For Buyers</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;
