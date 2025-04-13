import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Feature Pages
import LocationBasedCreation from "./pages/features/LocationBasedCreation";
import MobileOptimization from "./pages/features/MobileOptimization";
import DragAndDrop from "./pages/features/DragAndDrop";
import SeoTools from "./pages/features/SeoTools";
import ContentManagement from "./pages/features/ContentManagement";
import CustomDomains from "./pages/features/CustomDomains";
import Performance from "./pages/features/Performance";
import Analytics from "./pages/features/Analytics";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Feature Pages */}
          <Route path="/features/location-based-creation" element={<LocationBasedCreation />} />
          <Route path="/features/mobile-optimization" element={<MobileOptimization />} />
          <Route path="/features/drag-and-drop" element={<DragAndDrop />} />
          <Route path="/features/seo-tools" element={<SeoTools />} />
          <Route path="/features/content-management" element={<ContentManagement />} />
          <Route path="/features/custom-domains" element={<CustomDomains />} />
          <Route path="/features/performance" element={<Performance />} />
          <Route path="/features/analytics" element={<Analytics />} />
          
          {/* Other Pages */}
          <Route path="/pricing" element={<Pricing />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
