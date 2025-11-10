// SEO Configuration for INTWARI Knode
// Central location for all SEO metadata and structured data

import { industryWebsiteKeywords } from './keywords';

// Helper function to get all industry keywords
const getAllIndustryKeywords = (): string => {
  return Object.values(industryWebsiteKeywords).flat().join(', ');
};

export const siteConfig = {
  name: 'INTWARI Knode',
  domain: 'https://intwariknode.com',
  description: 'Leading web design and digital marketing agency in Rwanda. Professional web development, software development, business photography, and social media management services in Kigali.',
  email: 'hello@intwariknode.com',
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
    title: 'INTWARI Knode | Digital Marketing Agency Rwanda | Kwamamaza mu Rwanda',
    description: 'Leading digital marketing agency in Rwanda offering professional online marketing services. Expert web design, SEO, social media management, and kwamamaza (advertising) solutions in Kigali. Transform your business with our marketing agency Rwanda services.',
    keywords: `kwamamaza mu rwanda, digital marketing rwanda, online marketing rwanda, marketing agency rwanda, website design rwanda, web development rwanda, digital marketing agency rwanda, web design kigali, website developer kigali, seo services rwanda, branding agency rwanda, affordable website design rwanda, e-commerce website rwanda, social media management rwanda, professional web design services, business website rwanda, ${getAllIndustryKeywords()}`,
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
    title: 'Web Development Services Rwanda | Custom Websites Kigali',
    description: 'Professional web development services in Rwanda. Custom websites, e-commerce solutions, CMS development. Fast delivery, modern design. Starting at $999. Get your quote!',
    keywords: 'web development rwanda, custom website rwanda, e-commerce website rwanda, website developer kigali, cms development rwanda, responsive web design',
    canonical: `${siteConfig.domain}/#web-development`,
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
    title: 'Software Development Rwanda | Custom Business Applications',
    description: 'Custom software development in Rwanda. Business applications, mobile apps, automation tools, cloud solutions. 4-12 week delivery. Starting at $5,999. Contact us today!',
    keywords: 'software development rwanda, custom software rwanda, business applications rwanda, mobile app development rwanda, business digital solutions rwanda',
    canonical: `${siteConfig.domain}/#software-development`,
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
    title: 'Business Photography Rwanda | Professional Brand Photography',
    description: 'Professional business photography in Kigali, Rwanda. Corporate portraits, product photography, event coverage, team photos. High-resolution delivery. Starting at $499.',
    keywords: 'business photography rwanda, professional photography rwanda, corporate photography kigali, branding agency rwanda, product photography rwanda',
    canonical: `${siteConfig.domain}/#business-photography`,
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
    title: 'Social Media Management Rwanda | Online Marketing & Kwamamaza',
    description: 'Expert digital marketing and social media management in Rwanda. Professional kwamamaza (advertising), online marketing, content creation, and community management. Grow your brand with our marketing agency Rwanda services. Starting at $999/month.',
    keywords: 'kwamamaza mu rwanda, digital marketing rwanda, online marketing rwanda, marketing agency rwanda, social media management rwanda, online advertising rwanda, facebook ads rwanda, instagram marketing rwanda, content creation rwanda',
    canonical: `${siteConfig.domain}/#social-media-management`,
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
    title: 'About INTWARI Knode | Best Digital Agency Rwanda',
    description: 'Meet INTWARI Knode - Rwanda\'s leading digital agency. Founded by Gaetan Muvunyi, we deliver innovative web design, software development, and digital marketing solutions.',
    keywords: 'best digital agency rwanda, professional web design services, digital solutions rwanda, web agency kigali, innovative technology rwanda',
    canonical: `${siteConfig.domain}/#about`,
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": organizationSchema,
      "description": "Learn about INTWARI Knode, Rwanda's premier digital agency specializing in web development, software solutions, business photography, and social media management."
    }
  },

  getStarted: {
    title: 'Get Started | Contact Web Developer Kigali | INTWARI Knode',
    description: 'Ready to grow your business online? Contact INTWARI Knode for affordable website design, software development, and digital marketing in Rwanda. Free consultation!',
    keywords: 'affordable website design rwanda, contact web developer kigali, website consultation rwanda, digital marketing quote rwanda, web design pricing rwanda',
    canonical: `${siteConfig.domain}/#get-started`,
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
  }
};