# Supabase Setup Guide for INTWARI Knode

## 🚨 IMPORTANT: Updated Configuration

**This guide has been updated.** The Supabase configuration now uses environment variables.

See **`/SUPABASE-FIX-GUIDE.md`** for the complete updated setup guide.

## ✅ Completed Steps

1. **Supabase Configuration Created** (`/src/lib/supabase.ts` and `/lib/supabase.ts`)
2. **Environment Variables Setup** (`.env.local` and `.env.example`)
3. **Form Integration Complete** (`/pages/GetStarted.tsx`)
4. **Toast Notifications Added** (App.tsx with Toaster component)
5. **Security Improvements** (Environment variables, validation, RLS)

---

## 🔑 Quick Start

1. **Get your Supabase keys**: https://app.supabase.com > Settings > API
2. **Update `.env.local`** with your actual keys
3. **Create the database table** (see SQL below)
4. **Restart server**: `npm run dev`

For detailed instructions, see `/SUPABASE-QUICK-FIX.md`

---

## 📋 Database Table Setup

### Step 1: Create the `contacts` Table

Go to your Supabase Dashboard SQL Editor and run this query:

```sql
-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  project_details TEXT NOT NULL,
  selected_services TEXT[] NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to view all contacts
CREATE POLICY "Allow authenticated users to view contacts" ON contacts
  FOR SELECT
  TO authenticated
  USING (true);
```

---

## 🔍 How It Works

### Form Submission Flow:

1. User fills out the form on `/get-started`
2. Form data is collected including:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Budget (required, dropdown)
   - Timeline (required, dropdown)
   - Project Details (required, textarea)
   - Selected Services (array of selected service IDs)
3. On submit:
   - Loading state activates (button shows spinner)
   - Data is inserted into Supabase `contacts` table
   - Success: Toast notification + form reset
   - Error: Error toast notification

---

## 🧪 Testing the Form

### 1. Test Form Submission

1. Go to `/get-started` page
2. Select at least one service
3. Fill in all required fields:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "+250 123 456 789" (optional)
   - Budget: Select any option
   - Timeline: Select any option
   - Project Details: "This is a test submission"
4. Click "Submit Project Inquiry"
5. You should see:
   - Button changes to loading spinner
   - Success toast notification appears
   - Form resets to empty state

### 2. Verify in Supabase

1. Go to Supabase Dashboard
2. Navigate to Table Editor
3. Select `contacts` table
4. You should see the submitted data

---

## 📊 Database Schema

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | UUID | Auto | Primary key (auto-generated) |
| `created_at` | Timestamp | Auto | Submission timestamp (UTC) |
| `name` | Text | Yes | Client name |
| `email` | Text | Yes | Client email |
| `phone` | Text | No | Client phone number |
| `budget` | Text | Yes | Selected budget range |
| `timeline` | Text | Yes | Selected timeline |
| `project_details` | Text | Yes | Project description |
| `selected_services` | Text Array | Yes | Array of service IDs |

---

## 🔐 Security Notes

- **Row Level Security (RLS)** is enabled
- **Anonymous users** can INSERT (submit forms)
- **Authenticated users** can SELECT (view submissions)
- The anon key is public (safe to expose in frontend)
- Never expose the service_role key

---

## 📱 Viewing Submissions

### Option 1: Supabase Dashboard
1. Go to: https://tjuvittmvcbdpuqpykaw.supabase.co
2. Navigate to Table Editor
3. Click on `contacts` table

### Option 2: SQL Query
```sql
SELECT 
  id,
  created_at,
  name,
  email,
  phone,
  budget,
  timeline,
  project_details,
  selected_services
FROM contacts
ORDER BY created_at DESC;
```

---

## 🚨 Troubleshooting

### Error: "relation 'public.contacts' does not exist"
**Solution**: Run the SQL script above to create the table

### Error: "new row violates row-level security policy"
**Solution**: Make sure the RLS policies are created (run the policy creation SQL)

### Error: "Failed to submit"
**Check**:
1. Supabase URL is correct
2. Anon key is correct
3. Table exists
4. RLS policies are set up

### Form doesn't reset after submission
**This is normal if there's an error**. Check browser console for error details.

---

## 📧 Email Notifications (Optional Future Enhancement)

To get email notifications when forms are submitted:

1. Go to Supabase Dashboard
2. Navigate to Database > Functions
3. Create a new function triggered on INSERT to `contacts` table
4. Use a service like SendGrid, Resend, or Supabase Edge Functions

---

## ✅ Success Checklist

- [ ] Table `contacts` created in Supabase
- [ ] RLS policies applied
- [ ] Form submission works (test it)
- [ ] Success toast appears
- [ ] Data appears in Supabase Dashboard
- [ ] Form resets after successful submission

---

## 🔗 Supabase Project Details

- **Project URL**: https://tjuvittmvcbdpuqpykaw.supabase.co
- **Anon Key**: Already configured in `/lib/supabase.ts`
- **Table Name**: `contacts`

---

**Setup Complete!** 🎉

Your Get Started form is now connected to Supabase and ready to collect client inquiries.
