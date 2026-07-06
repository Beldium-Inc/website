import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Users, Globe, Landmark, Shield, Building, ArrowRight, CheckCircle } from "lucide-react";

const pathways = [
  {
    icon: Landmark,
    title: "Government & Regulatory Partners",
    description: "National mining ministries, regulatory agencies, and environmental authorities seeking digitized oversight of mineral activities.",
    benefits: [
      "Real-time access to mining production and compliance data",
      "Automated regulatory reporting and monitoring dashboards",
      "Support for policy development with verified industry data",
      "Joint programs for miner formalization and verification",
    ],
  },
  {
    icon: Building,
    title: "International Institutions",
    description: "Development banks, multilateral organizations, and international bodies focused on responsible mineral sourcing and African economic development.",
    benefits: [
      "Structured data for due diligence and impact assessment",
      "Partnership in standards development and best practices",
      "Joint research and publication on African mineral economy",
      "Integration with existing responsible sourcing frameworks",
    ],
  },
  {
    icon: Globe,
    title: "Industry & Trade Partners",
    description: "OEMs, battery manufacturers, trading companies, and industry associations seeking compliant African lithium supply.",
    benefits: [
      "Direct access to verified, compliant supply pipeline",
      "Co-development of quality standards and grading systems",
      "Joint logistics and trade facilitation programs",
      "Market intelligence sharing and demand forecasting",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Legal Partners",
    description: "Law firms, compliance consultancies, and audit organizations supporting the legal infrastructure of Africa's mineral trade.",
    benefits: [
      "Integration into Beldium's compliance verification workflow",
      "Joint development of compliance frameworks and standards",
      "Advisory roles on regulatory alignment and policy",
      "Access to aggregate compliance data for industry benchmarking",
    ],
  },
];

const Partnerships = () => {
  return (
    <Layout>
      <SEO
        title="Partnerships & Institutional Collaboration"
        description="Partner with Beldium to strengthen Africa's lithium supply chain. Partnership pathways for governments, institutions, industry, and compliance organizations."
        canonical="/partnerships"
        keywords="mining partnerships Africa, institutional collaboration minerals, lithium industry partnership, African mining collaboration, mineral trade partnerships"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Beldium Partnerships & Institutional Collaboration",
            "description": "Partnership pathways for governments, institutions, industry, and compliance organizations.",
            "url": "https://beldium.com/partnerships",
            "publisher": { "@type": "Organization", "name": "Beldium Inc" },
          })}
        </script>
      </Helmet>

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              Institutional Collaboration
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Partnerships & Collaboration
            </h1>
            <p className="text-xl text-muted-foreground">
              Beldium's infrastructure is designed for institutional partnership. We work with governments, 
              international organizations, industry, and compliance partners to build Africa's mineral future.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide space-y-8">
          {pathways.map((pathway) => (
            <div key={pathway.title} className="card-elevated p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <pathway.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-3">{pathway.title}</h2>
                  <p className="text-muted-foreground mb-6">{pathway.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pathway.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-primary-foreground/80 mb-8">
            Join the institutional network building Africa's structured lithium supply chain. 
            Whether you represent a government, institution, or industry organization, 
            there is a partnership pathway for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start a Conversation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background text-center">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-foreground mb-4">Related Pages</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild><Link to="/governance">Governance Framework</Link></Button>
            <Button variant="outline" asChild><Link to="/data-architecture">Data Architecture</Link></Button>
            <Button variant="outline" asChild><Link to="/compliance">Compliance</Link></Button>
            <Button variant="outline" asChild><Link to="/about">About Beldium</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partnerships;
