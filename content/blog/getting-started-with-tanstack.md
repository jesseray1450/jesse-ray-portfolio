---
title: "Why I Switched to TanStack Start for My Portfolio"
date: "2026-03-10"
summary: "After years of Next.js, I gave TanStack Start a serious try for this portfolio. Here's what surprised me, what I struggled with, and whether I'd recommend it."
tags: ["TanStack", "React", "Web Development"]
author: "Alex Rivera"
---

I've built my last few projects on Next.js and was happy enough with it. But when I scaffolded this portfolio, I decided to give TanStack Start a real try. Six weeks in, I have opinions.

## What clicked immediately

File-based routing felt familiar — one `.tsx` per route, folders for nested paths. But TanStack Router's type safety is on another level. Link components and `useParams` are fully typed based on your route tree. Typos in route names are caught at compile time, not at runtime in production.

The `beforeLoad` and `loader` pattern for data fetching is also cleaner than I expected. You co-locate your data requirements with the route, and the router guarantees the data is ready before rendering.

## The rough edges

The ecosystem is smaller than Next.js. When I hit a weird edge case with content collections, there was no Stack Overflow answer — I had to read the source. That's fine for me, but it's a real cost for teams that need quick answers.

## Would I recommend it?

For a personal project or a team that values type safety and is willing to dig into documentation? Yes. For a team that needs to move fast and hire quickly? Probably stick with Next.js for now.
