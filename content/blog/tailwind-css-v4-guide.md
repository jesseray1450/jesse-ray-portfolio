---
title: "Tailwind CSS v4: What Changed and What to Expect"
date: "2026-01-20"
summary: "Tailwind v4 rewrites the engine in Rust and drops the config file. Here's a practical guide to migrating and what the new features unlock."
tags: ["Tailwind CSS", "CSS", "Frontend"]
author: "Alex Rivera"
---

Tailwind CSS v4 is a ground-up rewrite. The PostCSS plugin is replaced with an Oxide engine written in Rust, and the familiar `tailwind.config.js` is gone. Here's what you need to know.

## No more config file (mostly)

Configuration now lives in your CSS file using `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-brand: oklch(0.6 0.2 250);
  --font-display: "Inter", sans-serif;
}
```

For most projects this is actually simpler. You define custom values alongside your other CSS variables, and they're automatically available as utilities.

## The `@source` directive

v4 uses a new content detection strategy. Instead of listing globs in a config, you point it at your source:

```css
@import "tailwindcss" source("../src");
```

Tailwind statically analyzes your files and extracts class names. In practice it works well, but watch out for dynamically constructed class names — they'll still need to be safelisted.

## Performance

Builds are noticeably faster. My portfolio build went from ~800ms to ~120ms for the CSS step. The watch mode is near-instant.

## Should you upgrade?

If you're starting a new project: yes, use v4. If you have an existing project with heavy customization in your config: wait a few months for the ecosystem to catch up. The migration guide is good but there are rough edges with some third-party plugins.
