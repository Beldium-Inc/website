import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Building, Check, User, MapPin, Calendar, BadgeCheck } from "lucide-react";
import { CompliancePartner } from "./ComplianceData";

interface PartnerDetailProps {
  partner: CompliancePartner;
  onBack: () => void;
  onViewOtherPartners: () => void;
}

export function PartnerDetail({ partner, onBack, onViewOtherPartners }: PartnerDetailProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-8">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Partners List
          </Button>
        </div>

        {/* Partner Identity */}
        <div className="card-elevated p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="h-24 w-24 rounded-xl bg-secondary/50 flex items-center justify-center overflow-hidden flex-shrink-0">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-20 object-contain"
                />
              ) : (
                <Building className="h-12 w-12 text-muted-foreground" />
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {partner.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Organization Type</p>
                    <p className="font-medium text-foreground">{partner.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Year Established</p>
                    <p className="font-medium text-foreground">{partner.yearEstablished}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Office Location</p>
                    <p className="font-medium text-foreground">{partner.officeLocation}, {partner.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Authorized Partner Rep</p>
                    <p className="font-medium text-foreground">{partner.authorizedRep ? "Yes" : "No"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:col-span-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Lead Contact</p>
                    <p className="font-medium text-foreground">{partner.leadContact.name}</p>
                    <p className="text-sm text-muted-foreground">{partner.leadContact.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors Covered */}
        <div className="card-elevated p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Sectors Covered</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {partner.sectorsCovered.map((sector) => (
              <div key={sector} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <span className="text-foreground">{sector}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Active advisory and regulatory support.</p>
        </div>

        {/* Regulatory Bodies Worked With */}
        <div className="card-elevated p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Regulatory Interfaces</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partner.regulatoryInterfaces.map((group) => (
              <div key={group.category}>
                <h4 className="font-medium text-primary mb-3">{group.category}</h4>
                <ul className="space-y-2">
                  {group.bodies.map((body) => (
                    <li key={body} className="text-sm text-muted-foreground">
                      {body}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Functions */}
        <div className="card-elevated p-8 mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Compliance Functions Covered</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {partner.complianceFunctions.map((func) => (
              <li key={func} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{func}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Role in Beldium */}
        <div className="card-elevated p-8 mb-8 bg-primary/5">
          <h3 className="text-xl font-semibold text-foreground mb-4">Role in Beldium Ecosystem</h3>
          <p className="text-muted-foreground leading-relaxed">
            {partner.roleInBeldium}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onViewOtherPartners}>
            View Other Compliance Partners
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button onClick={onBack}>
            Back to Compliance Overview
            <ArrowLeft className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
