# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 blog application that uses WordPress as a headless CMS. The site serves content from a WordPress backend API and renders it as a modern, responsive web application with glassmorphism design elements and Spanish localization.

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
- **WordPress Backend**: Headless WordPress installation at `wp.oriol.im`
- **API Integration**: WordPress REST API v2 (`/wp-json/wp/v2`) 
- **Content Types**: Posts and Pages with embedded media support
- **Media Handling**: WordPress media library with multiple image sizes

### Frontend Structure
- **Framework**: Next.js 14 with App Router (`experimental.appDir: true`)
- **Styling**: TailwindCSS with custom glassmorphism effects and typography plugin
- **Icons**: Lucide React icons
- **HTTP Client**: Axios for WordPress API requests
- **Language**: TypeScript with strict mode

### Key Directories
- `src/app/` - Next.js App Router pages (layout, dynamic routes for posts/pages)
- `src/components/` - Reusable React components (Header, Footer, PostCard, etc.)
- `src/lib/` - Core utilities (WordPress API functions, configuration)
- `src/types/` - TypeScript type definitions for WordPress entities
- `public/` - Static assets (logos, favicon, images)

### WordPress Integration
The application fetches content through these main functions in `src/lib/wordpress.ts`:
- `getPosts()` - Fetch blog posts with pagination
- `getPost(slug)` - Fetch single post by slug
- `getPage(slug)` - Fetch single page by slug
- `getAllPageSlugs()` - Get all page slugs for static generation
- WordPress entities are typed in `src/types/wordpress.ts`

### Routing Strategy
- Dynamic routes: `[slug]/page.tsx` for both posts and pages
- Static generation for pages using `getAllPageSlugs()`
- WordPress slug matching ensures exact content retrieval

### Environment Configuration
Configuration is centralized in `src/lib/config.ts`:
- WordPress API URL: `NEXT_PUBLIC_WORDPRESS_API_URL`
- Content URL: `NEXT_PUBLIC_WP_CONTENT_URL` 
- Site metadata: Title, description, URL
- Contact form integration
- Brand colors and theme configuration

### Styling Approach
- Custom glassmorphism header with backdrop blur effects
- Responsive mobile menu with floating panel design
- Spanish date formatting (`es-ES` locale)
- Prism.js for syntax highlighting (loaded via CDN)
- Custom CSS animations for UI interactions

### Image Optimization
- Next.js Image component with WordPress media integration
- Multiple image sizes from WordPress media API
- Configured domains: `wp.oriol.im` for external images

## Development Notes

### Path Aliases
- `@/*` maps to `./src/*` for clean imports

### WordPress API Details
- All requests include `_embed: true` for related data
- 10-second timeout configured on axios instance
- Error handling returns empty arrays/null for failed requests
- Content is fetched server-side for SEO optimization

### Mobile-First Design
- Responsive header with glassmorphism effects
- Mobile menu with backdrop blur and floating panel
- Touch-friendly navigation with icons and animations