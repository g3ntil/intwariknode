# 📦 Package.json Update Instructions for SSG

## 🎯 Overview
This guide provides step-by-step instructions to manually update your `package.json` file to support Static Site Generation (SSG) for SEO optimization.

---

## 📋 Manual Update Instructions

### Step 1: Locate the Scripts Section

Open your `package.json` file and find the `"scripts"` section. It currently looks like this:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Step 2: Replace the Build Script

**IMPORTANT**: Pay attention to commas and formatting!

Replace the **entire scripts section** with the following:

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

### Step 3: Verify Your Changes

Ensure:
- ✅ Every line except the last has a comma
- ✅ The last item (`"preview"`) has NO comma
- ✅ All quotes are properly matched
- ✅ Proper indentation (2 spaces)

---

## 🔍 Detailed Explanation of Each Script

### `"dev": "vite"`
**Purpose**: Start development server  
**When to use**: During local development  
**Command**: `npm run dev`

---

### `"build": "npm run build:client && npm run build:server && npm run build:prerender"`
**Purpose**: Main build command that runs all three build steps in sequence  
**When to use**: Production deployment  
**Command**: `npm run build`

**What it does:**
1. First runs `build:client` → Creates client-side bundle
2. Then runs `build:server` → Creates server-side bundle  
3. Finally runs `build:prerender` → Generates static HTML pages

---

### `"build:client": "vite build"`
**Purpose**: Builds the client-side application  
**Output**: Standard Vite build in `/dist`  
**What it creates**:
- `/dist/index.html` (template)
- `/dist/assets/` (JS, CSS bundles)

---

### `"build:server": "vite build --ssr entry-server.tsx --outDir dist/server"`
**Purpose**: Builds the server-side rendering (SSR) entry point  
**Output**: Server bundle in `/dist/server`  
**What it creates**:
- `/dist/server/entry-server.js` (SSR bundle)

**Flags explained:**
- `--ssr`: Enables server-side rendering mode
- `entry-server.tsx`: Entry file for SSR
- `--outDir dist/server`: Output directory for server bundle

---

### `"build:prerender": "node prerender.js"`
**Purpose**: Runs the prerender script to generate static HTML  
**Output**: Static HTML files for all pages  
**What it creates**:
- `/dist/index.html` (homepage)
- `/dist/web-development.html`
- `/dist/software-development.html`
- `/dist/business-photography.html`
- `/dist/social-media-management.html`
- `/dist/about.html`
- `/dist/get-started.html`

**Why it matters:**
- 🚀 **SEO**: Search engines can crawl pre-rendered HTML
- ⚡ **Performance**: Instant page loads
- 📱 **Social Sharing**: Meta tags visible immediately

---

### `"preview": "vite preview"`
**Purpose**: Preview production build locally  
**When to use**: Test production build before deployment  
**Command**: `npm run preview`

---

## 🔧 Complete Build Process Flow

When you run `npm run build`, here's what happens:

```
1. npm run build
   ↓
2. npm run build:client
   → Vite builds client bundle
   → Creates /dist/index.html (template with <!--app-html--> placeholder)
   → Creates /dist/assets/*.js and *.css
   ✅ Client build complete
   ↓
3. npm run build:server
   → Vite builds SSR entry point
   → Creates /dist/server/entry-server.js
   ✅ Server build complete
   ↓
4. npm run build:prerender
   → Node runs prerender.js
   → Reads /dist/index.html template
   → For each route:
     - Calls render() from entry-server.js
     - Generates static HTML
     - Replaces <!--app-html--> with rendered content
     - Saves to /dist/[route].html
   ✅ Pre-rendering complete
   ↓
5. ✅ FULL BUILD COMPLETE
   → Ready for deployment
```

---

## 📁 Expected File Structure After Build

