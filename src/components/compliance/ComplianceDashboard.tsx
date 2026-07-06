import { useState } from "react";
import { ComplianceEntry } from "./ComplianceEntry";
import { CompliancePartnersList } from "./CompliancePartnersList";
import { PartnerDetail } from "./PartnerDetail";
import { CompliancePartner } from "./ComplianceData";

type Screen = "entry" | "partners" | "detail";

export function ComplianceDashboard() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("entry");
  const [selectedPartner, setSelectedPartner] = useState<CompliancePartner | null>(null);

  const handleViewPartners = () => {
    setCurrentScreen("partners");
  };

  const handleViewPartner = (partner: CompliancePartner) => {
    setSelectedPartner(partner);
    setCurrentScreen("detail");
  };

  const handleBackToEntry = () => {
    setCurrentScreen("entry");
    setSelectedPartner(null);
  };

  const handleBackToPartners = () => {
    setCurrentScreen("partners");
    setSelectedPartner(null);
  };

  return (
    <>
      {currentScreen === "entry" && (
        <ComplianceEntry onViewPartners={handleViewPartners} />
      )}
      {currentScreen === "partners" && (
        <CompliancePartnersList
          onViewPartner={handleViewPartner}
          onBack={handleBackToEntry}
        />
      )}
      {currentScreen === "detail" && selectedPartner && (
        <PartnerDetail
          partner={selectedPartner}
          onBack={handleBackToPartners}
          onViewOtherPartners={handleBackToPartners}
        />
      )}
    </>
  );
}
