#!/bin/bash

# Quick script to create .env.local file
# Run this in your project root directory

echo "🚀 Creating .env.local file..."
echo ""

# Create .env.local using echo (more compatible)
echo "VITE_SUPABASE_URL=https://tjuvittmvcbdpuqpykaw.supabase.co" > .env.local
echo "VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here" >> .env.local

if [ -f ".env.local" ]; then
    echo "✅ Success! .env.local file created"
    echo ""
    echo "📋 Current content:"
    cat .env.local
    echo ""
    echo "⚠️  IMPORTANT: You must replace 'your_supabase_anon_key_here' with your real Supabase anon key!"
    echo ""
    echo "🔑 To get your key:"
    echo "   1. Go to: https://app.supabase.com"
    echo "   2. Select your project"
    echo "   3. Settings → API"
    echo "   4. Copy the 'anon public' key"
    echo "   5. Edit .env.local and replace the placeholder"
    echo ""
    echo "📝 Edit the file with:"
    echo "   nano .env.local"
    echo "   # or"
    echo "   vim .env.local"
    echo "   # or"
    echo "   code .env.local"
    echo ""
    echo "🔄 After editing, restart your dev server:"
    echo "   npm run dev"
    echo ""
else
    echo "❌ Failed to create .env.local"
    echo "Please create it manually. See /MANUAL-FIX-REQUIRED.md"
fi
