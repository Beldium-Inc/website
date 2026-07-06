import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Scale, Globe, Lock, FileText, Users, BarChart3, Database, Eye, ShieldCheck, Truck, CheckCircle, Briefcase } from "lucide-react";

const insightPages = [
  {
    title: "Africa's Lithium Supply Chain, Digitized",
    slug: "lithium-supply-chain",
    description: "From artisanal mine sites to global battery manufacturers, Beldium provides the infrastructure layer that makes African lithium tradeable, traceable, and compliant.",
    tag: "Supply Chain Intelligence",
    keywords: "lithium supply chain Africa, African lithium mining, lithium traceability, mineral supply chain infrastructure, Nigerian lithium",
    points: [
      { icon: Globe, title: "African Lithium Origin Tracking", text: "Every kilogram of lithium traced from mine site to export terminal with full chain-of-custody documentation." },
      { icon: ShieldCheck, title: "Compliance-First Infrastructure", text: "Built-in regulatory compliance covering Nigerian mining law, OECD due diligence, and international export standards." },
      { icon: BarChart3, title: "Real-Time Production Intelligence", text: "Live dashboards tracking production volumes, quality grades, and pricing across verified mining cooperatives." },
      { icon: Truck, title: "End-to-End Logistics Coordination", text: "Structured logistics from mine to port, with documentation, customs clearance, and shipping coordination." },
    ],
    stats: [
      { value: "3T+", label: "Africa's Solid Minerals Market Value" },
      { value: "70%", label: "of Global Lithium Demand Growth by 2030" },
      { value: "50+", label: "Mining Cooperatives in Pipeline" },
    ],
    steps: [
      "Miners register and verify identity, licenses, and cooperative membership",
      "Production data is captured at mine sites with GPS-tagged records",
      "Quality testing and grading standardizes ore classification",
      "Compliance checks run against regulatory requirements automatically",
      "Buyers access verified supply through a structured marketplace",
      "Logistics coordination moves minerals from mine to port with full documentation",
    ],
  },
  {
    title: "Mining Data & Intelligence for Africa",
    slug: "mining-data-intelligence",
    description: "Structured, verified data from Africa's mineral value chain, powering decisions for miners, buyers, regulators, and investors.",
    tag: "Data Infrastructure",
    keywords: "mining data platform, mineral intelligence Africa, lithium production data, mining analytics, African mining technology",
    points: [
      { icon: Database, title: "Production Data Capture", text: "GPS-tagged, timestamped production records from verified mine sites across Africa's lithium belt." },
      { icon: BarChart3, title: "Market Intelligence", text: "Real-time pricing data, demand signals, and trade flow analytics for African minerals." },
      { icon: Eye, title: "Regulatory Monitoring", text: "Track compliance status, license expirations, and regulatory changes across jurisdictions." },
      { icon: FileText, title: "Export Documentation Analytics", text: "Automated tracking of permits, customs documentation, and shipping records." },
    ],
    stats: [
      { value: "$3T+", label: "Africa's Solid Minerals Sector Value" },
      { value: "80%", label: "Informal Supply Chain Operations" },
      { value: "100%", label: "Data Transparency Goal" },
    ],
    steps: [
      "Miners gain visibility into fair market pricing",
      "Buyers verify supply origin and quality before purchase",
      "Regulators monitor compliance in real time",
      "Investors assess market opportunity with verified data",
    ],
  },
];

const guides = [
  {
    title: "Mining License Application Guide",
    description: "Step-by-step guide for obtaining mining licenses in Nigeria.",
    comingSoon: true,
  },
  {
    title: "Export Documentation Checklist",
    description: "Complete checklist for mineral export compliance requirements.",
    comingSoon: true,
  },
  {
    title: "Miner Verification Process",
    description: "Understanding the KYC and verification process for platform onboarding.",
    comingSoon: true,
  },
];

