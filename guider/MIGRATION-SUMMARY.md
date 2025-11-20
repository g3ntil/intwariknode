# Migration Summary: Moving to /src Structure

## Overview
Moving all project files from root-level folders to `/src` structure for proper Vite build.

## Status: IN PROGRESS

## Completed Tasks

### 1. Core Files ✅
- [x] `/src/main.tsx` - Created with updated import paths  
- [x] `/src/App.tsx` - Created with updated import paths
- [x] `/src/styles/globals.css` - Created
- [x] `/src/styles/animations.css` - Created
- [x] `/src/styles/effects.css` - Created
- [x] `/src/assets/images.ts` - Created with Unsplash URLs
- [x] `/src/config/keywords.ts` - Created
- [x] `/src/config/seo.ts` - Created
- [x] `/src/lib/supabase.ts` - Created
- [x] `vite.config.ts` - Updated with @ alias pointing to ./src
- [x] `tsconfig.json` - Updated with paths

## Remaining Tasks

### 2. Components to Move
The following need to be copied from `/components` to `/src/components`:

#### With figma:asset imports (need updating):
- [ ] Navigation.tsx - Update logo import to use ../assets/images
- [ ] Footer.tsx - Update logo import  
- [ ] PageLoader.tsx - Update logo import
- [ ] Portfolio.tsx - Update 3 image imports

#### Without special imports (copy as-is):
- [ ] BackgroundDecorations.tsx
- [ ] CTAStrip.tsx
- [ ] CustomCursor.tsx
- [ ] DecorativeDots.tsx
- [ ] FAQ.tsx
- [ ] FloatingSecretButton.tsx
- [ ] FooterSimple.tsx
- [ ] GrainOverlay.tsx
- [ ] Hero.tsx
- [ ] InlineStats.tsx
- [ ] KeywordLinks.tsx
- [ ] PlayfulTooltip.tsx
- [ ] ProcessStrip.tsx
- [ ] QuickContactButton.tsx
- [ ] SEO.tsx
- [ ] SEOKeywords.tsx
- [ ] ScrollProgress.tsx
- [ ] ScrollToTop.tsx
- [ ] SectionBackground.tsx
- [ ] ServicesSnapshot.tsx
- [ ] Stats.tsx
- [ ] Testimonials.tsx
- [ ] WorkPreview.tsx

#### Subfolder - /components/ui (47+ files)
- [ ] Copy entire `/components/ui` folder to `/src/components/ui`

#### Subfolder - /components/figma
- [ ] Copy `/components/figma/ImageWithFallback.tsx` to `/src/components/figma/`

### 3. Pages to Move  
Copy from `/pages` to `/src/pages`:
- [ ] About.tsx
- [ ] AffordableWebsiteDesignRwanda.tsx
- [ ] BrandingAgencyRwanda.tsx
- [ ] BusinessPhotography.tsx
- [ ] DigitalMarketingAgencyRwanda.tsx
- [ ] EcommerceWebsiteRwanda.tsx
- [ ] GetStarted.tsx
- [ ] Home.tsx
- [ ] SEOServicesRwanda.tsx
- [ ] SocialMediaManagement.tsx
- [ ] SoftwareDevelopment.tsx
- [ ] WebDesignKigali.tsx
- [ ] WebDevelopment.tsx

### 4. Cleanup Tasks
- [ ] Delete root `/App.tsx`
- [ ] Delete root `/main.tsx`
- [ ] Delete root `/components` folder
- [ ] Delete root `/pages` folder
- [ ] Delete root `/config` folder
- [ ] Delete root `/lib` folder
- [ ] Delete root `/styles/globals.css` (keep /src/styles/globals.css)

## Import Path Changes

### figma:asset replacements:
```tsx
// OLD
import logo from 'figma:asset/fb4d51127fc4d20ad11b6c21593f6cc57c2a97a5.png';

// NEW  
import { images } from '../assets/images';
// Then use: images.logo
```

### Component imports (in pages):
```tsx
// These will work automatically after migration:
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
// etc.
```

## Build Configuration
- Vite configured with `root: './'` and `@` alias to `./src`
- Entry point: `/src/main.tsx`
- Public dir: `/public`
- Output: `/dist`

## Next Steps
1. Copy all components to `/src/components`
2. Update figma:asset imports in 4 components
3. Copy all pages to `/src/pages`  
4. Test build locally
5. Delete old root files
6. Deploy to Vercel
