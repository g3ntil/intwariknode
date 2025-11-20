import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { Readable } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://intwari.com';
const BUILD_DIR = path.join(__dirname, '..', 'dist');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITEMAP_DIR = path.join(BUILD_DIR, 'sitemaps');

// Ensure sitemap directory exists
fs.ensureDirSync(SITEMAP_DIR);

// Define your routes with more detailed metadata
const routes = [
  // Main pages
  { 
    url: '/', 
    changefreq: 'daily', 
    priority: 1.0,
    lastmod: new Date().toISOString(),
    images: ['/images/og-image.jpg']
  },
  { 
    url: '/about', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/get-started', 
    changefreq: 'weekly', 
    priority: 0.9,
    lastmod: new Date().toISOString()
  },
  
  // Services
  { 
    url: '/web-development', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/software-development', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/business-photography', 
    changefreq: 'weekly', 
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/social-media-management', 
    changefreq: 'weekly', 
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
  
  // SEO landing pages
  { 
    url: '/affordable-website-design-rwanda', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/ecommerce-website-rwanda', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/digital-marketing-agency-rwanda', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/web-design-kigali', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/seo-services-rwanda', 
    changefreq: 'weekly', 
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  { 
    url: '/branding-agency-rwanda', 
    changefreq: 'weekly', 
    priority: 0.7,
    lastmod: new Date().toISOString()
  },
];

// Generate sitemap index
async function generateSitemapIndex(sitemaps) {
  const sitemapIndex = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...sitemaps.map(sitemap => `
      <sitemap>
        <loc>${new URL(sitemap, SITE_URL).href}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`
    ),
    '</sitemapindex>'
  ].join('\n');

  await fs.writeFile(path.join(BUILD_DIR, 'sitemap-index.xml'), sitemapIndex);
  return path.relative(process.cwd(), path.join(BUILD_DIR, 'sitemap-index.xml'));
}

// Generate a single sitemap
async function generateSitemap(routes, filename) {
  const sitemap = new SitemapStream({
    hostname: SITE_URL,
    lastmodDateOnly: false,
    xmlns: {
      // Add image and video support
      image: false,
      video: false,
      news: false,
      xhtml: false,
    },
  });

  const sitemapPath = path.join(SITEMAP_DIR, filename);
  const writeStream = fs.createWriteStream(sitemapPath);
  
  // Pipe the sitemap through gzip
  const pipeline = sitemap.pipe(createGzip()).pipe(writeStream);
  
  // Add routes to sitemap
  for (const route of routes) {
    sitemap.write({
      url: route.url,
      changefreq: route.changefreq,
      priority: route.priority,
      lastmod: route.lastmod || new Date().toISOString(),
      img: route.images ? route.images.map(img => ({ url: img })) : undefined,
    });
  }

  sitemap.end();
  
  // Wait for the sitemap to be written
  await new Promise((resolve, reject) => {
    pipeline.on('finish', resolve);
    pipeline.on('error', reject);
  });

  return path.relative(process.cwd(), sitemapPath);
}

// Main function to generate all sitemaps
async function generateAllSitemaps() {
  try {
    console.log('Generating sitemaps...');
    
    // Split routes into chunks for multiple sitemaps (if needed)
    const CHUNK_SIZE = 1000; // Google's limit is 50,000 URLs per sitemap
    const sitemaps = [];
    
    for (let i = 0; i < routes.length; i += CHUNK_SIZE) {
      const chunk = routes.slice(i, i + CHUNK_SIZE);
      const sitemapPath = await generateSitemap(chunk, `sitemap-${i / CHUNK_SIZE + 1}.xml`);
      sitemaps.push(sitemapPath);
      console.log(`Generated sitemap: ${sitemapPath}`);
    }
    
    // Generate sitemap index
    const sitemapIndexPath = await generateSitemapIndex(sitemaps.map(s => path.basename(s)));
    console.log(`Generated sitemap index: ${sitemapIndexPath}`);
    
    // Copy sitemap to public directory for development
    await fs.copy(path.join(BUILD_DIR, 'sitemap-index.xml'), path.join(PUBLIC_DIR, 'sitemap.xml'));
    
    console.log('Sitemap generation completed successfully!');
    return sitemapIndexPath;
  } catch (error) {
    console.error('Error generating sitemaps:', error);
    process.exit(1);
  }
}

// Execute the sitemap generation
generateAllSitemaps().catch(error => {
  console.error('Failed to generate sitemaps:', error);
  process.exit(1);
});
