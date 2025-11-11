import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, MapPin, Smartphone, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function WebDesignKigali() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    'Custom Website Design',
    'Responsive Mobile Design',
    'E-commerce Websites',
    'Corporate Websites',
    'Landing Pages',
    'Website Redesign',
    'SEO Optimization',
    'Website Maintenance'
  ];

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Modern Design',
      description: 'Beautiful, professional websites that represent your Kigali business perfectly.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Responsive',
      description: 'Websites that work flawlessly on all devices - phones, tablets, and desktops.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Fast Loading',
      description: 'Optimized for speed to provide the best experience for your customers in Rwanda.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Design Kigali | Website Designer Kigali Rwanda | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Professional web design services in Kigali, Rwanda. Expert website designers creating custom, responsive, and SEO-friendly websites for businesses in Kigali. Get your free quote today!" 
        />
        <meta 
          name="keywords" 
          content="web design kigali, website designer kigali, web development kigali, kigali web agency, website design services kigali, professional web design kigali, website developer kigali, custom website kigali, responsive web design kigali, web design company kigali rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/web-design-kigali`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Web Design Services in Kigali, Rwanda" />
        <meta property="og:description" content="Expert website designers in Kigali creating beautiful, responsive websites for Rwanda businesses." />
        <meta property="og:url" content={`${siteConfig.domain}/web-design-kigali`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "INTWARI Knode - Web Design Kigali",
            "description": "Professional web design agency in Kigali, Rwanda, offering custom website design, responsive development, and SEO services for local businesses.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "KG 123 St",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -1.9536,
              "longitude": 30.0606
            },
            "url": `${siteConfig.domain}/web-design-kigali`,
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "priceRange": "$999 - $10,000",
            "areaServed": {
              "@type": "City",
              "name": "Kigali"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Design Services Kigali",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Website Design Kigali"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Web Design Kigali"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Website Design Kigali"
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
                  Professional Web Design Kigali
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Expert Website Designers in Kigali, Rwanda
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Looking for a professional website designer in Kigali? INTWARI Knode is your trusted web design agency in Kigali, Rwanda. We create stunning, responsive websites that help businesses in Kigali grow online. From custom website design to e-commerce solutions, we deliver exceptional web development services in Kigali.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/#web-development">
                    <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                      View Portfolio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Services Grid */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Web Design Services in Kigali
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Comprehensive website design and development services for businesses in Kigali, Rwanda
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {services.map((service, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <Check className="w-8 h-8 text-[#0A4A4A] mx-auto mb-3" />
                      <h3 className="text-[#0A4A4A]">{service}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A4A4A]">
                        {feature.icon}
                      </div>
                      <h3 className="mb-3 text-[#0A4A4A]">{feature.title}</h3>
                      <p className="text-[#0A4A4A]/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Why Choose Us */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-12 text-[#0A4A4A]">
                Why Choose Our Web Design Agency in Kigali?
              </h2>
              
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Local Kigali Expertise</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Based in Kigali with deep understanding of Rwanda market</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Easy face-to-face meetings in Kigali for local clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Optimized for Rwanda internet speeds and mobile usage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Payment options suitable for Rwanda businesses</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Professional Quality</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>150+ successful websites delivered in Kigali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Expert team of website designers and developers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Modern web design trends and technologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Ongoing support and maintenance for Kigali clients</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#0A4A4A]/10">
                  <h3 className="mb-4 text-[#0A4A4A] text-center">
                    Serving All Sectors in Kigali
                  </h3>
                  <p className="text-center text-[#0A4A4A]/70">
                    We design websites for restaurants, hotels, retail stores, professional services, NGOs, tech startups, real estate agencies, healthcare providers, educational institutions, and all types of businesses in Kigali and across Rwanda.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Process */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Our Web Design Process in Kigali
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Simple, transparent process for creating your perfect website in Kigali
              </p>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Consultation', desc: 'Discuss your needs and goals at our Kigali office or online' },
                  { step: '2', title: 'Design', desc: 'Create custom website design mockups for your approval' },
                  { step: '3', title: 'Development', desc: 'Build your responsive website with modern technologies' },
                  { step: '4', title: 'Launch', desc: 'Deploy your website and provide training and support' }
                ].map((item, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[#0A4A4A] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                        {item.step}
                      </div>
                      <h3 className="mb-2 text-[#0A4A4A]">{item.title}</h3>
                      <p className="text-sm text-[#0A4A4A]/70">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* CTA Section */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-[#0A4A4A]">
                Ready for a Professional Website in Kigali?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Partner with Kigali's leading web design agency. Get a custom, responsive website that drives results for your business. Contact our Kigali-based team today for a free consultation!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                    Email Kigali Team
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