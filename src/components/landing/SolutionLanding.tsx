import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, MapPin, Camera, FileText, Pickaxe, Building2, Scale, Handshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO, SITE_URL } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import type { LandingPageData } from "@/data/solutionPages";
import { solutionPages } from "@/data/solutionPages";

const APP_URL = "https://app.beldium.com/";

const audiences = [
  { icon: Pickaxe, title: "Miners", text: "Get verified, document your site and reach credible buyers.", href: "/miners", cta: "For Miners" },
  { icon: Building2, title: "Buyers and Offtakers", text: "Source traceable supply with quality and custody records.", href: "/buyers", cta: "For Buyers" },
  { icon: Scale, title: "Regulators", text: "Gain structured visibility across mining and trade activity.", href: "/regulators", cta: "For Regulators" },
  { icon: Handshake, title: "Partners", text: "Labs, logistics, finance and institutions working with Beldium.", href: "/partnerships", cta: "Partnerships" },
];

export function FieldIntelligenceSection() {
  const steps = [
    { icon: MapPin, title: "Site visits", text: "Beldium teams conduct field inspections at mine sites in Nigeria, recording location, access and operating context." },
    { icon: Camera, title: "Site documentation", text: "Photographs, timestamps and observation notes are captured to build a verifiable record of each site and operator." },
    { icon: FileText, title: "Structured records", text: "Field findings feed miner profiles, traceability records and market intelligence on the Beldium platform." },
  ];
  return (
    <section className="section-padding bg-muted/40">
      <div className="container-wide">
        <div className="max-w-3xl mb-10">
          <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">Field Intelligence</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">From Mine Site to Market</h2>
          <p className="text-lg text-muted-foreground">
            Beldium performs field inspections and site documentation in Nigeria to support mineral intelligence and traceability.
            Visual inspection and images provide context, they do not replace laboratory analysis. Mineral grade and composition are
            confirmed only through sampling and testing at accredited third party laboratories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-card border border-border">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionLanding({ page }: { page: LandingPageData }) {
  const url = `${SITE_URL}/${page.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.h1,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@type": "WebSite", url: `${SITE_URL}/`, name: "Beldium" },
      about: { "@type": "Thing", name: page.topic },
      publisher: { "@type": "Organization", name: "Beldium Inc", url: SITE_URL },
      spatialCoverage: { "@type": "Country", name: "Nigeria" },
      dateModified: "2026-09-28",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const siblings = solutionPages.filter((p) => p.slug !== page.slug);

  return (
    <Layout>
      <SEO
        title={page.seoTitle}
        description={page.description}
        canonical={`/${page.slug}`}
        keywords={page.keywords}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground">Home</Link> <span className="mx-1">/</span>
            <span className="text-foreground">{page.breadcrumb}</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">{page.badge}</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">{page.h1}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                  {page.primaryCta ?? "Get Started on Beldium"} <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Speak to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      {page.sections.map((section, idx) => (
        <section key={section.heading} className={idx % 2 === 0 ? "section-padding bg-background" : "section-padding bg-muted/30"}>
          <div className="container-wide">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{section.heading}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground mb-4">{p}</p>
              ))}
            </div>
            {section.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.points.map((pt) => (
                  <div key={pt.title} className="p-6 rounded-2xl bg-card border border-border">
                    <CheckCircle className="h-6 w-6 text-primary mb-3" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{pt.title}</h3>
                    <p className="text-muted-foreground">{pt.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {page.fieldIntelligence && <FieldIntelligenceSection />}

      {/* Audience CTAs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">Who This Serves</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((a) => (
              <Link key={a.title} to={a.href} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors">
                <a.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-muted-foreground mb-4">{a.text}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  {a.cta} <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {page.faqs.map((f) => (
              <div key={f.q} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Related Beldium Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {page.related.map((r) => (
              <Link key={r.href} to={r.href} className="group p-5 rounded-xl border border-border hover:border-primary/40 transition-colors">
                <span className="font-semibold text-foreground group-hover:text-primary">{r.label}</span>
                <p className="text-sm text-muted-foreground mt-1">{r.text}</p>
              </Link>
            ))}
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-3">Explore more solutions</h3>
          <div className="flex flex-wrap gap-2">
            {siblings.map((s) => (
              <Link key={s.slug} to={`/${s.slug}`} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:text-foreground">
                {s.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{page.closingHeading}</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">{page.closingText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">Create Your Account</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/contact">Contact Beldium</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function SolutionLinksStrip({ title = "Explore Beldium Solutions" }: { title?: string }) {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutionPages.map((s) => (
            <Link key={s.slug} to={`/${s.slug}`} className="group p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <span className="font-semibold text-foreground group-hover:text-primary">{s.navLabel}</span>
              <p className="text-sm text-muted-foreground mt-1">{s.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
