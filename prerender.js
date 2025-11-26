const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// List of all routes to prerender
const routes = [
  '/',
  '/about',
  '/get-started',
  '/web-development',
  '/software-development',
  '/business-photography',
  '/social-media-management',
  '/affordable-website-design-rwanda',
  '/ecommerce-website-rwanda',
  '/digital-marketing-agency-rwanda',
  '/web-design-kigali',
  '/seo-services-rwanda',
  '/branding-agency-rwanda'
];

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy the built index.html to each route
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

routes.forEach(route => {
  const routeDir = path.join(distDir, route === '/' ? '' : route);
  
  // Create directory for the route
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Write the index.html file for the route
  fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
  
  console.log(`Prerendered: ${route}`);
});

console.log('Prerendering complete!');
