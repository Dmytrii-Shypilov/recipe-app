PROJECT STRUCTURE:
src/
├── app/
│   ├── layout.tsx         # Global layout with <Suspense> and styles
│   ├── page.tsx           # Home page with search form
│   └── recipes/
│       ├── page.tsx       # Recipe list page (SSR with searchParams)
│       └── [id]/
│           └── page.tsx   # Recipe details page (SSR)
├── components/
│   ├── RecipeCard.tsx
│   ├── SearchForm.tsx
├── api/
│   └── index.ts           # Axios setup & API functions
├── types/
│   └── index.ts           # TypeScript interfaces
