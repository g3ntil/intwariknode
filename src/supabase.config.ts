/**
 * Supabase Configuration
 * 
 * DEMO MODE: Site works without real credentials!
 * Form submissions are saved to browser console/localStorage.
 * 
 * TO ENABLE REAL SUPABASE (Optional):
 * 1. Get your anon key from: https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/settings/api
 * 2. Replace the anonKey below with your real key
 * 3. Or create .env.local with VITE_SUPABASE_ANON_KEY
 * 4. Restart: npm run dev
 */

export const supabaseConfig = {
  // Your Supabase project URL
  url: 'https://tjuvittmvcbdpuqpykaw.supabase.co',
  
  // Real Supabase anon key
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqdXZpdHRtdmNiZHB1cXB5a2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1OTg5NTMsImV4cCI6MjA3ODE3NDk1M30.KL2eJ_qseWmE9mGYJcnBjwoskwb7FX2DIgg4Sp-Qiuw',
  
  // Demo mode disabled - Direct database access
  useDemoMode: false,
};

// Helper to get config with environment variable fallback
export function getSupabaseConfig() {
  const envKey = import.meta?.env?.VITE_SUPABASE_ANON_KEY;
  const hasRealKey = envKey && envKey !== 'DEMO_MODE' && envKey !== 'REPLACE_WITH_YOUR_REAL_ANON_KEY';
  
  return {
    url: import.meta?.env?.VITE_SUPABASE_URL || supabaseConfig.url,
    anonKey: envKey || supabaseConfig.anonKey,
    useDemoMode: !hasRealKey && supabaseConfig.useDemoMode,
  };
}

// Check if we're in demo mode
export function isDemoMode() {
  const config = getSupabaseConfig();
  return config.useDemoMode || config.anonKey === 'DEMO_MODE';
}
