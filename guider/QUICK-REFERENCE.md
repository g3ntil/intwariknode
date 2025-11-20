# ⚡ Quick Reference Card - INTWARI Knode SEO

## 🚀 3 Manual Steps Required

### 1️⃣ Update package.json
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

### 2️⃣ Create Assets
- Logo: 500x500 PNG → `/public/assets/logo.png`
- OG Image: 1200x630 JPG → `/public/assets/og-image.jpg`
- Favicon: Generate → https://realfavicongenerator.net/
- PWA Icons: Generate → https://www.pwabuilder.com/imageGenerator

### 3️⃣ Update URLs
Replace `https://intwariknode.rw` with your domain in:
- `/public/index.html`
- `/public/sitemap.xml`
- `/public/manifest.json`
- `/config/seo.ts`

---

## 💻 Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## 📊 Target Keywords

```
🇷🇼 Rwanda Keywords:
• website design rwanda
• web development rwanda
• digital marketing agency rwanda
• web design kigali
• website developer kigali
```

---

## ✅ Deployment Checklist

- [ ] Update package.json scripts
- [ ] Create logo (500x500)
- [ ] Create OG image (1200x630)
- [ ] Generate favicon
- [ ] Generate PWA icons (8 sizes)
- [ ] Update domain URLs
- [ ] Run `npm run build`
- [ ] Test build output
- [ ] Deploy to production
- [ ] Submit sitemap to Google

---

## 🔗 Essential Links

**Generators:**
- Favicon: https://realfavicongenerator.net/
- PWA Icons: https://www.pwabuilder.com/imageGenerator
- Image Compress: https://tinypng.com/

**Testing:**
- Google Search Console: https://search.google.com/search-console
- Rich Results: https://search.google.com/test/rich-results
- PageSpeed: https://pagespeed.web.dev/
- Facebook Debugger: https://developers.facebook.com/tools/debug/

---

## 📖 Documentation

| Topic | File |
|-------|------|
| Complete SEO Guide | `/SEO-IMPLEMENTATION-GUIDE.md` |
| Quick Start | `/SEO-QUICK-START.md` |
| Package.json Setup | `/PACKAGE-JSON-INSTRUCTIONS.md` |
| Public Folder | `/PUBLIC-FOLDER-GUIDE.md` |
| Asset Guide | `/public/assets/README.md` |
| Deployment | `/DEPLOYMENT-CHECKLIST.md` |
| Full Setup | `/README-SEO-SETUP.md` |

---

## 📈 Success Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| Indexed Pages | 7 | Week 1 |
| Top 3 Rankings | 5+ | Month 3-6 |
| Organic Traffic | 1,000/mo | Month 6 |
| Monthly Leads | 50+ | Month 6 |

---

## 🆘 Quick Troubleshooting

**Build fails?**
- Check Node version: `node --version` (needs 18+)
- Run: `npm install`

**Empty HTML?**
- Verify `<!--app-html-->` in index.html
- Check entry-server.tsx exists

**Images not loading?**
- Verify files in `/public/assets/`
- Use absolute paths: `/assets/logo.png`

---

## ✨ What's Included

✅ SEO meta tags on all 7 pages  
✅ Structured data (Schema.org)  
✅ Static Site Generation (SSG)  
✅ Complete public folder  
✅ PWA manifest  
✅ Security headers  
✅ 2,000+ lines of documentation  

---

## 📞 Support

**Email**: hello@intwariknode.rw  
**Instagram**: @connectioncafe

---

**Last Updated**: November 4, 2025  
**Status**: Ready 🚀
