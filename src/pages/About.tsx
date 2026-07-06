import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Users } from "lucide-react";
import davidObiImage from "@/assets/david-obi-founder.jpg";
import cosmicCityLogo from "@/assets/cosmic-city-logo.png";
import andrewImage from "@/assets/andrew-eyidenghan.jpeg";
const values = [{
  icon: Globe,
  title: "African-First Approach",
  description: "Building infrastructure that serves Africa's mineral economy and its people first."
}, {
  icon: Leaf,
  title: "Sustainability & ESG",
  description: "Committed to environmental stewardship and responsible mining practices."
}, {
  icon: Users,
  title: "Community Impact",
  description: "Empowering artisanal miners and local communities through fair trade."
}];
const About = () => {
  return <Layout>
      <SEO
        title="About Beldium"
        description="Learn about Beldium's mission to build Africa's trusted lithium supply chain infrastructure, our leadership team, and commitment to sustainable mining."
        canonical="/about"
        keywords="about Beldium, African mining company, lithium infrastructure, sustainable mining Africa"
      />
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Beldium
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the infrastructure for Africa's sustainable mineral economy. 
              We're digitizing the lithium supply chain from mine to market.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Vision for Africa's Mineral Future
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Africa holds significant lithium reserves critical for the global energy transition. 
                Yet, the continent's mineral trade remains fragmented, opaque, and often exploitative 
                to local communities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">Beldium is building the digital infrastructure to change this. We're creating transparent, compliant, and efficient supply chains that benefit everyone, from artisanal miners to global OEMs, and the governments that oversee them.</p>
              <p className="text-lg text-muted-foreground">
                Our pilot program in Nigeria is the first step toward a continental solution 
                that will position Africa as a trusted, sustainable source of critical minerals.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {values.map(value => <div key={value.title} className="card-elevated p-6 flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by experienced professionals committed to transforming Africa's mineral sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="card-elevated p-8 text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20">
                <img src={davidObiImage} alt="David Obi, Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                David Obi
              </h3>
              <p className="text-accent font-medium mb-4">
                Founder, Beldium Inc
              </p>
              <p className="text-muted-foreground">
                Leading Beldium's mission to build transparent and compliant mineral 
                trade infrastructure across Africa.
              </p>
            </div>

            {/* Executive Board - Governance & Risk */}
            <div className="card-elevated p-8 text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-primary/20">
                <img src={andrewImage} alt="Andrew Eyidenghan" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Andrew Eyidenghan
              </h3>
              <p className="text-xs text-muted-foreground mb-2">MBA, CFE, ACIB, CBAP</p>
              <p className="text-accent font-medium mb-4">
                Executive Board - Governance & Risk
              </p>
              <p className="text-muted-foreground text-sm">
                Financial Expert | Fraud Examiner | Business Analyst | ISO31000 Senior Lead Risk Manager | ISO37301 Senior Lead Compliance Implementer | ISO37000 Senior Corporate Governance Manager
              </p>
            </div>

            {/* Advisor */}
            <div className="card-elevated p-8 text-center">
              <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-6 bg-secondary flex items-center justify-center">
                <img src={cosmicCityLogo} alt="Cosmic City Enterprise" className="w-24 h-24 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Cosmic City Enterprise
              </h3>
              <p className="text-accent font-medium mb-4">
                Strategic Advisor
              </p>
              <p className="text-muted-foreground">
                Providing strategic guidance and industry expertise to support 
                Beldium's growth and market expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Press & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Featured coverage from leading publications.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <a 
              href="https://businessday.ng/news/article/beldium-launches-intelligence-platform-to-save-africas-3trn-solid-minerals-market/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-elevated p-6 block hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-accent font-medium mb-1">BusinessDay Nigeria</p>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    Beldium Launches Intelligence Platform to Save Africa's $3trn Solid Minerals Market
                  </h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    Read full article
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="mailto:davidobi@beldium.com">
                Press Inquiries: davidobi@beldium.com
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Partner with us to build Africa's sustainable mineral economy.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default About;
