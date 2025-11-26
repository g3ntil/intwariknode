import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Toaster from './components/ui/Toaster';
import { Navigation } from './components/Navigation';
import { PageLoader } from './components/PageLoader';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTopOnMount } from './components/ScrollToTopOnMount';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingSecretButton } from './components/FloatingSecretButton';
import { GrainOverlay } from './components/GrainOverlay';
import { Favicon } from './components/Favicon';

// Eager load Home page for better initial load
import { Home } from './pages/Home';

// Lazy load all other pages for code splitting
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const GetStarted = lazy(() => import('./pages/GetStarted').then(m => ({ default: m.GetStarted })));
const WebDevelopment = lazy(() => import('./pages/WebDevelopment').then(m => ({ default: m.WebDevelopment })));
const SoftwareDevelopment = lazy(() => import('./pages/SoftwareDevelopment').then(m => ({ default: m.SoftwareDevelopment })));
const BusinessPhotography = lazy(() => import('./pages/BusinessPhotography').then(m => ({ default: m.BusinessPhotography })));
const SocialMediaManagement = lazy(() => import('./pages/SocialMediaManagement').then(m => ({ default: m.SocialMediaManagement })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

// Lazy load SEO landing pages
const AffordableWebsiteDesignRwanda = lazy(() => import('./pages/AffordableWebsiteDesignRwanda'));
const EcommerceWebsiteRwanda = lazy(() => import('./pages/EcommerceWebsiteRwanda'));
const DigitalMarketingAgencyRwanda = lazy(() => import('./pages/DigitalMarketingAgencyRwanda'));
const WebDesignKigali = lazy(() => import('./pages/WebDesignKigali'));
const SEOServicesRwanda = lazy(() => import('./pages/SEOServicesRwanda'));
const BrandingAgencyRwanda = lazy(() => import('./pages/BrandingAgencyRwanda'));

// SEO landing pages are now redirected to homepage for better user experience
// Keeping the page files for future use if needed

// Loading component for lazy loaded pages
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#0A4A4A] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#0A4A4A]" style={{ fontWeight: 600 }}>Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Reduced initial page load time from 2s to 1s for better performance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
        <ScrollToTopOnMount />
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
        <ScrollToTop />
        <GrainOverlay />
        <FloatingSecretButton />
        <Favicon />
        <div className="min-h-screen bg-white">
          <BackgroundDecorations />
          <div className="relative z-10">
            <Navigation />
            <Suspense fallback={<PageLoadingFallback />}>
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
                
                {/* SEO Landing Pages - Redirect to Homepage */}
                <Route path="/affordable-website-design-rwanda" element={<Navigate to="/" replace />} />
                <Route path="/ecommerce-website-rwanda" element={<Navigate to="/" replace />} />
                <Route path="/digital-marketing-agency-rwanda" element={<Navigate to="/" replace />} />
                <Route path="/web-design-kigali" element={<Navigate to="/" replace />} />
                <Route path="/seo-services-rwanda" element={<Navigate to="/" replace />} />
                <Route path="/branding-agency-rwanda" element={<Navigate to="/" replace />} />
                
                {/* Redirect preview_page.html to home */}
                <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
                
                {/* 404 Not Found - Catch all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
    </HelmetProvider>
  );
}