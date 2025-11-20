import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: {
    '@context'?: string;
    '@type'?: string | string[];
    [key: string]: any;
  };
  structuredData?: object[];
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'INTWARI Knode',
  url: 'https://intwari.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://intwari.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'INTWARI Knode',
  url: 'https://intwari.com',
  logo: 'https://intwari.com/logo.png',
  sameAs: [
    'https://www.facebook.com/intwariknode',
    'https://www.instagram.com/intwariknode',
    'https://www.linkedin.com/company/intwariknode',
    'https://twitter.com/intwariknode',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+250788888888',
      contactType: 'customer service',
      areaServed: 'RW',
      availableLanguage: ['English', 'Kinyarwanda', 'French'],
    },
  ],
};

export function SEO({
  title,
  description,
  keywords = 'web development, software development, digital marketing, Rwanda, Kigali, website design, SEO services, branding',
  canonical,
  ogType = 'website',
  ogImage = 'https://intwari.com/images/og-image.jpg',
  schema = {},
  structuredData = [],
  noIndex = false,
  publishedTime,
  modifiedTime,
}: SEOProps) {
  // Safe URL fallback for SSR compatibility
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical || 'https://intwari.com';
  const fullTitle = `${title} | INTWARI Knode`;
  
  // Merge default schema with provided schema
  const mergedSchema = {
    ...defaultSchema,
    ...schema,
  };

  // Add to structured data
  const allStructuredData = [
    mergedSchema,
    organizationSchema,
    ...(Array.isArray(structuredData) ? structuredData : []),
  ].filter(Boolean);
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content="INTWARI Knode" />
      <meta name="language" content="en-RW" />
      <meta name="geo.region" content="RW" />
      <meta name="geo.placename" content="Kigali" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#0A4A4A" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical || currentUrl} />
      <meta property="og:site_name" content="INTWARI Knode" />
      <meta property="og:locale" content="en_RW" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@intwariknode" />
      <meta name="twitter:creator" content="@intwariknode" />

      {/* Structured Data */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:url" content={canonical || currentUrl} />

      {/* Geo Tags for Rwanda/Kigali */}
      <meta name="geo.region" content="RW-01" />
      <meta name="geo.placename" content="Kigali" />
      <meta name="geo.position" content="-1.9536;30.0606" />
      <meta name="ICBM" content="-1.9536, 30.0606" />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}