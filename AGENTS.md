# AGENTS.md

Project architecture reference for AI agents working on this codebase.

## Overview

A personal developer portfolio built with TanStack Start. It showcases work history, projects, and technical blog posts, with an AI-powered resume assistant on the `/resume` page.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| AI | TanStack AI with multi-provider support |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Map

```
content/
  blog/           # Blog posts (title, date, summary, tags, author)
  education/      # Education history (school, summary, startDate, endDate, tags)
  jobs/           # Work experience (jobTitle, company, location, startDate, endDate, summary, tags)
  projects/       # Projects (title, description, tags, github, liveUrl, image)
public/
  contact.html    # Static HTML form for Netlify Forms registration
  headshot-on-white.jpg
src/
  components/
    ui/           # Radix UI primitives: Badge, Card, Checkbox, Separator, HoverCard
    Header.tsx    # Sticky top nav with mobile drawer; contains persona name
  lib/
    resume-ai-hook.ts   # useResumeChat hook for AI assistant
    resume-tools.ts     # AI tool definitions: getJobsBySkill, getAllJobs, getAllEducation, searchExperience
    utils.ts            # cn() class merging helper
  routes/
    __root.tsx          # Root layout (shellComponent) — wraps every page with Header
    index.tsx           # Landing page: hero, skills strip, featured projects, recent posts, footer
    resume.tsx          # Full resume with AI assistant (work history + education)
    projects.tsx        # Project gallery
    contact.tsx         # Contact form (Netlify Forms)
    blog/
      index.tsx         # Blog post listing at /blog
      $slug.tsx         # Individual blog post at /blog/:slug
    api.resume-chat.ts  # POST /api/resume-chat — server handler for AI chat
content-collections.ts  # Zod schemas for all four content types
vite.config.ts          # TanStack Start + Netlify + Tailwind + Content Collections plugins
netlify.toml            # build: vite build, publish: dist/client
```

## Routing

TanStack Router with file-based routes under `src/routes/`. The generated route tree lives in `.tanstack/` — do not edit it directly.

- `__root.tsx` uses `shellComponent` for the outer HTML shell.
- API routes use the `api.*.ts` naming convention and export `APIRoute`.

## Content Collections

Schemas are defined in `content-collections.ts`. To add a new content type:
1. Define a `defineCollection` entry with a Zod schema.
2. Create markdown files in the matching `content/<type>/` directory.
3. Import the generated `all<Type>s` array from `'content-collections'`.

## Styling Conventions

Tailwind CSS 4. Design tokens are CSS custom properties in `src/styles.css` using `oklch` color space.
- Use `text-muted-foreground` / `text-foreground` — NOT hardcoded `text-gray-*` classes.
- Use the `cn()` helper from `@/lib/utils` for conditional class merging.

## AI Resume Assistant

- Hook: `src/lib/resume-ai-hook.ts` — `useResumeChat()`
- Tools: `src/lib/resume-tools.ts`
- API route: `src/routes/api.resume-chat.ts`
- Requires one of: `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, or `OLLAMA_BASE_URL`

## Persona

The portfolio belongs to **Alex Rivera**, a senior frontend developer. The persona name appears in:
- `src/components/Header.tsx` — nav logo
- `src/routes/index.tsx` — hero heading
- `src/routes/resume.tsx` — page heading
- `src/routes/__root.tsx` — `<title>` meta tag

To change the owner, update those four locations and replace the headshot at `public/headshot-on-white.jpg`.

## TypeScript Conventions

- Strict mode; use `type` keyword for type-only imports.
- `@/` path alias resolves to `src/`.
- Zod for runtime validation of external data.

## Development Commands

```bash
npm run dev      # Start dev server (port 3000)
netlify dev      # Netlify CLI dev server with Forms/Edge emulation (port 8888)
npm run build    # Production build — do NOT run in agent sessions
```
