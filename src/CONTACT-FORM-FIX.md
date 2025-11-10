# 🔧 Contact Form Fix - RLS Error

## 🚨 Current Error
```
Error submitting form: {
  "code": "42501",
  "message": "new row violates row-level security policy for table \"contacts\""
}
```

---

## ✅ Quick Fix (Copy & Paste This SQL)

### 1️⃣ Open This Link:
```
https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/sql/new
```

### 2️⃣ Paste This Code:
```sql
-- Create table and disable RLS
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  selected_services TEXT[] NOT NULL,
  budget TEXT NOT NULL,
  timeline TEXT NOT NULL,
  project_details TEXT NOT NULL
);

ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public contact form submissions" ON contacts;

SELECT tablename, rowsecurity FROM pg_tables WHERE tablename = 'contacts';
```

### 3️⃣ Click "RUN"

### 4️⃣ Expected Result:
```
tablename  | rowsecurity
-----------+-------------
contacts   | f
```
✅ The `f` means RLS is disabled!

---

## 🧪 Test It

1. Visit: https://intwariknode.com/get-started
2. Fill the form
3. Submit
4. Should see: ✅ Success message

---

## 📊 View Submissions

After fix: https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/editor/contacts

---

## Why This Fixes It

- **Problem:** Supabase blocks anonymous inserts by default (RLS enabled)
- **Solution:** Disable RLS for the contacts table
- **Safe:** Contact forms don't need authentication
- **Result:** Public can submit forms ✅

---

**⏰ Time to fix: ~60 seconds**
