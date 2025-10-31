# PLP Task Manager – React, Vite, Tailwind

A small React application demonstrating component architecture, hooks, routing, API-style listing, dark mode, and Tailwind styling.

## Features
- Reusable UI: `Navbar`, `Footer`, `Card`, `Button`
- Task Manager: add, complete, delete, filter (All/Active/Completed) with localStorage persistence
- Posts page: curated Formula 1 timeline with search and pagination
- Routing with React Router (`/`, `/tasks`, `/posts`)
- Theme toggle (light: white/black, dark: black/white) using Tailwind dark mode

## Tech Stack
- React + Vite
- Tailwind CSS (via CDN for simplicity)
- React Router

## Getting Started
1. Node 18+ required: `node -v`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open the printed URL (usually `http://localhost:5173`).

If you see a missing dependency error for PropTypes:
```bash
npm install prop-types
```

## Project Structure
```
src/
  api/                # (kept for reference)
  components/         # Button, Card, Navbar, Footer, Layout, TaskManager
  context/            # ThemeContext (dark mode)
  data/               # f1Posts.js (local dataset)
  pages/              # Home, Tasks, Posts
  App.jsx             # Router + Layout
  main.jsx            # App bootstrap
  index.css           # Tailwind import
```

## Dark Mode
- Dark mode is class-based and applied to `<html>`.
- We set/restore the theme early in `index.html` and toggle it via `ThemeContext` and the navbar button.
- Palette: light (white background, black text), dark (black background, white text) with neutral accents.

## Deployment (Vercel)
1. Push this repo to GitHub.
2. In Vercel: New Project → Import repo.
3. Settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. SPA routing (important for React Router). Add `vercel.json` at repo root:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/" }
     ]
   }
   ```
5. Redeploy and test `/`, `/tasks`, `/posts`.

## Screenshots
- Add screenshots of Home, Tasks, Posts, and Dark Mode here.

## Notes
- Tailwind is loaded via CDN in `index.html` for fast setup. If you prefer a local Tailwind build, we can switch by removing the CDN tag and keeping the `@import "tailwindcss";` in `src/index.css` with a Tailwind config.
