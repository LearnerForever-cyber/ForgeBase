# API Contracts

These are **interface-level contracts**, not implementations.

---

## Auth

POST /auth/login  
POST /auth/logout  
GET  /auth/session  

---

## Users

GET /users/me  

---

## Notes

POST /notes  
GET  /notes  
PATCH /notes/:id  
DELETE /notes/:id  

---

## Rules

- All routes require authentication unless stated
- Ownership is enforced server-side
- Clients never send user IDs explicitly
