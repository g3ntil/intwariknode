# SEO Quick Test Checklist - INTWARI Knode

**Purpose**: Verify SEO is working correctly after project rename  
**Date**: November 10, 2025  
**Status**: Ready for Testing

---

## 🚀 Quick Tests (5 Minutes)

### Test 1: Home Page Meta Tags
```bash
# Start dev server
npm run dev

# Visit: http://localhost:5173
# Right-click → View Page Source (Ctrl+U / Cmd+Option+U)
```

**Look for these in the `<head>` section**:
- [ ] `<title>Web Design & Digital Marketing Agency Rwanda | INTWARI Knode Kigali</title>`
- [ ] `<meta name="author" content="INTWARI Knode" />`
- [ ] `<meta property="og:site_name" content="INTWARI Knode" />`
- [ ] `<meta property="og:title"` includes "INTWARI Knode"
- [ ] `<link rel="canonical" href="https://intwari.com" />`
- [ ] `<script type="application/ld+json">` with structured data

**Expected**: All 6 items present ✅

---

### Test 2: Service Page SEO
```bash
# Visit: http://localhost:5173/web-development
# View Page Source
```

**Look for**:
- [ ] `<title>Web Development Services Rwanda | Professional Website Design Kigali</title>`
- [ ] Unique description (different from home page)
- [ ] `<link rel="canonical" href="https://intwari.com/web-development" />`
- [ ] Structured data with `"serviceType": "Web Development"`

**Expected**: All unique to this page ✅

---

### Test 3: SEO Landing Page
```bash
# Visit: http://localhost:5173/affordable-website-design-rwanda
# View Page Source
```

**Look for**:
- [ ] `<title>` includes "Affordable Website Design Rwanda"
- [ ] Includes "INTWARI Knode" in title
- [ ] Canonical URL: `https://intwari.com/affordable-website-design-rwanda`
- [ ] og:image present

**Expected**: Page loads, all meta tags present ✅

---

### Test 4: Console Verification
```javascript
// Open browser console (F12) on ANY page
// Copy and paste this:

console.table({
  'Page Title': document.title,
  'Site Name': document.querySelector('meta[property="og:site_name"]')?.content,
  'Author': document.querySelector('meta[name="author"]')?.content,
  'Description Length': document.querySelector('meta[name="description"]')?.content?.length,
  'Canonical': document.querySelector('link[rel="canonical"]')?.href,
  'OG Image': document.querySelector('meta[property="og:image"]')?.content ? '✅' : '❌',
  'Structured Data': document.querySelectorAll('script[type="application/ld+json"]').length
});
```

**Expected Output**:
```
┌─────────────────────┬────────────────────────────────────┐
│ Page Title          │ [...includes INTWARI Knode]        │
│ Site Name           │ INTWARI Knode                      │
│ Author              │ INTWARI Knode                      │
│ Description Length  │ 150-160                            │
│ Canonical           │ https://intwari.com/[page]         │
│ OG Image            │ ✅                                  │
│ Structured Data     │ 1 or 2                             │
└─────────────────────┴────────────────────────────────────┘
```

---

### Test 5: All Pages Load
```bash
# Test each route loads without errors:

http://localhost:5173/
http://localhost:5173/about
http://localhost:5173/get-started
http://localhost:5173/web-development
http://localhost:5173/software-development
http://localhost:5173/business-photography
http://localhost:5173/social-media-management
http://localhost:5173/affordable-website-design-rwanda
http://localhost:5173/ecommerce-website-rwanda
http://localhost:5173/digital-marketing-agency-rwanda
http://localhost:5173/web-design-kigali
http://localhost:5173/seo-services-rwanda
http://localhost:5173/branding-agency-rwanda
http://localhost:5173/this-page-does-not-exist (404)
```

**Expected**: 
- [ ] All 14 pages load successfully
- [ ] No 404 errors (except the last one)
- [ ] No console errors
- [ ] Navigation works
- [ ] Footer displays correctly

---

## 🔍 Advanced Tests (15 Minutes)

### Test 6: Sitemap Verification
```bash
# Visit: http://localhost:5173/sitemap.xml
```

**Check for all URLs**:
- [ ] Homepage (`https://intwari.com/`)
- [ ] 4 service pages
- [ ] 2 static pages (about, get-started)
- [ ] 6 SEO landing pages
- [ ] Total: 13 URLs (14 pages minus 404)

**Verify each URL**:
- [ ] Has `<loc>` tag
- [ ] Has `<lastmod>2025-11-10</lastmod>`
- [ ] Has `<changefreq>` (daily/weekly/monthly)
- [ ] Has `<priority>` (0.8-1.0)

---

### Test 7: robots.txt
```bash
# Visit: http://localhost:5173/robots.txt
```

**Should contain**:
```
User-agent: *
Allow: /

Sitemap: https://intwari.com/sitemap.xml
```

---

### Test 8: Build Test
```bash
# Production build
npm run build

# Should succeed with:
# - ✓ built in [time]
# - dist/ folder created
# - No TypeScript errors
# - No build warnings
```

**Check dist folder**:
```bash
ls -la dist/
```

