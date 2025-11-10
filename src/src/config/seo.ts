// SEO Configuration for INTWARI Knode
// Central location for all SEO metadata and structured data

import { industryWebsiteKeywords } from './keywords';

// Helper function to get all industry keywords
const getAllIndustryKeywords = (): string => {
  return Object.values(industryWebsiteKeywords).flat().join(', ');
};

export const siteConfig = {
  name: 'INTWARI Knode',
  domain: 'https://intwari.com',
  description: 'Leading web design and digital marketing agency in Rwanda. Professional web development, software development, business photography, and social media management services in Kigali.',
  email: 'hello@intwari.com',
  phone: '+250 788 123 456',
  address: {
    street: 'KG 123 St',
    city: 'Kigali',
    country: 'Rwanda',
    countryCode: 'RW'
  },
  social: {
    instagram: 'https://www.instagram.com/connectioncafe',
    facebook: 'https://www.facebook.com/intwariknode',
    linkedin: 'https://www.linkedin.com/company/intwariknode',
    twitter: 'https://twitter.com/intwariknode'
  },
  founder: {
    name: 'Gaetan Muvunyi',
    title: 'Founder & CEO'
  }
};

// Organization Schema - Used across the site
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.domain,
  "logo": `${siteConfig.domain}/images/logo.png`,
  "description": siteConfig.description,
  "email": siteConfig.email,
  "telephone": siteConfig.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "addressLocality": siteConfig.address.city,
    "addressCountry": siteConfig.address.countryCode
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.9536,
    "longitude": 30.0606
  },
  "areaServed": {
    "@type": "Country",
    "name": "Rwanda"
  },
  "sameAs": [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.linkedin,
    siteConfig.social.twitter
  ],
  "founder": {
    "@type": "Person",
    "name": siteConfig.founder.name,
    "jobTitle": siteConfig.founder.title
  }
};

