#!/bin/bash

# Verification script for INTWARI Knode setup
# Run this to check if everything is configured correctly

echo "🔍 INTWARI Knode - Setup Verification"
echo "======================================"
echo ""

# Check if required files exist
echo "📁 Checking Required Files..."
echo ""

# Check index.html at root
if [ -f "index.html" ]; then
    echo "✅ index.html exists at root"
else
    echo "❌ index.html missing at root (CRITICAL)"
fi

# Check .env.local
if [ -f ".env.local" ]; then
    echo "✅ .env.local exists"
    
    # Check if it has the placeholder or real key
    if grep -q "your_supabase_anon_key_here" .env.local; then
        echo "⚠️  .env.local has PLACEHOLDER key - Replace with real key!"
    else
        echo "✅ .env.local appears to have a real key"
    fi
else
    echo "❌ .env.local missing (CRITICAL)"
fi

# Check .gitignore
if [ -f ".gitignore" ]; then
    echo "✅ .gitignore exists"
else
    echo "⚠️  .gitignore missing (recommended)"
fi

# Check vite.config.ts
if [ -f "vite.config.ts" ]; then
    echo "✅ vite.config.ts exists"
else
    echo "❌ vite.config.ts missing (CRITICAL)"
fi

# Check package.json
if [ -f "package.json" ]; then
    echo "✅ package.json exists"
else
    echo "❌ package.json missing (CRITICAL)"
fi

echo ""
echo "📂 Checking Project Structure..."
echo ""

# Check src directory
if [ -d "src" ]; then
    echo "✅ /src directory exists"
    
    if [ -f "src/main.tsx" ]; then
        echo "✅ /src/main.tsx exists"
    else
        echo "❌ /src/main.tsx missing (CRITICAL)"
    fi
    
    if [ -f "src/App.tsx" ]; then
        echo "✅ /src/App.tsx exists"
    else
        echo "❌ /src/App.tsx missing (CRITICAL)"
    fi
    
    if [ -f "src/lib/supabase.ts" ]; then
        echo "✅ /src/lib/supabase.ts exists"
    else
        echo "❌ /src/lib/supabase.ts missing (CRITICAL)"
    fi
else
    echo "❌ /src directory missing (CRITICAL)"
fi

# Check public directory
if [ -d "public" ]; then
    echo "✅ /public directory exists"
else
    echo "⚠️  /public directory missing (recommended)"
fi

# Check node_modules
if [ -d "node_modules" ]; then
    echo "✅ node_modules installed"
else
    echo "⚠️  node_modules missing - Run: npm install"
fi

echo ""
echo "🔑 Checking Environment Variables..."
echo ""

if [ -f ".env.local" ]; then
    # Check URL
    if grep -q "VITE_SUPABASE_URL=" .env.local; then
        URL=$(grep "VITE_SUPABASE_URL=" .env.local | cut -d '=' -f 2)
        if [ ! -z "$URL" ]; then
            echo "✅ VITE_SUPABASE_URL is set"
        else
            echo "❌ VITE_SUPABASE_URL is empty"
        fi
    else
        echo "❌ VITE_SUPABASE_URL not found in .env.local"
    fi
    
    # Check Key
    if grep -q "VITE_SUPABASE_ANON_KEY=" .env.local; then
        KEY=$(grep "VITE_SUPABASE_ANON_KEY=" .env.local | cut -d '=' -f 2)
        if [ ! -z "$KEY" ]; then
            if [ "$KEY" == "your_supabase_anon_key_here" ]; then
                echo "❌ VITE_SUPABASE_ANON_KEY is still placeholder - ADD REAL KEY!"
            else
                echo "✅ VITE_SUPABASE_ANON_KEY is set"
            fi
        else
            echo "❌ VITE_SUPABASE_ANON_KEY is empty"
        fi
    else
        echo "❌ VITE_SUPABASE_ANON_KEY not found in .env.local"
    fi
else
    echo "❌ Cannot check - .env.local doesn't exist"
fi

echo ""
echo "======================================"
echo "📋 Summary"
echo "======================================"
echo ""

# Count issues
CRITICAL_ISSUES=0
WARNINGS=0

if [ ! -f "index.html" ]; then ((CRITICAL_ISSUES++)); fi
if [ ! -f ".env.local" ]; then ((CRITICAL_ISSUES++)); fi
if [ ! -f "vite.config.ts" ]; then ((CRITICAL_ISSUES++)); fi
if [ ! -f "package.json" ]; then ((CRITICAL_ISSUES++)); fi
if [ ! -f "src/main.tsx" ]; then ((CRITICAL_ISSUES++)); fi
if [ ! -d "node_modules" ]; then ((WARNINGS++)); fi

if [ -f ".env.local" ] && grep -q "your_supabase_anon_key_here" .env.local; then
    ((CRITICAL_ISSUES++))
fi

if [ $CRITICAL_ISSUES -eq 0 ]; then
    echo "✅ All critical files are in place!"
    echo ""
    if [ $WARNINGS -eq 0 ]; then
        echo "🎉 Setup looks perfect! Run: npm run dev"
    else
        echo "⚠️  $WARNINGS warning(s) - Check above"
        echo "Run: npm install && npm run dev"
    fi
else
    echo "❌ Found $CRITICAL_ISSUES critical issue(s)"
    echo ""
    echo "Next Steps:"
    echo "1. Read /CRITICAL-FIX-COMPLETE.md"
    echo "2. Read /DO-THIS-NOW.md"
    echo "3. Add your Supabase key to .env.local"
    echo "4. Run: npm run dev"
fi

echo ""
echo "======================================"
echo "📚 Documentation:"
echo "   - /DO-THIS-NOW.md (Quick fix)"
echo "   - /CRITICAL-FIX-COMPLETE.md (Full details)"
echo "======================================"
