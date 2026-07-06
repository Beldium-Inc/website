import { 
  MapPin, 
  FileCheck, 
  BarChart3, 
  DollarSign, 
  Lock, 
  FileText 
} from "lucide-react";

const capabilities = [
  {
    icon: MapPin,
    title: "Geospatial Miner Mapping",
    description: "GIS-powered location tracking and verification for all registered mining operations.",
  },
  {
    icon: FileCheck,
    title: "Digital Licensing & Compliance",
    description: "Automated license verification, renewal tracking, and regulatory compliance monitoring.",
  },
  {
    icon: BarChart3,
    title: "Verified Lithium Quality Data",
    description: "Standardized ore grade testing, quality certification, and production reporting.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Real-time spot prices, market data, and fair pricing mechanisms for all transactions.",
  },
  {
    icon: Lock,
    title: "Secure Escrow Payments",
    description: "Protected transactions with escrow services ensuring buyer and seller security.",
  },
  {
    icon: FileText,
    title: "Digital Export Documentation",
    description: "Streamlined export permits, customs documentation, and cross-border logistics support.",
  },
];

export function Capabilities() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Platform Capabilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive infrastructure powering every aspect of the lithium supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group p-6 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                <capability.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {capability.title}
              </h3>
              <p className="text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
