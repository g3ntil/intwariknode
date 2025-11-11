import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { SectionBackground } from './SectionBackground';

export function KeywordLinks() {
  const primaryServices = [
    {
      title: 'Website Design Rwanda',
      description: 'Professional web design services across Rwanda',
      link: '/affordable-website-design-rwanda',
      keywords: ['affordable', 'custom', 'professional']
    },
    {
      title: 'Web Development Rwanda',
      description: 'Expert website development in Kigali',
      link: '/web-development',
      keywords: ['custom', 'responsive', 'modern']
    },
    {
      title: 'Digital Marketing Agency Rwanda',
      description: 'Complete online marketing solutions',
      link: '/digital-marketing-agency-rwanda',
      keywords: ['SEO', 'social media', 'advertising']
    },
    {
      title: 'E-commerce Website Rwanda',
      description: 'Build your online store in Rwanda',
      link: '/ecommerce-website-rwanda',
      keywords: ['online store', 'shopping cart', 'payments']
    },
    {
      title: 'Web Design Kigali',
      description: 'Top website designers in Kigali city',
      link: '/web-design-kigali',
      keywords: ['professional', 'local', 'expert']
    },
    {
      title: 'SEO Services Rwanda',
      description: 'Rank higher on Google in Rwanda',
      link: '/seo-services-rwanda',
      keywords: ['Google ranking', 'local SEO', 'optimization']
    },
    {
      title: 'Branding Agency Rwanda',
      description: 'Logo design & brand identity services',
      link: '/branding-agency-rwanda',
      keywords: ['logo design', 'brand identity', 'corporate']
    },
    {
      title: 'Social Media Management Rwanda',
      description: 'Grow your social media presence',
      link: '/social-media-management',
      keywords: ['Facebook', 'Instagram', 'content']
    }
  ];

  return (
    <SectionBackground variant="light">
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A4A4A]">
              Our Services Across Rwanda
            </h2>
            <p className="text-lg text-[#0A4A4A]/70 max-w-3xl mx-auto">
              Professional web design, digital marketing, and branding services for businesses in Kigali and across Rwanda. Find the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryServices.map((service, index) => (
              <Link to={service.link} key={index}>
                <Card className="rounded-3xl h-full hover:shadow-lg transition-shadow hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-[#0A4A4A]">{service.title}</h3>
                    <p className="text-sm text-[#0A4A4A]/70 mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.keywords.map((keyword, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-[#C8E6C9] text-[#0A4A4A] px-2 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Keyword-rich text for SEO */}
          <div className="mt-12 bg-white rounded-3xl p-8 md:p-12">
            <h3 className="mb-6 text-[#0A4A4A] text-center">
              Leading Web Design & Digital Marketing Agency in Rwanda
            </h3>
            <div className="prose max-w-none text-[#0A4A4A]/80 space-y-4">
              <p>
                INTWARI Knode is the best digital agency in Rwanda, offering comprehensive web design, web development, and digital marketing services to businesses in Kigali and across Rwanda. As a professional web design agency, we specialize in creating custom websites, e-commerce platforms, and business websites that drive results.
              </p>
              <p>
                Our web development services in Rwanda include responsive web design, custom website development, e-commerce website development, CMS development, and website maintenance. We are the leading website developer in Kigali, trusted by 150+ businesses for affordable website design in Rwanda.
              </p>
              <p>
                As a full-service digital marketing agency in Rwanda, we provide expert SEO services Rwanda, social media management Rwanda, online advertising Rwanda, content marketing, and branding services. Our local SEO expertise helps businesses in Kigali rank higher on Google and attract more customers.
              </p>
              <p>
                Looking for an affordable website design in Rwanda? We offer competitive pricing starting at just $999 for professional business websites. Our e-commerce website solutions help Rwanda businesses sell online with secure payment integration and inventory management.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}