import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  ShieldCheck, 
  BarChart3, 
  FileCheck, 
  FileText,
  ArrowRight,
  Scale
} from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Transparency & Traceability",
    description: "Complete visibility into mineral origin, ownership chain, and transaction history from mine to export.",
  },
  {
    icon: ShieldCheck,
    title: "Reduction in Illegal Mining",
    description: "Verified miner registration and production tracking helps identify and reduce illegal mining activities.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Monitoring",
    description: "Live dashboards showing mining activities, compliance status, and production volumes across regions.",
  },
  {
    icon: FileCheck,
    title: "Licensing Automation",
    description: "Digital license management, renewal tracking, and automated compliance verification systems.",
  },
  {
    icon: FileText,
    title: "Reporting & Audits",
    description: "Comprehensive reporting tools for regulatory audits, tax collection, and policy decision support.",
  },
];

const ForRegulators = () => {
  return (
    <Layout>
      <SEO
        title="For Regulators"
        description="Beldium empowers regulators with transparency, traceability, and real-time monitoring tools for Africa's mineral sector oversight and compliance enforcement."
        canonical="/regulators"
        keywords="mining regulators Africa, mineral trade oversight, mining compliance monitoring, regulatory technology mining"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-navy-light">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium text-primary-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-mineral-teal" />
              Government Partnership Program
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              For Compliance & Regulatory Partners
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Strengthen environmental standards, regulatory enforcement, and ethical mining practices through digitized infrastructure. 
              Collaborate within a system built for traceability, reporting, and structured mineral trade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/coming-soon">
                  Join as a Compliance Partner
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/compliance">
                  <Scale className="mr-2 h-5 w-5" />
                  View Compliance Infrastructure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Regulatory Oversight Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Digitized tools designed for transparent mineral sector governance and structured compliance enforcement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="card-elevated p-6"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <capability.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="card-elevated p-8 md:p-12 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Compliance Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore our network of compliance partners strengthening legal, regulatory, environmental, 
              and trade compliance across the lithium value chain.
            </p>
            <Button size="lg" asChild>
              <Link to="/compliance">
                View Compliance Partners
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Real-Time Regulatory Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Monitor mining activities across Nigeria with comprehensive, digitized oversight 
                designed for structured regulatory governance.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">Live production volume tracking by state and region</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">License compliance monitoring and automated alerts</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground">Export documentation and revenue tracking</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/coming-soon">
                  Access the Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-border flex items-center justify-center">
              <div className="text-center p-8">
                <BarChart3 className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Join Africa's Structured Lithium Infrastructure
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Participate in building transparent, compliant, and verified mineral trade infrastructure for the continent.
          </p>
          <Button size="lg" variant="secondary" asChild className="group">
            <Link to="/coming-soon">
              Join as a Compliance Partner
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForRegulators;
