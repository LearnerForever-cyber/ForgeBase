# Realtime Strategy

## Context

Realtime should solve real problems, not exist for hype. This guide explains when and how to implement realtime features in your backend.

## When to Use This

- **Read if:** Your app needs live updates or presence
- **Reference if:** You're designing realtime sync strategy
- **Skip if:** Your app doesn't need realtime features

---

## When to Use Realtime

- Messaging
- Presence
- Live updates that matter

---

## Design Rules

- Scope subscriptions tightly
- Avoid global listeners
- Prefer events over polling

---

## Sync Philosophy

Realtime should enhance UX, not control logic.

---

## Next Reads

1. [Modules: Realtime](../Modules/Realtime.md) — Learn module details
2. [Guides: Offline](Offline.md) — Understand offline in complement to realtime
3. [Examples: Realtime](../Examples/Realtime/README.md) — See working implementation
