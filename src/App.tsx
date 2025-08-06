import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import TourPackages from "./pages/TourPackages";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    const isHomepage = location.pathname === '/';
    
    if (!hasSeenPreloader && isHomepage) {
      setShowPreloader(true);
    }
  }, [location.pathname]);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <>
      <AnimatePresence>
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      {!showPreloader && (
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
