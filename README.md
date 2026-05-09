# My e-Portfolio

A personal e-Portfolio website for Digital Literacy Course, showcasing 10 works with reflections.

---

## Tech Stack

### Frontend
| Technology | Version | Role |
|---|---|---|
| **React** | 18 | UI library — builds the interface as reusable components |
| **React Router v6** | 6 | Client-side routing — navigates between Home and each work page without page reload |
| **Vite** | 5 | Build tool & dev server — bundles the app for production |
| **CSS** | — | Styling — custom CSS variables, grid layout, and animations (no CSS framework) |

### Backend
This project has **no backend**. It is a fully static Single Page Application (SPA).

All data (work titles, descriptions, reflections) lives in [`src/data/works.js`](src/data/works.js) as a JavaScript array — no database or server required.

### Hosting
| Service | Role |
|---|---|
| **Vercel** | Hosts and serves the static build output from the `dist/` folder |
| **vercel.json** | Rewrites all routes to `index.html` so React Router handles navigation on the client side |

---

## Project Structure

```
eport/
├── src/
│   ├── App.jsx              # Root component with route definitions
│   ├── main.jsx             # React entry point
│   ├── index.css            # Global styles
│   ├── data/
│   │   └── works.js         # All 10 works content — edit here
│   ├── components/
│   │   └── Nav.jsx          # Top navigation bar
│   └── pages/
│       ├── Home.jsx         # Home page with work cards
│       └── WorkDetail.jsx   # Individual work detail page
├── index.html               # Vite HTML entry point
├── package.json
├── vite.config.js
└── vercel.json              # SPA routing config for Vercel
```

---

## How It Works

```
User visits URL
      │
      ▼
Vercel serves index.html  (vercel.json rewrites all paths → index.html)
      │
      ▼
React loads in the browser
      │
      ▼
React Router reads the URL path
  /        → renders Home page (grid of 10 work cards)
  /work/1  → renders WorkDetail page for work #1
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Adding Content

Edit [`src/data/works.js`](src/data/works.js) and fill in `role`, `challenge`, and `reflection` for each work:

```js
{
  id: 2,
  title: 'Multimodal Analysis of a Digital Content',
  role: 'Your role description here...',
  challenge: 'Your decision or challenge here...',
  reflection: 'Your reflection here...',
}
```
