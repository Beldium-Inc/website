import bloomfieldLogo from "@/assets/partners/bloomfield-logo.png";
import esgConsultingLogo from "@/assets/partners/esg-consulting-logo.png";
import auditFirmLogo from "@/assets/partners/audit-firm-logo.png";
import tradeComplianceLogo from "@/assets/partners/trade-compliance-logo.png";

export interface CompliancePartner {
  id: string;
  name: string;
  type: string;
  country: string;
  yearsExperience: string;
  logo: string;
  yearEstablished: string;
  officeLocation: string;
  authorizedRep: boolean;
  leadContact: {
    name: string;
    title: string;
  };
  sectorsCovered: string[];
  regulatoryInterfaces: {
    category: string;
    bodies: string[];
  }[];
  complianceFunctions: string[];
  roleInBeldium: string;
}

export const complianceCategories = [
  {
    id: "legal",
    title: "Legal & Regulatory",
    icon: "Scale",
    description: "Mining licenses, permits, and regulatory compliance",
  },
  {
    id: "environmental",
    title: "Environmental & ESG",
    icon: "Leaf",
    description: "Environmental impact assessments and sustainability",
  },
  {
    id: "trade",
    title: "Trade & Export",
    icon: "Globe",
    description: "Export documentation and international trade compliance",
  },
  {
    id: "corporate",
    title: "Corporate Governance",
    icon: "Building2",
    description: "Corporate structuring and governance frameworks",
  },
  {
    id: "community",
    title: "Community & Social Impact",
    icon: "Users",
    description: "Community engagement and social responsibility",
  },
  {
    id: "finance",
    title: "Financial Compliance",
    icon: "Wallet",
    description: "Financial regulations and reporting standards",
  },
];

