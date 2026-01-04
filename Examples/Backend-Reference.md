# Backend Reference — EduBro

EduBro is the **production reference backend** used to validate
Forgebase architecture, patterns, and constraints.

Forgebase is not theoretical — its decisions are derived from
real-world backend problems encountered while building EduBro.

---

## Stack Used

- Supabase (Authentication, Database, Realtime)
- PostgreSQL with Row Level Security (RLS)
- Edge Functions for server-side logic

---

## Why EduBro Exists as a Reference

EduBro operates under real production conditions:

- Real students and users
- Real data ownership constraints
- Offline-first requirements
- Realtime collaboration
- Limited resources and strict correctness

These constraints directly shaped Forgebase’s design.

---

## Relationship Between Forgebase and EduBro

- **Forgebase** defines backend principles and patterns
- **EduBro** validates those patterns in production

If a Forgebase pattern exists, it is because EduBro required it.

---

## Scope of This Reference

This file documents **architectural validation only**.

- No internal business logic is exposed
- No proprietary code is shared
- No implementation details are required

EduBro serves as **proof of correctness**, not a tutorial.
