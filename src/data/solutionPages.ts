export interface LandingPageData {
  slug: string;
  navLabel: string;
  summary: string;
  breadcrumb: string;
  topic: string;
  seoTitle: string;
  description: string;
  keywords: string;
  badge: string;
  h1: string;
  intro: string;
  primaryCta?: string;
  sections: { heading: string; body: string[]; points?: { title: string; text: string }[] }[];
  fieldIntelligence?: boolean;
  faqs: { q: string; a: string }[];
  related: { label: string; href: string; text: string }[];
  closingHeading: string;
  closingText: string;
}

export const solutionPages: LandingPageData[] = [
  {
    slug: "critical-minerals-nigeria",
    navLabel: "Critical Minerals Nigeria",
    summary: "Intelligence and coordination across Nigeria's critical minerals value chain.",
    breadcrumb: "Critical Minerals Nigeria",
    topic: "Critical minerals in Nigeria",
    seoTitle: "Critical Minerals in Nigeria, Mine to Market",
    description:
      "Beldium provides critical minerals intelligence in Nigeria, linking miners, buyers and regulators with traceability, quality control and compliance.",
    keywords: "critical minerals Nigeria, critical minerals intelligence, Nigeria mining ecosystem, mineral value chain Nigeria",
    badge: "Critical Minerals Intelligence",
    h1: "Critical Minerals Intelligence for Nigeria",
    intro:
      "Beldium is a Nigeria-based critical minerals intelligence and digital infrastructure company. We connect the mineral value chain, from mine site to market, so that miners, buyers, regulators and partners work from the same verified information.",
    sections: [
      {
        heading: "Nigeria's Critical Minerals Ecosystem",
        body: [
          "Nigeria holds a range of minerals that matter to the energy transition and modern manufacturing, including lithium bearing pegmatites, tin, columbite and tantalite. Much of this activity is carried out by artisanal and small scale operators spread across several states, often without consistent records.",
          "The result is a fragmented market. Buyers struggle to confirm origin and quality, miners struggle to reach fair buyers, and regulators lack structured visibility. Beldium exists to close these information gaps.",
        ],
      },
      {
        heading: "Coordinating the Full Value Chain",
        body: [
          "Beldium brings each stage of the value chain onto one structured record, so information captured at the mine site stays attached to the material as it moves.",
        ],
        points: [
          { title: "Traceability", text: "Chain-of-custody records that follow material from site to buyer. See mineral traceability." },
          { title: "Quality control", text: "Sampling and accredited laboratory coordination with visible assay results." },
          { title: "Logistics", text: "Pickup, transport visibility and custody events between handoffs." },
          { title: "Compliance", text: "Digital workflows that organise permits, documents and audit trails." },
          { title: "Finance and insurance", text: "Verified records that help financiers and insurers assess transactions." },
          { title: "Processing and export", text: "Handoffs to warehousing, processing and export partners on one record." },
          { title: "Manufacturing linkage", text: "Structured data that downstream manufacturers can rely on." },
          { title: "Marketplace", text: "A trading layer connecting verified supply with credible buyers." },
          { title: "Market intelligence", text: "Aggregated insight into activity, pricing signals and supply readiness." },
        ],
      },
      {
        heading: "Aligning Miners, Buyers and Regulators",
        body: [
          "Miners gain a verified profile and access to buyers. Buyers and offtakers gain origin, quality and custody information before committing. Regulators gain structured visibility that supports oversight and revenue integrity. Partners such as laboratories, logistics operators and financiers plug into the same record.",
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "What are critical minerals in the Nigerian context?", a: "Critical minerals are minerals essential to energy, technology and industrial supply chains where supply risk is a concern. In Nigeria this commonly includes lithium, tin, columbite, tantalite and related minerals found in pegmatite regions." },
      { q: "What does Beldium do in Nigeria's critical minerals sector?", a: "Beldium provides intelligence and digital infrastructure that connects miners, buyers, regulators and service partners, covering verification, traceability, quality coordination, logistics visibility and compliance workflows." },
      { q: "Is Beldium a mining company?", a: "No. Beldium does not operate mines. It is a technology and intelligence company that structures information and coordination across the mineral value chain." },
      { q: "Which minerals does Beldium focus on?", a: "Beldium's current focus is lithium and related critical minerals in Nigeria, with an infrastructure designed to extend to other minerals and African markets." },
      { q: "How can I get started?", a: "Miners, buyers and partners can create an account at app.beldium.com. Regulators and institutions can contact the Beldium team directly." },
    ],
    related: [
      { label: "Lithium in Nigeria", href: "/lithium-nigeria", text: "The Nigerian lithium ecosystem and verified supply." },
      { label: "Mining Intelligence", href: "/mining-intelligence", text: "How Beldium captures and structures mining data." },
      { label: "Platform Features", href: "/platform", text: "The tools behind Beldium's infrastructure." },
      { label: "Compliance Infrastructure", href: "/compliance", text: "Verified compliance partners and workflows." },
      { label: "Governance", href: "/governance", text: "Beldium's governance and regulatory alignment." },
      { label: "Resources", href: "/resources", text: "Explainers and briefings on African minerals." },
    ],
    closingHeading: "Build on Verified Critical Minerals Intelligence",
    closingText: "Join the miners, buyers and partners structuring Nigeria's critical minerals value chain.",
  },
  {
    slug: "lithium-nigeria",
    navLabel: "Lithium Nigeria",
    summary: "Field intelligence, verified miners and traceable lithium supply in Nigeria.",
    breadcrumb: "Lithium Nigeria",
    topic: "Lithium mining in Nigeria",
    seoTitle: "Lithium Nigeria: Verified, Traceable Supply",
    description:
      "Nigeria's lithium ecosystem with Beldium: field intelligence, verified miners, assay coordination, logistics, compliance and connections to credible buyers.",
    keywords: "lithium Nigeria, lithium mining Nigeria, Nigerian lithium supply, lithium buyers Nigeria",
    badge: "Lithium in Nigeria",
    h1: "Lithium in Nigeria, Verified from Site to Buyer",
    intro:
      "Interest in Nigerian lithium has grown quickly, but reliable information has not kept pace. Beldium provides the field intelligence, verification and traceability that turn Nigerian lithium activity into supply that buyers can assess with confidence.",
    sections: [
      {
        heading: "The Nigerian Lithium Ecosystem",
        body: [
          "Lithium bearing pegmatites have been reported across several Nigerian states, and mining activity ranges from artisanal pits to more organised operations. Public, independently verified data on reserves and production remains limited, so Beldium does not publish reserve or output figures.",
          "For a detailed editorial overview of where lithium occurs and the regulatory context, read our explainer on lithium in Nigeria.",
        ],
      },
      {
        heading: "What Beldium Brings to Nigerian Lithium",
        body: ["Each capability below addresses a specific gap between the mine site and the buyer."],
        points: [
          { title: "Field intelligence", text: "Site visits and documentation that record location, operator and context." },
          { title: "Verified miners", text: "Identity and site verification before a miner is presented to buyers." },
          { title: "Traceable supply", text: "Custody records that stay attached to each lot as it moves." },
          { title: "Quality and assay", text: "Sampling and coordination with accredited laboratories, with results visible on the record." },
          { title: "Logistics", text: "Pickup, transport and handoff events captured with timestamps." },
          { title: "Compliance", text: "Organised permits and documents that support lawful trade." },
          { title: "Buyer connectivity", text: "Introductions between verified supply and credible offtakers." },
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "Does Nigeria have lithium?", a: "Yes. Lithium bearing pegmatites have been identified in several Nigerian states. Independently verified reserve and production data is still limited, which is why site level verification and assay testing matter." },
      { q: "How does Beldium verify lithium miners?", a: "Beldium combines identity checks, site documentation from field inspections and supporting records. Verification describes who the miner is and where they operate, grade is confirmed separately through laboratory testing." },
      { q: "Can Beldium confirm the grade of lithium ore?", a: "Beldium does not grade ore itself. It coordinates sampling and testing with accredited third party laboratories and makes the results visible to authorised parties." },
      { q: "How do buyers source lithium through Beldium?", a: "Buyers create an account, share their requirements and review verified supply with quality and custody records before engaging." },
      { q: "Where can I learn more about lithium deposits in Nigeria?", a: "Our resource article on lithium in Nigeria covers deposit regions, mineral types and the regulatory framework in more depth." },
    ],
    related: [
      { label: "Lithium in Nigeria explainer", href: "/resources/lithium-in-nigeria", text: "Deposit regions and regulatory context." },
      { label: "For Miners", href: "/miners", text: "How Nigerian miners join Beldium." },
      { label: "For Buyers", href: "/buyers", text: "How offtakers source verified lithium." },
      { label: "Verified Mineral Supply", href: "/verified-mineral-supply", text: "Connecting verified supply with buyers." },
      { label: "Mineral Quality Control", href: "/mineral-quality-control", text: "Sampling and assay coordination." },
      { label: "Lithium Supply Chain", href: "/resources/lithium-supply-chain", text: "Africa's lithium supply chain, digitized." },
    ],
    closingHeading: "Work with Verified Nigerian Lithium",
    closingText: "Whether you mine, buy or regulate lithium in Nigeria, Beldium gives you a shared, verified record.",
  },
  {
    slug: "mining-intelligence",
    navLabel: "Mining Intelligence",
    summary: "Mining data infrastructure and mineral intelligence for Nigeria and Africa.",
    breadcrumb: "Mining Intelligence",
    topic: "Mining and mineral intelligence",
    seoTitle: "Mining Intelligence for Nigeria and Africa",
    description:
      "Beldium is a mining intelligence and data infrastructure company capturing site data, miner verification, quality, logistics and transactions across Africa.",
    keywords: "mining intelligence Nigeria, mineral intelligence Africa, mining data infrastructure, critical minerals data",
    badge: "Mining Data Infrastructure",
    h1: "Mining Intelligence for Nigeria and Africa",
    intro:
      "Decisions in African mining are often made with incomplete information. Beldium builds the data infrastructure that captures what happens at the mine site and follows it through quality, logistics and trade, creating intelligence that miners, buyers and institutions can use.",
    sections: [
      {
        heading: "What We Capture",
        body: ["Mining intelligence starts with structured, verifiable data captured at the source."],
        points: [
          { title: "Site level information", text: "Location, access, operating context and documentation from field visits." },
          { title: "Miner verification", text: "Identity, operator and site records linked to each participant." },
          { title: "Quality data", text: "Sampling records and accredited laboratory results attached to lots." },
          { title: "Logistics events", text: "Pickup, transport and handoff events with timestamps." },
          { title: "Transactions", text: "Structured records of trades between verified parties." },
          { title: "Traceability", text: "Chain-of-custody linking every stage into one audit trail." },
        ],
      },
      {
        heading: "From Data to Intelligence",
        body: [
          "Captured records are organised into analytics and market intelligence: where verified supply sits, how quality varies, how material moves and where friction occurs. Access is permissioned, so each party sees what is relevant to their role.",
          "This intelligence supports sourcing decisions for buyers, planning for miners and structured oversight for regulators, while data governance follows the principles set out in our data architecture and data sovereignty work.",
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "What is mining intelligence?", a: "Mining intelligence is structured information about mining activity, such as sites, operators, quality, movement and trade, organised so it can support decisions." },
      { q: "Where does Beldium's data come from?", a: "From field inspections and site documentation, participant verification, laboratory results coordinated through the platform, logistics events and transactions recorded on Beldium." },
      { q: "Who can access Beldium's mining intelligence?", a: "Access is permissioned by role. Miners, buyers, regulators and partners see information relevant to their participation." },
      { q: "How is data ownership handled?", a: "Beldium's data architecture is designed around African data sovereignty and clear ownership. See our data architecture page for details." },
      { q: "Does Beldium cover countries beyond Nigeria?", a: "Beldium's operations currently focus on Nigeria, with infrastructure designed to extend across African mineral producing regions." },
    ],
    related: [
      { label: "Mining Data Intelligence", href: "/resources/mining-data-intelligence", text: "Editorial view on resource transparency." },
      { label: "Data Architecture", href: "/data-architecture", text: "Security, ownership and governance." },
      { label: "Data Sovereignty", href: "/resources/data-sovereignty", text: "Why data sovereignty matters in African lithium." },
      { label: "Platform", href: "/platform", text: "The tools behind the intelligence." },
      { label: "Critical Minerals Nigeria", href: "/critical-minerals-nigeria", text: "The wider critical minerals ecosystem." },
      { label: "For Regulators", href: "/regulators", text: "Structured oversight for authorities." },
    ],
    closingHeading: "Decide with Better Mining Data",
    closingText: "Access verified mining intelligence built from the mine site up.",
  },
  {
    slug: "mineral-traceability",
    navLabel: "Mineral Traceability",
    summary: "Mine-to-market chain-of-custody and audit trails for Nigerian minerals.",
    breadcrumb: "Mineral Traceability",
    topic: "Mineral traceability",
    seoTitle: "Mineral Traceability in Nigeria, Mine to Market",
    description:
      "Mine-to-market mineral traceability in Nigeria: site verification, quality control, logistics, processing and export on one chain-of-custody audit trail.",
    keywords: "mineral traceability Nigeria, chain of custody minerals, mine to market traceability, lithium traceability",
    badge: "Mine to Market Traceability",
    h1: "Mineral Traceability in Nigeria, Mine to Market",
    intro:
      "Buyers increasingly need to know where minerals come from and how they were handled. Beldium records each step from mine site to buyer delivery on a single chain-of-custody record, giving every authorised party a clear audit trail.",
    sections: [
      {
        heading: "The Traceability Journey",
        body: ["Each stage adds a timestamped event to the record, linked to the parties involved."],
        points: [
          { title: "1. Site and miner verification", text: "The origin site and operator are documented and verified." },
          { title: "2. Quality control", text: "Samples are taken under custody and tested at accredited laboratories." },
          { title: "3. Logistics", text: "Pickup and transport events are captured with verified operators." },
          { title: "4. Warehousing and processing", text: "Handoffs into storage or processing are recorded against the lot." },
          { title: "5. Export", text: "Export documentation is linked to the same chain-of-custody record." },
          { title: "6. Buyer delivery", text: "Delivery closes the record, giving the buyer the full history." },
        ],
      },
      {
        heading: "Chain-of-Custody, Audit Trail and Compliance Visibility",
        body: [
          "Chain-of-custody means every transfer of responsibility for a lot is recorded, with who, when and where. Together these events form an audit trail that buyers, auditors and regulators can review.",
          "Beldium's traceability supports due diligence expectations such as those described in the OECD guidance for responsible mineral supply chains. It is a tool for visibility, it is not itself a certification, and Beldium does not claim certifications it does not hold.",
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "What is mineral traceability?", a: "Mineral traceability is the ability to follow a mineral lot from its origin through every handling stage to its final buyer, supported by records at each step." },
      { q: "What is chain-of-custody?", a: "Chain-of-custody is the documented sequence of who held responsibility for a lot, when and where, from mine site to delivery." },
      { q: "Is Beldium traceability a certification?", a: "No. Beldium provides traceability records and audit trails that support due diligence. It does not issue or replace third party certifications." },
      { q: "Who can see traceability records?", a: "Authorised parties to a transaction, such as the buyer, relevant partners and, where appropriate, regulators, can view the records relevant to them." },
      { q: "Does traceability cover processing and export?", a: "Yes. Warehousing, processing and export handoffs are recorded against the same lot so the history stays complete." },
    ],
    related: [
      { label: "Mineral Quality Control", href: "/mineral-quality-control", text: "Sampling and assay under custody." },
      { label: "Mining Logistics", href: "/mining-logistics", text: "Custody events during transport." },
      { label: "Mining Compliance", href: "/mining-compliance", text: "Digital compliance workflows." },
      { label: "Governance", href: "/governance", text: "Regulatory alignment and due diligence." },
      { label: "For Buyers", href: "/buyers", text: "Sourcing with full origin visibility." },
      { label: "Lithium Supply Chain", href: "/resources/lithium-supply-chain", text: "Traceability in the lithium supply chain." },
    ],
    closingHeading: "Trace Every Lot from Mine to Market",
    closingText: "Give buyers, auditors and regulators a clear, verifiable history.",
  },
  {
    slug: "mining-compliance",
    navLabel: "Mining Compliance",
    summary: "Digital compliance workflows across mining, logistics, processing and export.",
    breadcrumb: "Mining Compliance",
    topic: "Mining compliance in Nigeria",
    seoTitle: "Mining Compliance in Nigeria, Digitised",
    description:
      "Beldium's digital compliance infrastructure organises records across mining, quality control, logistics, warehousing, processing and export.",
    keywords: "mining compliance Nigeria, mineral export compliance, mining regulatory workflows, digital compliance mining",
    badge: "Digital Compliance",
    h1: "Digital Mining Compliance for Nigeria",
    intro:
      "Compliance in mineral trade depends on the right documents being in the right place at every stage. Beldium turns scattered paperwork into structured digital workflows, so participants can demonstrate lawful, responsible activity.",
    sections: [
      {
        heading: "Compliance Across Every Stage",
        body: ["Beldium organises the records each stage typically requires, linked to the same lot and participants."],
        points: [
          { title: "Mining", text: "Operator identity, site documentation and relevant permits on record." },
          { title: "Quality control", text: "Sampling custody and laboratory reports attached to lots." },
          { title: "Logistics", text: "Verified operators, transport events and movement documentation." },
          { title: "Warehousing", text: "Receipt and storage records at each handoff." },
          { title: "Processing", text: "Input and output records linked to origin lots." },
          { title: "Export", text: "Export documentation connected to the full custody history." },
        ],
      },
      {
        heading: "How It Works with Regulators and Partners",
        body: [
          "Digital records give regulators structured visibility and help participants respond to requests quickly. Beldium works alongside legal, audit and trade compliance partners, listed on our compliance page, and aligns its approach with Nigerian mining law and international due diligence expectations.",
          "Beldium does not grant licences or approvals. It helps participants organise and evidence compliance with the requirements set by the relevant authorities.",
        ],
      },
    ],
    faqs: [
      { q: "What does mining compliance involve in Nigeria?", a: "It generally involves holding the appropriate mineral titles and permits, meeting environmental and community obligations, and documenting lawful movement, sale and export of minerals as required by Nigerian authorities." },
      { q: "Does Beldium issue mining licences?", a: "No. Licences and permits are issued by the relevant government authorities. Beldium helps participants organise and evidence compliance." },
      { q: "How does Beldium help regulators?", a: "It provides structured, permissioned visibility into verified participants, movements and transactions, supporting oversight. See our regulators page." },
      { q: "Which compliance partners does Beldium work with?", a: "Our compliance page lists the legal, audit and trade compliance partners that support the Beldium ecosystem." },
      { q: "Does compliance cover export?", a: "Yes. Export documentation is linked to the lot's custody history so it can be reviewed alongside earlier stages." },
    ],
    related: [
      { label: "Compliance Infrastructure", href: "/compliance", text: "Partners and compliance directory." },
      { label: "For Regulators", href: "/regulators", text: "Oversight tools for authorities." },
      { label: "Governance", href: "/governance", text: "Governance framework and alignment." },
      { label: "Mineral Traceability", href: "/mineral-traceability", text: "Chain-of-custody records." },
      { label: "Mining Logistics", href: "/mining-logistics", text: "Movement documentation." },
      { label: "Data Architecture", href: "/data-architecture", text: "How records are secured." },
    ],
    closingHeading: "Make Compliance Part of the Workflow",
    closingText: "Organise and evidence compliance at every stage of the mineral value chain.",
  },
  {
    slug: "mining-logistics",
    navLabel: "Mining Logistics",
    summary: "Pickup, transport visibility and custody events for mineral movement.",
    breadcrumb: "Mining Logistics",
    topic: "Mineral logistics in Nigeria",
    seoTitle: "Mining and Mineral Logistics in Nigeria",
    description:
      "Mineral logistics in Nigeria with Beldium: pickup coordination, transport visibility, operator verification, custody events and warehouse to buyer handoffs.",
    keywords: "mining logistics Nigeria, mineral logistics Nigeria, mineral transport Nigeria, mine to port logistics",
    badge: "Mineral Logistics",
    h1: "Mining and Mineral Logistics in Nigeria",
    intro:
      "Moving minerals from remote sites to warehouses, processors and buyers is where value and information are often lost. Beldium gives every movement a verified operator, a timestamp and a place on the custody record.",
    sections: [
      {
        heading: "Logistics Visibility, Step by Step",
        body: ["Each movement is recorded as an event on the lot's history."],
        points: [
          { title: "Pickup", text: "Collection from the mine site is coordinated and logged against the lot." },
          { title: "Operator verification", text: "Transport operators are verified before they handle material." },
          { title: "Transport visibility", text: "Movement status is visible to authorised parties." },
          { title: "Custody events", text: "Every handoff records who, when and where." },
          { title: "Warehouse and processing handoffs", text: "Receipts at storage or processing sites are confirmed on record." },
          { title: "Buyer delivery", text: "Delivery confirmation completes the logistics record." },
        ],
      },
      {
        heading: "Why It Matters",
        body: [
          "Structured logistics records reduce disputes over quantity and condition, help buyers plan, and support compliance with movement documentation requirements. They also connect directly to traceability, so logistics is never a gap in the chain-of-custody.",
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "What does Beldium do in mining logistics?", a: "Beldium coordinates and records mineral movement, verifying operators and capturing pickup, transport, handoff and delivery events." },
      { q: "Does Beldium own trucks or warehouses?", a: "Beldium is a technology and coordination layer. Physical transport and storage are provided by verified logistics and warehousing partners." },
      { q: "How are transport operators verified?", a: "Operators provide identity and business information that is checked before they are assigned to handle material through the platform." },
      { q: "Can buyers track a shipment?", a: "Authorised buyers can view the logistics events recorded against their lots, from pickup to delivery." },
      { q: "How does logistics connect to traceability?", a: "Every logistics event is a custody event on the same record, keeping the mine to market history continuous." },
    ],
    related: [
      { label: "Platform Features", href: "/platform", text: "Logistics and coordination tools." },
      { label: "Mineral Traceability", href: "/mineral-traceability", text: "Continuous chain-of-custody." },
      { label: "Verified Mineral Supply", href: "/verified-mineral-supply", text: "Transaction-ready supply." },
      { label: "Partnerships", href: "/partnerships", text: "Become a logistics partner." },
      { label: "For Buyers", href: "/buyers", text: "Delivery visibility for offtakers." },
      { label: "Mining Compliance", href: "/mining-compliance", text: "Movement documentation." },
    ],
    closingHeading: "Move Minerals with Full Visibility",
    closingText: "Coordinate verified logistics from mine site to buyer delivery.",
  },
  {
    slug: "mineral-quality-control",
    navLabel: "Mineral Quality Control",
    summary: "Sampling, accredited lab coordination and visible assay results.",
    breadcrumb: "Mineral Quality Control",
    topic: "Mineral quality control and assay coordination",
    seoTitle: "Mineral Quality Control and Assay in Nigeria",
    description:
      "Mineral quality control in Nigeria: sampling under chain-of-custody, accredited lab coordination, visible assay results and timestamped QC records for buyers.",
    keywords: "mineral quality control Nigeria, mineral testing Nigeria, assay coordination, lithium assay Nigeria",
    badge: "Quality and Assay",
    h1: "Mineral Quality Control and Assay Coordination",
    intro:
      "Quality determines price, and buyers need confidence in the numbers. Beldium coordinates sampling and testing with accredited third party laboratories and keeps the results attached to each lot. Beldium is not itself a laboratory.",
    sections: [
      {
        heading: "How Quality Control Works on Beldium",
        body: ["Quality records are built step by step and linked to the lot's custody history."],
        points: [
          { title: "Sampling", text: "Samples are taken following documented procedures and recorded." },
          { title: "Chain-of-custody", text: "Samples are tracked from collection to the laboratory." },
          { title: "Accredited lab coordination", text: "Testing is carried out by accredited third party laboratories." },
          { title: "Assay result visibility", text: "Results are shared with authorised parties on the record." },
          { title: "Timestamps", text: "Every sampling and testing step is timestamped." },
          { title: "QC records", text: "A complete quality history that supports buyer confidence." },
        ],
      },
      {
        heading: "Visual Inspection Versus Laboratory Testing",
        body: [
          "Field photographs and visual inspection help document a site and a lot, but they cannot confirm grade or composition. Only laboratory analysis of properly handled samples can do that, which is why Beldium separates field documentation from assay results in every record.",
        ],
      },
    ],
    faqs: [
      { q: "Is Beldium an accredited laboratory?", a: "No. Beldium coordinates sampling and testing with accredited third party laboratories and makes their results visible on the platform." },
      { q: "Why does sample chain-of-custody matter?", a: "If a sample cannot be traced from collection to the lab, its results cannot be reliably linked to the lot. Custody records protect the integrity of assay results." },
      { q: "Can photos confirm mineral grade?", a: "No. Photos and visual inspection provide context only. Grade and composition must be confirmed through laboratory analysis." },
      { q: "Who sees assay results?", a: "Results are visible to authorised parties such as the miner and prospective or contracted buyers." },
      { q: "Which minerals can be tested?", a: "Testing depends on the laboratory partner's accreditation scope. Beldium's current focus is lithium and related critical minerals." },
    ],
    related: [
      { label: "Mineral Traceability", href: "/mineral-traceability", text: "Quality within the custody record." },
      { label: "Verified Mineral Supply", href: "/verified-mineral-supply", text: "Quality data for offtake." },
      { label: "For Buyers", href: "/buyers", text: "Buy with quality confidence." },
      { label: "For Miners", href: "/miners", text: "Show buyers verified quality." },
      { label: "Compliance Infrastructure", href: "/compliance", text: "Partners across the ecosystem." },
      { label: "Lithium Nigeria", href: "/lithium-nigeria", text: "Quality in Nigerian lithium." },
    ],
    closingHeading: "Trade on Verified Quality",
    closingText: "Attach accredited laboratory results to every lot you sell or buy.",
  },
  {
    slug: "verified-mineral-supply",
    navLabel: "Verified Mineral Supply",
    summary: "Connecting verified miners and supply with credible buyers and offtakers.",
    breadcrumb: "Verified Mineral Supply",
    topic: "Verified mineral suppliers and offtake in Nigeria",
    seoTitle: "Verified Mineral Suppliers in Nigeria",
    description:
      "Beldium connects verified mineral and lithium suppliers in Nigeria with credible buyers and offtakers, backed by quality data and traceability.",
    keywords: "verified mineral suppliers Nigeria, lithium suppliers Nigeria, mineral offtake Nigeria, lithium offtake",
    badge: "Verified Supply and Offtake",
    h1: "Verified Mineral Supply and Offtake in Nigeria",
    intro:
      "Finding reliable mineral suppliers in Nigeria is difficult, and so is finding serious buyers. Beldium connects verified miners and supply with credible buyers and offtakers, with the quality and traceability information both sides need before they transact.",
    primaryCta: "Register as Supplier or Buyer",
    sections: [
      {
        heading: "What Makes Supply Verified",
        body: ["Verification on Beldium is built from several independent layers."],
        points: [
          { title: "Miner verification", text: "Identity, operator and site records checked and documented." },
          { title: "Field documentation", text: "Site inspections that record location and context." },
          { title: "Quality data", text: "Accredited laboratory results attached to lots." },
          { title: "Traceability", text: "Chain-of-custody from site to delivery." },
          { title: "Compliance records", text: "Relevant documents organised and reviewable." },
          { title: "Transaction readiness", text: "Supply presented with the information buyers need to decide." },
        ],
      },
      {
        heading: "For Buyers and Offtakers",
        body: [
          "Buyers share volume, specification and timing requirements, then review verified supply with its quality and custody history. Beldium does not publish live inventory or named suppliers publicly; matching happens on the platform between registered, verified parties.",
          "Offtake discussions can be supported by our business development briefing series for heads of business development evaluating African supply.",
        ],
      },
    ],
    fieldIntelligence: true,
    faqs: [
      { q: "How do I find verified lithium suppliers in Nigeria?", a: "Register as a buyer on Beldium, share your requirements, and review verified supply with quality and traceability records on the platform." },
      { q: "What does verified mean on Beldium?", a: "It means the miner's identity and site have been documented and checked, and that supply carries quality and custody records. It is not a guarantee of grade, which is confirmed by laboratory testing." },
      { q: "Does Beldium publish a list of suppliers?", a: "No. Supplier information is shared on the platform with registered, verified parties to protect participants." },
      { q: "Can Beldium support offtake agreements?", a: "Beldium provides the verified information and coordination that support offtake discussions. Commercial terms are agreed between buyer and supplier." },
      { q: "How do miners become verified suppliers?", a: "Miners create an account, submit their details and site information, and complete verification, which may include a field inspection." },
    ],
    related: [
      { label: "For Buyers", href: "/buyers", text: "How offtakers use Beldium." },
      { label: "For Miners", href: "/miners", text: "Become a verified supplier." },
      { label: "BD Briefing Series", href: "/resources/business-development-brief", text: "Verified African lithium offtake." },
      { label: "Lithium Nigeria", href: "/lithium-nigeria", text: "The Nigerian lithium ecosystem." },
      { label: "Mineral Quality Control", href: "/mineral-quality-control", text: "Quality data behind supply." },
      { label: "Contact", href: "/contact", text: "Discuss your sourcing needs." },
    ],
    closingHeading: "Connect Verified Supply with Serious Buyers",
    closingText: "Register as a supplier or buyer and transact with confidence.",
  },
];

export const featuredSolutionSlugs = [
  "critical-minerals-nigeria",
  "lithium-nigeria",
  "mining-intelligence",
  "mineral-traceability",
  "verified-mineral-supply",
];
