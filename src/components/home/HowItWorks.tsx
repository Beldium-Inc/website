import { UserCheck, ShoppingCart, Shield } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "Miners Onboard",
    description: "Verified & Registered",
    detail: "Complete KYC verification, cooperative registration, and GIS location mapping for full compliance.",
  },
  {
    icon: ShoppingCart,
    title: "Buyers Source",
    description: "Transparent Pricing & Quality",
    detail: "Access verified supply with standardized quality data, transparent spot prices, and secure transactions.",
  },
  {
    icon: Shield,
    title: "Regulators Oversight",
    description: "Real-time Compliance Dashboard",
    detail: "Monitor mineral traceability, licensing compliance, and export documentation in real-time.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Beldium Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process connecting all stakeholders in Africa's lithium supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-border to-transparent" />
              )}
              
              <div className="card-elevated p-8 h-full transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-5xl font-bold text-muted/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {step.description}
                </p>
                <p className="text-muted-foreground">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
