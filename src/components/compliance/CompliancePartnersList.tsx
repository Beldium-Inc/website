import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Building } from "lucide-react";
import { compliancePartners, CompliancePartner } from "./ComplianceData";

interface CompliancePartnersListProps {
  onViewPartner: (partner: CompliancePartner) => void;
  onBack: () => void;
}

export function CompliancePartnersList({ onViewPartner, onBack }: CompliancePartnersListProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Compliance Overview
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Compliance & Regulatory Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our network of trusted partners ensures comprehensive compliance across all operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compliancePartners.map((partner) => (
            <div
              key={partner.id}
              className="card-elevated p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-12 w-12 object-contain"
                    />
                  ) : (
                    <Building className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {partner.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm text-primary font-medium">
                      {partner.type}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {partner.country}
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">
                      {partner.yearsExperience}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onViewPartner(partner)}
                  >
                    View Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
