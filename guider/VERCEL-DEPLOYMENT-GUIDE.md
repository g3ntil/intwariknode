# VERCEL DEPLOYMENT & SEO INDEXING GUIDE

Complete step-by-step guide for deploying INTWARI Knode website to Vercel and ensuring proper SEO indexing.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

Before deploying to Vercel, ensure the following are complete:

### ✅ Code Requirements
- [x] All navigation links converted to React Router Links
- [x] BrowserRouter implemented (not HashRouter)
- [x] vercel.json configured for clean URLs
- [x] All console errors resolved
- [x] Mobile responsiveness tested
- [x] Stats section centered (3 stats)
- [x] Mobile navigation simplified
- [x] Web Development CTA updated to "Get a Free Demo"

### ✅ SEO Files Ready
- [x] `/public/sitemap.xml` - Contains all page URLs
- [x] `/public/robots.txt` - Search engine directives
- [x] `/public/index.html` - Base HTML with meta tags
- [x] All pages have SEO component with metadata
- [x] Domain changed from intwariknode.rw to intwariknode.com

---

## 🚀 DEPLOYMENT TO VERCEL

### Step 1: Prepare Your Repository

1. **Ensure all changes are committed to Git:**
   ```bash
   git status
   git add .
   git commit -m "Ready for Vercel deployment"
   git push origin main
   ```

2. **Verify package.json has correct scripts:**
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```

### Step 2: Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel:**
   - Visit https://vercel.com
   - Sign in with GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** ./
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

4. **Environment Variables (if needed):**
   - No environment variables required for this project
   - Click "Deploy"

5. **Wait for Deployment:**
   - Vercel will build and deploy your site
   - First deployment takes 2-3 minutes
   - You'll get a URL like: `your-project-name.vercel.app`

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? Y
   - Scope: Select your account
   - Link to existing project? N
   - Project name: intwariknode
   - Directory: ./ (press Enter)
   - Override settings? N

5. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

### Step 3: Configure Custom Domain

1. **Add Custom Domain in Vercel:**
   - Go to your project in Vercel Dashboard
   - Click "Settings" → "Domains"
   - Add domain: `intwariknode.com`
   - Add domain: `www.intwariknode.com`

2. **Configure DNS Records:**
   
   In your domain registrar (e.g., Namecheap, GoDaddy):
   
   **For apex domain (intwariknode.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

3. **Wait for DNS propagation:**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours in rare cases
   - Check status at: https://www.whatsmydns.net

### Step 4: Verify Deployment

1. **Check Website Loads:**
   - Visit your production URL
   - Test all pages
   - Verify navigation works
   - Check mobile responsiveness

2. **Test All Routes:**
   - Home: `/`
   - About: `/about`
   - Services: `/web-development`, `/software-development`, etc.
   - Get Started: `/get-started`
   - SEO Pages: `/web-design-kigali`, `/seo-services-rwanda`, etc.

3. **Verify vercel.json is working:**
   - Navigate to any page
   - Refresh the page
   - Should NOT get 404 error

---

## 🔍 SEO INDEXING & GOOGLE SEARCH CONSOLE

### Step 1: Verify Ownership in Google Search Console

1. **Go to Google Search Console:**
   - Visit https://search.google.com/search-console
   - Sign in with Google account

2. **Add Property:**
   - Click "Add Property"
   - Select "URL prefix"
   - Enter: `https://intwariknode.com`

3. **Verify Ownership (Method 1 - HTML File Upload):**
   - Download verification file
   - Place in `/public/` folder
   - Redeploy to Vercel
   - Click "Verify" in Google Search Console

4. **Alternative Verification (Method 2 - Meta Tag):**
   - Copy the meta tag provided
   - Add to `/public/index.html` in `<head>` section:
   ```html
   <meta name="google-site-verification" content="your-verification-code" />
   ```
   - Redeploy to Vercel
   - Click "Verify"

### Step 2: Submit Sitemap

1. **In Google Search Console:**
   - Go to "Sitemaps" in left sidebar
   - Enter sitemap URL: `https://intwariknode.com/sitemap.xml`
   - Click "Submit"

2. **Verify Sitemap:**
   - Wait 5-10 minutes
   - Refresh the page
   - Status should show "Success"
   - Check "Discovered URLs" count

### Step 3: Request Indexing for Key Pages

1. **URL Inspection Tool:**
   - In Google Search Console, click "URL Inspection"
   - Enter your homepage URL
   - Click "Request Indexing"

2. **Priority Pages to Index:**
   - `https://intwariknode.com/` (Homepage)
   - `https://intwariknode.com/web-development`
   - `https://intwariknode.com/web-design-kigali`
   - `https://intwariknode.com/seo-services-rwanda`
   - `https://intwariknode.com/get-started`

3. **Note:** Can only request indexing for a few URLs per day

### Step 4: Verify robots.txt

