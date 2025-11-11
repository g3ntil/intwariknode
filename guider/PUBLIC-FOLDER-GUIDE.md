# 📁 Public Folder Setup Guide - INTWARI Knode

## 🎯 Overview

This guide explains the complete public folder structure for INTWARI Knode's website, including all files needed for optimal SEO indexing, fast loading, and professional deployment.

---

## 📂 Complete Directory Structure

```
public/
├── index.html                 ✅ Main HTML template with SEO meta tags
├── favicon.ico                ⏳ Multi-resolution favicon
├── robots.txt                 ✅ Search engine crawling instructions
├── sitemap.xml                ✅ Site structure for search engines
├── manifest.json              ✅ PWA manifest for mobile installation
├── browserconfig.xml          ✅ Microsoft tile configuration
├── humans.txt                 ✅ Team credits and site information
├── .htaccess                  ✅ Apache server configuration
│
├── assets/                    ⏳ Images, logos, icons
│   ├── README.md              ✅ Asset specifications
│   ├── logo.png               ⏳ Main logo (500x500px)
│   ├── og-image.jpg           ⏳ Social sharing image (1200x630px)
│   │
│   ├── icons/                 ⏳ PWA and favicon icons
│   │   ├── icon-16x16.png
│   │   ├── icon-32x32.png
│   │   ├── icon-72x72.png
│   │   ├── icon-96x96.png
│   │   ├── icon-128x128.png
│   │   ├── icon-144x144.png
│   │   ├── icon-152x152.png
│   │   ├── icon-192x192.png
│   │   ├── icon-384x384.png
│   │   ├── icon-512x512.png
│   │   ├── apple-touch-icon.png (180x180)
│   │   ├── safari-pinned-tab.svg
│   │   ├── shortcut-web.png
│   │   └── shortcut-contact.png
│   │
│   ├── photos/                ⏳ Portfolio and team photos
│   │   ├── portfolio/
│   │   ├── team/
│   │   └── testimonials/
│   │
│   └── screenshots/           ⏳ PWA screenshots
│       ├── homepage.png
│       └── services.png
│
├── fonts/                     ⏳ Custom fonts (optional)
│   ├── inter.woff2
│   └── poppins.woff2
│
└── css/                       ⏳ Additional styles (optional)
    └── main.css

✅ = Created
⏳ = Needs content/images
```

---

## 📝 File-by-File Breakdown

### 1. index.html ✅

**Purpose**: Main HTML template with comprehensive SEO meta tags

**Key Features**:
- ✅ SEO meta tags (title, description, keywords)
- ✅ Open Graph tags for social media
- ✅ Twitter Card tags
- ✅ Geographic tags (Rwanda/Kigali)
- ✅ PWA manifest link
- ✅ Favicon links
- ✅ Structured data (JSON-LD)
- ✅ SSG placeholder comment `<!--app-html-->`

**Location**: `/public/index.html`

**Important**: The `<!--app-html-->` comment is critical for Static Site Generation!

---

### 2. robots.txt ✅

**Purpose**: Instructs search engines on what to crawl

**Key Features**:
- ✅ Allows all search engines (Googlebot, Bingbot, etc.)
- ✅ Disallows admin areas
- ✅ Sitemap location specified
- ✅ Crawl delay settings
- ✅ Blocks malicious bots

**Location**: `/public/robots.txt`

**Test**: Visit `https://yourdomain.com/robots.txt`

---

### 3. sitemap.xml ✅

**Purpose**: Provides site structure to search engines

**Key Features**:
- ✅ All 7 pages listed
- ✅ Priority settings (homepage = 1.0)
- ✅ Change frequency indicators
- ✅ Last modified dates

**Location**: `/public/sitemap.xml`

**Update**: Change lastmod dates when pages are updated

**Submit to**:
- Google Search Console
- Bing Webmaster Tools

---

### 4. manifest.json ✅

**Purpose**: PWA (Progressive Web App) configuration

