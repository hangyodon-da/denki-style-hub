# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint linting
- `npm run preview` - Preview production build

## Project Architecture

This is a React-based electrical shop website built with modern tooling:

**Tech Stack:**
- Vite for build tooling and development server
- React 18 with TypeScript
- React Router for client-side routing
- TanStack Query for data fetching and caching
- Tailwind CSS + shadcn/ui for styling and components
- Radix UI primitives for accessible components

**Project Structure:**
- `src/App.tsx` - Main app component with routing, query client, and toast providers
- `src/pages/` - Page components (Index, ContactForm, NotFound)
- `src/components/` - Reusable components including section components and UI library
- `src/components/ui/` - shadcn/ui component library with consistent styling
- `src/lib/utils.ts` - Utility functions for className merging
- `src/hooks/` - Custom React hooks

**Key Architecture Patterns:**
- Single-page application with client-side routing (React Router)
- Component-based architecture with modular sections
- Path aliases using `@/` prefix for cleaner imports (configured in vite.config.ts and tsconfig.json)
- Consistent UI through shadcn/ui component system
- Toast notifications via dual toast setup (radix + sonner)

**Main Application Flow:**
The Index page renders as a landing page with sequential sections: Header → HeroSection → PricingSection → WorkExamples → CompanyInfo → ContactSection → Footer. The ContactForm page provides a separate inquiry form accessible via `/contact` route.

**Styling Approach:**
- Tailwind CSS for utility-first styling
- shadcn/ui provides pre-built, customizable components
- Consistent theming through CSS variables and Tailwind config
- Mobile-responsive design patterns

## Development Notes

- Server runs on port 8080 (configured in vite.config.ts)
- TypeScript configuration is lenient (allows implicit any, unused parameters/locals)
- Uses Lovable platform integration (component tagger in dev mode)
- All custom routes should be added above the catch-all "*" route in App.tsx