export const compliancePartners: CompliancePartner[] = [
  {
    id: "bloomfield",
    name: "Bloomfield Law Practice",
    type: "Law Firm",
    country: "Nigeria",
    yearsExperience: "15+ years",
    logo: bloomfieldLogo,
    yearEstablished: "2007",
    officeLocation: "Ikoyi, Lagos",
    authorizedRep: true,
    leadContact: {
      name: "Ayodele Oni",
      title: "Partner, Chair, Energy & Natural Resources",
    },
    sectorsCovered: [
      "Mining & Solid Minerals",
      "Lithium, Battery Minerals",
      "Renewable Energy",
      "Environmental Protection & EIAs",
      "Export & Trade Compliance",
      "ESG & Sustainability Reporting",
      "Corporate Governance",
      "Community & Social Impact",
    ],
    regulatoryInterfaces: [
      {
        category: "Mining & Environment",
        bodies: [
          "Ministry of Solid Minerals Development",
          "Ministry of Mines & Steel Development",
          "Mining Cadastre Office",
          "Federal Ministry of Environment",
          "NESREA",
        ],
      },
      {
        category: "Energy",
        bodies: ["NUPRC", "NMDPRA"],
      },
      {
        category: "Trade & Corporate",
        bodies: [
          "Nigeria Customs Service",
          "NEPC",
          "CAC",
          "Nigerian Ports Authority",
        ],
      },
      {
        category: "Finance",
        bodies: ["CBN", "SEC"],
      },
      {
        category: "State Level",
        bodies: ["State Ministries & Agencies"],
      },
    ],
    complianceFunctions: [
      "Licensing & Cadastre Compliance",
      "Environmental Impact Assessments",
      "ESG & Sustainability Reporting",
      "Export & Trade Documentation",
      "Corporate Structuring & Governance",
      "Community & Social Impact Frameworks",
      "Regulatory Dispute Support",
    ],
    roleInBeldium:
      "Bloomfield Law Practice serves as a Compliance & Regulatory Anchor Partner within the Beldium ecosystem, supporting legal, environmental, and trade compliance across the lithium value chain.",
  },
  {
    id: "greenearth-esg",
    name: "GreenEarth ESG Consulting",
    type: "ESG Consultant",
    country: "Nigeria",
    yearsExperience: "10+ years",
    logo: esgConsultingLogo,
    yearEstablished: "2014",
    officeLocation: "Victoria Island, Lagos",
    authorizedRep: true,
    leadContact: {
      name: "Adaeze Nwosu",
      title: "Managing Partner, Sustainability",
    },
    sectorsCovered: [
      "Environmental Protection & EIAs",
      "ESG & Sustainability Reporting",
      "Mining & Solid Minerals",
      "Renewable Energy",
      "Community & Social Impact",
    ],
    regulatoryInterfaces: [
      {
        category: "Mining & Environment",
        bodies: [
          "Federal Ministry of Environment",
          "NESREA",
          "Ministry of Solid Minerals Development",
        ],
      },
      {
        category: "International Standards",
        bodies: ["GRI Standards", "TCFD", "UN Global Compact"],
      },
    ],
    complianceFunctions: [
      "Environmental Impact Assessments",
      "ESG & Sustainability Reporting",
      "Carbon Footprint Analysis",
      "Sustainability Strategy Development",
      "Community Engagement Programs",
    ],
    roleInBeldium:
      "GreenEarth ESG Consulting provides environmental and sustainability expertise, ensuring all mining operations meet international ESG standards and local environmental regulations.",
  },
  {
    id: "primeaudit",
    name: "PrimeAudit Associates",
    type: "Auditor",
    country: "Nigeria",
    yearsExperience: "20+ years",
    logo: auditFirmLogo,
    yearEstablished: "2004",
    officeLocation: "Central Business District, Abuja",
    authorizedRep: true,
    leadContact: {
      name: "Chukwuemeka Okafor",
      title: "Senior Partner, Audit & Assurance",
    },
    sectorsCovered: [
      "Financial Audit & Assurance",
      "Mining & Solid Minerals",
      "Corporate Governance",
      "Regulatory Compliance",
    ],
    regulatoryInterfaces: [
      {
        category: "Finance",
        bodies: ["CBN", "SEC", "FIRS"],
      },
      {
        category: "Trade & Corporate",
        bodies: ["CAC", "Financial Reporting Council"],
      },
    ],
    complianceFunctions: [
      "Financial Audit & Assurance",
      "Regulatory Compliance Audits",
      "Internal Control Reviews",
      "Tax Compliance",
      "Corporate Governance Reviews",
    ],
    roleInBeldium:
      "PrimeAudit Associates provides independent audit and assurance services, ensuring financial transparency and regulatory compliance across the Beldium ecosystem.",
  },
  {
    id: "tradegate",
    name: "TradeGate Compliance",
    type: "Trade Consultant",
    country: "Nigeria",
    yearsExperience: "12+ years",
    logo: tradeComplianceLogo,
    yearEstablished: "2012",
    officeLocation: "Apapa, Lagos",
    authorizedRep: true,
    leadContact: {
      name: "Folake Adeyemi",
      title: "Director, Trade & Export Compliance",
    },
    sectorsCovered: [
      "Export & Trade Compliance",
      "Mining & Solid Minerals",
      "Customs & Tariffs",
      "International Trade",
    ],
    regulatoryInterfaces: [
      {
        category: "Trade & Corporate",
        bodies: [
          "Nigeria Customs Service",
          "NEPC",
          "Nigerian Ports Authority",
          "SON",
        ],
      },
      {
        category: "International",
        bodies: ["AfCFTA Secretariat", "WTO", "ICC"],
      },
    ],
    complianceFunctions: [
      "Export & Trade Documentation",
      "Customs Compliance",
      "Tariff Classification",
      "Trade Agreement Navigation",
      "Cross Border Logistics",
    ],
    roleInBeldium:
      "TradeGate Compliance facilitates seamless export processes, ensuring all mineral shipments meet international trade standards and Nigerian export regulations.",
  },
];
