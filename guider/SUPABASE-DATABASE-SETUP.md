# Supabase Database Setup

## ✅ Environment Variables Configured
Your `.env.local` file has been created with your Supabase credentials.

## 📋 Database Table Setup

To enable form submissions, you need to create the `contacts` table in your Supabase database.

### Step 1: Go to Supabase SQL Editor
1. Open [Supabase Dashboard](https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/editor)
2. Navigate to **SQL Editor** in the left sidebar

### Step 2: Run This SQL Query

Copy and paste the following SQL to create your contacts table:

```sql
-- Create contacts table
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  project_details TEXT NOT NULL,
  selected_services TEXT[] NOT NULL DEFAULT '{}'
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserting contacts
CREATE POLICY "Allow public to insert contacts"
ON public.contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Create a policy to allow authenticated users to view contacts
CREATE POLICY "Allow authenticated users to view contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_email_idx ON public.contacts(email);
```

### Step 3: Verify Table Creation
After running the SQL:
1. Go to **Table Editor** in Supabase
2. You should see the `contacts` table
3. Check that all columns are present:
   - id (uuid)
   - created_at (timestamp)
   - name (text)
   - email (text)
   - phone (text)
   - budget (text)
   - timeline (text)
   - project_details (text)
   - selected_services (text array)

### Step 4: Test the Form
1. Restart your development server: `npm run dev`
2. Go to `/get-started` page
3. Fill out and submit the form
4. Check the Supabase Table Editor to see your submission

## 🔒 Security Notes

- **Row Level Security (RLS)** is enabled
- Public users can INSERT (submit forms)
- Only authenticated users can SELECT (view submissions)
- Your anon key is safe to use in frontend code

## 📧 Viewing Form Submissions

To view form submissions in Supabase:
1. Go to [Table Editor](https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/editor)
2. Select the `contacts` table
3. All submissions will be listed with timestamps

## 🚀 Next Steps

After setting up the table:
- Form will submit to real Supabase database
- You'll get email notifications (configure in Supabase)
- Can export data as CSV
- Can set up webhooks for automation

## ⚠️ Important

Make sure to:
1. **Run the SQL query above** to create the table
2. **Restart your dev server** after creating .env.local
3. **Test the form** to ensure everything works

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify the table structure in Supabase
3. Ensure RLS policies are correctly set up
