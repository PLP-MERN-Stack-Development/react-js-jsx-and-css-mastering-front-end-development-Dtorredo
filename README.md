# PLP Task Manager – React, Vite, Tailwind

A small React application demonstrating component architecture, hooks, routing, API-style listing, dark mode, and Tailwind styling.

## Features

- Reusable UI: `Navbar`, `Footer`, `Card`, `Button`
- Task Manager: add, complete, delete, filter (All/Active/Completed) with localStorage persistence
- Posts page: curated Formula 1 timeline with search and pagination
- Posts page: live Formula 1 news (via NewsAPI) with search and pagination
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
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```
5. Redeploy and test `/`, `/tasks`, `/posts`.

## Screenshots

- Add screenshots of Home, Tasks, Posts, and Dark Mode here.

## Notes

- Tailwind is loaded via CDN in `index.html` for fast setup. If you prefer a local Tailwind build, we can switch by removing the CDN tag and keeping the `@import "tailwindcss";` in `src/index.css` with a Tailwind config.

## API: NewsAPI.org

- The Posts page fetches live F1 news from NewsAPI.
- Create a `/.env.local` file and add:
  ```env
  VITE_NEWS_API_KEY=your_newsapi_key_here
  ```
- Restart the dev server after adding the key.
- Endpoint used: `GET https://newsapi.org/v2/everything?q=Formula%201&language=en&pageSize=<limit>&page=<page>`
- If you hit CORS or plan limits on the free tier, temporarily switch to the static dataset in `src/data/f1Posts.js` by replacing the fetch call in `src/pages/Posts.jsx`.
