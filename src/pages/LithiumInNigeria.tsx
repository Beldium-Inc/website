import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin, Pickaxe, Factory, BookOpen } from "lucide-react";

const states = [
  { name: "Nasarawa", note: "The most active lithium-bearing state. High-grade spodumene and lepidolite documented around Wamba, Nasarawa Eggon, and Kokona LGAs." },
  { name: "Kogi", note: "Confirmed lithium occurrences in pegmatite belts around Ijumu and Kabba/Bunu, often co-located with tantalite and tin." },
  { name: "Kwara", note: "Pegmatite zones in Share-Tsaragi and Oro have returned lithium-bearing samples flagged for exploration." },
  { name: "Ekiti", note: "Lithium-bearing pegmatites identified in Ijero and Ikole, historically mined for gemstones and tantalite." },
  { name: "Cross River", note: "Occurrences reported in the Oban Massif pegmatite system, still at exploration stage." },
  { name: "Oyo", note: "Pegmatite outcrops in Komu and Ibarapa zones contain lithium minerals at varying grades." },
  { name: "Plateau", note: "Long-mined tin and columbite belts host pegmatite intrusions with lithium potential." },
];

const faqs = [
  {
    q: "Does Nigeria have lithium?",
    a: "Yes. Nigeria has confirmed lithium deposits across at least seven states, primarily hosted in pegmatite formations. The Ministry of Solid Minerals Development has publicly identified lithium as a strategic mineral, and exploration and small-scale mining are already active, especially in Nasarawa State.",
  },
  {
    q: "Which state in Nigeria has the most lithium?",
    a: "Nasarawa State currently shows the highest documented activity, with spodumene and lepidolite-grade ore mined around Wamba, Nasarawa Eggon, and Kokona. Kogi, Kwara, Ekiti, Cross River, Oyo, and Plateau also host confirmed lithium-bearing pegmatites at varying stages of exploration.",
  },
  {
    q: "Is lithium mining legal in Nigeria?",
    a: "Yes, under the Nigerian Minerals and Mining Act 2007. Operators need licences issued through the Mining Cadastre Office (MCO), and exports are regulated by the Ministry of Solid Minerals Development. The federal government has restricted the export of unprocessed lithium to encourage domestic value addition.",
  },
  {
    q: "When was lithium discovered in Nigeria?",
    a: "Lithium-bearing pegmatites have been known to Nigerian geologists for decades, but commercial-grade discoveries gained public attention from 2022 onward, when the Nigerian Geological Survey Agency and Ministry of Solid Minerals Development began publicly highlighting strategic lithium reserves in Nasarawa and surrounding states.",
  },
  {
    q: "Who buys lithium from Nigeria?",
    a: "Demand currently flows toward battery-grade refiners and intermediaries supplying the EV and energy storage sectors, with Asian processors historically dominant. Nigerian policy now favours buyers committed to local refining and lithium-ion battery manufacturing within the country.",
  },
];

const LithiumInNigeria = () => {
  const canonical = "/resources/lithium-in-nigeria";
  const url = "https://beldium.com" + canonical;

  return (
    <Layout>
      <SEO
        title="Lithium in Nigeria: Where It Is Found, How It Is Mined"
        description="A clear guide to lithium in Nigeria: which states have deposits, how mining is regulated, and how Beldium structures data across the supply chain."
        canonical={canonical}
        keywords="lithium in Nigeria, does Nigeria have lithium, which state in Nigeria has lithium, where is lithium found in Nigeria, Nigerian lithium mining"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Lithium in Nigeria: Where It Is Found, How It Is Mined",
            "description": "A guide to Nigeria's lithium deposits, the states where lithium is found, and the regulatory framework governing lithium mining and export.",
            "url": url,
            "publisher": { "@type": "Organization", "name": "Beldium Inc", "url": "https://beldium.com" },
            "author": { "@type": "Person", "name": "David Obi", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "Beldium Inc" } },
            "datePublished": "2026-06-26",
            "dateModified": "2026-06-26",
            "about": [
              { "@type": "Thing", "name": "Lithium mining in Nigeria" },
              { "@type": "Place", "name": "Nigeria" },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/resources" className="inline-flex items-center text-sm text-primary hover:underline mb-4">← Back to Resources</Link>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
              Explainer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Lithium in Nigeria: Where It Is Found, How It Is Mined
            </h1>
            <p className="text-xl text-muted-foreground">
              Nigeria holds some of West Africa's most promising lithium reserves. This guide
              covers where deposits sit, who is mining them, how the federal government
              regulates the trade, and what structured data is missing across the value chain.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto prose-like">
          <h2 className="text-3xl font-bold text-foreground mb-4">Does Nigeria have lithium?</h2>
          <p className="text-muted-foreground mb-4">
            Yes. Nigeria has confirmed lithium deposits across at least seven states, hosted
            primarily in pegmatite formations that also carry tantalite, columbite, and tin.
            The Nigerian Geological Survey Agency and the Ministry of Solid Minerals
            Development list lithium as a strategic mineral, and small-scale extraction is
            already active, particularly in Nasarawa State.
          </p>
          <p className="text-muted-foreground mb-4">
            What is missing is not the resource. It is the data infrastructure around it:
            verified production volumes, chain-of-custody records, regulatory tracking, and
            export documentation that institutional buyers and regulators can rely on. That
            gap is the reason Beldium exists.
          </p>
        </div>
      </section>

      {/* States */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Which states in Nigeria have lithium?
            </h2>
            <p className="text-muted-foreground">
              Lithium-bearing pegmatites follow Nigeria's Older Granite belt across the middle
              and southwestern parts of the country. Activity is concentrated in the states
              below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {states.map((s) => (
              <div key={s.name} className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{s.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it is mined */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <Pickaxe className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">How lithium is mined in Nigeria</h2>
            <p className="text-muted-foreground mb-3">
              Nigerian lithium today is mined largely by artisanal and small-scale operators
              working pegmatite outcrops. Ore is hand-sorted, transported to aggregation
              points, and sold into intermediaries that grade and consolidate volumes for
              export.
            </p>
            <p className="text-muted-foreground">
              A small but growing number of licensed mid-scale operators are formalising
              production through cooperatives, registered offtake agreements, and mechanised
              extraction.
            </p>
          </div>
          <div>
            <Factory className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">The regulatory framework</h2>
            <p className="text-muted-foreground mb-3">
              The Nigerian Minerals and Mining Act 2007 governs licensing, royalties, and
              export. The Mining Cadastre Office issues licences; the Ministry of Solid
              Minerals Development oversees policy and export approvals.
            </p>
            <p className="text-muted-foreground">
              Since 2023, federal policy has restricted the export of unprocessed lithium,
              prioritising buyers committed to in-country refining and battery manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/40">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="card-elevated p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridge to Beldium */}
      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <BookOpen className="h-8 w-8 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            From geology to institutional-grade supply
          </h2>
          <p className="text-muted-foreground mb-8">
            Knowing that lithium exists in Nasarawa or Kogi is the easy part. The hard part is
            connecting verified production, compliance, and logistics data so that regulators,
            buyers, and financiers can act on it. Beldium provides that data infrastructure
            layer across Nigeria's lithium value chain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/resources/lithium-supply-chain">
                Explore the Lithium Supply Chain <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/resources/mining-data-intelligence">Mining Data & Intelligence</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/governance">Governance Framework</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LithiumInNigeria;