// SEO metadata for each page
export const pageMetadata = {
  home: {
    title: 'Web Design & Digital Marketing Agency Rwanda | INTWARI Knode Kigali',
    description: 'Leading digital marketing agency in Kigali, Rwanda. Expert web design, website development, kwamamaza (advertising), SEO services, e-commerce websites, online marketing, and software development. Professional digital solutions for Rwanda businesses. 250+ projects delivered.',
    keywords: `web design rwanda, digital marketing agency rwanda, web development rwanda, kwamamaza mu rwanda, online marketing rwanda, website design kigali, website developer kigali, seo services rwanda, branding agency rwanda, affordable website design rwanda, e-commerce website rwanda, social media management rwanda, marketing agency rwanda, best digital agency rwanda, professional web design services rwanda, ${getAllIndustryKeywords()}`,
    canonical: siteConfig.domain,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...organizationSchema,
          "department": [
            {
              "@type": "WebPage",
              "name": "Web Development",
              "url": `${siteConfig.domain}/#web-development`
            },
            {
              "@type": "WebPage",
              "name": "Software Development",
              "url": `${siteConfig.domain}/#software-development`
            },
            {
              "@type": "WebPage",
              "name": "Business Photography",
              "url": `${siteConfig.domain}/#business-photography`
            },
            {
              "@type": "WebPage",
              "name": "Social Media Management",
              "url": `${siteConfig.domain}/#social-media-management`
            }
          ]
        },
        {
          "@type": "WebSite",
          "name": siteConfig.name,
          "url": siteConfig.domain,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteConfig.domain}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
  },

  webDevelopment: {
    title: 'Web Development Services Rwanda | Professional Website Design Kigali',
    description: 'Expert web development services in Rwanda. Custom website design, e-commerce solutions, responsive websites, CMS development in Kigali. Professional web developers delivering modern, fast websites. Starting at $999. 2-3 week delivery.',
    keywords: 'web development rwanda, website design kigali, custom website rwanda, e-commerce website rwanda, website developer kigali, web design services rwanda, professional website kigali, responsive web design rwanda, cms development rwanda, business website rwanda',
    canonical: `${siteConfig.domain}/web-development`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Web Development",
      "provider": organizationSchema,
      "areaServed": {
        "@type": "Country",
        "name": "Rwanda"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$999 - $10,000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "description": "Professional web development services including custom websites, e-commerce solutions, landing pages, CMS development, and web maintenance in Rwanda.",
      "image": `${siteConfig.domain}/images/web-development.jpg`
    }
  },

  softwareDevelopment: {
    title: 'Software Development Rwanda | Custom Business Applications Kigali',
    description: 'Professional custom software development in Rwanda. Business applications, mobile app development, automation tools, cloud solutions for Rwanda businesses. Expert developers in Kigali. 4-12 week delivery. Starting at $5,999.',
    keywords: 'software development rwanda, custom software rwanda, software developer kigali, business applications rwanda, mobile app development rwanda, software solutions rwanda, business software kigali, automation tools rwanda, cloud solutions rwanda, enterprise software rwanda',
    canonical: `${siteConfig.domain}/software-development`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Software Development",
      "provider": organizationSchema,
      "areaServed": {
        "@type": "Country",
        "name": "Rwanda"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$5,999 - $50,000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "description": "Custom software development services including business applications, management systems, mobile apps, and automation tools tailored for Rwanda businesses.",
      "image": `${siteConfig.domain}/images/software-development.jpg`
    }
  },

  businessPhotography: {
    title: 'Business Photography Rwanda | Professional Corporate Photography Kigali',
    description: 'Professional business photography services in Kigali, Rwanda. Corporate portraits, product photography, event coverage, brand photography, team photos. High-resolution, studio-quality images for Rwanda businesses. Starting at $499. Same-day delivery available.',
    keywords: 'business photography rwanda, professional photography kigali, corporate photography rwanda, product photography kigali, brand photography rwanda, commercial photography kigali, event photography rwanda, professional photographer kigali, business photos rwanda',
    canonical: `${siteConfig.domain}/business-photography`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Photography",
      "provider": organizationSchema,
      "areaServed": {
        "@type": "Country",
        "name": "Rwanda"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$499 - $5,000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "description": "Professional business photography services including corporate portraits, product photography, event coverage, office spaces, and brand photography in Rwanda.",
      "image": `${siteConfig.domain}/images/business-photography.jpg`
    }
  },

  socialMediaManagement: {
    title: 'Social Media Management Rwanda | Digital Marketing Agency Kigali',
    description: 'Professional social media management and online marketing in Rwanda. Content creation, kwamamaza (advertising), Facebook ads, Instagram marketing, analytics, community management. Grow your Rwanda business online. Starting at $999/month.',
    keywords: 'social media management rwanda, digital marketing rwanda, online marketing kigali, kwamamaza mu rwanda, facebook ads rwanda, instagram marketing rwanda, content creation rwanda, social media marketing kigali, online advertising rwanda, digital marketing agency rwanda',
    canonical: `${siteConfig.domain}/social-media-management`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Social Media Management",
      "provider": organizationSchema,
      "areaServed": {
        "@type": "Country",
        "name": "Rwanda"
      },
      "offers": {
        "@type": "Offer",
        "priceRange": "$999 - $5,000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "description": "Comprehensive social media management services including content creation, post scheduling, analytics tracking, engagement, and advertising campaigns for Rwanda businesses.",
      "image": `${siteConfig.domain}/images/social-media.jpg`
    }
  },

  about: {
    title: 'About Us | Leading Digital Marketing Agency Rwanda | INTWARI Knode',
    description: 'Meet INTWARI Knode - Rwanda\'s premier digital marketing agency in Kigali. Founded by Gaetan Muvunyi, we deliver innovative web design, software development, online marketing, and digital solutions for 150+ Rwanda businesses.',
    keywords: 'best digital agency rwanda, digital marketing agency kigali, professional web design services rwanda, digital solutions rwanda, web agency kigali, marketing agency rwanda, innovative technology rwanda, top digital agency kigali',
    canonical: `${siteConfig.domain}/about`,
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": organizationSchema,
      "description": "Learn about INTWARI Knode, Rwanda's premier digital agency specializing in web development, software solutions, business photography, and social media management."
    }
  },

  getStarted: {
    title: 'Get Started | Contact Digital Marketing Agency Kigali | INTWARI Knode',
    description: 'Ready to grow your Rwanda business online? Contact INTWARI Knode for affordable website design, digital marketing, kwamamaza, software development in Kigali. Free consultation! Fast 2-week delivery. Get your quote today.',
    keywords: 'contact digital marketing agency rwanda, affordable website design rwanda, contact web developer kigali, website consultation rwanda, digital marketing quote rwanda, web design pricing rwanda, get quote kigali, free consultation rwanda',
    canonical: `${siteConfig.domain}/get-started`,
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "areaServed": "RW",
        "availableLanguage": ["English", "Kinyarwanda", "French"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      }
    }
  },

  // SEO Landing Pages
  affordableWebsiteDesignRwanda: {
    title: 'Affordable Website Design Rwanda | Professional Web Design Kigali',
    description: 'Affordable professional website design in Rwanda. Custom, responsive websites starting at $999. Expert web designers in Kigali delivering high-quality, modern websites for Rwanda businesses. Fast 2-3 week delivery. Get your free quote today!',
    keywords: 'affordable website design rwanda, cheap website design rwanda, website design prices rwanda, affordable web design kigali, budget website rwanda, cost-effective website kigali, professional website design rwanda, web design packages rwanda, website pricing kigali',
    canonical: `${siteConfig.domain}/affordable-website-design-rwanda`
  },

  ecommerceWebsiteRwanda: {
    title: 'E-commerce Website Rwanda | Online Store Development Kigali',
    description: 'Professional e-commerce website development in Rwanda. Custom online stores, payment integration, inventory management. Expert e-commerce developers in Kigali. Start selling online today! Starting at $2,999.',
    keywords: 'e-commerce website rwanda, online store rwanda, e-commerce development kigali, online shop rwanda, ecommerce website kigali, shopping website rwanda, online business rwanda, ecommerce platform kigali, sell online rwanda',
    canonical: `${siteConfig.domain}/ecommerce-website-rwanda`
  },

  digitalMarketingAgencyRwanda: {
    title: 'Digital Marketing Agency Rwanda | Online Marketing Services Kigali',
    description: 'Leading digital marketing agency in Rwanda. SEO, social media marketing, kwamamaza (advertising), content creation, PPC, email marketing. Expert online marketing services in Kigali. Grow your Rwanda business online! Free consultation.',
    keywords: 'digital marketing agency rwanda, online marketing kigali, marketing agency rwanda, digital marketing services rwanda, seo agency kigali, social media marketing rwanda, kwamamaza mu rwanda, online advertising rwanda, marketing consultant kigali',
    canonical: `${siteConfig.domain}/digital-marketing-agency-rwanda`
  },

  webDesignKigali: {
    title: 'Web Design Kigali | Professional Website Design Rwanda',
    description: 'Expert web design services in Kigali, Rwanda. Custom, responsive, modern websites. Professional web designers creating stunning websites for Kigali businesses. Mobile-friendly, SEO-optimized. Starting at $999. Contact us today!',
    keywords: 'web design kigali, website design kigali, web designer kigali, kigali web design, professional web design rwanda, website designer kigali, web design services kigali, custom web design rwanda, responsive web design kigali',
    canonical: `${siteConfig.domain}/web-design-kigali`
  },

  seoServicesRwanda: {
    title: 'SEO Services Rwanda | Search Engine Optimization Kigali',
    description: 'Professional SEO services in Rwanda. Improve Google rankings, increase website traffic, boost online visibility. Expert SEO consultants in Kigali. Local SEO, technical SEO, content optimization. Get found by more customers! Free SEO audit.',
    keywords: 'seo services rwanda, seo kigali, search engine optimization rwanda, seo consultant kigali, seo agency rwanda, google ranking rwanda, website optimization kigali, local seo rwanda, seo expert kigali',
    canonical: `${siteConfig.domain}/seo-services-rwanda`
  },

  brandingAgencyRwanda: {
    title: 'Branding Agency Rwanda | Brand Design Services Kigali',
    description: 'Professional branding agency in Kigali, Rwanda. Logo design, brand identity, visual branding, brand strategy. Expert brand designers creating memorable brands for Rwanda businesses. Stand out from competitors! Starting at $999.',
    keywords: 'branding agency rwanda, brand design kigali, logo design rwanda, brand identity rwanda, branding services kigali, brand strategy rwanda, visual branding kigali, brand consultant rwanda, logo designer kigali',
    canonical: `${siteConfig.domain}/branding-agency-rwanda`
  }
};
