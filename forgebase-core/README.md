# Forgebase Core

A minimal, runnable reference implementation that proves the Forgebase contracts.

## What This Proves

This implementation validates all 5 core contracts from `/Core/Contracts.md`:

1. **Auth Identity** - Supabase Auth + profiles table with roles
2. **Data Ownership** - RLS policies enforce `user_id` ownership
3. **Realtime Events** - Supabase Realtime on all tables
4. **Offline Safety** - Optimistic updates with `updated_at` timestamps
5. **Auditability** - `created_at`, `updated_at`, `deleted_at` on all tables

## Maps to Documentation

```
/Core/Contracts.md          → schema.sql (all 5 contracts)
/Core/Project Shape.md      → folder structure (auth, api, db)
/Modules/                   → example: tasks table
```

## Run Locally in <5 Minutes

### Option 1: Use Supabase Cloud (Recommended)

1. Create free account: https://supabase.com
2. Create new project
3. Copy connection details from Settings → API
4. Apply schema:
   ```bash
   supabase link --project-ref your-project-ref
   supabase db push
   ```

### Option 2: Use Existing PostgreSQL

1. Connect to your PostgreSQL instance
2. Run the migration file: `supabase/migrations/20260101000000_init.sql`
3. Configure your client with connection string

### What You Get

- REST API for all tables
- Real-time subscriptions
- Row Level Security enforced
- Auth with JWT tokens

### Test the Implementation

Use the examples in `api-contracts/` to test auth, data, and realtime operations.

## Project Structure

```
forgebase-core/
├── supabase/
│   ├── migrations/
│   │   └── 20260101000000_init.sql    # Schema + RLS
│   ├── functions/
│   │   └── health-check/              # Example Edge Function
│   └── config.toml
├── api-contracts/
│   ├── auth.md                        # Auth operations
│   ├── data.md                        # CRUD operations
│   └── realtime.md                    # Subscription patterns
└── README.md
```

## Philosophy

This is **correctness proof**, not a framework.

- Uses Supabase because it natively satisfies all 5 contracts
- Schema is strict: deny by default, explicit grants only
- One example table (`tasks`) shows the pattern
- Add more tables following the same pattern

## Next Steps

1. Read `api-contracts/` to understand the surface area
2. Customize schema for your domain (add tables following the same pattern)
3. Add modules from `/Modules/` as needed
4. Deploy to Supabase Cloud or any PostgreSQL host
