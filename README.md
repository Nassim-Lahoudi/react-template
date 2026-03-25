# React Template

Production-ready React + Vite template with React Router, Axios, Zustand, ESLint and Prettier.

## Stack

- React + Vite
- React Router v6
- Axios
- Zustand
- ESLint + Prettier

## Getting Started

\```powershell
npm install
copy .env.example .env
npm run dev
\```

## Adding a New Route

1. Create a file in `src/pages/MyPage.jsx`
2. Add the route in `src/router/index.jsx`
3. Add a NavLink in `src/layouts/RootLayout.jsx`

## Folder Structure

| Folder | Purpose |
|---|---|
| `src/components/ui` | Reusable UI components |
| `src/hooks` | Custom React Hooks |
| `src/layouts` | Page layouts |
| `src/pages` | One file per route |
| `src/services` | Axios instance + API functions |
| `src/store` | Zustand stores |
| `src/utils` | Helper functions |
