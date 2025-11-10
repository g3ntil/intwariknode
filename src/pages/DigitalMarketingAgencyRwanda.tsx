import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, TrendingUp, Target, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function DigitalMarketingAgencyRwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'SEO Services Rwanda',
      description: 'Rank higher on Google searches in Rwanda. Local SEO optimization, keyword research, and content strategy.',
      link: '/seo-services-rwanda'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Social Media Management',
      description: 'Grow your brand on Facebook, Instagram, and Twitter. Content creation, scheduling, and engagement.',
      link: '/#social-media-management'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Online Advertising Rwanda',
      description: 'Targeted Facebook and Google ads for Rwanda audiences. Maximize ROI with data-driven campaigns.',
      link: '/#get-started'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics & Reporting',
      description: 'Track performance with detailed analytics. Monitor traffic, conversions, and campaign success.',
      link: '/#get-started'
    }
  ];

  const packages = [
    {
      name: 'Starter Marketing',
      price: '$999',
      period: '/month',
      features: [
        'Basic SEO optimization',
        '2 social media platforms',
        '12 posts per month',
        'Monthly analytics report',
        'Email support',
        'Content calendar'
      ]
    },
    {
      name: 'Growth Marketing',
      price: '$2,499',
      period: '/month',
      features: [
        'Advanced SEO strategy',
        '4 social media platforms',
        '24 posts per month',
        'Google Ads management',
        'Weekly analytics',
        'Priority support',
        'Influencer outreach',
        'Email marketing'
      ],
      popular: true
    },
    {
      name: 'Enterprise Marketing',
      price: '$5,999',
      period: '/month',
      features: [
        'Comprehensive SEO',
        'All social platforms',
        'Daily content posting',
        'Multi-channel advertising',
        'Real-time analytics',
        'Dedicated manager',
        'Video content creation',
        'Brand strategy'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency Rwanda | SEO & Social Media Kigali | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Leading digital marketing agency in Rwanda. SEO services, social media management, online advertising, and content creation in Kigali. Grow your business online with expert marketing strategies." 
        />
        <meta 
          name="keywords" 
          content="digital marketing agency rwanda, online marketing rwanda, internet marketing kigali, digital advertising rwanda, seo agency rwanda, seo services rwanda, social media management rwanda, online advertising rwanda, digital marketing kigali, best digital agency rwanda, content marketing rwanda, email marketing rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/digital-marketing-agency-rwanda`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Agency Rwanda | Expert Online Marketing Services" />
        <meta property="og:description" content="Grow your business with Rwanda's leading digital marketing agency. SEO, social media, and online advertising expertise." />
        <meta property="og:url" content={`${siteConfig.domain}/digital-marketing-agency-rwanda`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "INTWARI Knode - Digital Marketing Agency Rwanda",
            "description": "Leading digital marketing agency in Rwanda providing SEO services, social media management, online advertising, and comprehensive digital marketing strategies for businesses in Kigali and across Rwanda.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kigali",
              "addressCountry": "Rwanda"
            },
            "areaServed": "Rwanda",
            "priceRange": "$999 - $5,999",
            "telephone": siteConfig.phone,
            "email": siteConfig.email,
            "url": `${siteConfig.domain}/digital-marketing-agency-rwanda`,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Marketing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SEO Services Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Social Media Management Rwanda"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Online Advertising Rwanda"
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
                  Digital Marketing Agency Rwanda
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Expert Online Marketing Services in Kigali | Grow Your Business
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Transform your online presence with Rwanda's leading digital marketing agency. We provide comprehensive SEO services, social media management, online advertising, and content marketing strategies tailored for businesses in Kigali and across Rwanda. Drive more traffic, generate leads, and increase sales.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Get Free Marketing Audit <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/#social-media-management">
                    <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                      Our Services
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
                Complete Digital Marketing Solutions for Rwanda Businesses
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                From SEO to social media, we offer all the digital marketing services you need to succeed online in Rwanda's competitive market.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {services.map((service, index) => (
                  <Link to={service.link} key={index}>
                    <Card className="rounded-3xl h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-14 h-14 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A4A4A]">
                          {service.icon}
                        </div>
                        <h3 className="mb-2 text-[#0A4A4A]">{service.title}</h3>
                        <p className="text-sm text-[#0A4A4A]/70">{service.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12">
                <h3 className="mb-6 text-[#0A4A4A] text-center">
                  Why Choose INTWARI Knode as Your Digital Marketing Partner?
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">150+</div>
                    <p className="text-[#0A4A4A]/70">Rwanda Clients Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">250+</div>
                    <p className="text-[#0A4A4A]/70">Successful Campaigns</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">98%</div>
                    <p className="text-[#0A4A4A]/70">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Pricing Packages */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Digital Marketing Packages Rwanda
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Flexible digital marketing packages designed for Rwanda businesses of all sizes. Choose the plan that matches your growth goals.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <Card 
                    key={index} 
                    className={`relative overflow-hidden rounded-3xl ${
                      pkg.popular ? 'ring-2 ring-[#0A4A4A] shadow-2xl scale-105' : ''
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute top-0 right-0 bg-[#0A4A4A] text-white px-4 py-1 rounded-bl-2xl">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="mb-2 text-[#0A4A4A]">{pkg.name}</h3>
                      <div className="mb-6">
                        <span className="text-4xl text-[#0A4A4A]">{pkg.price}</span>
                        <span className="text-[#0A4A4A]/60">{pkg.period}</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5 flex-shrink-0" />
                            <span className="text-[#0A4A4A]/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/#get-started">
                        <Button className="w-full bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                          Get Started
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Benefits */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <h2 className="mb-6 text-[#0A4A4A] text-center">
                  What Our Digital Marketing Services Include
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">SEO & Content Marketing</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Keyword research for Rwanda market</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>On-page and technical SEO optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Content creation and blog writing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Local SEO for Kigali businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Link building and authority growth</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Social Media & Advertising</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Facebook and Instagram management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Targeted ad campaigns for Rwanda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Professional content creation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Community engagement and growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Performance analytics and reporting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* CTA Section */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-[#0A4A4A]">
                Ready to Grow Your Business Online in Rwanda?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Partner with Rwanda's best digital marketing agency. Get expert SEO services, social media management, and online advertising strategies that deliver real results. Free marketing audit for new clients!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start Marketing Campaign <ArrowRight className="ml-2 w-5 h-5" />
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