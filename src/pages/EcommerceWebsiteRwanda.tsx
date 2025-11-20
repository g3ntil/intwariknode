import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, ShoppingCart, CreditCard, Package } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { SectionBackground } from '../components/SectionBackground';
import { BackgroundDecorations } from '../components/BackgroundDecorations';
import { siteConfig } from '../config/seo';

export default function EcommerceWebsiteRwanda() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Full Online Store',
      description: 'Complete e-commerce solution with product catalog, shopping cart, and checkout system.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Payment Integration',
      description: 'Accept payments via Mobile Money, credit cards, and bank transfers in Rwanda.'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Inventory Management',
      description: 'Track your products, manage stock levels, and automate order fulfillment.'
    }
  ];

  const packages = [
    {
      name: 'Basic Store',
      price: '$2,999',
      features: [
        'Up to 50 products',
        'Mobile money integration',
        'Basic shopping cart',
        'Order management',
        'Customer accounts',
        'SSL security',
        '2 months support'
      ]
    },
    {
      name: 'Professional Store',
      price: '$5,999',
      features: [
        'Unlimited products',
        'Advanced payment gateway',
        'Inventory management',
        'Email marketing integration',
        'Analytics dashboard',
        'SEO optimization',
        '6 months support',
        'Mobile app ready'
      ],
      popular: true
    },
    {
      name: 'Enterprise Store',
      price: '$12,999',
      features: [
        'Multi-vendor marketplace',
        'Custom integrations',
        'Advanced analytics',
        'Marketing automation',
        'Priority support',
        'Custom features',
        '12 months support',
        'Dedicated manager'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>E-commerce Website Rwanda | Online Store Development Kigali | INTWARI Knode</title>
        <meta 
          name="description" 
          content="Professional e-commerce website development in Rwanda. Build your online store with shopping cart, payment integration, and inventory management. Best ecommerce solutions in Kigali, Rwanda." 
        />
        <meta 
          name="keywords" 
          content="e-commerce website rwanda, ecommerce development rwanda, online store rwanda, shopping website rwanda, sell online rwanda, ecommerce platform rwanda, online shop kigali, web development rwanda, custom website rwanda, business website rwanda, ecommerce solutions rwanda" 
        />
        <link rel="canonical" href={`${siteConfig.domain}/ecommerce-website-rwanda`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="E-commerce Website Development Rwanda | Online Store Solutions" />
        <meta property="og:description" content="Build a successful online store in Rwanda with our professional e-commerce website development services. Mobile money integration, inventory management, and more." />
        <meta property="og:url" content={`${siteConfig.domain}/ecommerce-website-rwanda`} />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "E-commerce Website Development",
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
            "description": "Professional e-commerce website development services in Rwanda including online store creation, shopping cart integration, payment processing, and inventory management for businesses in Kigali and across Rwanda.",
            "offers": {
              "@type": "Offer",
              "priceRange": "$2,999 - $12,999",
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
                  E-commerce Website Development Rwanda
                </h1>
                <p className="text-xl mb-4 text-[#0A4A4A]/80">
                  Build Your Online Store in Kigali | Sell Products Across Rwanda
                </p>
                <p className="text-lg mb-8 text-[#0A4A4A]/70">
                  Launch your successful online store in Rwanda with our professional e-commerce website development services. Custom shopping websites with mobile money integration, inventory management, and advanced analytics. The best ecommerce solutions for businesses in Kigali and across Rwanda.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/#get-started">
                    <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                      Start Selling Online <ArrowRight className="ml-2 w-5 h-5" />
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

        {/* Features */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                Complete E-commerce Solutions for Rwanda Businesses
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Everything you need to start selling online in Rwanda. Our e-commerce websites include all essential features for a successful online store.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="rounded-3xl">
                    <CardContent className="p-6 text-center">
                      <div className="w-14 h-14 bg-[#C8E6C9] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0A4A4A]">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 text-[#0A4A4A]">{feature.title}</h3>
                      <p className="text-sm text-[#0A4A4A]/70">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        {/* Pricing Packages */}
        <SectionBackground variant="cream">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-center mb-4 text-[#0A4A4A]">
                E-commerce Website Packages Rwanda
              </h2>
              <p className="text-center text-lg mb-12 text-[#0A4A4A]/70 max-w-3xl mx-auto">
                Choose the perfect online store solution for your business in Rwanda. All packages include mobile optimization and secure payment processing.
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

        {/* Why E-commerce */}
        <SectionBackground variant="light">
          <section className="py-20 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12">
                <h2 className="mb-6 text-[#0A4A4A] text-center">
                  Why Your Rwanda Business Needs an E-commerce Website
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Reach More Customers</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Sell to customers across all of Rwanda 24/7</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Mobile-optimized for smartphone shoppers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Integrate with social media for more sales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>SEO optimization for Google searches in Rwanda</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-[#0A4A4A]">Streamline Your Business</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Automated order processing and tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Real-time inventory management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Customer database and email marketing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#0A4A4A] mt-0.5" />
                        <span>Detailed sales reports and analytics</span>
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
                Ready to Launch Your Online Store in Rwanda?
              </h2>
              <p className="text-lg mb-8 text-[#0A4A4A]/70">
                Join successful Rwanda businesses selling online. Get your professional e-commerce website with mobile money integration, inventory management, and expert support. Free consultation available!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/#get-started">
                  <Button size="lg" className="bg-[#0A4A4A] hover:bg-[#0A4A4A]/90 text-white rounded-full">
                    Start Your Online Store <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href={`mailto:${siteConfig.email}`}>
                  <Button size="lg" variant="outline" className="border-2 border-[#0A4A4A] text-[#0A4A4A] hover:bg-[#0A4A4A] hover:text-white rounded-full">
                    Request Quote
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