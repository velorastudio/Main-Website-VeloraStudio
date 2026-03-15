# Velora Studio — Premium Digital Agency Website

## Overview
A full-stack premium website for Velora Studio, a creative digital agency. Features a dark futuristic design with gold accents, Framer Motion animations, and a complete admin panel.

## Tech Stack
- **Frontend**: React + Vite + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: PostgreSQL (Drizzle ORM)
- **Auth**: JWT (jsonwebtoken + bcryptjs)
- **Animations**: Framer Motion
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod
- **HTTP**: TanStack Query

## Pages
- `/` — Home (hero, services preview, portfolio preview, testimonials, CTA)
- `/services` — Services + Pricing packages (Starter / Professional / Premium)
- `/portfolio` — Project grid with filter and case study modal
- `/about` — Brand story, mission/vision, team, timeline
- `/contact` — Functional contact form (saves to PostgreSQL)
- `/admin` — Admin login (JWT)
- `/admin/dashboard` — Admin dashboard (view/delete leads)

## Admin Credentials
- Username: `admin`
- Password: `velora2024`

## Design
- Dark theme forced (deep navy/black background)
- Gold (#C9A84C) primary accent color
- Glassmorphism cards with `glass` utility class
- `gold-gradient` utility for text gradients
- `bg-grid` utility for dot/grid backgrounds
- `glow-gold` for subtle box shadows

## API Routes
- `POST /api/leads` — Submit contact form (rate-limited: 5/hour)
- `POST /api/admin/login` — Admin JWT login
- `GET /api/admin/me` — Auth check (JWT required)
- `GET /api/admin/leads` — List all leads (JWT required)
- `DELETE /api/admin/leads/:id` — Delete a lead (JWT required)

## Database Tables
- `leads` — Contact form submissions
- `admins` — Admin accounts (auto-seeded on startup)

## Files Structure
```
client/src/
  pages/
    Home.tsx        — Hero + all sections
    Services.tsx    — Services + pricing
    Portfolio.tsx   — Project grid + modal
    About.tsx       — Story + team + timeline
    Contact.tsx     — Contact form
    AdminLogin.tsx  — Admin auth
    AdminDashboard.tsx — Lead management
  components/
    Navbar.tsx
    Footer.tsx
server/
  routes.ts   — All API endpoints + seed logic
  storage.ts  — DB storage layer
  db.ts       — Drizzle DB connection
shared/
  schema.ts   — Drizzle tables + Zod schemas
  routes.ts   — API contract
```
