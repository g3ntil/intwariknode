# 🧪 Website Testing Guide

## Quick 2-Minute Test

### 1️⃣ Scroll to Top Fix
```
✅ TEST: Footer Link Scroll
1. Go to homepage (https://intwariknode.com)
2. Scroll all the way to bottom
3. Click "About" in footer
4. → Page should load at TOP (not scrolled down) ✓

✅ TEST: Service Link Scroll
1. Navigate to any service page
2. Scroll to footer
3. Click "Web Development" link
4. → New page loads at TOP ✓
```

### 2️⃣ Navigation Buttons
```
✅ TEST: Get Started Button
1. Click "Get Started" in navbar
2. → Should navigate to /get-started ✓

✅ TEST: Services Dropdown (Desktop)
1. Hover over "Services" in navbar
2. → Dropdown menu appears ✓
3. Click any service
4. → Navigates to service page ✓
```

### 3️⃣ Mobile Navigation
```
✅ TEST: Mobile Menu
1. Resize browser < 1024px OR open on mobile
2. Click hamburger menu (☰)
3. → Menu expands ✓
4. Click "Services"
5. → Sub-menu expands ✓
6. Click a service
7. → Menu closes and navigates ✓
```

### 4️⃣ Forms & Interactive Elements
```
✅ TEST: Contact Form
1. Go to /get-started
2. Fill out form:
   - Select service(s)
   - Enter name, email
   - Select budget & timeline
   - Add project details
3. Click Submit
4. → Should see success message (if RLS disabled) ✓

✅ TEST: Service Selection
1. Click service cards
2. → Should toggle selection (checkmark) ✓
```

### 5️⃣ External Links
```
✅ TEST: Email Links
1. Click any email icon/link
2. → Opens email client with intwariknode@gmail.com ✓

✅ TEST: Social Media
1. Click Instagram icon
2. → Opens instagram.com/intwariknode in new tab ✓
```

## 📱 Mobile-Specific Tests

### Touch Interactions
```
1. Tap buttons → Should have tap feedback ✓
2. Swipe navigation → Should work smoothly ✓
3. Form inputs → Should focus and show keyboard ✓
4. Scroll → Should be smooth ✓
```

### Mobile Layout
```
1. Hero text → Should be readable (not tiny) ✓
2. Images → Should load and fit screen ✓
3. Footer → Should be organized (not cramped) ✓
4. CTA buttons → Should be tappable (not too small) ✓
```

## 🔍 SEO Verification

### Page Source Check
```
1. Go to any page
2. Right-click → "View Page Source"
3. Verify present:
   ✓ <title> tag with page-specific title
   ✓ <meta name="description"> with unique description
   ✓ <meta name="keywords"> with Rwanda/Kigali keywords
   ✓ <meta property="og:*"> for social sharing
   ✓ <script type="application/ld+json"> for structured data
   ✓ <link rel="canonical"> with correct URL
```

### Google Tools
```
1. Google Search Console
   - Submit sitemap.xml
   - Check for crawl errors

2. Google Rich Results Test
   - Test: https://search.google.com/test/rich-results
   - Paste your URL
   - Verify structured data ✓

3. PageSpeed Insights
   - Test: https://pagespeed.web.dev/
   - Check performance scores
```

## 🎨 Visual/UI Tests

### Animations
```
✅ Hero gradient → Should animate smoothly
✅ Decorative dots → Should float/pulse
✅ Button hovers → Should scale/change color
✅ Scroll progress → Should show at top
✅ Page transitions → Should be smooth
```

### Responsive Design
```
Breakpoints to test:
- 📱 Mobile: 375px, 414px (iPhone)
- 📱 Tablet: 768px, 834px (iPad)
- 💻 Desktop: 1024px, 1440px, 1920px

At each size:
✓ No horizontal scroll
✓ Text readable
✓ Buttons accessible
✓ Images properly sized
```

## ⚠️ Common Issues to Check

