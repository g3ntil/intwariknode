# Assets Directory for INTWARI Knode

## 📁 Directory Structure

```
public/assets/
├── logo.png                    ← Main logo (transparent background, 500x500px)
├── og-image.jpg                ← Social sharing image (1200x630px)
├── icons/                      ← PWA icons and favicons
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-70x70.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-150x150.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-310x150.png
│   ├── icon-310x310.png
│   ├── icon-384x384.png
│   ├── icon-512x512.png
│   ├── apple-touch-icon.png
│   ├── safari-pinned-tab.svg
│   ├── shortcut-web.png
│   └── shortcut-contact.png
├── photos/                     ← Portfolio and team photos
│   ├── team/
│   ├── portfolio/
│   └── testimonials/
└── screenshots/                ← PWA screenshots
    ├── homepage.png
    └── services.png
```

---

## 🖼️ Image Specifications

### Logo (logo.png)
- **Size**: 500x500px
- **Format**: PNG with transparency
- **Background**: Transparent
- **Usage**: Header, footer, social media, manifest
- **File size**: < 100KB

### Open Graph Image (og-image.jpg)
- **Size**: 1200x630px (exact)
- **Format**: JPG
- **Quality**: 85%
- **Usage**: Facebook, LinkedIn, Twitter shares
- **Text overlay**: Include brand name and tagline
- **File size**: < 300KB

### Favicon (favicon.ico)
- **Location**: `/public/favicon.ico`
- **Format**: ICO (multi-resolution)
- **Sizes included**: 16x16, 32x32, 48x48
- **Usage**: Browser tab icon

### PWA Icons
All icons should be:
- **Format**: PNG
- **Background**: Solid color (#8B7AB8 or white)
- **Padding**: 10% safe area
- **Purpose**: any maskable

**Required sizes**:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

### Apple Touch Icon
- **Size**: 180x180px
- **Format**: PNG
- **Background**: Solid color
- **Corner radius**: Square (iOS applies mask)
- **Usage**: iOS home screen

### Microsoft Tiles
- **Sizes**: 70x70, 150x150, 310x150, 310x310
- **Format**: PNG
- **Background**: #8B7AB8 (theme color)
- **Usage**: Windows Start menu

---

## 📸 Photo Guidelines

### Portfolio Photos
- **Location**: `/public/assets/photos/portfolio/`
- **Format**: WebP (primary), JPG (fallback)
- **Sizes**: 
  - Thumbnail: 400x300px
  - Full: 1600x1200px
- **Quality**: 80%
- **Naming**: `project-name-01.webp`

### Team Photos
- **Location**: `/public/assets/photos/team/`
- **Format**: WebP (primary), JPG (fallback)
- **Size**: 800x800px (square)
- **Background**: Professional or transparent
- **Quality**: 85%
- **Naming**: `firstname-lastname.webp`

### Testimonial Photos
- **Location**: `/public/assets/photos/testimonials/`
- **Format**: WebP (primary), JPG (fallback)
- **Size**: 200x200px (square)
- **Style**: Professional headshots
- **Quality**: 85%
- **Naming**: `client-name.webp`

---

## 🎨 Brand Colors

### Primary Colors
- **Purple**: #8B7AB8
- **Mauve**: #C8B6CD
- **Pink**: #E8C5C5
- **Black**: #000000
- **White**: #FFFFFF

### Usage in Icons
- Background: Purple (#8B7AB8) or White
- Logo: Full color on colored background, white on photos
- Safe area: 10% padding from edges

---

## ⚡ Optimization Guidelines

### All Images
- Compress before upload
- Use WebP format when possible
- Provide JPG/PNG fallbacks
- Use descriptive filenames
- Add alt text in code

### Tools
- **TinyPNG**: https://tinypng.com (PNG/JPG compression)
- **Squoosh**: https://squoosh.app (WebP conversion)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (SVG optimization)
- **Favicon Generator**: https://realfavicongenerator.net/

---

## 📱 PWA Screenshots

### Homepage Screenshot
- **File**: `screenshots/homepage.png`
- **Size**: 1280x720px
- **Format**: PNG
- **Content**: Full homepage view
- **Usage**: PWA install prompt

### Services Screenshot
- **File**: `screenshots/services.png`
- **Size**: 1280x720px
- **Format**: PNG
- **Content**: Service page overview
- **Usage**: PWA install prompt

---

## 🔗 Quick Links

### Icon Generators
- **PWA Icons**: https://www.pwabuilder.com/imageGenerator
- **Favicon**: https://realfavicongenerator.net/
- **App Icons**: https://appicon.co/

### Image Optimizers
- **TinyPNG**: https://tinypng.com
- **Squoosh**: https://squoosh.app
- **ImageOptim**: https://imageoptim.com/mac

### Testing Tools
- **Meta Tags**: https://metatags.io/
- **OG Image**: https://www.opengraph.xyz/
- **PWA**: https://www.pwabuilder.com/

---

## ✅ Checklist

Before deploying:
- [ ] Logo uploaded (500x500px PNG)
- [ ] OG image created (1200x630px JPG)
- [ ] Favicon generated (favicon.ico)
- [ ] All PWA icons created (8 sizes)
- [ ] Apple touch icon (180x180px)
- [ ] Microsoft tiles (4 sizes)
- [ ] Portfolio photos optimized
- [ ] Team photos uploaded
- [ ] Screenshots captured
- [ ] All images compressed
- [ ] Alt text added in code

---

## 📞 Need Assets?

If you need help creating any of these assets:
- **Contact**: hello@intwariknode.rw
- **Instagram**: @connectioncafe

---

**Last Updated**: November 4, 2025  
**Maintained by**: INTWARI Knode Team
