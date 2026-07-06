import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { ComplianceDashboard } from "@/components/compliance/ComplianceDashboard";

const Compliance = () => {
  return (
    <Layout>
      <SEO
        title="Compliance Infrastructure"
        description="Beldium's compliance infrastructure ensures legal, regulatory, and environmental compliance across Africa's lithium supply chain with verified partners."
        canonical="/compliance"
        keywords="mining compliance Africa, lithium regulatory compliance, mineral trade compliance, Nigerian mining regulations"
      />
      <ComplianceDashboard />
    </Layout>
  );
};

export default Compliance;
