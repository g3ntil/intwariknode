# 🚀 Deployment Checklist - INTWARI Knode

## 📋 Pre-Deployment Checklist

Use this checklist to ensure everything is ready before deploying to production.

---

## ✅ Phase 1: Code & Configuration (COMPLETED)

### SEO Implementation ✅
- [x] SEO component created (`/components/SEO.tsx`)
- [x] SEO configuration file (`/config/seo.ts`)
- [x] All pages updated with SEO metadata
- [x] Structured data (Schema.org) implemented
- [x] Meta tags for all pages (title, description, OG, Twitter)
- [x] Geographic targeting (Rwanda/Kigali)

### Static Site Generation ✅
- [x] `prerender.js` created
- [x] `entry-server.tsx` created
- [x] `main.tsx` created with hydration
- [x] `App.tsx` updated for SSR support

### Public Folder ✅
- [x] `robots.txt` created
- [x] `sitemap.xml` created
- [x] `manifest.json` created (PWA)
- [x] `browserconfig.xml` created
- [x] `humans.txt` created
- [x] `.htaccess` created (Apache config)
- [x] `index.html` created with SEO tags

### Documentation ✅
- [x] SEO Implementation Guide
- [x] Package.json Instructions
- [x] Index.html Update Instructions
- [x] SEO Quick Start Guide
- [x] Public Folder Guide
- [x] Assets README

---

## ⏳ Phase 2: Manual Configuration Required

### Step 1: Update package.json Scripts ⏳
**File**: `/package.json`

Replace scripts section:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "npm run build:client && npm run build:server && npm run build:prerender",
    "build:client": "vite build",
    "build:server": "vite build --ssr entry-server.tsx --outDir dist/server",
    "build:prerender": "node prerender.js",
    "preview": "vite preview"
  }
}
```

**Status**: ⏳ Needs manual update  
**Instructions**: See `/PACKAGE-JSON-INSTRUCTIONS.md`

---

### Step 2: Create Assets ⏳

#### Required Images:

**1. Logo (logo.png)**
- [ ] Create 500x500px PNG with transparency
- [ ] Place in `/public/assets/logo.png`
- [ ] File size < 100KB

**2. Open Graph Image (og-image.jpg)**
- [ ] Create 1200x630px JPG
- [ ] Include brand name + tagline
- [ ] Place in `/public/assets/og-image.jpg`
- [ ] File size < 300KB

**3. Favicon (favicon.ico)**
- [ ] Generate at https://realfavicongenerator.net/
- [ ] Download and place in `/public/favicon.ico`
- [ ] Multi-resolution (16x16, 32x32, 48x48)

**4. PWA Icons**
- [ ] Generate at https://www.pwabuilder.com/imageGenerator
- [ ] Create all sizes: 72, 96, 128, 144, 152, 192, 384, 512
- [ ] Place in `/public/assets/icons/`
- [ ] Include Apple Touch Icon (180x180)

**Status**: ⏳ Needs creation  
**Instructions**: See `/public/assets/README.md`

---

### Step 3: Update Domain URLs ⏳

Replace `https://intwariknode.rw` with your actual domain in:

**Files to update**:
- [ ] `/public/index.html` (multiple locations)
- [ ] `/public/sitemap.xml` (all <loc> tags)
- [ ] `/public/manifest.json` (start_url, icons paths)
- [ ] `/config/seo.ts` (siteConfig.domain)

**Find & Replace**:
```
Find: https://intwariknode.rw
Replace: https://youractualdomain.com
```

**Status**: ⏳ Needs update

---

## 🧪 Phase 3: Testing

### Local Testing ⏳

**1. Build Test**
```bash
npm run build
```
Expected output:
```
✓ Client build complete
✓ Server build complete
pre-rendered: dist/index.html
pre-rendered: dist/web-development.html
[... all 7 pages ...]
✅ Pre-rendering complete!
```

- [ ] Build completes without errors
- [ ] All 7 HTML files generated in `/dist`
- [ ] Each HTML file contains full content

**2. Preview Test**
```bash
npm run preview
```
- [ ] Site loads at http://localhost:4173
- [ ] All pages accessible
- [ ] No console errors
- [ ] Navigation works

**3. View Source Test**
- [ ] Right-click → "View Page Source"
- [ ] Full HTML content visible (not empty)
- [ ] Meta tags present in `<head>`
- [ ] JSON-LD structured data present

---

### SEO Testing ⏳

**1. Meta Tags Validator**
- [ ] Visit https://metatags.io/
- [ ] Enter your URL (after deployment)
- [ ] Verify all tags appear correctly

