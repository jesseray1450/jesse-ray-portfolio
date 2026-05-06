# Alex Rivera — Developer Portfolio

A personal portfolio and resume site for employers to review work history, projects, and technical writing. Built with TanStack Start and deployed on Netlify.

## Key Technologies

| Layer | Technology |
|---|---|
| Framework | TanStack Start (React 19, TanStack Router v1) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| AI assistant | TanStack AI (resume chat) |
| Language | TypeScript 5.7 (strict) |
| Deployment | Netlify |

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, skills, featured projects, recent posts |
| `/projects` | Full project gallery |
| `/resume` | Work history and education with AI assistant |
| `/blog` | Blog post index |
| `/blog/:slug` | Individual blog post |
| `/contact` | Contact form (Netlify Forms) |

## Running Locally

```bash
npm install
npm run dev        # http://localhost:3000
```

If you need Netlify-specific features (Forms, Edge Functions) locally:

```bash
netlify dev        # http://localhost:8888
```

## Content

All content lives in `/content` as markdown files with YAML frontmatter:

- `content/jobs/` — work experience entries
- `content/education/` — education entries
- `content/projects/` — project showcase entries
- `content/blog/` — blog posts

Schemas are defined in `content-collections.ts`.

## Environment Variables

For the AI resume assistant, set one of:

```
ANTHROPIC_API_KEY=...
OPENAI_API_KEY=...
GEMINI_API_KEY=...
```
