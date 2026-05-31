# Production Deployment Topology

## Target Architecture
- `Frontend`: static React build served by CDN/edge (or Nginx container)
- `Backend`: stateless Node/Express API container
- `Database`: managed PostgreSQL (Neon, Supabase, RDS, Cloud SQL)

## Data Safety Controls
- Backend-only write path for business data (`VITE_DATA_MODE=backend`)
- JWT access + refresh-token rotation
- Audit logs persisted in `audit_logs`
- Server-side validation and role-based authorization

## Recommended Managed Setup
1. Deploy frontend to Vercel/Netlify/CloudFront.
2. Deploy backend to Render/Fly.io/AWS ECS.
3. Use managed Postgres with automated backups and PITR.
4. Set backend env vars securely in provider secrets.
5. Run `npm run prisma:deploy` in backend release phase.

## Required Environment Variables
- `DATABASE_URL`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `CORS_ORIGIN`
- `PORT`
- `API_PREFIX`

Frontend:
- `VITE_API_BASE_URL`
- `VITE_DATA_MODE=backend`

## Cutover Plan
1. Keep current deployment in parallel.
2. Deploy backend + managed DB and run migrations.
3. Point frontend to backend (`VITE_API_BASE_URL`).
4. Verify module writes/readbacks (Sites, Drilling, OPEX, DCA, Advance).
5. Disable legacy Firebase production writes.
