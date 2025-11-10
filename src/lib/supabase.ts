import { createClient } from '@supabase/supabase-js';
import { getSupabaseConfig, isDemoMode } from '../supabase.config';

// Get Supabase credentials with priority:
// 1. Environment variables (.env.local)
// 2. Config file (supabase.config.ts)
const config = getSupabaseConfig();
const supabaseUrl = config.url;
const supabaseAnonKey = config.anonKey;

// Check if we're in demo mode
if (isDemoMode()) {
  console.log('%c🎯 DEMO MODE ACTIVE', 'color: #4CAF50; font-weight: bold; font-size: 14px;');
  console.log('%cContact form submissions will be logged here (not saved to database)', 'color: #666; font-size: 12px;');
  console.log('%cTo enable real Supabase: Edit /supabase.config.ts with your anon key', 'color: #666; font-size: 12px;');
  console.log('%cGet key from: https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/settings/api', 'color: #0A4A4A; font-size: 11px;');
} else {
  console.log('%c✅ SUPABASE CONNECTED', 'color: #0A4A4A; font-weight: bold; font-size: 14px;');
  console.log('%cForm submissions will be saved to database', 'color: #666; font-size: 12px;');
  console.log('%cProject:', supabaseUrl, 'color: #666; font-size: 11px;');
}

// Create Supabase client (even in demo mode, for type compatibility)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Demo mode form handler
export async function submitContactForm(formData: any) {
  if (isDemoMode()) {
    // Demo mode: log to console and show success
    console.log('%c📩 DEMO FORM SUBMISSION', 'color: #4CAF50; font-weight: bold; font-size: 14px;');
    console.log('Form Data:', formData);
    console.log('Timestamp:', new Date().toISOString());
    console.log('%c✅ In production, this would be saved to Supabase', 'color: #666; font-size: 12px;');
    
    // Save to localStorage for persistence
    const submissions = JSON.parse(localStorage.getItem('demo_submissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now(),
    });
    localStorage.setItem('demo_submissions', JSON.stringify(submissions));
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return { success: true, message: 'Demo submission successful! (Check console for details)' };
  } else {
    // Real Supabase mode
    const { data, error } = await supabase
      .from('contacts')
      .insert([formData]);
    
    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error };
    }
    
    return { success: true, data };
  }
}

// Database types
export interface Contact {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone?: string;
  budget: string;
  timeline: string;
  project_details: string;
  selected_services: string[];
}

// Initialize database table (this will be called on first form submission)
export async function ensureContactsTableExists() {
  // Check if table exists by trying to select from it
  const { error } = await supabase.from('contacts').select('id').limit(1);
  
  // If table doesn't exist, create it using SQL
  if (error && error.message.includes('relation "public.contacts" does not exist')) {
    // Note: In production, you should create the table via Supabase dashboard
    // or SQL editor. This is just for development.
    console.warn('Contacts table does not exist. Please create it via Supabase dashboard.');
    return false;
  }
  
  return true;
}

// Insert contact form data
export async function insertContact(contactData: Contact) {
  if (isDemoMode()) {
    // Demo mode: log to console and localStorage
    console.log('%c📩 DEMO FORM SUBMISSION', 'color: #4CAF50; font-weight: bold; font-size: 14px;');
    console.log('Contact Data:', contactData);
    console.log('Timestamp:', new Date().toISOString());
    console.log('%c✅ In production, this would be saved to Supabase', 'color: #666; font-size: 12px;');
    
    // Save to localStorage for persistence
    const submissions = JSON.parse(localStorage.getItem('demo_submissions') || '[]');
    const submission = {
      ...contactData,
      id: `demo-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    submissions.push(submission);
    localStorage.setItem('demo_submissions', JSON.stringify(submissions));
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [submission];
  }
  
  // Real Supabase mode
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select();
  
  if (error) {
    throw error;
  }
  
  return data;
}
