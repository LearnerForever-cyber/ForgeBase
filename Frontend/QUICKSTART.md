# Quick Start Guide

Get the Forgebase website running in 3 simple steps.

## 1. Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, Tailwind, and markdown processors.

## 2. Run Development Server

```bash
npm run dev
```

The site will start at **http://localhost:3000**

## 3. Build for Production

```bash
npm run build
```

Static files will be generated in the `out/` directory.

---

## What You Get

✅ Homepage with all Forgebase sections  
✅ Documentation pages loading from parent folders  
✅ Dark mode support  
✅ Syntax highlighting  
✅ Mobile-responsive design  
✅ Static site export ready

## File Structure (Simple)

```
src/
├── app/              # Pages (homepage, docs)
├── components/       # Reusable UI (header, sidebar, footer)
└── lib/              # Utilities (markdown, navigation)
```

## How It Works

1. **Homepage** (`src/app/page.tsx`) - Static content
2. **Docs Pages** (`src/app/docs/[section]/[slug]/page.tsx`) - Dynamic markdown loading
3. **Markdown Loader** (`src/lib/markdown.ts`) - Reads files from parent Forgebase folders
4. **Navigation** (`src/lib/navigation.ts`) - Sidebar structure

## Common Commands

```bash
npm run dev          # Development
npm run build        # Production build
npm run start        # Serve production build
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build failing?**
- Ensure Node.js version is 18+
- Check that parent Forgebase folders exist
- Verify file mappings in `src/lib/markdown.ts`

---

That's it! Simple and straightforward.
