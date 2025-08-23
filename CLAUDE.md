# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 blog application that serves content from local markdown files. The site renders content as a modern, responsive web application with glassmorphism design elements and Spanish localization.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (Next.js)
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking without emitting files

### Testing
No test framework is currently configured in this project.

## Architecture

### Content Management
- **Local Markdown Files**: Posts stored in `/posts/` directory, pages in `/pages/` directory
- **Gray Matter**: Frontmatter-based metadata handling
- **Content Types**: Posts and Pages with local media support
- **Media Handling**: Static images served from `/public/images/`

### Frontend Structure
- **Framework**: Next.js 14 with App Router (`experimental.appDir: true`)
- **Styling**: TailwindCSS with custom glassmorphism effects and typography plugin
- **Icons**: Lucide React icons
- **HTTP Client**: Native fetch for API requests
- **Language**: TypeScript with strict mode

### Key Directories
- `src/app/` - Next.js App Router pages (layout, dynamic routes for posts/pages)
- `src/components/` - Reusable React components (Header, Footer, PostCard, etc.)
- `src/lib/` - Core utilities (markdown parsing, API functions, configuration)
- `src/types/` - TypeScript type definitions for posts and pages
- `public/` - Static assets (logos, favicon, images)

### Content Integration
The application serves content through these main libraries:
- `src/lib/markdown.ts` - Server-side markdown parsing for posts
- `src/lib/pages-markdown.ts` - Server-side markdown parsing for pages  
- `src/lib/posts.ts` - Client-side posts API
- `src/lib/pages.ts` - Client-side pages API
- Content entities are typed in `src/types/post.ts` and `src/types/page.ts`

### Routing Strategy
- Dynamic routes: `[slug]/page.tsx` for both posts and pages
- Static generation for both posts and pages
- Slug-based routing ensures exact content retrieval

### Environment Configuration
Configuration is centralized in `src/lib/config.ts`:
- Site metadata: Title, description, URL
- Contact form integration (still uses external form)
- Brand colors and theme configuration

### Styling Approach
- Custom glassmorphism header with backdrop blur effects
- Responsive mobile menu with floating panel design
- Spanish date formatting (`es-ES` locale)
- Prism.js for syntax highlighting (loaded via CDN)
- Custom CSS animations for UI interactions

### Image Optimization
- Next.js Image component with local static images
- Images stored in `/public/images/` directory
- Optimized loading and responsive images

## Development Notes

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### Content Parsing Details
- Gray matter for frontmatter parsing
- Remark for markdown to HTML conversion
- Content is parsed server-side for SEO optimization
- Error handling returns empty arrays/null for missing files

### Mobile-First Design
- Responsive header with glassmorphism effects
- Mobile menu with backdrop blur and floating panel
- Touch-friendly navigation with icons and animations