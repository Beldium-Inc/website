import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Capabilities } from "@/components/home/Capabilities";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { Partners } from "@/components/home/Partners";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        canonical="/"
        keywords="lithium supply chain Africa, African mining infrastructure, mineral trade platform, Nigerian lithium, verified mineral supply"
      />
      <HeroSection />
      <HowItWorks />
      <WhoWeServe />
      <Capabilities />
      <ImpactMetrics />
      <Partners />
      <CTASection />
    </Layout>
  );
};

export default Index;
