import { Users, MapPinned, TrendingDown } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "1,730",
    label: "Pilot Miners",
    description: "First cohort of verified miners being onboarded to the platform",
  },
  {
    icon: MapPinned,
    value: "7",
    label: "Nigerian States",
    description: "Coverage across the initial lithium corridor in Nigeria",
  },
  {
    icon: TrendingDown,
    value: "30%",
    label: "Friction Reduction",
    description: "Expected reduction in trade friction for pilot participants",
  },
];

export function ImpactMetrics() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Building the foundation for Africa's sustainable mineral economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
            >
              <div className="h-14 w-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                <metric.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              
              <p className="text-5xl sm:text-6xl font-bold mb-2">
                {metric.value}
              </p>
              <p className="text-xl font-semibold text-primary-foreground/90 mb-3">
                {metric.label}
              </p>
              <p className="text-primary-foreground/60">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
