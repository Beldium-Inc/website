import { Link } from "react-router-dom";
import { Pickaxe, Building2, Landmark, ShieldCheck, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: Pickaxe,
    title: "For Lithium Miners",
    subtitle: "Structured Onboarding",
    description: "Beldium provides structured onboarding, compliance visibility, and access to trusted global buyers. Move from fragmented sales to transparent, organized participation in Africa's lithium value chain.",
    link: "/miners",
    color: "bg-earth-gold/10 text-earth-gold",
  },
  {
    icon: Building2,
    title: "For OEMs & Off-takers",
    subtitle: "Verified Supply Chain",
    description: "Source verified lithium with grade consistency, traceability, and standardized documentation through a digitized, transparent value chain.",
    link: "/buyers",
    color: "bg-mineral-teal/10 text-mineral-teal",
  },
  {
    icon: ShieldCheck,
    title: "For Compliance & Regulatory Partners",
    subtitle: "Digitized Infrastructure",
    description: "Strengthen environmental standards, regulatory enforcement, and ethical mining practices through digitized infrastructure. Collaborate within a system built for traceability, reporting, and structured mineral trade.",
    link: "/compliance",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Landmark,
    title: "For Government Regulators",
    subtitle: "Oversight & Transparency",
    description: "Real-time compliance monitoring, transparency, and automated licensing oversight for national-scale mineral sector governance.",
    link: "/regulators",
    color: "bg-accent/10 text-accent",
  },
];

export function WhoWeServe() {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building verified, structured infrastructure for every stakeholder in Africa's mineral economy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <Link
              key={audience.title}
              to={audience.link}
              className="group card-elevated p-6 flex flex-col h-full"
            >
              <div className={`h-12 w-12 rounded-xl ${audience.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <audience.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {audience.title}
              </h3>
              <p className="text-sm text-accent font-medium mb-3">
                {audience.subtitle}
              </p>
              <p className="text-sm text-muted-foreground flex-1">
                {audience.description}
              </p>
              
              <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
