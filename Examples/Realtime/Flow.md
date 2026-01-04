# Realtime Flow

---

## Event Sources

- Database mutations
- Server-side state changes

---

## Subscriptions

- Client subscribes to scoped channels
- Channels are filtered by ownership

---

## Emission Rules

- Server emits events
- Clients never broadcast directly
- Sensitive fields are stripped before emission

---

## Failure Handling

- Clients fall back to polling
- Reconnect triggers a resync
