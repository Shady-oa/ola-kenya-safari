import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Preloader from "./components/Preloader";

const queryClient = new QueryClient();

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader) {
      setShowPreloader(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence>
          {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
        </AnimatePresence>
        {!showPreloader && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/events" element={<Events />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
