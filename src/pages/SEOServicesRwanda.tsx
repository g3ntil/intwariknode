import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, Search, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function SEOServicesRwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Local SEO Rwanda',
      description: 'Optimize for Google searches in Kigali and across Rwanda. Appear when locals search for your services.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Keyword Research',
      description: 'Identify the best keywords for your Rwanda business to rank higher on Google search results.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'On-Page SEO',
      description: 'Optimize your website content, structure, and code for maximum search engine visibility.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'SEO Analytics',
      description: 'Track rankings, traffic, and conversions with detailed SEO performance reports.'
    }
  ];

  const packages = [
    {
      name: 'Basic SEO',
      price: '$499',
      period: '/month',
      features: [
        'Keyword research for Rwanda',
        'On-page optimization',
        'Google My Business setup',
        'Monthly progress reports',
        'Up to 10 target keywords',
        'Basic link building'
      ]
    },
    {
      name: 'Advanced SEO',
      price: '$1,299',
      period: '/month',
      features: [
        'Comprehensive keyword strategy',
        'Technical SEO optimization',
        'Content creation (4 articles)',
        'Local SEO for Kigali',
        'Up to 25 target keywords',
        'Advanced link building',
        'Competitor analysis',
        'Weekly updates'
      ],
      popular: true
    },
    {
      name: 'Enterprise SEO',
      price: '$2,999',
      period: '/month',
      features: [
        'Full SEO strategy',
        'Unlimited keywords',
        'Content marketing (8 articles)',
        'E-commerce SEO',
        'International SEO',
        'Priority support',
        'Dedicated SEO manager',
        'Daily monitoring'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>SEO Services Rwanda | Search Engine Optimization Kigali | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Professional SEO services in Rwanda. Rank higher on Google with expert search engine optimization. Local SEO for Kigali businesses, keyword research, and proven strategies to increase organic traffic." 
        />
        <meta 
          name="keywords" 
          content="seo services rwanda, search engine optimization rwanda, seo agency rwanda, local seo kigali, seo company rwanda, google ranking rwanda, seo expert rwanda, seo optimization rwanda, seo consultant rwanda, website seo rwanda, seo strategy rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/seo-services-rwanda`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional SEO Services Rwanda | Rank Higher on Google" />
        <meta property="og:description" content="Expert SEO services in Rwanda to boost your Google rankings and drive organic traffic to your website." />
        <meta property="og:url" content={`${siteConfig.domain}/seo-services-rwanda`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "INTWARI Knode",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kigali",
                "addressCountry": "Rwanda"
              }
            },
            "areaServed": "Rwanda",
            "description": "Professional SEO services in Rwanda including local SEO optimization, keyword research, on-page SEO, technical SEO, and link building to help businesses rank higher on Google search results.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$499 - $2,999",
              "priceCurrency": "USD"
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
                  SEO Services Rwanda
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Professional Search Engine Optimization in Kigali
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Rank higher on Google with expert SEO services in Rwanda. INTWARI Knode is the leading SEO agency in Kigali, helping businesses increase organic traffic, generate more leads, and dominate search results. Our proven SEO strategies are tailored for the Rwanda market with local SEO expertise for Kigali businesses.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Get Free SEO Audit <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                      Contact SEO Expert
                    </Button>
                  </a>
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
                Comprehensive SEO Services for Rwanda Businesses
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Everything your business needs to rank #1 on Google in Rwanda
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

        {/* What We Do */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <h2 className="mb-6 text-[#0A4A4A] text-center">
                  What Our SEO Services Include
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Technical SEO Optimization</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Website speed optimization for Rwanda internet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Mobile-friendly responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>XML sitemap and robots.txt optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>SSL security and HTTPS migration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Schema markup implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Content & Link Building</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Rwanda-focused keyword research and targeting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>SEO-optimized content creation and blogging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>High-quality backlink acquisition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Local directory submissions for Kigali</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Competitor analysis and strategy</span>
                      </li>
                    </ul>
                  </div>
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
                SEO Packages for Rwanda Businesses
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Flexible SEO plans designed to help your business rank higher on Google in Rwanda
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

        {/* Why Choose Our SEO */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-12 text-[#0A4A4A]">
                Why Choose Our SEO Agency in Rwanda?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">5+ Years</div>
                    <p className="text-[#0A4A4A]/70">SEO Experience in Rwanda</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">150+</div>
                    <p className="text-[#0A4A4A]/70">Websites Ranked on Google</p>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-2 text-[#0A4A4A]">300%</div>
                    <p className="text-[#0A4A4A]/70">Average Traffic Increase</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <h3 className="mb-4 text-[#0A4A4A]">
                  Local SEO Expertise for Kigali & Rwanda
                </h3>
                <p className="text-[#0A4A4A]/70 max-w-3xl mx-auto">
                  We understand the Rwanda market, search behavior, and local competition. Our SEO strategies are specifically designed to help businesses in Kigali and across Rwanda rank higher on Google, attract more local customers, and grow their online presence. Whether you're a restaurant in Kigali, a hotel in Musanze, or an online store serving all of Rwanda, we have the local SEO expertise to make you visible.
                </p>
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* CTA Section */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 text-[#0A4A4A]">
                Ready to Rank #1 on Google in Rwanda?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Get started with professional SEO services in Rwanda. Our expert SEO consultants will analyze your website and create a custom strategy to dominate search results in Kigali and across Rwanda. Free SEO audit for new clients!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start SEO Campaign <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                    Talk to SEO Expert
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