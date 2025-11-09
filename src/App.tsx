import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { PageLoader } from './components/PageLoader';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { FloatingSecretButton } from './components/FloatingSecretButton';
import { GrainOverlay } from './components/GrainOverlay';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { GetStarted } from './pages/GetStarted';
import { WebDevelopment } from './pages/WebDevelopment';
import { SoftwareDevelopment } from './pages/SoftwareDevelopment';
import { BusinessPhotography } from './pages/BusinessPhotography';
import { SocialMediaManagement } from './pages/SocialMediaManagement';
// SEO-focused landing pages
import AffordableWebsiteDesignRwanda from './pages/AffordableWebsiteDesignRwanda';
import EcommerceWebsiteRwanda from './pages/EcommerceWebsiteRwanda';
import DigitalMarketingAgencyRwanda from './pages/DigitalMarketingAgencyRwanda';
import WebDesignKigali from './pages/WebDesignKigali';
import SEOServicesRwanda from './pages/SEOServicesRwanda';
import BrandingAgencyRwanda from './pages/BrandingAgencyRwanda';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 second loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Toaster 
          position="top-center"
          toastOptions={{
            style: {
              background: '#0A4A4A',
              color: '#fff',
              border: 'none',
            },
          }}
        />
        <PageLoader isLoading={isLoading} />
        <ScrollProgress />
        <CustomCursor />
        <GrainOverlay />
        <FloatingSecretButton />
        <div className="size-full bg-white overflow-x-hidden overflow-y-scroll scroll-smooth">
          <BackgroundDecorations />
          <div className="relative z-10">
            <Navigation />
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-started" element={<GetStarted />} />
              
              {/* Service Pages */}
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/software-development" element={<SoftwareDevelopment />} />
              <Route path="/business-photography" element={<BusinessPhotography />} />
              <Route path="/social-media-management" element={<SocialMediaManagement />} />
              
              {/* SEO Landing Pages */}
              <Route path="/affordable-website-design-rwanda" element={<AffordableWebsiteDesignRwanda />} />
              <Route path="/ecommerce-website-rwanda" element={<EcommerceWebsiteRwanda />} />
              <Route path="/digital-marketing-agency-rwanda" element={<DigitalMarketingAgencyRwanda />} />
              <Route path="/web-design-kigali" element={<WebDesignKigali />} />
              <Route path="/seo-services-rwanda" element={<SEOServicesRwanda />} />
              <Route path="/branding-agency-rwanda" element={<BrandingAgencyRwanda />} />
              
              {/* Redirect preview_page.html to home */}
              <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
              
              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  );
}