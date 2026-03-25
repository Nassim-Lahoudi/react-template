# ⚛️ React Template – Production‑Ready Starter

A lightweight yet fully equipped React starter powered by **Vite**, featuring modern routing, state management, an API layer, and enforced code quality. It provides a clean structure and fast development workflow suitable for prototypes, personal projects, and scalable production apps.

## 🚀 Tech Stack

- ⚛️ React + Vite – fast and modern development setup
- 🧭 React Router v6 – client‑side routing
- 🔌 Axios – API requests with interceptor support
- 🧠 Zustand – minimal and powerful state management
- 🧹 ESLint + Prettier – consistent and clean code formatting

## 🏁 Getting Started

```powershell
npm install
copy .env.example .env
npm run dev
```

## 🧩 Adding a New Route

1. Create a file in `src/pages/MyPage.jsx`
2. Add the route in `src/router/index.jsx`
3. Add a NavLink in `src/layouts/RootLayout.jsx`

## 📁 Folder Structure

| Folder | Purpose |
|---|---|
| `src/components/ui` | Reusable UI components |
| `src/hooks` | Custom React Hooks |
| `src/layouts` | Page layouts |
| `src/pages` | One file per route |
| `src/services` | Axios instance + API functions |
| `src/store` | Zustand stores |
| `src/utils` | Helper functions |
