import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PlatformFeatures from "./pages/PlatformFeatures";
import ForMiners from "./pages/ForMiners";
import ForBuyers from "./pages/ForBuyers";
import ForRegulators from "./pages/ForRegulators";
import Compliance from "./pages/Compliance";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LithiumSupplyChain from "./pages/LithiumSupplyChain";
import MiningDataIntelligence from "./pages/MiningDataIntelligence";
import Governance from "./pages/Governance";
import DataArchitecture from "./pages/DataArchitecture";
import Partnerships from "./pages/Partnerships";
import DataSovereignty from "./pages/DataSovereignty";
import InfrastructureGaps from "./pages/InfrastructureGaps";
import LithiumInNigeria from "./pages/LithiumInNigeria";
import BusinessDevelopmentBrief from "./pages/BusinessDevelopmentBrief";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/platform" element={<PlatformFeatures />} />
            <Route path="/miners" element={<ForMiners />} />
            <Route path="/buyers" element={<ForBuyers />} />
            <Route path="/regulators" element={<ForRegulators />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/lithium-supply-chain" element={<LithiumSupplyChain />} />
            <Route path="/resources/mining-data-intelligence" element={<MiningDataIntelligence />} />
            <Route path="/resources/data-sovereignty" element={<DataSovereignty />} />
            <Route path="/resources/infrastructure-gaps" element={<InfrastructureGaps />} />
            <Route path="/resources/lithium-in-nigeria" element={<LithiumInNigeria />} />
            <Route path="/resources/business-development-brief" element={<BusinessDevelopmentBrief />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/data-architecture" element={<DataArchitecture />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
