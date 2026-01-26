# Portfolio - David Fernandez

## Overview
Next.js 16 portfolio website showcasing AI/ML projects for energy sector applications.

## Tech Stack
- **Framework**: Next.js 16.1.1 (React 19)
- **Language**: TypeScript 5
- **Styling**: CSS Modules
- **3D Graphics**: Three.js
- **Icons**: Lucide React
- **Theming**: next-themes

## Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── about/page.tsx     # About page
│   ├── portfolio/page.tsx # Portfolio listing
│   └── projects/[id]/     # Dynamic project pages
├── components/            # React components
│   ├── demos/             # Interactive demo components
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectPage.tsx
│   └── ...
└── data/
    └── projects.ts        # Project data & types
```

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build (outputs to /out)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Categories
- **venture**: Business products (Steel Agents, Renewal Agents) - Show "Sign Up" button
- **project**: Production projects with HuggingFace demos - Show "Run Demo" button
- **experiment**: Code experiments - Show "View Code" button

## Key Files
- `src/data/projects.ts` - All project data, types, and helper functions
- `src/components/ProjectPage.tsx` - Individual project page template
- `src/components/PortfolioSection.tsx` - Portfolio grid display

## Deployment
- Static export via `next build` (output: `/out`)
- Deploy `/out` folder to any static host

## Related Repositories
- HuggingFace Spaces: `davidfertube/predictive-agent`, `davidfertube/compliance-agent`, `davidfertube/anomaly-agent`
- GitHub Profile: `davidfertube/davidfertube`

## Testing Changes
1. Run `npm run dev` and verify at localhost:3000
2. Run `npm run build` to ensure static export works
3. Check `/out` folder for generated static files
