import { SolutionLanding } from "@/components/landing/SolutionLanding";
import { solutionPages } from "@/data/solutionPages";
import NotFound from "./NotFound";

const SolutionPage = ({ slug }: { slug: string }) => {
  const page = solutionPages.find((p) => p.slug === slug);
  if (!page) return <NotFound />;
  return <SolutionLanding page={page} />;
};

export default SolutionPage;
