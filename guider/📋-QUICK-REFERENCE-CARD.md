# 📋 QUICK REFERENCE CARD

## INTWARI Knode - Tailwind CSS & SEO

---

## ⚡ Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 🎨 Brand Colors

```tsx
className="bg-light-green"    // #C8E6C9 - Light green
className="bg-dark-teal"      // #0A4A4A - Dark teal (primary)
className="bg-cream"          // #F5F3ED - Cream
className="hover:bg-teal-hover" // #2C7873 - Hover state
```

---

## 🔍 SEO Usage

```tsx
import { SEO } from '../components/SEO';
import { pageMetadata } from '../config/seo';

export function MyPage() {
  return (
    <>
      <SEO {...pageMetadata.myPage} />
      <div>Content</div>
    </>
  );
}
```

---

## 📂 Key Files

```
/src/index.css                 # Tailwind directives
/src/styles/globals.css        # Global styles
/tailwind.config.js            # Tailwind config
/components/SEO.tsx            # SEO component
/config/seo.ts                 # SEO metadata
/public/sitemap.xml            # Sitemap
```

---

## ✅ Quick Test

### Tailwind Test:
```bash
npm run dev
# Visit http://localhost:5173
# Check: Colors, hover effects, responsive design
```

### SEO Test:
```bash
# On any page: Right-click → View Page Source
# Look for: <title>, <meta>, <link canonical>
```

### Console Test:
```javascript
// In browser console (F12):
console.table({
  title: document.title,
  description: document.querySelector('meta[name="description"]')?.content,
  canonical: document.querySelector('link[rel="canonical"]')?.href
});
```

---

## 🌐 All Pages (14)

✅ Home `/`  
✅ About `/about`  
✅ Get Started `/get-started`  
✅ Web Development `/web-development`  
✅ Software Development `/software-development`  
✅ Business Photography `/business-photography`  
✅ Social Media Management `/social-media-management`  
✅ Affordable Website Design `/affordable-website-design-rwanda`  
✅ Ecommerce Website `/ecommerce-website-rwanda`  
✅ Digital Marketing Agency `/digital-marketing-agency-rwanda`  
✅ Web Design Kigali `/web-design-kigali`  
✅ SEO Services `/seo-services-rwanda`  
✅ Branding Agency `/branding-agency-rwanda`  
✅ 404 Page `/*`

---

## 🎯 Target Keywords

- kwamamaza mu rwanda
- digital marketing rwanda
- web design kigali
- website development rwanda
- seo services rwanda
- branding agency rwanda

**Goal:** Top 10 in Rwanda

---

## 🚀 Deployment

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for production"
git push

# 2. Deploy on Vercel
# - Import repo
# - Framework: Vite
# - Build: npm run build
# - Output: dist

# 3. Add domain: intwari.com

# 4. Add env vars:
# VITE_SUPABASE_URL
# VITE_SUPABASE_ANON_KEY
```

---

## 📊 Performance Targets

- Lighthouse Performance: > 90
- Lighthouse SEO: > 95
- First Paint: < 1.5s
- Page Load: < 3s

---

## 📚 Documentation

- `🚀-START-HERE-UPDATED.md` - Main guide
- `🎯-SETUP-COMPLETE-QUICK-START.md` - Detailed setup
- `✅-FINAL-TEST-CHECKLIST.md` - Testing
- `TAILWIND-CSS-SETUP-VERIFIED.md` - Tailwind
- `SEO-VERIFICATION-COMPLETE.md` - SEO

---

## 🆘 Troubleshooting

**Tailwind not working:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails:**
```bash
rm -rf dist
npm run build
```

**Check for errors:**
```bash
# Open console (F12)
# Look for errors
```

---

## ✨ Status

✅ Tailwind CSS v3.4.17  
✅ SEO Optimized  
✅ All Pages Ready  
✅ Production Ready  
✅ Domain: intwari.com

---

**Date:** Nov 10, 2025  
**Version:** 1.0.0  
**Ready to Deploy!** 🚀
