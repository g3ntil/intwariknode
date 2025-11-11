import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = 'https://intwari.com/images/og-image.jpg',
  schema
}: SEOProps) {
  // Safe URL fallback for SSR compatibility
  const currentUrl = typeof window !== 'undefined' ? window.location.href : canonical || 'https://intwari.com';
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="INTWARI Knode" />
      <meta name="language" content="English" />

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

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
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