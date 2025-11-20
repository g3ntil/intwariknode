# Database Setup - Direct Access (No Security)

## ✅ Run This SQL in Supabase

**Link:** https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/sql/new

Copy and paste this SQL, then click **RUN**:

```sql
-- Disable Row Level Security for direct public access
ALTER TABLE contacts DISABLE ROW LEVEL SECURITY;

-- Remove any existing policies
DROP POLICY IF EXISTS "Allow public contact form submissions" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated users to read contacts" ON contacts;
```

---

## That's It!

Your form will now save data directly to the `contacts` table without any authentication or security policies.

---

## ✅ Verify It Works

1. Submit your contact form
2. Go to: https://app.supabase.com/project/tjuvittmvcbdpuqpykaw/editor
3. Click **contacts** table
4. See your submission! 🎉

---

## 📋 What This Does

- **Disables RLS** (Row Level Security)
- **Removes all security policies**
- **Allows direct public access** to insert data
- **No authentication required**

⚠️ **Note**: This means anyone who can access your form can insert data into the table. This is fine for contact forms where you want to receive all submissions.

---

**That's all! Your form now submits directly to the database.**
