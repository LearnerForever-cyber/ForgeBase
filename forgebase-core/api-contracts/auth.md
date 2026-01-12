# Auth Contract

All auth operations use Supabase Auth.

## Sign Up

```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'secure-password',
  options: {
    data: {
      display_name: 'John Doe'
    }
  }
})
```

**Guarantees:**
- User ID is stable UUID
- Profile auto-created via trigger
- Role defaults to `user`

## Sign In

```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'secure-password'
})
```

**Returns:**
- `access_token` (JWT, 1 hour expiry)
- `refresh_token`
- `user.id` for RLS policies

## Get Session

```typescript
const { data: { session } } = await supabase.auth.getSession()
```

**Use case:**
- Check if user is authenticated
- Get user ID for queries

## Sign Out

```typescript
const { error } = await supabase.auth.signOut()
```

## Profile Access

Users can read/update their own profile:

```typescript
// Read
const { data } = await supabase
  .from('profiles')
  .select('*')
  .eq('id', user.id)
  .single()

// Update
const { data } = await supabase
  .from('profiles')
  .update({ display_name: 'New Name' })
  .eq('id', user.id)
```

**RLS enforces:**
- Users can only see their own profile
- No cross-user data access
