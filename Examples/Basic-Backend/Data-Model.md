# Data Model

Minimal relational structure:

---

## users

- id (primary key)
- email
- created_at

---

## notes

- id
- owner_id (references users.id)
- content
- updated_at

---

## Constraints

- notes.owner_id is immutable
- Users can only access their own notes
- Deletes are soft by default
