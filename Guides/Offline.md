# Offline-First Design

## Context

Offline-first is about resilience, not convenience. This guide explains how to design backends that support offline functionality and reliable syncing.

## When to Use This

- **Read if:** Your app needs to work without network connectivity
- **Reference if:** You're designing offline sync and conflict resolution
- **Skip if:** Your app always requires network connectivity

---

## Principles

- Local state is temporary truth
- Server is final authority
- Conflicts are expected

---

## Strategy

- Cache essential data
- Queue writes
- Sync intelligently

Offline support is a **feature multiplier**, not a default requirement.

---

## Next Reads

1. [Guides: Realtime Strategy](Realtime.md) — See how realtime complements offline
2. [Modules: Offline](../Modules/Offline.md) — Learn module details
3. [Examples: Offline-First](../Examples/Offline-First/README.md) — See working implementation
