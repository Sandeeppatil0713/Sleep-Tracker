# 💤 SleepTracker

A full-stack sleep tracking app built with **Next.js 16**, **Clerk** authentication, **Prisma ORM v7**, and **Neon** PostgreSQL. Log your daily sleep, track patterns with interactive charts, and view your best/worst nights — all in a clean dashboard with dark & light mode support.

---

## ✨ Features

- **Sleep Logging** — Log hours slept, sleep quality, and date with a simple form
- **Interactive Chart** — Visual bar chart of your last 10 sleep records (green = good, red = low)
- **Stats Dashboard** — Daily average, best night, and worst night at a glance
- **Sleep History** — Scrollable list of past records with one-click delete
- **Dark / Light Mode** — Toggle between themes, persisted across sessions
- **Authentication** — Secure sign in / sign up powered by Clerk
- **Per-user Data** — Every record is scoped to the logged-in user

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Auth | [Clerk](https://clerk.com) v7 |
| Database | [Neon](https://neon.tech) (Serverless PostgreSQL) |
| ORM | [Prisma](https://prisma.io) v7 |
| DB Adapter | `@prisma/adapter-pg` + `pg` |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Charts | [Chart.js](https://www.chartjs.org) + `react-chartjs-2` |
| Language | TypeScript |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sleep-tracker.git
cd sleep-tracker
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the sample file and fill in your values:

```bash
cp .env.sample .env
```

```env
DATABASE_URL=postgresql://...          # Your Neon PostgreSQL connection string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_  # From your Clerk dashboard
CLERK_SECRET_KEY=sk_                   # From your Clerk dashboard

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

### 4. Run database migrations

```bash
npx prisma migrate deploy
```

### 5. Generate the Prisma client

```bash
npx prisma generate
```

### 6. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
sleep_tracker/
├── app/
│   ├── actions/          # Server actions (add, delete, fetch records)
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── sign-in/          # Clerk sign-in page
│   ├── sign-up/          # Clerk sign-up page
│   ├── layout.tsx         # Root layout with Navbar, Footer, ThemeProvider
│   └── page.tsx           # Home dashboard (or Guest landing page)
├── components/
│   ├── AddNewRecord.tsx   # Sleep logging form
│   ├── AverageSleep.tsx   # Average sleep stat card
│   ├── BarChart.tsx       # Chart.js bar chart
│   ├── BestWorstSleep.tsx # Best/worst night cards
│   ├── Footer.tsx
│   ├── Guest.tsx          # Landing page for unauthenticated users
│   ├── Navbar.tsx
│   ├── RecordChart.tsx    # Chart wrapper (server component)
│   ├── RecordHistory.tsx  # Sleep history list
│   ├── RecordItem.tsx     # Individual history row
│   ├── ThemeProvider.tsx  # Dark/light mode context
│   └── ThemeToggle.tsx    # Sun/moon toggle button
├── lib/
│   ├── checkUser.ts       # Syncs Clerk user to database
│   └── db.ts              # Prisma client singleton
├── prisma/
│   └── schema.prisma      # Database schema
└── types/
    └── Record.ts          # Shared TypeScript types
```

---

## 🗄 Database Schema

```prisma
model User {
  id          String   @id @default(uuid())
  clerkUserId String   @unique
  email       String   @unique
  name        String?
  imageUrl    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  Records     Record[]
}

model Record {
  id        String   @id @default(uuid())
  text      String        // Sleep quality (Refreshed, Tired, etc.)
  amount    Float         // Hours slept
  date      DateTime
  userId    String
  user      User     @relation(fields: [userId], references: [clerkUserId], onDelete: Cascade)
  createdAt DateTime @default(now())
}
```

---

## 📸 Screenshots

> Add screenshots of your app here.

---

## 📄 License

MIT
