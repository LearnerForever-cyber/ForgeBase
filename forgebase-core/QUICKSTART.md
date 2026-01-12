# Quickstart

Test Forgebase core using Supabase Cloud (free tier).

## 1. Setup Supabase Project

1. Go to https://supabase.com and create free account
2. Create new project (takes ~2 minutes to provision)
3. Go to **Project Settings** → **API**
4. Copy:
   - `Project URL` (your API URL)
   - `anon public` key

## 2. Apply Schema

### Option A: Via SQL Editor

1. In Supabase dashboard, go to **SQL Editor**
2. Create new query
3. Copy entire contents of `supabase/migrations/20260101000000_init.sql`
4. Run query

### Option B: Via Supabase CLI

```bash
cd forgebase-core
supabase link --project-ref your-project-ref
supabase db push
```

## 3. Deploy Edge Function

1. Go to **Edge Functions** in dashboard
2. Create new function named `health-check`
3. Copy code from `supabase/functions/health-check/index.ts`
4. Deploy

## 4. Test Auth

Replace `YOUR_PROJECT_URL` and `YOUR_ANON_KEY` below:

```bash
# Sign up
curl -X POST 'YOUR_PROJECT_URL/auth/v1/signup' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@forgebase.dev",
    "password": "test123456"
  }'
```

Copy the `access_token` from response.

## 5. Test Data Operations

```bash
# Create task
curl -X POST 'YOUR_PROJECT_URL/rest/v1/tasks' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d '{
    "title": "Test Forgebase Core",
    "status": "pending"
  }'

# Read tasks
curl 'YOUR_PROJECT_URL/rest/v1/tasks?select=*' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

# Update task (use task id from create response)
curl -X PATCH 'YOUR_PROJECT_URL/rest/v1/tasks?id=eq.TASK_ID' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"status": "completed"}'
```

## 6. Test Realtime

Open **Table Editor** → `tasks` in dashboard and insert/update rows manually.
Watch changes appear in real-time.

## 7. Test Edge Function

```bash
curl YOUR_PROJECT_URL/functions/v1/health-check
```

Should return contract validation status.

## Verify All Contracts

### ✓ Auth Identity
Check profile was auto-created:
```bash
curl 'YOUR_PROJECT_URL/rest/v1/profiles?select=*' \
  -H "apikey: YOUR_ANON_KEY" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### ✓ Data Ownership
Try accessing with different user token → RLS blocks access

### ✓ Realtime Events
Modify data in Table Editor → see instant updates

### ✓ Offline Safety
Check `updated_at` timestamp increments on every update

### ✓ Auditability
All rows have `created_at`, `updated_at`, `deleted_at` fields

## Next: Build Your App

1. Study the patterns in `api-contracts/`
2. Add your domain tables following same structure
3. Test with Supabase client library:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'YOUR_PROJECT_URL',
  'YOUR_ANON_KEY'
)

// Now use examples from api-contracts/
```

## Cost: $0/month

Free tier includes:
- 50MB database
- 500MB storage
- 2GB bandwidth
- Perfect for validation and small projects
