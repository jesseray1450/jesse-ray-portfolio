---
title: "TaskFlow — Project Management App"
description: "A full-stack project management tool with real-time collaboration, drag-and-drop kanban boards, and time tracking. Supports teams of up to 50 users with role-based permissions."
tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "TypeScript"]
github: "https://github.com/your-username/taskflow"
liveUrl: "https://taskflow-demo.netlify.app"
---

Built to scratch my own itch — existing tools were either too heavy or too simple. TaskFlow handles the sweet spot: kanban boards with real-time updates, built-in time tracking, and a clean API for integrations.

Architecture highlights:
- WebSocket server for real-time board updates across clients
- Optimistic UI updates with rollback on server error
- Row-level security in PostgreSQL for team data isolation
- REST API documented with OpenAPI spec
