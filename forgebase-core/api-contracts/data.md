# Data Contract

All CRUD operations enforce ownership via RLS.

## Create

```typescript
const { data, error } = await supabase
  .from('tasks')
  .insert({
    user_id: user.id,  // Required for ownership
    title: 'Build feature',
    status: 'pending'
  })
  .select()
  .single()
```

**Guarantees:**
- `user_id` must match authenticated user
- `created_at`, `updated_at` auto-set
- RLS blocks cross-user inserts

## Read

```typescript
// Read all user's tasks
const { data, error } = await supabase
  .from('tasks')
  .select('*')
  .order('created_at', { ascending: false })

// Read specific task
const { data, error } = await supabase
  .from('tasks')
  .select('*')
  .eq('id', task_id)
  .single()
```

**Guarantees:**
- Only returns user's own data
- Soft-deleted items excluded automatically
- RLS enforces at database level

## Update

```typescript
const { data, error } = await supabase
  .from('tasks')
  .update({ 
    status: 'completed',
    title: 'Updated title'
  })
  .eq('id', task_id)
  .select()
  .single()
```

**Guarantees:**
- `updated_at` auto-incremented
- Can only update own tasks
- Optimistic locking via `updated_at`

## Soft Delete

```typescript
const { data, error } = await supabase
  .from('tasks')
  .update({ deleted_at: new Date().toISOString() })
  .eq('id', task_id)
```

**Guarantees:**
- Data preserved for audit trail
- Automatically filtered from reads
- Can be restored by clearing `deleted_at`

## Hard Delete

```typescript
const { error } = await supabase
  .from('tasks')
  .delete()
  .eq('id', task_id)
```

**Warning:** Permanent deletion. Use soft delete for auditability.

## Pagination

```typescript
const { data, error } = await supabase
  .from('tasks')
  .select('*')
  .range(0, 9)  // First 10 items
  .order('created_at', { ascending: false })
```

## Filtering

```typescript
const { data, error } = await supabase
  .from('tasks')
  .select('*')
  .eq('status', 'pending')
  .ilike('title', '%feature%')
```

**Note:** All filters respect RLS - only user's data returned.