**2. Rich Results Test**
- [ ] Visit https://search.google.com/test/rich-results
- [ ] Enter your URL
- [ ] Verify structured data detected
- [ ] No errors or warnings

**3. Mobile-Friendly Test**
- [ ] Visit https://search.google.com/test/mobile-friendly
- [ ] Enter your URL
- [ ] Verify mobile responsiveness
- [ ] No usability issues

**4. PageSpeed Insights**
- [ ] Visit https://pagespeed.web.dev/
- [ ] Enter your URL
- [ ] Target: 90+ score for both mobile and desktop
- [ ] Green Core Web Vitals

---

### Social Media Testing ⏳

**1. Facebook Debugger**
- [ ] Visit https://developers.facebook.com/tools/debug/
- [ ] Enter your URL
- [ ] Click "Scrape Again"
- [ ] Verify image, title, description

**2. Twitter Card Validator**
- [ ] Visit https://cards-dev.twitter.com/validator
- [ ] Enter your URL
- [ ] Verify card preview
- [ ] Check image displays

**3. LinkedIn Inspector**
- [ ] Visit https://www.linkedin.com/post-inspector/
- [ ] Enter your URL
- [ ] Verify preview
- [ ] Test share functionality

---

### PWA Testing ⏳

**1. PWA Builder Test**
- [ ] Visit https://www.pwabuilder.com/
- [ ] Enter your URL
- [ ] Check PWA score
- [ ] Verify manifest detected

**2. Lighthouse Audit**
- [ ] Open Chrome DevTools
- [ ] Go to Lighthouse tab
- [ ] Run audit
- [ ] Target: 90+ on all metrics

**3. Install Test**
- [ ] Visit site on mobile device
- [ ] Check for "Add to Home Screen" prompt
- [ ] Install and test
- [ ] Verify app icon and splash screen

---

## 🌐 Phase 4: Deployment

### Deployment Steps ⏳

**1. Build for Production**
```bash
npm run build
```

**2. Verify Build Output**
```
dist/
├── index.html (pre-rendered)
├── web-development.html (pre-rendered)
├── [... all pages ...]
├── assets/
└── server/
```

**3. Deploy to Hosting**

**Option A: Netlify**
- [ ] Connect GitHub repository
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Deploy

**Option B: Vercel**
- [ ] Import Git repository
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Deploy

**Option C: Custom Server**
- [ ] Upload `dist` folder contents
- [ ] Configure `.htaccess` (if Apache)
- [ ] Set up SSL certificate
- [ ] Point domain to server

**4. Verify Deployment**
- [ ] Site accessible at production URL
- [ ] All pages load correctly
- [ ] HTTPS working
- [ ] No mixed content warnings

---

## 📊 Phase 5: Post-Deployment

### Google Services Setup ⏳

**1. Google Search Console**
- [ ] Go to https://search.google.com/search-console
- [ ] Add property (your domain)
- [ ] Verify ownership (HTML file method)
- [ ] Submit sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Request indexing for all pages

**2. Google Analytics 4**
- [ ] Go to https://analytics.google.com
- [ ] Create new property
- [ ] Get tracking ID
- [ ] Add tracking code to site
- [ ] Test data collection

**3. Google Business Profile**
- [ ] Go to https://business.google.com
- [ ] Create/claim listing
- [ ] Complete all information:
  - Name: INTWARI Knode
  - Category: Web Design Company
  - Address: Kigali, Rwanda
  - Phone: +250 788 123 456
  - Website: your URL
  - Services: List all 4 services
- [ ] Upload photos (10+)
- [ ] Verify business

---

### Bing Webmaster Tools ⏳
- [ ] Go to https://www.bing.com/webmasters
- [ ] Add your site
- [ ] Import from Google Search Console (faster)
- [ ] Submit sitemap
- [ ] Verify URL inspection

---

### Social Media Setup ⏳

**1. Instagram**
- [ ] Update bio with website URL
- [ ] Add link in posts
- [ ] Share launch announcement

**2. Facebook Business Page**
- [ ] Create/update page
- [ ] Add website URL
- [ ] Complete About section
- [ ] Share launch post

**3. LinkedIn Company Page**
- [ ] Create/update page
- [ ] Add website URL
- [ ] Complete company details
- [ ] Share launch update

**4. Twitter/X**
- [ ] Update profile with URL
- [ ] Pin tweet about launch
- [ ] Share announcement

---

## 🔍 Phase 6: Monitoring & Optimization

### Week 1 Tasks ⏳

**Daily**:
- [ ] Check Google Search Console for errors
- [ ] Monitor Google Analytics traffic
- [ ] Check for any 404 errors
- [ ] Verify all pages indexing

