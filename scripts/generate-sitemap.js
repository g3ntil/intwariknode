const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Define your site URL
const siteUrl = 'https://intwari.com';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/get-started', changefreq: 'weekly', priority: 0.9 },
  { url: '/web-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/software-development', changefreq: 'weekly', priority: 0.8 },
  { url: '/business-photography', changefreq: 'weekly', priority: 0.7 },
  { url: '/social-media-management', changefreq: 'weekly', priority: 0.7 },
  { url: '/affordable-website-design-rwanda', changefreq: 'weekly', priority: 0.8 },
  { url: '/ecommerce-website-rwanda', changefreq: 'weekly', priority: 0.8 },
  { url: '/digital-marketing-agency-rwanda', changefreq: 'weekly', priority: 0.8 },
  { url: '/web-design-kigali', changefreq: 'weekly', priority: 0.8 },
  { url: '/seo-services-rwanda', changefreq: 'weekly', priority: 0.8 },
  { url: '/branding-agency-rwanda', changefreq: 'weekly', priority: 0.7 },
];

// Create sitemap
async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: siteUrl,
      lastmodDateOnly: false,
      xmlns: true
    });

    const publicPath = path.join(__dirname, '..', 'public');
    const sitemapPath = path.join(publicPath, 'sitemap.xml');
    
    const writeStream = fs.createWriteStream(sitemapPath);
    sitemap.pipe(writeStream);

    // Add routes to sitemap
    routes.forEach(route => {
      sitemap.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
        lastmod: new Date().toISOString()
      });
    });

    sitemap.end();

    await streamToPromise(sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
