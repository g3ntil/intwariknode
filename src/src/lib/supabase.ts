import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tjuvittmvcbdpuqpykaw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzZW9lZG5kanZ2amlrd2NyeWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1ODE1NzEsImV4cCI6MjA3NjE1NzU3MX0.rv-gk7070dXY-E3UP-VRALH_uHr3L-c4ltbvCBPznqo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select();
  
  if (error) {
    throw error;
  }
  
  return data;
}