**End of Week**:
- [ ] Review performance metrics
- [ ] Check first keyword rankings
- [ ] Analyze user behavior
- [ ] Optimize any issues

---

### Month 1 Tasks ⏳

**Weekly**:
- [ ] Monitor keyword rankings
- [ ] Track organic traffic growth
- [ ] Review bounce rates
- [ ] Check conversion rates

**Monthly**:
- [ ] Publish blog posts (2-4)
- [ ] Update portfolio with new work
- [ ] Collect client testimonials
- [ ] Build local citations

---

### Quarterly Tasks ⏳

**Every 3 Months**:
- [ ] Comprehensive SEO audit
- [ ] Update meta descriptions
- [ ] Refresh content
- [ ] Review and update pricing
- [ ] Add new portfolio items
- [ ] Update team photos
- [ ] Check all external links
- [ ] Update sitemap lastmod dates

---

## 📈 Success Metrics

### Target Metrics (First 6 Months)

| Metric | Target | How to Track |
|--------|--------|--------------|
| Organic Traffic | 1,000/mo | Google Analytics |
| Keyword Rankings (Top 3) | 5+ | Google Search Console |
| Conversion Rate | 5% | Google Analytics Goals |
| Bounce Rate | <50% | Google Analytics |
| Page Load Speed | <3s | PageSpeed Insights |
| Monthly Leads | 50+ | Form submissions |

---

## 🚨 Troubleshooting

### Issue: Build Fails
**Check**:
- [ ] Node version (needs 18+)
- [ ] All dependencies installed
- [ ] No TypeScript errors
- [ ] Files exist: prerender.js, entry-server.tsx

### Issue: Pages Not Indexing
**Check**:
- [ ] Sitemap submitted to Google
- [ ] robots.txt allows crawling
- [ ] No noindex tags
- [ ] Request indexing in Search Console

### Issue: Social Previews Not Working
**Check**:
- [ ] OG image is 1200x630px
- [ ] Using absolute URLs (https://)
- [ ] Image file size < 8MB
- [ ] Rescrape in Facebook Debugger

### Issue: PWA Not Installing
**Check**:
- [ ] manifest.json accessible
- [ ] All icons present
- [ ] HTTPS enabled
- [ ] Service worker registered

---

## 📞 Support Resources

### Documentation
- 📖 `/SEO-IMPLEMENTATION-GUIDE.md` - Full SEO guide
- 📖 `/SEO-QUICK-START.md` - Quick reference
- 📖 `/PACKAGE-JSON-INSTRUCTIONS.md` - Build setup
- 📖 `/INDEX-HTML-UPDATE.md` - HTML configuration
- 📖 `/PUBLIC-FOLDER-GUIDE.md` - Public folder details
- 📖 `/public/assets/README.md` - Asset specifications

### Tools & Services
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Favicon Generator**: https://realfavicongenerator.net/
- **PWA Builder**: https://www.pwabuilder.com/

### Contact
- **Email**: hello@intwariknode.rw
- **Instagram**: @connectioncafe

---

## ✅ Final Pre-Launch Checklist

### Critical Items
- [ ] Package.json scripts updated
- [ ] All assets created (logo, OG image, icons)
- [ ] Domain URLs updated everywhere
- [ ] Build test passes
- [ ] All pages pre-rendered successfully
- [ ] HTTPS configured
- [ ] No console errors

### SEO Items
- [ ] Meta tags on all pages
- [ ] Structured data implemented
- [ ] Sitemap.xml ready
- [ ] Robots.txt configured
- [ ] All images have alt text

### Performance Items
- [ ] Images compressed
- [ ] Caching configured
- [ ] Gzip compression enabled
- [ ] Core Web Vitals pass

### Launch Day
- [ ] Deploy to production
- [ ] Verify all pages load
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Announce on social media
- [ ] Send email to clients
- [ ] Update email signatures

---

## 🎉 Post-Launch

**Congratulations on launching your SEO-optimized website!**

### Immediate Next Steps:
1. ✅ Monitor Google Search Console daily
2. ✅ Track first analytics data
3. ✅ Respond to any technical issues
4. ✅ Collect early feedback
5. ✅ Plan content calendar

### First Month Goals:
- 🎯 Get indexed on Google
- 🎯 Rank for brand name
- 🎯 Collect first reviews
- 🎯 Publish first blog posts
- 🎯 Generate first organic leads

---

**Last Updated**: November 4, 2025  
**Version**: 1.0  
**Status**: Ready for Deployment 🚀
