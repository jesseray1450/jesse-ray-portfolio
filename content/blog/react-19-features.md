---
title: "React 19 Features I'm Actually Using"
date: "2026-02-10"
summary: "React 19 shipped a lot of new APIs. After a few months of production use, here are the ones that genuinely changed how I write components — and the ones I've ignored."
tags: ["React", "JavaScript", "Frontend"]
author: "Alex Rivera"
---

React 19 was hyped. A lot. After using it in production for a few months, here's my honest take on what's actually useful.

## `use()` for async data

The `use()` hook for reading promises inside render is genuinely great. Combined with Suspense, it lets you write data fetching in a way that feels natural:

```tsx
function UserProfile({ userPromise }) {
  const user = use(userPromise)
  return <h1>{user.name}</h1>
}
```

No `useEffect`, no loading state variable. The parent Suspense boundary handles the loading UI. I've refactored three components to use this pattern and they're all cleaner.

## Server Actions

Server Actions work well for forms. The mental model is solid: define an async function, mark it `'use server'`, pass it to a form's `action` prop. No API endpoint to define, no fetch call to write.

Where they fall short: error handling is still awkward. You have to use `useActionState` and the ergonomics feel unfinished compared to something like tRPC.

## What I'm still not using

The new `ref` as a prop feature is nice but I haven't hit a case in my codebase where I needed it. Same with `useOptimistic` — optimistic updates feel like they belong in a library (React Query, TanStack Query) rather than a hook you wire up yourself every time.

## Bottom line

React 19 is a solid upgrade. `use()` alone is worth it. Migrate when you can.
