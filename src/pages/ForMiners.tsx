import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  ShieldCheck, 
  FileText, 
  Users, 
  ArrowRight,
  BarChart3
} from "lucide-react";
import miningSiteImage from "@/assets/mining-site.jpg";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Buyer Access",
    description: "Connect directly with legitimate, KYC-verified buyers from local and international markets through structured infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Compliance Visibility",
    description: "Gain full transparency into your compliance status, licensing requirements, and documentation within a digitized system.",
  },
  {
    icon: FileText,
    title: "Structured Onboarding",
    description: "Move from fragmented, informal sales to organized, transparent participation in Africa's lithium value chain.",
  },
  {
    icon: Users,
    title: "Transparent Value Chain",
    description: "Participate in a system built for traceability, fair pricing, and verified mineral trade,  eliminating exploitative intermediaries.",
  },
];

const requirements = [
  "Valid government-issued ID (NIN, Voter's Card, or Passport)",
  "Mining cooperative or association membership details",
  "Location coordinates of mining operation (we can assist with GPS mapping)",
  "State mining license or application receipt",
];

const ForMiners = () => {
  return (
    <Layout>
      <SEO
        title="For Miners"
        description="Join Beldium's verified miner network. Access fair pricing, verified buyers, compliance support, and structured onboarding for Africa's lithium miners."
        canonical="/miners"
        keywords="artisanal miners Africa, lithium mining registration, miner verification, fair mineral pricing, Nigerian miners"
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={miningSiteImage}
            alt="Mining operations in Africa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm text-sm font-medium text-primary-foreground mb-6">
              <span className="h-2 w-2 rounded-full bg-mineral-teal animate-pulse" />
              Structured onboarding now open
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              For Lithium Miners
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Beldium provides structured onboarding, compliance visibility, and access to trusted global buyers. 
              Move from fragmented sales to transparent, organized participation in Africa's lithium value chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link to="/coming-soon">
                  Register as a Verified Miner
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Miners Choose Beldium
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participate in a verified, transparent system designed for Africa's mineral future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card-elevated p-6 text-center"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Requirements to Join
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Begin your structured onboarding process. Here's what you need to become a verified participant:
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Enter the System
              </h3>
              <p className="text-muted-foreground mb-6">
                Register as a verified miner on Beldium's digitized infrastructure. 
                Our team will guide you through the structured onboarding process.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full group" asChild>
                  <Link to="/coming-soon">
                    Register as a Verified Miner
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForMiners;
