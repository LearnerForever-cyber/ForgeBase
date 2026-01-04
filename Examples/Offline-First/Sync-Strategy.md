# Sync Strategy

---

## Local State

- Data is cached locally
- Writes are queued when offline

---

## Sync Process

1. Client reconnects
2. Pending writes are pushed
3. Server validates and resolves conflicts
4. Fresh state is pulled

---

## Conflict Resolution

- Server is source of truth
- Last-write-wins by default
- Custom merge strategies are allowed

---

## Guarantees

- No silent data loss
- Predictable resolution rules
