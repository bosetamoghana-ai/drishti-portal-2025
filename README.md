# Drishti Portal (React + Vite + Tailwind)

This is a ready-made frontend for the Project Drishti portal (student risk dashboard).
It is a Vite React app using Tailwind CSS, Recharts and PapaParse for CSV parsing.

## What is included
- `src/app.jsx` — main React app (dashboard, sidebar, CSV upload)
- `src/main.jsx` — entry
- `src/index.css` — Tailwind directives
- `public/` — images (logo.png, hero.png, avatar.png)
- `package.json`, `index.html`, `tailwind.config.cjs`, `postcss.config.cjs`

## Quick non-technical steps to deploy (beginner-friendly)

### Option A — Deploy to Vercel (recommended, free for personal projects)
1. Go to https://vercel.com and sign up (use GitHub to make it easy).
2. Create a new GitHub repository and upload the contents of this zip (see below).
3. In Vercel, click "New Project" → import from GitHub → pick your repo.
4. Vercel auto-detects Vite. Click Deploy. After a minute you’ll get a live link.

### Option B — Upload the zip to GitHub via the web UI
1. Unzip the downloaded file on your computer.
2. On GitHub.com, create a new repository (public is fine).
3. In that repo page click "Add file" → "Upload files".
4. Drag everything from the unzipped folder into the upload area (you can drag folders).
5. Commit changes. Now your code is on GitHub.

### Run locally (optional, needs Node.js)
1. Install Node.js LTS from https://nodejs.org.
2. Unzip the project and open a terminal inside the folder.
3. Run: `npm install`
4. Run: `npm run dev`
5. Open the URL printed in the terminal (usually http://localhost:5173)

## How to change the logo
- Replace `public/logo.png` with your school's logo (same filename), commit & redeploy.

## CSV format for upload
Use a CSV with columns: `StudentID,Attendance,Marks,FeesDue`
- Attendance and Marks: numbers 0–100
- FeesDue: 0 (paid) or 1 (due)

----