### Broken Links
```
1. Use browser console (F12)
2. Navigate through site
3. Check for:
   ❌ 404 errors
   ❌ Console warnings
   ❌ Failed resource loads
```

### Performance
```
1. Open DevTools → Network tab
2. Reload page
3. Check:
   ✓ Page loads < 3 seconds
   ✓ Images optimized
   ✓ No massive JS bundles
```

### Accessibility
```
1. Use keyboard only (Tab key)
2. Check:
   ✓ Can navigate all links
   ✓ Can activate buttons
   ✓ Focus visible on elements
   ✓ Forms submittable via Enter key
```

## 🚀 Deployment Tests

### After Deploying to Vercel
```
1. Test production URL
2. Verify:
   ✓ All routes work (no 404s)
   ✓ Images load correctly
   ✓ API calls work (Supabase)
   ✓ Environment variables set
   ✓ vercel.json config active
```

### Cross-Browser Testing
```
Test on:
✓ Chrome (Windows/Mac)
✓ Safari (Mac/iPhone)
✓ Firefox
✓ Edge
✓ Mobile Chrome (Android)
✓ Mobile Safari (iOS)
```

## 📊 Analytics Verification

### Google Analytics (if installed)
```
1. Add GA tracking code
2. Visit pages
3. Check real-time reports
4. Verify events firing
```

### Conversion Tracking
```
1. Fill contact form
2. Check if conversion tracked
3. Verify goal completions
```

## 🎯 User Journey Tests

### Scenario 1: New Visitor
```
1. Land on homepage
2. Read hero section
3. Scroll to see services
4. Click a service
5. Read service details
6. Click "Get Started"
7. Fill form
8. Submit
→ Should be smooth, no confusion ✓
```

### Scenario 2: Mobile User
```
1. Open on mobile
2. Navigate using menu
3. View portfolio
4. Tap email link
5. Close email app
6. Return to site
→ Should maintain state ✓
```

### Scenario 3: Direct Landing
```
1. Land on /web-development directly
2. Navigate to other pages
3. Use footer links
4. Return home
→ All navigation works ✓
```

## 📋 Pre-Launch Checklist

```
Before going live:

Content:
[ ] All text proofread
[ ] All images have alt text
[ ] Contact info correct
[ ] Prices accurate (if shown)
[ ] Links tested

Technical:
[ ] Forms submit successfully
[ ] Email addresses work
[ ] Phone numbers correct
[ ] SSL certificate active
[ ] Sitemap submitted
[ ] robots.txt configured

SEO:
[ ] Meta tags on all pages
[ ] Structured data present
[ ] Canonical URLs set
[ ] 404 page exists
[ ] Redirects working

Performance:
[ ] Images optimized
[ ] Code minified
[ ] Caching enabled
[ ] CDN configured
[ ] Load time < 3s

Legal:
[ ] Privacy policy (if needed)
[ ] Terms of service (if needed)
[ ] Cookie consent (if needed)
[ ] Copyright notice present
```

## 🔧 Troubleshooting

### Issue: Page doesn't scroll to top
```
Solution:
1. Check ScrollToTopOnMount is imported
2. Verify it's inside <Router>
3. Clear browser cache
4. Test in incognito mode
```

### Issue: Forms not submitting
```
Solution:
1. Check Supabase RLS disabled
2. Verify .env.local has correct keys
3. Check browser console for errors
4. Test network tab for API calls
```

### Issue: Links not working
```
Solution:
1. Ensure using <Link to="/path"> not <a href>
2. Check routes defined in App.tsx
3. Verify BrowserRouter (not HashRouter)
4. Test with different browsers
```

## ✅ Success Criteria

Website is ready when:
- ✅ All pages load correctly
- ✅ All links navigate properly
- ✅ Forms submit successfully
- ✅ Mobile experience smooth
- ✅ SEO tags present
- ✅ No console errors
- ✅ Fast page loads (< 3s)
- ✅ Cross-browser compatible

---

**Happy Testing! 🎉**