1. **Test robots.txt:**
   - Go to: `https://intwariknode.com/robots.txt`
   - Should see:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://intwariknode.com/sitemap.xml
   ```

2. **Test in Google Search Console:**
   - Settings → "robots.txt Tester"
   - Verify no blocking rules

---

## 📊 MONITORING & ANALYTICS

### Google Analytics Setup (Recommended)

1. **Create Google Analytics Account:**
   - Go to https://analytics.google.com
   - Create property for intwariknode.com

2. **Get Tracking ID:**
   - Copy your GA4 Measurement ID (G-XXXXXXXXXX)

3. **Add to Website:**
   - Create `/public/google-analytics.js`
   - Add Google Analytics script to `/public/index.html`
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics (Built-in)

1. **Enable in Vercel Dashboard:**
   - Go to project settings
   - Click "Analytics"
   - Enable "Vercel Analytics"

2. **View Metrics:**
   - Real-time visitors
   - Page views
   - Top pages
   - Performance metrics

---

## 🌐 LOCAL BUSINESS SEO (RWANDA)

### Google Business Profile

1. **Create Profile:**
   - Go to https://business.google.com
   - Add business: "INTWARI Knode"
   - Location: Kigali, Rwanda

2. **Optimize Profile:**
   - Add business description
   - Upload logo and photos
   - Add services (Web Development, Software Development, etc.)
   - Add website URL: intwariknode.com
   - Add business hours
   - Add phone number and email

3. **Verify Business:**
   - Follow verification process
   - Usually via postcard to business address

### Social Media Integration

1. **Update Instagram:**
   - Bio link: intwariknode.com
   - Post about website launch
   - Use hashtags: #RwandaTech #KigaliWebDevelopment

2. **Create Business Facebook Page:**
   - Link to website
   - Same branding as website

---

## ✅ POST-DEPLOYMENT CHECKLIST

### Week 1: Immediate Actions

- [ ] Domain is accessible at intwariknode.com
- [ ] SSL certificate is active (https://)
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] robots.txt accessible
- [ ] Key pages requested for indexing

### Week 2-4: Monitoring

- [ ] Check Google Search Console for errors
- [ ] Monitor page indexing status
- [ ] Review search appearance
- [ ] Check mobile usability report
- [ ] Monitor site performance
- [ ] Check Core Web Vitals

### Monthly Maintenance

- [ ] Review analytics data
- [ ] Check for broken links
- [ ] Update content as needed
- [ ] Monitor keyword rankings
- [ ] Check competitor websites
- [ ] Add new blog posts or portfolio items

---

## 🛠️ TROUBLESHOOTING

### Issue: 404 Errors on Page Refresh

**Solution:**
- Verify `vercel.json` is in root directory:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```
- Redeploy to Vercel

### Issue: Sitemap Not Found

**Solution:**
- Ensure `/public/sitemap.xml` exists
- Rebuild project: `npm run build`
- Check `dist/sitemap.xml` is created
- Redeploy to Vercel

### Issue: Slow Indexing

**Solution:**
- Wait 2-4 weeks for natural indexing
- Create backlinks from social media
- Submit to other search engines (Bing Webmaster Tools)
- Publish fresh content regularly
- Request indexing through Search Console

### Issue: Domain Not Connecting

**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Clear browser cache
- Check domain registrar settings
- Contact Vercel support if needed

---

## 📞 SUPPORT RESOURCES

- **Vercel Documentation:** https://vercel.com/docs
- **Google Search Console Help:** https://support.google.com/webmasters
- **React Router Docs:** https://reactrouter.com
- **Vite Documentation:** https://vitejs.dev

---

## 🎯 EXPECTED RESULTS TIMELINE

### Immediate (0-24 hours)
- Website live on Vercel
- Domain connected
- SSL certificate active

### Week 1-2
- Google starts crawling pages
- First pages appear in search results
- Search Console shows data

### Month 1
- 20-50% of pages indexed
- Ranking for brand name
- Local searches begin appearing

### Month 2-3
- 80-100% of pages indexed
- Ranking for service keywords
- Increased organic traffic

### Month 3-6
- Strong rankings for target keywords
- Consistent organic traffic
- High visibility for Rwanda/Kigali searches

---

## ✨ OPTIMIZATION TIPS

1. **Content Updates:**
   - Add blog section with Rwanda tech news
   - Create case studies of local clients
   - Update portfolio regularly

2. **Technical SEO:**
   - Maintain fast page load times
   - Keep Core Web Vitals in green
   - Ensure mobile-first design

3. **Local SEO:**
   - Get listed in Rwanda business directories
   - Partner with local organizations
   - Create location-specific content

4. **Link Building:**
   - Guest post on tech blogs
   - Partner with complementary businesses
   - Get featured in local news/media

---

**Last Updated:** November 2025  
**Website:** intwariknode.com  
**Deployment Platform:** Vercel  
**Framework:** React + Vite

---

## 🚨 IMPORTANT NOTES

- Keep this guide updated as you make changes
- Document any custom configurations
- Maintain backup of all files
- Test all changes in preview before deploying to production
- Use Vercel's preview deployments for testing

**Your website is now ready for production deployment!** 🎉
