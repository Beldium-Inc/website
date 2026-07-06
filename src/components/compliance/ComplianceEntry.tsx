import { Button } from "@/components/ui/button";
import { Scale, Leaf, Globe, Building2, Users, Wallet, ArrowRight } from "lucide-react";
import { complianceCategories } from "./ComplianceData";

const iconMap: Record<string, React.ElementType> = {
  Scale,
  Leaf,
  Globe,
  Building2,
  Users,
  Wallet,
};

interface ComplianceEntryProps {
  onViewPartners: () => void;
}

export function ComplianceEntry({ onViewPartners }: ComplianceEntryProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Compliance Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Legal, regulatory, environmental, and trade compliance across the lithium value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceCategories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className="card-elevated p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <IconComponent className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={onViewPartners}>
            View Compliance Partners
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
