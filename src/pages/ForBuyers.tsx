import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Lock,
  ArrowRight
} from "lucide-react";
import lithiumOreImage from "@/assets/lithium-ore.jpg";

const benefits = [
  {
    icon: BarChart3,
    title: "Grade Consistency",
    description: "Access standardized quality testing and reporting for consistent ore grades.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Supply",
    description: "Source from KYC-verified miners with complete traceability documentation.",
  },
  {
    icon: Lock,
    title: "Anti-Illegal Mining Protection",
    description: "All suppliers are verified against illegal mining databases and compliance requirements.",
  },
  {
    icon: FileText,
    title: "Standardized Export Documentation",
    description: "Complete export permits, customs documentation, and logistics support.",
  },
];

const features = [
  "KYC-controlled seller pool",
  "Real-time pricing transparency",
  "Secure escrow transactions",
  "Quality certification partners",
  "Cross-border logistics support",
  "Regulatory compliance tracking",
];

const ForBuyers = () => {
  return (
    <Layout>
      <SEO
        title="For Buyers"
        description="Source verified African lithium through Beldium. Grade consistency, full traceability, anti-illegal mining protection, and standardized export documentation."
        canonical="/buyers"
        keywords="buy African lithium, verified lithium supply, lithium sourcing Africa, mineral buyers, OEM lithium supply"
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={lithiumOreImage}
            alt="Lithium ore sample"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-sm font-medium text-primary-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-mineral-teal" />
              Verified African Lithium Supply
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              For Buyers
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Source verified lithium from Africa's most compliant supply chain. 
              Grade consistency, full traceability, and anti-illegal mining protection guaranteed.
            </p>
            
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Request Verified Supply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Source Through Beldium
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A credible, compliant sourcing pipeline for OEMs and off-takers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-elevated p-8 flex gap-6"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Complete Supply Chain Visibility
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform provides end-to-end transparency from mine to port, 
                ensuring every transaction meets international compliance standards.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request Verified Supply
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with our team to discuss your lithium sourcing requirements 
                and access our verified supplier network.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForBuyers;
