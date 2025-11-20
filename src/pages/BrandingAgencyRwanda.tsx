import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, Award, Palette, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function BrandingAgencyRwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Logo Design',
      description: 'Professional logo design that captures your brand identity and stands out in Rwanda.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Brand Identity',
      description: 'Complete brand identity packages including colors, fonts, and visual guidelines.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Brand Strategy',
      description: 'Strategic brand positioning to differentiate your business in the Rwanda market.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Brand Materials',
      description: 'Business cards, brochures, signage, and all marketing materials for your brand.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Branding Agency Rwanda | Logo Design & Brand Identity Kigali | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Professional branding agency in Rwanda. Expert logo design, brand identity, and corporate branding services in Kigali. Create a powerful brand for your Rwanda business." 
        />
        <meta 
          name="keywords" 
          content="branding agency rwanda, brand design rwanda, logo design rwanda, brand identity rwanda, corporate branding kigali, branding services rwanda, graphic design rwanda, brand strategy rwanda, visual identity rwanda, creative agency rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/branding-agency-rwanda`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Branding Agency Rwanda | Logo & Identity Design" />
        <meta property="og:description" content="Create a memorable brand with Rwanda's leading branding agency. Professional design services in Kigali." />
        <meta property="og:url" content={`${siteConfig.domain}/branding-agency-rwanda`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "INTWARI Knode - Branding Agency Rwanda",
            "description": "Professional branding agency in Rwanda providing logo design, brand identity, corporate branding, and visual design services for businesses in Kigali and across Rwanda.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda"
            },
            "areaServed": "Rwanda",
            "url": `${siteConfig.domain}/branding-agency-rwanda`,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Branding Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Logo Design Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Brand Identity Design Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Branding Kigali"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#F5F3ED] relative overflow-hidden">
        <BackgroundDecorations />
        
        {/* Hero Section */}
        <SectionBackground variant="cream">
          <section className="relative z-10 pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="mb-6 text-[#0A4A4A]">
                  Professional Branding Agency Rwanda
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Expert Logo Design & Brand Identity Services in Kigali
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Transform your business with professional branding services in Rwanda. INTWARI Knode is the leading branding agency in Kigali, offering expert logo design, complete brand identity packages, and corporate branding solutions. We create memorable brands that resonate with Rwanda audiences and stand out in the marketplace.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Start Your Brand <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/#business-photography">
                    <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Services */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Complete Branding Services for Rwanda Businesses
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                From logo design to full brand identity, we provide everything you need to build a strong brand in Rwanda
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A4A4A]">
                        {service.icon}
                      </div>
                      <h3 className="mb-2 text-[#0A4A4A]">{service.title}</h3>
                      <p className="text-sm text-[#0A4A4A]/70">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Brand Identity Package */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-12 text-[#0A4A4A]">
                Brand Identity Package
              </h2>
              
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Visual Identity</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Professional logo design with multiple concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Custom color palette selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Typography and font pairing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Brand pattern and graphic elements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Photography style guidelines</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Brand Materials</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Business card design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Letterhead and envelope design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Email signature templates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Social media profile graphics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Brand guidelines document</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-2xl mb-4 text-[#0A4A4A]">Starting at $1,999</p>
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Get Your Brand Identity
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Why Branding Matters */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-12 text-[#0A4A4A]">
                Why Professional Branding Matters in Rwanda
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="rounded-3xl">
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-[#0A4A4A]">Stand Out</h3>
                    <p className="text-[#0A4A4A]/70">
                      Differentiate your business from competitors in Rwanda's growing market with a unique, memorable brand identity.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl">
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-[#0A4A4A]">Build Trust</h3>
                    <p className="text-[#0A4A4A]/70">
                      Professional branding builds credibility and trust with Rwanda customers, making them more likely to choose you.
                    </p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl">
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-[#0A4A4A]">Grow Faster</h3>
                    <p className="text-[#0A4A4A]/70">
                      A strong brand attracts customers, commands premium prices, and accelerates business growth in Rwanda.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 bg-white rounded-3xl p-8 md:p-12">
                <h3 className="mb-6 text-[#0A4A4A] text-center">
                  Our Branding Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: '1', title: 'Discovery', desc: 'Understand your business, market, and goals in Rwanda' },
                    { step: '2', title: 'Strategy', desc: 'Develop brand positioning and visual direction' },
                    { step: '3', title: 'Design', desc: 'Create logo concepts and brand identity elements' },
                    { step: '4', title: 'Delivery', desc: 'Provide all brand files and implementation guidelines' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-[#0A4A4A] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                        {item.step}
                      </div>
                      <h4 className="mb-2 text-[#0A4A4A]">{item.title}</h4>
                      <p className="text-sm text-[#0A4A4A]/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Industries */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-12 text-[#0A4A4A]">
                Branding for All Industries in Rwanda
              </h2>
              
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <p className="text-lg text-[#0A4A4A]/70 mb-6 max-w-3xl mx-auto">
                  We've created successful brands for restaurants, hotels, tech startups, retail stores, healthcare providers, NGOs, real estate companies, professional services, and many more businesses across Kigali and Rwanda.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                  {['Restaurants', 'Hotels & Tourism', 'Tech Startups', 'Retail Stores', 'Healthcare', 'Real Estate', 'Professional Services', 'NGOs'].map((industry, index) => (
                    <div key={index} className="bg-[#C8E6C9] rounded-2xl p-4 text-[#0A4A4A]">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* CTA Section */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-[#0A4A4A]">
                Ready to Build a Powerful Brand in Rwanda?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Partner with Rwanda's leading branding agency. Get professional logo design, complete brand identity, and expert guidance to create a brand that stands out in Kigali and across Rwanda. Free brand consultation available!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start Your Brand Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                    Request Consultation
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </SectionBackground>
      </div>
    </>
  );
}