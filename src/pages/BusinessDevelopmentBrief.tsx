import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Briefcase, Handshake, LineChart, ShieldCheck, FileCheck, Users, CheckCircle } from "lucide-react";

const offerPoints = [
  { icon: ShieldCheck, title: "Verified origin and chain of custody", text: "Every lot is tied to a licensed cooperative, GPS-tagged at the pit, graded at an accredited aggregation point, and documented through export." },
  { icon: FileCheck, title: "Compliance-ready documentation", text: "OECD due diligence, EU Battery Regulation, and Nigerian export documentation prepared in one structured file per shipment." },
  { icon: LineChart, title: "Transparent grade and volume data", text: "Assay results, monthly production capacity, and forward availability visible before term-sheet discussions begin." },
  { icon: Handshake, title: "Direct producer relationships", text: "BD leads engage with verified cooperatives and licensed exporters directly, without intermediary layers eroding margin or traceability." },
];

const eligibility = [
  "Battery manufacturers and cell producers with published sourcing standards",
  "Cathode and precursor material producers scaling verified supply",
  "OEMs building supplier development programmes in Africa",
  "Trading houses committing to auditable chain-of-custody",
  "Development finance institutions structuring offtake-linked facilities",
];

const faqs = [
  {
    q: "Who is the Verified Offtake Access Programme for?",
    a: "The programme is designed for Heads of Business Development, sourcing leads, and commercial directors at battery makers, cathode producers, OEMs, trading houses, and DFIs building verified African lithium supply into their pipeline.",
  },
  {
    q: "What does 'verified' mean in this context?",
    a: "Verified supply means the mineral is tied to a licensed producer, documented from pit to port with GPS-tagged production records, graded at accredited aggregation points, and shipped with OECD due-diligence and export documentation packaged with the lot.",
  },
  {
    q: "How is this different from working with a trader?",
    a: "Traders resell material with limited upstream visibility. Beldium is infrastructure: BD leads see the underlying producer, the licence, the grade data, and the compliance file directly, and contract on that basis.",
  },
  {
    q: "How do I begin?",
    a: "Request the BD briefing pack through the contact form or the Google Business Profile offer. A member of the Beldium commercial team will schedule a scoping call within five business days.",
  },
];

const BusinessDevelopmentBrief = () => {
  const canonical = "/resources/business-development-brief";
  const url = "https://beldium.com" + canonical;

  return (
    <Layout>
      <SEO
        title="Verified African Lithium Offtake: A Brief for Heads of Business Development"
        description="How Heads of Business Development at battery makers, OEMs, and trading houses can access verified African lithium supply through Beldium's Offtake Access Programme."
        canonical={canonical}
        keywords="African lithium offtake, verified lithium supply, battery-grade lithium Africa, business development lithium sourcing, Nigerian lithium offtake, OECD compliant lithium, EU Battery Regulation supply"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Verified African Lithium Offtake: A Brief for Heads of Business Development",
            "description": "The BD Briefing Series, Volume 1. A playbook for commercial leads sourcing verified African lithium supply.",
            "url": url,
            "publisher": { "@type": "Organization", "name": "Beldium Inc", "url": "https://beldium.com" },
            "author": { "@type": "Person", "name": "David Obi", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "Beldium Inc" } },
            "datePublished": "2026-07-04",
            "dateModified": "2026-07-04",
            "isPartOf": { "@type": "CreativeWorkSeries", "name": "BD Briefing Series" },
            "audience": { "@type": "BusinessAudience", "audienceType": "Heads of Business Development" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Verified Offtake Access Programme",
            "description": "Priority access for Heads of Business Development to verified African lithium supply, with chain-of-custody, OECD due diligence, and export documentation built in.",
            "url": url,
            "category": "Business Development Programme",
            "seller": {
              "@type": "LocalBusiness",
              "name": "Beldium Inc",
              "url": "https://beldium.com",
              "sameAs": "https://beldium.com",
              "areaServed": "NG",
            },
            "eligibleCustomerType": "Business",
            "availability": "https://schema.org/LimitedAvailability",
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

      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/resources" className="inline-flex items-center text-sm text-primary hover:underline mb-4">← Back to Resources</Link>
            <span className="block mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary">
                BD Briefing Series · Volume 1
              </span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Verified African Lithium Offtake: A Brief for Heads of Business Development
            </h1>
            <p className="text-xl text-muted-foreground">
              A structured pathway for commercial leads at battery makers, cathode producers, OEMs, trading
              houses, and development finance institutions sourcing verified lithium supply from Nigeria and
              the wider African lithium belt.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="card-elevated p-8 mb-10 border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Featured Offer</span>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Verified Offtake Access Programme</h2>
            <p className="text-muted-foreground mb-4">
              Priority onboarding for a limited cohort of Heads of Business Development. Access verified
              producers, live grade and volume data, and a compliance-ready documentation stack from a single
              institutional counterparty.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              This offer is also published on the Beldium Inc Google Business Profile. Redeem by requesting
              the BD briefing pack through the contact form or directly from the Google listing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link to="/contact">Request the BD briefing pack</Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://www.google.com/search?q=Beldium+Inc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Business Profile
                </a>
              </Button>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Why this brief exists</h2>
          <p className="text-muted-foreground mb-4">
            Heads of Business Development sourcing lithium into cell, cathode, and precursor pipelines are
            increasingly asked the same question by procurement, legal, and ESG counterparts: can you prove
            where this material came from, who mined it, and under what conditions? For African supply, the
            honest answer has historically been difficult. Beldium's role is to make it straightforward.
          </p>
          <p className="text-muted-foreground mb-8">
            This brief sets out how a BD lead can engage with verified African lithium supply through a
            single institutional counterparty, without assembling a patchwork of intermediaries, informal
            producers, and third-party auditors to reach the same outcome.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">What the programme includes</h2>
          <div className="space-y-4 mb-10">
            {offerPoints.map((item) => (
              <div key={item.title} className="card-elevated p-6 flex gap-4">
                <item.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Who this is for</h2>
          <ul className="space-y-3 mb-10">
            {eligibility.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mb-4">How the engagement runs</h2>
          <ol className="space-y-3 mb-10 list-decimal list-inside text-muted-foreground">
            <li>BD lead requests the briefing pack, either through the Beldium contact form or the Google Business Profile offer.</li>
            <li>Scoping call to align on grade specifications, volume expectations, and compliance requirements.</li>
            <li>Verified producer matching, with access to production data, licence documentation, and site provenance.</li>
            <li>Sample lot dispatched with the full compliance file, including OECD due diligence and export documentation.</li>
            <li>Term-sheet negotiation and structured offtake, priced against transparent grade and volume data.</li>
          </ol>

          <h2 className="text-2xl font-bold text-foreground mb-4">Frequently asked questions</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((f) => (
              <div key={f.q} className="card-elevated p-6">
                <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="card-elevated p-8 text-center bg-secondary/40">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to open the conversation?</h2>
            <p className="text-muted-foreground mb-6">
              Request the BD briefing pack. A member of the Beldium commercial team will respond within
              five business days.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Request the BD briefing pack <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessDevelopmentBrief;