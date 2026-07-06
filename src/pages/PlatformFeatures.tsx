import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  UserCheck, 
  BarChart3, 
  ShoppingCart, 
  Shield, 
  Landmark, 
  Truck, 
  Plug,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Miner Registry & Verification",
    description: "Complete onboarding and verification system for artisanal and small-scale miners.",
    details: [
      "KYC + state mining licenses verification",
      "Cooperative onboarding & management",
      "GIS location mapping & tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Real-time Production Reporting",
    description: "Track and report mining operations with transparent data collection.",
    details: [
      "Daily output logs",
      "Ore grade reporting",
      "Compliance status monitoring",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Digital Marketplace",
    description: "Connect verified buyers and sellers through secure, transparent transactions.",
    details: [
      "Transparent spot prices",
      "Buyer verification system",
      "Secure escrow transactions",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance System",
    description: "Standardized testing and certification for consistent product quality.",
    details: [
      "Sample testing protocols",
      "Standardized reporting",
      "Certification partners network",
    ],
  },
  {
    icon: Landmark,
    title: "Regulatory Dashboard",
    description: "Real-time oversight tools for government agencies and regulators.",
    details: [
      "Mineral traceability",
      "Anti-illegal mining controls",
      "Export documentation tracking",
    ],
  },
  {
    icon: Truck,
    title: "Cross-border Logistics",
    description: "End-to-end logistics support from mine site to export terminal.",
    details: [
      "Verified haulage partners",
      "Secure warehousing",
      "Export terminal connections",
    ],
  },
  {
    icon: Plug,
    title: "API Integrations",
    description: "Seamless connectivity with essential third-party services.",
    details: [
      "Payment gateway integrations",
      "Identity verification APIs",
      "Customs & export documentation",
    ],
  },
];

const PlatformFeatures = () => {
  return (
    <Layout>
      <SEO
        title="Platform Features"
        description="Explore Beldium's comprehensive platform: miner verification, production reporting, compliance tracking, marketplace, logistics, and API integrations."
        canonical="/platform"
        keywords="mining platform features, mineral trade technology, lithium marketplace, miner verification system, mining compliance platform"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Platform Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive infrastructure powering Africa's lithium supply chain, 
              from mine to market.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 border border-border/50 flex items-center justify-center">
                    <feature.icon className="h-24 w-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Join the growing network of miners, buyers, and regulators using Beldium.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/miners">Join as Miner</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <Link to="/buyers">Source Lithium</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlatformFeatures;
