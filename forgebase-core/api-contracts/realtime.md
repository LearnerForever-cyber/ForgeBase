# Realtime Contract

Subscribe to database changes in real-time.

## Subscribe to All Changes

```typescript
const channel = supabase
  .channel('tasks-changes')
  .on(
    'postgres_changes',
    {
      event: '*',  // INSERT, UPDATE, DELETE
      schema: 'public',
      table: 'tasks'
    },
    (payload) => {
      console.log('Change:', payload)
    }
  )
  .subscribe()
```

**Guarantees:**
- Only receives changes to user's own data (RLS enforced)
- Works offline-first with automatic reconnection
- Events ordered by `updated_at`

## Subscribe to Specific Events

### Insert Only

```typescript
supabase
  .channel('tasks-inserts')
  .on(
    'postgres_changes',
    { event: 'INSERT', schema: 'public', table: 'tasks' },
    (payload) => {
      console.log('New task:', payload.new)
    }
  )
  .subscribe()
```

### Update Only

```typescript
supabase
  .channel('tasks-updates')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'tasks' },
    (payload) => {
      console.log('Old:', payload.old)
      console.log('New:', payload.new)
    }
  )
  .subscribe()
```

### Delete Only

```typescript
supabase
  .channel('tasks-deletes')
  .on(
    'postgres_changes',
    { event: 'DELETE', schema: 'public', table: 'tasks' },
    (payload) => {
      console.log('Deleted:', payload.old)
    }
  )
  .subscribe()
```

## Filter by Column

```typescript
supabase
  .channel('pending-tasks')
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'tasks',
      filter: 'status=eq.pending'
    },
    (payload) => {
      console.log('Pending task changed:', payload)
    }
  )
  .subscribe()
```

## Unsubscribe

```typescript
// Remove specific channel
supabase.removeChannel(channel)

// Remove all channels
supabase.removeAllChannels()
```

## Payload Structure

```typescript
{
  schema: 'public',
  table: 'tasks',
  commit_timestamp: '2026-01-12T10:30:00Z',
  eventType: 'INSERT' | 'UPDATE' | 'DELETE',
  new: { /* new row data */ },      // INSERT, UPDATE
  old: { /* old row data */ },      // UPDATE, DELETE
  errors: null
}
```

## Offline Handling

```typescript
channel.on('system', { event: 'offline' }, () => {
  console.log('Connection lost - changes queued')
})

channel.on('system', { event: 'online' }, () => {
  console.log('Reconnected - syncing changes')
})
```

**Guarantees:**
- Changes queued during offline
- Auto-sync on reconnection
- `updated_at` resolves conflicts (last-write-wins)

## Best Practices

1. **One channel per table** - Easier to manage subscriptions
2. **Filter at source** - Reduce client-side processing
3. **Handle reconnection** - Network is unreliable
4. **Use `updated_at`** - For conflict resolution
