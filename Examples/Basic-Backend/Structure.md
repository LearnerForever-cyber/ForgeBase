# Folder Structure

A minimal Forgebase-aligned backend layout:

src/
├── modules/
│ ├── auth/
│ ├── users/
│ └── notes/
├── api/
│ ├── auth.routes
│ ├── users.routes
│ └── notes.routes
├── db/
│ ├── schema
│ └── policies
└── realtime/
└── subscriptions

yaml
Copy code

---

## Structure Principles

- Each module owns its logic and rules
- API layer is thin and declarative
- Database enforces ownership and safety
- Realtime is isolated from business logic