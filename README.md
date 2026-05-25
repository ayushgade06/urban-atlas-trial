# Urban Atlas

## Setup

```bash
npm install
npx prisma db push
npm run dev
```

## Environment

Create `.env` from `.env.example` and set:

```env
DATABASE_URL=
JWT_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

## Backend APIs

- `POST /api/auth/login`
- `POST /api/buyers`
- `GET /api/buyers`
- `POST /api/sellers`
- `GET /api/sellers`
- `GET /api/admin/dashboard`
- `GET /api/export/buyers`
- `GET /api/export/sellers`

## Run

```bash
npm run dev
```

## Deploy

Add the environment variables in Vercel and deploy the repository.