**Key Features**:
- ✅ App name and description
- ✅ Theme colors (purple #8B7AB8)
- ✅ Icon references (8 sizes)
- ✅ Start URL
- ✅ Display mode (standalone)
- ✅ Shortcuts to key pages

**Location**: `/public/manifest.json`

**Benefits**:
- Add to home screen on mobile
- Splash screen customization
- App-like experience

---

### 5. browserconfig.xml ✅

**Purpose**: Microsoft Windows tile configuration

**Key Features**:
- ✅ Tile images for Windows Start menu
- ✅ Brand color (#8B7AB8)
- ✅ Multiple tile sizes

**Location**: `/public/browserconfig.xml`

**Usage**: Windows users can pin site to Start menu

---

### 6. humans.txt ✅

**Purpose**: Human-readable team and site information

**Key Features**:
- ✅ Team member credits
- ✅ Technology stack
- ✅ Contact information
- ✅ SEO keywords
- ✅ Site statistics

**Location**: `/public/humans.txt`

**Fun fact**: Visit `https://yourdomain.com/humans.txt`

---

### 7. .htaccess ✅

**Purpose**: Apache server configuration (for Apache servers)

**Key Features**:
- ✅ Force HTTPS/SSL
- ✅ SPA routing (redirect to index.html)
- ✅ Security headers (XSS, clickjacking protection)
- ✅ Browser caching rules
- ✅ Gzip compression
- ✅ Clean URLs (remove .html extension)
- ✅ Error document handling

**Location**: `/public/.htaccess`

**Note**: Only works on Apache servers. For Nginx, different config needed.

---

### 8. favicon.ico ⏳

**Purpose**: Browser tab icon

**Specifications**:
- **Format**: ICO (multi-resolution)
- **Sizes**: 16x16, 32x32, 48x48 in one file
- **Location**: `/public/favicon.ico`

**Generate**: Use https://realfavicongenerator.net/

---

### 9. assets/ Directory ⏳

**Purpose**: Store all images, logos, icons

**Required Assets**:

#### logo.png ⏳
- Size: 500x500px
- Format: PNG with transparency
- Usage: Header, footer, social media
- File size: < 100KB

#### og-image.jpg ⏳
- Size: 1200x630px (exact!)
- Format: JPG
- Usage: Facebook, LinkedIn, Twitter shares
- Must include: Brand name, tagline, visual
- File size: < 300KB

#### icons/ directory ⏳
All PWA icons needed:
- 16x16, 32x32, 72x72, 96x96, 128x128
- 144x144, 152x152, 192x192, 384x384, 512x512
- apple-touch-icon.png (180x180)

**Generate all icons**: https://www.pwabuilder.com/imageGenerator

---

## 🚀 Setup Instructions

### Step 1: Files Already Created ✅

The following files are ready to use:
- ✅ index.html
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ manifest.json
- ✅ browserconfig.xml
- ✅ humans.txt
- ✅ .htaccess
- ✅ assets/README.md

### Step 2: Create/Add Images ⏳

You need to create these assets:

1. **Logo (logo.png)**
   - Export from your design tool
   - Size: 500x500px
   - Save to: `/public/assets/logo.png`

2. **Open Graph Image (og-image.jpg)**
   - Create in Canva or Photoshop
   - Size: 1200x630px exactly
   - Include: Logo + "Web Design & Digital Marketing Agency Rwanda"
   - Save to: `/public/assets/og-image.jpg`

3. **Favicon (favicon.ico)**
   - Use: https://realfavicongenerator.net/
   - Upload your logo
   - Download generated package
   - Place favicon.ico in `/public/`

4. **PWA Icons**
   - Use: https://www.pwabuilder.com/imageGenerator
   - Upload your logo (512x512 minimum)
   - Download all generated icons
   - Place in `/public/assets/icons/`

### Step 3: Update URLs

In the following files, replace `https://intwariknode.rw` with your actual domain:

**Files to update**:
- `/public/index.html` (multiple locations)
- `/public/sitemap.xml` (all URLs)
- `/public/manifest.json` (start_url, scope)
- `/config/seo.ts` (already done)

**Find & Replace**:
```
Find: https://intwariknode.rw
Replace: https://youractualdomain.com
```

---

## 🧪 Testing Your Setup

### Test 1: Files Accessibility

After deployment, verify these URLs work:
- ✅ `https://yourdomain.com/`
- ✅ `https://yourdomain.com/robots.txt`
- ✅ `https://yourdomain.com/sitemap.xml`
- ✅ `https://yourdomain.com/manifest.json`
- ✅ `https://yourdomain.com/humans.txt`
- ✅ `https://yourdomain.com/assets/logo.png`
- ✅ `https://yourdomain.com/assets/og-image.jpg`

### Test 2: Meta Tags

Visit your homepage and:
1. View page source (right-click → View Source)
2. Check for:
   - ✅ `<title>` tag with keywords
   - ✅ `<meta name="description">` tag
   - ✅ `<meta property="og:image">` tag
   - ✅ JSON-LD structured data

### Test 3: Social Media Previews

**Facebook Debugger**:
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Click "Scrape Again"
4. Verify image, title, description appear

**Twitter Card Validator**:
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Verify card preview

**LinkedIn Inspector**:
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Verify preview

### Test 4: Google Tools

**Rich Results Test**:
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL
3. Verify structured data is detected

**Mobile-Friendly Test**:
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter your URL
3. Verify mobile responsiveness

**PageSpeed Insights**:
1. Go to: https://pagespeed.web.dev/
2. Enter your URL
3. Check performance scores

### Test 5: PWA

**PWA Test**:
1. Go to: https://www.pwabuilder.com/
2. Enter your URL
3. Check PWA score
4. Verify manifest and icons

---

## 📊 Performance Checklist

### Image Optimization ⏳
- [ ] Logo compressed (< 100KB)
- [ ] OG image compressed (< 300KB)
- [ ] All icons optimized
- [ ] Portfolio photos in WebP format
- [ ] Fallback JPG images provided

### Caching Setup ✅
- [x] .htaccess caching rules configured
- [x] Browser cache headers set
- [x] Static assets cached for 1 year
- [x] HTML not cached

### Security ✅
- [x] HTTPS redirect configured
- [x] Security headers in .htaccess
- [x] XSS protection enabled
- [x] Clickjacking protection enabled

### SEO ✅
- [x] Robots.txt allows crawling
- [x] Sitemap.xml created
- [x] Meta tags on all pages
- [x] Structured data implemented
- [ ] Submitted to Google Search Console
- [ ] Submitted to Bing Webmaster Tools

---

## 🔄 Maintenance

### Monthly Tasks

1. **Update sitemap.xml**
   - Change `<lastmod>` dates when pages update
   - Add new pages to sitemap

2. **Check broken links**
   - Use: https://www.brokenlinkcheck.com/

3. **Monitor performance**
   - Google Search Console
   - Google Analytics
   - PageSpeed Insights

4. **Update content**
   - Refresh portfolio photos
   - Update team photos
   - Add new testimonials

### Quarterly Tasks

1. **Review and update humans.txt**
2. **Check all image optimizations**
3. **Update meta descriptions if needed**
4. **Review security headers**
5. **Test PWA functionality**

---

## 🚨 Common Issues & Solutions

### Issue 1: Robots.txt Not Found
**Solution**: 
- Ensure file is in `/public/` directory
- Check spelling: `robots.txt` (lowercase)
- Clear CDN cache after upload

### Issue 2: Favicon Not Showing
**Solution**:
- Clear browser cache (Ctrl+Shift+R)
- Wait 24 hours for browser cache
- Check file exists at `/public/favicon.ico`
- Verify format is ICO

### Issue 3: Social Media Not Showing Images
**Solution**:
- Use absolute URLs (https://...)
- Ensure image is exactly 1200x630px
- Check file size < 8MB
- Use Facebook Debugger to rescrape

### Issue 4: .htaccess Not Working
**Solution**:
- Only works on Apache servers
- Check if mod_rewrite is enabled
- For Nginx, use different config
- Contact hosting provider

### Issue 5: Sitemap Not Updating
**Solution**:
- Update lastmod dates
- Submit to Google Search Console
- Use "Request Indexing" feature
- Wait 24-48 hours

---

## 🎨 Branding Assets Checklist

### Required Images
- [ ] Logo (500x500 PNG)
- [ ] OG Image (1200x630 JPG)
- [ ] Favicon (ICO multi-res)
- [ ] Icon 72x72
- [ ] Icon 96x96
- [ ] Icon 128x128
- [ ] Icon 144x144
- [ ] Icon 152x152
- [ ] Icon 192x192
- [ ] Icon 384x384
- [ ] Icon 512x512
- [ ] Apple Touch Icon (180x180)
- [ ] PWA Screenshots (2+)

### Optional Images
- [ ] Team photos
- [ ] Portfolio photos
- [ ] Testimonial photos
- [ ] Background images
- [ ] Service illustrations

---

## 🔗 Quick Reference Links

### Generators
- **Favicon**: https://realfavicongenerator.net/
- **PWA Icons**: https://www.pwabuilder.com/imageGenerator
- **OG Image**: https://www.canva.com/ (use 1200x630 template)
- **Robots.txt**: https://www.robotstxt.org/

### Validators
- **HTML**: https://validator.w3.org/
- **CSS**: https://jigsaw.w3.org/css-validator/
- **Structured Data**: https://search.google.com/test/rich-results
- **Mobile-Friendly**: https://search.google.com/test/mobile-friendly

### Optimizers
- **Images**: https://tinypng.com/
- **WebP**: https://squoosh.app/
- **SVG**: https://jakearchibald.github.io/svgomg/

### Testing
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/
- **PageSpeed**: https://pagespeed.web.dev/
- **PWA**: https://www.pwabuilder.com/

---

## 💡 Pro Tips

### Tip 1: Use WebP for Modern Browsers
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description">
</picture>
```

### Tip 2: Lazy Load Images
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### Tip 3: Compress Before Upload
- Always compress images before uploading
- Target: < 100KB for logos, < 300KB for photos
- Use TinyPNG or Squoosh

### Tip 4: Test on Multiple Devices
- Test on iPhone, Android, tablet
- Test in Chrome, Firefox, Safari, Edge
- Use Chrome DevTools device emulator

### Tip 5: Monitor Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 📞 Need Help?

If you need assistance:

**Contact**: hello@intwariknode.rw  
**Instagram**: @connectioncafe  
**Website**: https://intwariknode.rw

**Documentation**:
- `/SEO-IMPLEMENTATION-GUIDE.md` - Full SEO guide
- `/SEO-QUICK-START.md` - Quick reference
- `/public/assets/README.md` - Asset specifications

---

## ✅ Final Checklist

Before going live:

### Files
- [x] index.html created with SEO tags
- [x] robots.txt uploaded
- [x] sitemap.xml uploaded
- [x] manifest.json uploaded
- [x] .htaccess uploaded
- [ ] favicon.ico created
- [ ] All PWA icons created

### Images
- [ ] Logo uploaded
- [ ] OG image created
- [ ] All icons generated
- [ ] Screenshots captured

### Configuration
- [ ] Update all URLs to production domain
- [ ] Test all file URLs
- [ ] Verify social media previews
- [ ] Test PWA installation

### SEO
- [ ] Submit sitemap to Google
- [ ] Set up Google Analytics
- [ ] Create Google Business Profile
- [ ] Test rich results
- [ ] Test mobile-friendly

---

**Last Updated**: November 4, 2025  
**Version**: 1.0  
**Status**: Ready for Production ✅