const Resources = () => {
  return (
    <Layout>
      <SEO
        title="Resources"
        description="Access Beldium's lithium supply chain intelligence, mining data insights, compliance guides, and investor materials for Africa's mineral economy."
        canonical="/resources"
        keywords="mining resources, lithium industry reports, mining compliance guides, African mining investment, lithium supply chain data"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Beldium Resources",
            "description": "Lithium supply chain intelligence, mining data insights, compliance guides, and investor materials.",
            "url": "https://beldium.com/resources",
            "publisher": { "@type": "Organization", "name": "Beldium Inc" },
            "mainEntity": insightPages.map((page) => ({
              "@type": "Article",
              "headline": page.title,
              "description": page.description,
              "url": `https://beldium.com/resources/${page.slug}`,
              "publisher": { "@type": "Organization", "name": "Beldium Inc" },
              "author": { "@type": "Person", "name": "David Obi" },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Resources & Intelligence
            </h1>
            <p className="text-xl text-muted-foreground">
              Lithium supply chain intelligence, mining data insights, compliance guides, 
              and institutional materials for Africa's mineral economy.
            </p>
          </div>
        </div>
      </section>

      {/* Insight Pages */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Industry Intelligence
          </h2>
          <p className="text-muted-foreground mb-8">
            Deep dives into Africa's lithium supply chain infrastructure and mining data systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insightPages.map((page) => (
              <Link
                key={page.slug}
                to={`/resources/${page.slug}`}
                className="card-elevated p-8 hover:shadow-lg transition-shadow group"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                  {page.tag}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-muted-foreground mb-4">{page.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Thought Leadership
          </h2>
          <p className="text-muted-foreground mb-8">
            Policy perspectives and strategic analysis on Africa's mineral economy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/resources/data-sovereignty"
              className="card-elevated p-8 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                Policy & Governance
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Data Sovereignty in Africa's Lithium Value Chain
              </h3>
              <p className="text-muted-foreground mb-4">
                Why African nations must own, control, and govern the data generated by their mineral resources, and how Beldium's architecture supports this vision.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/resources/lithium-in-nigeria"
              className="card-elevated p-8 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                Explainer
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Lithium in Nigeria: Where It Is Found, How It Is Mined
              </h3>
              <p className="text-muted-foreground mb-4">
                A guide to Nigeria's lithium-bearing states, the regulatory framework, and the data gaps Beldium is built to close.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link
              to="/resources/infrastructure-gaps"
              className="card-elevated p-8 hover:shadow-lg transition-shadow group"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                Infrastructure Analysis
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Infrastructure Gaps in African Mineral Intelligence
              </h3>
              <p className="text-muted-foreground mb-4">
                Mapping the critical gaps in data, compliance, and logistics infrastructure that prevent Africa's mineral sector from reaching institutional-grade standards.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* BD Briefing Series */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            BD Briefing Series
          </h2>
          <p className="text-muted-foreground mb-8">
            A structured series for Heads of Business Development sourcing verified African lithium supply.
            Cross-published with offers on the Beldium Inc Google Business Profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/resources/business-development-brief"
              className="card-elevated p-8 hover:shadow-lg transition-shadow group border-l-4 border-primary"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary mb-4">
                <Briefcase className="h-3 w-3" /> Volume 1 · Featured Offer
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Verified African Lithium Offtake: A Brief for Heads of Business Development
              </h3>
              <p className="text-muted-foreground mb-4">
                How commercial leads at battery makers, cathode producers, OEMs, and trading houses access
                verified African lithium supply through the Beldium Offtake Access Programme.
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary">
                Read the brief <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Pages */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Institutional Framework
          </h2>
          <p className="text-muted-foreground mb-8">
            Governance, data architecture, and partnership frameworks that underpin Beldium's infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/governance" className="card-elevated p-6 hover:shadow-lg transition-shadow group">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Governance Framework</h3>
              <p className="text-muted-foreground text-sm">Regulatory alignment, data sovereignty, and institutional governance standards.</p>
            </Link>
            <Link to="/data-architecture" className="card-elevated p-6 hover:shadow-lg transition-shadow group">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Data Architecture & Security</h3>
              <p className="text-muted-foreground text-sm">Ownership model, security framework, and public transparency standards.</p>
            </Link>
            <Link to="/partnerships" className="card-elevated p-6 hover:shadow-lg transition-shadow group">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Partnerships & Collaboration</h3>
              <p className="text-muted-foreground text-sm">Partnership pathways for institutions, regulators, and industry stakeholders.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Guides */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Mining Compliance Guides
          </h2>
          <p className="text-muted-foreground mb-8">
            Practical guides for miners and stakeholders navigating compliance requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.title} className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="h-5 w-5 text-primary" />
                  {guide.comingSoon && (
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{guide.title}</h3>
                <p className="text-muted-foreground text-sm">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Materials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="card-elevated p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Investor Materials
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in investing in Africa's lithium future? Contact us for 
              investor materials and pitch deck.
            </p>
            <Button asChild>
              <Link to="/contact">Request Investor Pack</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