**Should contain**:
- [ ] `index.html`
- [ ] `assets/` folder with CSS/JS
- [ ] No errors during build

---

### Test 9: Preview Production Build
```bash
npm run preview
```

**Test same routes as Test 5 on preview server**
**Expected**: All pages work identically to dev server

---

## 🌐 External SEO Tools (Optional)

### Test 10: Meta Tags Preview
**Tool**: https://metatags.io/

1. Enter any page URL (e.g., `http://localhost:5173/`)
2. Click "Preview"

**Should show**:
- ✅ Title with "INTWARI Knode"
- ✅ Description
- ✅ Image (may not work locally)

---

### Test 11: Facebook OG Preview
**Tool**: https://developers.facebook.com/tools/debug/

**After deployment to intwari.com**:
1. Enter page URL
2. Click "Scrape Again"

**Should show**:
- ✅ og:title
- ✅ og:description
- ✅ og:image
- ✅ og:site_name: "INTWARI Knode"

---

### Test 12: Twitter Card Preview
**Tool**: https://cards-dev.twitter.com/validator

**After deployment**:
1. Enter page URL
2. Click "Preview card"

**Should show**:
- ✅ Large image card
- ✅ Title
- ✅ Description
- ✅ Image

---

### Test 13: Google Rich Results
**Tool**: https://search.google.com/test/rich-results

**Test service pages** (after deployment):
1. Enter URL (e.g., `https://intwari.com/web-development`)
2. Run test

**Should show**:
- ✅ Valid structured data
- ✅ Service schema detected
- ✅ No errors
- ✅ Organization data present

---

## ✅ Final Checklist

### Before Deployment
- [ ] All 14 pages load without errors
- [ ] No console errors in browser
- [ ] All page titles include "INTWARI Knode"
- [ ] Meta descriptions are unique per page
- [ ] Canonical URLs use intwari.com domain
- [ ] Sitemap has all 13 URLs
- [ ] robots.txt configured
- [ ] Build succeeds (`npm run build`)
- [ ] Preview works (`npm run preview`)

### After Deployment to intwari.com
- [ ] Test all 14 pages on production
- [ ] View page source on production
- [ ] Test Facebook sharing debugger
- [ ] Test Twitter card validator
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor indexing status (7 days)

---

## 🐛 Common Issues & Solutions

### Issue 1: Meta tags not showing
**Symptom**: Can't find meta tags in page source
**Solution**: 
1. Use "View Page Source" (not Inspect Element)
2. Check React Helmet is rendering
3. Look in `<head>` section, not `<body>`

### Issue 2: Title shows default
**Symptom**: Title is "Vite + React" or from index.html
**Solution**:
1. Wait for page to fully load
2. React Helmet updates title dynamically
3. Check in final DOM, not initial HTML

### Issue 3: Canonical URL is localhost
**Symptom**: Canonical shows `http://localhost:5173`
**Solution**:
1. Normal in dev mode
2. Will be correct in production
3. Check SEO component uses canonical prop

### Issue 4: Structured data errors
**Symptom**: Google Rich Results shows errors
**Solution**:
1. Check JSON syntax in schema
2. Verify all required fields present
3. Use Google's testing tool for details

### Issue 5: Sitemap 404
**Symptom**: `/sitemap.xml` returns 404
**Solution**:
1. File must be in `/public/` folder
2. Check Vite serves static files
3. Restart dev server

---

## 📊 Success Criteria

### ✅ SEO is working correctly if:
1. All 14 pages load successfully
2. Each page has unique title with "INTWARI Knode"
3. Each page has unique meta description (150-160 chars)
4. All pages have canonical URLs pointing to intwari.com
5. All pages have OG tags (title, description, image, site_name)
6. All pages have Twitter card tags
7. Service pages have structured data (JSON-LD)
8. Sitemap includes all 13 URLs
9. robots.txt allows indexing
10. Build completes without errors
11. No console errors on any page
12. All routes accessible via browser

---

## 🎯 Expected Timeline

### Immediate (Day 1)
- ✅ All meta tags working
- ✅ All pages loading
- ✅ Build succeeds
- ✅ Ready for deployment

### Week 1
- Google/Bing discovers sitemap
- Pages start being crawled
- Coverage report shows pages

### Month 1
- Pages indexed in search engines
- Keywords start appearing in Search Console
- Initial rankings visible

### Months 2-3
- Rankings improve
- More keywords ranking
- Traffic increases

### Months 4-6
- Target: Top 10 for main keywords
- Established presence in Rwanda search results
- Consistent organic traffic

---

## 📞 Need Help?

**If any tests fail**:
1. Check console for errors (F12)
2. Review error messages
3. Check file paths are correct
4. Verify imports are working
5. Restart dev server
6. Clear browser cache

**Documentation**:
- `/README.md` - Main documentation
- `/PROJECT-RENAME-VERIFICATION.md` - Full verification report
- `/SEO-VERIFICATION-COMPLETE.md` - Detailed SEO setup

**Contact**:
- Email: hello@intwari.com
- Instagram: @connectioncafe

---

**Last Updated**: November 10, 2025  
**Version**: 1.0.0  
**Status**: ✅ Ready for Testing
