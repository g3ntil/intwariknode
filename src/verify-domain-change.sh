#!/bin/bash

# Domain Change Verification Script
# INTWARI Knode - intwariknode.com

echo "🔍 Verifying Domain Change: intwariknode.rw → intwariknode.com"
echo "================================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for issues
ISSUES=0

echo "📝 Checking core configuration files..."
echo ""

# Check config/seo.ts
echo "1. Checking /config/seo.ts..."
if grep -q "intwariknode.rw" config/seo.ts 2>/dev/null; then
    echo -e "${RED}   ❌ Found .rw references in config/seo.ts${NC}"
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}   ✅ config/seo.ts - No .rw references${NC}"
fi

if grep -q "intwariknode.com" config/seo.ts 2>/dev/null; then
    echo -e "${GREEN}   ✅ config/seo.ts - Contains .com domain${NC}"
else
    echo -e "${RED}   ❌ .com domain not found in config/seo.ts${NC}"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# Check public/sitemap.xml
echo "2. Checking /public/sitemap.xml..."
if grep -q "intwariknode.rw" public/sitemap.xml 2>/dev/null; then
    echo -e "${RED}   ❌ Found .rw references in sitemap.xml${NC}"
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}   ✅ sitemap.xml - No .rw references${NC}"
fi

COM_COUNT=$(grep -c "intwariknode.com" public/sitemap.xml 2>/dev/null || echo "0")
if [ "$COM_COUNT" -eq 7 ]; then
    echo -e "${GREEN}   ✅ sitemap.xml - Contains all 7 .com URLs${NC}"
else
    echo -e "${YELLOW}   ⚠️  sitemap.xml - Found $COM_COUNT .com URLs (expected 7)${NC}"
fi
echo ""

# Check public/robots.txt
echo "3. Checking /public/robots.txt..."
if grep -q "intwariknode.rw" public/robots.txt 2>/dev/null; then
    echo -e "${RED}   ❌ Found .rw references in robots.txt${NC}"
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}   ✅ robots.txt - No .rw references${NC}"
fi

if grep -q "intwariknode.com/sitemap.xml" public/robots.txt 2>/dev/null; then
    echo -e "${GREEN}   ✅ robots.txt - Sitemap URL uses .com${NC}"
else
    echo -e "${RED}   ❌ Sitemap URL not updated in robots.txt${NC}"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# Check public/index.html
echo "4. Checking /public/index.html..."
RW_COUNT=$(grep -c "intwariknode.rw" public/index.html 2>/dev/null || echo "0")
if [ "$RW_COUNT" -eq 0 ]; then
    echo -e "${GREEN}   ✅ index.html - No .rw references${NC}"
else
    echo -e "${RED}   ❌ Found $RW_COUNT .rw references in index.html${NC}"
    ISSUES=$((ISSUES + 1))
fi

COM_COUNT=$(grep -c "intwariknode.com" public/index.html 2>/dev/null || echo "0")
echo -e "${GREEN}   ✅ index.html - Found $COM_COUNT .com references${NC}"
echo ""

# Check public/humans.txt
echo "5. Checking /public/humans.txt..."
if grep -q "intwariknode.rw" public/humans.txt 2>/dev/null; then
    echo -e "${RED}   ❌ Found .rw references in humans.txt${NC}"
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}   ✅ humans.txt - No .rw references${NC}"
fi

if grep -q "hello@intwariknode.com" public/humans.txt 2>/dev/null; then
    echo -e "${GREEN}   ✅ humans.txt - Email updated to .com${NC}"
else
    echo -e "${RED}   ❌ Email not updated in humans.txt${NC}"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# Check components/SEO.tsx
echo "6. Checking /components/SEO.tsx..."
if grep -q "intwariknode.rw" components/SEO.tsx 2>/dev/null; then
    echo -e "${RED}   ❌ Found .rw references in SEO.tsx${NC}"
    ISSUES=$((ISSUES + 1))
else
    echo -e "${GREEN}   ✅ SEO.tsx - No .rw references${NC}"
fi

if grep -q "intwariknode.com" components/SEO.tsx 2>/dev/null; then
    echo -e "${GREEN}   ✅ SEO.tsx - Default OG image uses .com${NC}"
else
    echo -e "${RED}   ❌ .com domain not found in SEO.tsx${NC}"
    ISSUES=$((ISSUES + 1))
fi
echo ""

# Summary
echo "================================================================"
echo ""
if [ $ISSUES -eq 0 ]; then
    echo -e "${GREEN}🎉 SUCCESS! All domain references updated correctly!${NC}"
    echo ""
    echo "✅ Domain change complete: intwariknode.com"
    echo "✅ Email updated: hello@intwariknode.com"
    echo ""
    echo "🚀 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "  1. Run: npm run build"
    echo "  2. Run: npm run preview"
    echo "  3. Deploy to production"
    echo "  4. Submit sitemap: https://intwariknode.com/sitemap.xml"
else
    echo -e "${RED}⚠️  ISSUES FOUND: $ISSUES problem(s) detected${NC}"
    echo ""
    echo "Please review the errors above and fix them before deploying."
fi
echo ""
echo "================================================================"
