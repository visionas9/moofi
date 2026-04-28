# Moofi 🎬

**Search, discover, and save movies — all in one place.**

Moofi is a movie search and watchlist app built with Next.js, TypeScript, and Tailwind CSS. It lets you search for any film, browse details, and bookmark the ones you want to watch later — with your watchlist persisted across sessions via localStorage.

I built this as part of a practice real-world patterns: context-based state management, async data fetching with proper error handling, dynamic routing, and clean component architecture.

---

### Built for real use — here's my personal watchlist 🎥

_I actually used Moofi to save my own movie list. That's the best kind of dogfooding._

<div align="center">
  <img src="./screenshots/personal-use.gif" width="300" alt="My personal watchlist in Moofi" />
</div>

---

## Features

- **Movie search** — powered by a fast IMDB search API, returns results instantly
- **Film detail pages** — full info including plot, cast, director, runtime, IMDb rating, box office, and awards via OMDB API
- **Watchlist** — bookmark any film with one tap; persisted in localStorage so it survives page refreshes
- **Error handling** — graceful messages for failed searches and broken API responses
- **Dynamic routing** — each film has its own URL (`/film/[imdbId]`) for shareability
- **Responsive design** — works cleanly on mobile and desktop

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Framework  | Next.js 15 (App Router)    |
| Language   | TypeScript                 |
| Styling    | Tailwind CSS               |
| State      | React Context API          |
| Data       | IMDB Search API + OMDB API |
| Deployment | Vercel                     |

---

## Architecture

```
app/
├── components/
│   ├── header.tsx        # Navigation header with dynamic watchlist link
│   ├── renderFilms.tsx   # Film card list with watchlist toggle
│   └── searchBar.tsx     # Controlled search input
├── film/[id]/
│   └── page.tsx          # Dynamic film detail page
├── watchlist/
│   └── page.tsx          # Saved films page
└── lib/
    ├── FilmContext.tsx    # Global state: films, watchlist, error
    ├── types.ts           # Shared TypeScript interfaces
    └── services/
        └── imdbService.ts # API fetch functions with error throwing
```

**State management approach:** A single React Context (`FilmContext`) holds films, watchlist, and error state. Service functions throw errors; the context catches them and sets error state. Components just consume — no try/catch scattered across the UI layer.

---

## Getting Started

```bash
git clone https://github.com/visionas9/moofi
cd moofi
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_OMDB_API_KEY=your_key_here
```

Get a free API key at [omdbapi.com](https://www.omdbapi.com/apikey.aspx), then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## What I Learned

- The difference between catching errors in the service layer vs the component layer — and why it matters
  (if I catch in the component layer (e.g. SearchBar's onClick) I'd have to duplicate error handling everywhere the function gets called. By catching in the context, one place owns the error, any component can read it from context, and the UI stays dumb.)
- How Next.js dynamic routes work with `params` as a Promise in the App Router
- Why `"use client"` applies to React components and hooks, not plain TypeScript utility files

---

## Live Demo

🔗 [moofi-kappa.vercel.app](https://moofi-kappa.vercel.app)

---

_Built by [Alp](https://github.com/visionas9) · Warsaw, 2026_
