# Exploration Management Pro

A full-stack drilling operations app with:
- Frontend: React + Vite (port `3000`)
- Backend API: Node + Express (port `4000`)
- Database: PostgreSQL (Docker, mapped to host port `5433`)

## Project Structure (Simple View)

- `src/` : frontend application
- `src/components/` : page modules (`Dashboard`, `OPEX`, `DCA`, `Advance`)
- `src/context/` : shared app state + API sync logic
- `src/api/` : backend API client calls
- `src/utils/` : utility helpers (Excel export, etc.)
- `backend/` : backend server + Prisma schema/migrations
- `docs/` : operational/deployment documentation
- `assets/` : static media files

## How Data Flows

1. User enters data in frontend (`src/components/*`).
2. Frontend calls backend APIs (`src/api/*`).
3. Backend validates and writes to PostgreSQL (`backend/prisma/schema.prisma`).
4. Updated data is returned and UI refreshes.

## Local Run (Recommended)

### 1) Start PostgreSQL (Docker)

```bash
docker run --name exploration-pg \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=exploration_management \
  -p 5433:5432 -d postgres:16
```

If container already exists:

```bash
docker start exploration-pg
```

### 2) Start backend

```bash
cd backend
npm install
npm run dev
```

### 3) Start frontend

```bash
cd ..
npm install
npm run dev
```

Open: [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Useful Files

- Frontend env: `.env.local`
- Backend env: `backend/.env`
- DB schema: `backend/prisma/schema.prisma`
- Deployment notes: `docs/DEPLOYMENT_TOPOLOGY.md`

## Verification

Run checks:

```bash
npm run lint
npm run build
```

Both should pass before production deployment.
