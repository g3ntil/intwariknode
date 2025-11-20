import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function AffordableWebsiteDesignRwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      name: 'Starter Package',
      price: '$999',
      features: [
        'Professional 5-page website',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO optimization',
        'Free domain & hosting setup',
        '1 month free support'
      ]
    },
    {
      name: 'Business Package',
      price: '$2,499',
      features: [
        'Custom 10-page website',
        'Advanced mobile optimization',
        'E-commerce ready',
        'Google Analytics setup',
        'Premium SEO services',
        '3 months free support',
        'Social media integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: '$5,999',
      features: [
        'Unlimited pages',
        'Custom web application',
        'Full e-commerce solution',
        'Advanced SEO strategy',
        'Content management system',
        '6 months free support',
        'Priority customer service'
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Get your professional website live in 1-2 weeks with our streamlined development process.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Quality Guaranteed',
      description: 'Professional web design services with 100% satisfaction guarantee and unlimited revisions.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: 'Free maintenance, updates, and technical support to keep your website running smoothly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Affordable Website Design Rwanda | Starting at $999 | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Affordable website design in Rwanda starting at $999. Professional web development services in Kigali. Custom websites, e-commerce solutions, SEO optimization. Best web design company Rwanda." 
        />
        <meta 
          name="keywords" 
          content="affordable website design rwanda, cheap website design rwanda, budget web design kigali, low cost website rwanda, affordable web developer rwanda, professional web design services, best web design company rwanda, website design services kigali, custom website rwanda, business website rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/affordable-website-design-rwanda`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Affordable Website Design Rwanda | Starting at $999" />
        <meta property="og:description" content="Get a professional website in Rwanda for just $999. Quality web design, fast delivery, and ongoing support." />
        <meta property="og:url" content={`${siteConfig.domain}/affordable-website-design-rwanda`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Affordable Website Design Rwanda",
            "description": "Professional and affordable website design services in Rwanda starting at $999. Custom web development for businesses in Kigali and across Rwanda.",
            "url": `${siteConfig.domain}/affordable-website-design-rwanda`,
            "provider": {
              "@type": "ProfessionalService",
              "name": "INTWARI Knode",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              },
              "priceRange": "$999 - $5,999",
              "areaServed": "Rwanda"
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
                  Affordable Website Design Rwanda
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Professional Web Design Services in Kigali Starting at Just $999
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Get a stunning, mobile-friendly business website with our affordable website design services in Rwanda. Best web design company in Kigali offering custom website development, e-commerce solutions, and SEO optimization for businesses across Rwanda.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/#web-development">
                    <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Pricing Packages */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Affordable Website Design Packages Rwanda
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Choose the perfect web design package for your business in Rwanda. All packages include professional design, mobile optimization, and SEO services.
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
                        <span className="text-[#0A4A4A]/60"> one-time</span>
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

        {/* Why Choose Us */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Why Choose Our Affordable Web Design Services in Rwanda?
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                INTWARI Knode is the leading web design agency in Kigali, Rwanda, offering professional web development services at affordable prices without compromising quality.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A4A4A]">
                        {item.icon}
                      </div>
                      <h3 className="mb-3 text-[#0A4A4A]">{item.title}</h3>
                      <p className="text-[#0A4A4A]/70">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12">
                <h3 className="mb-6 text-[#0A4A4A]">
                  Our Affordable Website Design Process
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="mb-3 text-[#0A4A4A]">What You Get:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Custom website design tailored to your business</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Mobile-responsive design for all devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>SEO optimization for Google ranking in Rwanda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Fast loading speed and performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Contact forms and email integration</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-3 text-[#0A4A4A]">Our Services Include:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Business websites and company profiles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>E-commerce websites and online stores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Landing pages for marketing campaigns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Portfolio and photography websites</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Website redesign and modernization</span>
                      </li>
                    </ul>
                  </div>
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
                Ready for Your Affordable Website in Rwanda?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Join 150+ satisfied businesses in Rwanda who chose INTWARI Knode for their affordable website design needs. Get a free consultation and quote today!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                    Email Us
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