```
dist/
├── index.html                          # Homepage (pre-rendered)
├── web-development.html                # Service page (pre-rendered)
├── software-development.html           # Service page (pre-rendered)
├── business-photography.html           # Service page (pre-rendered)
├── social-media-management.html        # Service page (pre-rendered)
├── about.html                          # About page (pre-rendered)
├── get-started.html                    # Contact page (pre-rendered)
├── assets/
│   ├── index-[hash].js                 # Main JS bundle
│   ├── index-[hash].css                # Main CSS bundle
│   └── [other-chunks]-[hash].js        # Code-split chunks
└── server/
    └── entry-server.js                 # SSR bundle
```

---

## ✅ Verification Steps

After updating `package.json` and running the build:

### 1. Check Build Output
Run `npm run build` and verify you see:

```bash
✓ Client build complete
✓ Server build complete
pre-rendered: dist/index.html
pre-rendered: dist/web-development.html
pre-rendered: dist/software-development.html
pre-rendered: dist/business-photography.html
pre-rendered: dist/social-media-management.html
pre-rendered: dist/about.html
pre-rendered: dist/get-started.html

✅ Pre-rendering complete! All pages generated for SEO.
```

### 2. Verify Static HTML Content
Open any generated HTML file (e.g., `dist/index.html`) and verify:
- ✅ Meta tags are present in `<head>`
- ✅ Content is visible (not just empty `<div id="root"></div>`)
- ✅ Structured data (JSON-LD) is present

### 3. Test SEO Meta Tags
Check each HTML file contains:
```html
<title>INTWARI Knode | ...</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<script type="application/ld+json">{...}</script>
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "Cannot find module 'entry-server.js'"
**Cause**: Server build didn't complete  
**Solution**:
1. Ensure `/entry-server.tsx` exists
2. Run `npm run build:server` separately
3. Check for TypeScript errors

### Issue 2: "template.replace is not a function"
**Cause**: Client build didn't complete  
**Solution**:
1. Run `npm run build:client` first
2. Ensure `/dist/index.html` exists

### Issue 3: Empty HTML files generated
**Cause**: SSR render function not working  
**Solution**:
1. Check `/entry-server.tsx` exports `render` function
2. Verify App component accepts `initialPage` and `isSSR` props

### Issue 4: Scripts run in wrong order
**Cause**: Missing `&&` between commands  
**Solution**: Ensure build script uses `&&` to run sequentially:
```json
"build": "npm run build:client && npm run build:server && npm run build:prerender"
```

---

## 🎯 Testing the Build

### Local Testing
```bash
# 1. Build the project
npm run build

# 2. Preview the build
npm run preview

# 3. Open browser to http://localhost:4173
# 4. View page source - you should see full HTML content
```

### SEO Testing
1. **View Source**: Right-click → "View Page Source"
   - Should see complete HTML, not empty `<div id="root"></div>`
   
2. **Google Rich Results Test**:
   - Visit: https://search.google.com/test/rich-results
   - Enter your deployed URL
   - Verify structured data is detected

3. **Open Graph Debugger**:
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter: https://cards-dev.twitter.com/validator

---

## 📊 Build Performance Metrics

Expected build times (approximate):

| Step | Time | Output Size |
|------|------|-------------|
| Client Build | 10-20s | ~500KB (gzipped) |
| Server Build | 5-10s | ~200KB |
| Prerender | 2-5s | 7 HTML files |
| **Total** | **~20-35s** | **~700KB + HTML** |

---

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run preview &
      - run: # Deploy steps
```

### Netlify/Vercel
**Build Command**: `npm run build`  
**Publish Directory**: `dist`

---

## 📞 Need Help?

If you encounter issues:

1. **Check the console output** for specific error messages
2. **Verify file structure** matches expected layout
3. **Review each script** runs successfully independently
4. **Check Node version** (requires Node 18+)

---

## 🎉 Success Indicators

You've successfully implemented SSG when:

- ✅ Build completes without errors
- ✅ All 7 HTML files are generated in `/dist`
- ✅ Each HTML file contains full content (not empty)
- ✅ Meta tags are present in all HTML files
- ✅ Structured data (JSON-LD) is in all pages
- ✅ Google can crawl and index your pages
- ✅ Social media previews show correct images/text

---

**Last Updated**: November 4, 2025  
**Figma Make Compatible**: Yes  
**Node Version Required**: 18+
