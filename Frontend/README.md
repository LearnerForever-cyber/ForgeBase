# Forgebase Website

Official documentation website for **Forgebase** - A documentation-first backend reference system.

## Overview

This is a Next.js-based static site that serves as the public-facing documentation website for Forgebase. It dynamically loads and renders markdown content from the parent Forgebase repository folders.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **JetBrains Mono** - Developer-centric monospace font
- **remark/rehype** - Markdown processing with syntax highlighting

## Project Structure

```
Frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles
│   │   └── docs/
│   │       ├── layout.tsx       # Docs layout with sidebar
│   │       ├── page.tsx         # Docs index (redirects)
│   │       └── [section]/[slug]/
│   │           └── page.tsx     # Dynamic doc pages
│   ├── components/
│   │   ├── Header.tsx           # Site header with nav
│   │   ├── Footer.tsx           # Site footer
│   │   ├── DocsSidebar.tsx      # Documentation sidebar
│   │   └── ThemeProvider.tsx    # Dark mode context
│   └── lib/
│       ├── navigation.ts        # Docs navigation config
│       └── markdown.ts          # Markdown loading utilities
├── public/                      # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Features

- **Static Site Generation** - Fast, pre-rendered pages
- **Dark Mode** - System preference detection with manual toggle
- **Syntax Highlighting** - Code blocks with highlight.js
- **Responsive Design** - Mobile-friendly layout
- **Clean Typography** - Developer-centric reading experience
- **Dynamic Markdown Loading** - Reads from parent repo folders

## Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Build for Production

To create a production build:

```bash
npm run build
```

This generates a static export in the `out/` directory that can be deployed to any static hosting service.

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel** - `vercel deploy`
- **Netlify** - Connect repo and build
- **GitHub Pages** - Push `out/` folder
- **Any static host** - Upload `out/` contents

### Example: Vercel Deployment

```bash
npm install -g vercel
vercel deploy
```

## Content Management

### How It Works

The website dynamically loads markdown files from the parent Forgebase repository:

```
Forgebase/
├── Frontend/              # This website
├── Philosophy/           # -> /docs/philosophy/*
├── Architecture/         # -> /docs/architecture/*
├── Core/                # -> /docs/core/*
├── Modules/             # -> /docs/modules/*
├── Examples/            # -> /docs/examples/*
├── Guides/              # -> /docs/guides/*
└── Validation/          # -> /docs/validation/*
```

### Adding New Documentation

1. Add markdown files to the appropriate parent folder
2. Update `src/lib/navigation.ts` with the new route
3. Update `src/lib/markdown.ts` file mapping
4. Update `generateStaticParams()` in `src/app/docs/[section]/[slug]/page.tsx`

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  brand: {
    // Your custom brand colors
  }
}
```

### Typography

The site uses JetBrains Mono for code. To change fonts, edit:
- `src/app/globals.css` - Font imports
- `tailwind.config.ts` - Font family configuration

### Navigation

Edit `src/lib/navigation.ts` to modify the sidebar structure.

## Architecture Decisions

### Why Static Export?

- Fast loading times
- No server required
- Easy deployment
- Cost-effective hosting

### Why Load from Parent Repo?

- Single source of truth for documentation
- No content duplication
- Docs stay in sync with code

### Why No CMS?

- Documentation is code
- Version control for content
- Developer-friendly workflow

## Troubleshooting

### Build fails with "Cannot find module"

Ensure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Markdown not rendering

Check that:
1. File exists in parent directory
2. File mapping is correct in `src/lib/markdown.ts`
3. Path is added to `generateStaticParams()`

### Dark mode not working

Clear browser localStorage and refresh:
```js
localStorage.removeItem('theme')
```

## Contributing

This is part of the Forgebase project. See the parent README for contribution guidelines.

## License

Same as Forgebase parent project.

---

**Built as an engineering artifact - no marketing fluff, just documentation.**
