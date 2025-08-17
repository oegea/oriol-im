# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Oriol's personal blog built with Frontity, a React framework for WordPress. The project connects to a WordPress backend API at `https://wp.oriol.im/wp-json` and serves a static frontend.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production 
- `npm run serve` - Serve production build

## Architecture

### Core Structure
- **Frontity App**: Root configuration in `frontity.settings.js`
- **Custom Theme**: Modified Mars theme in `packages/mars-theme/`
- **WordPress Source**: Connects to WordPress API for content
- **Custom Packages**: Additional functionality in `packages/newsletter-form/` and `packages/reading-progress/`

### Theme Architecture
The custom Mars theme (`packages/mars-theme/`) follows Frontity's package structure:
- **State Management**: Centralized state in `src/index.js` with actions for mobile menu toggle
- **Components**: Modular React components in `src/components/`
- **Route Handlers**: Custom handlers for `/about/` and `/contact/` pages
- **HTML Processing**: Uses html2react processors for images and iframes

### Key Configuration
- **Site URL**: https://www.oriol.im
- **WordPress API**: https://wp.oriol.im/wp-json
- **Menu Structure**: Spanish navigation (Inicio, Sobre mí, Contacto)
- **Featured Images**: Disabled on list view, enabled on posts

### Package Dependencies
- Uses Frontity core packages (@frontity/core, @frontity/wp-source, @frontity/tiny-router)
- Custom theme extends @frontity/mars-theme
- Additional dependencies: axios, react-spinners

## Next.js Migration Project (next-blog/)

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS + Custom CSS variables
- **Backend**: WordPress REST API (headless CMS)
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts (Kaushan Script for titles)

### Development Commands
```bash
cd next-blog
npm install                 # Install dependencies
npm run dev                 # Development server (http://localhost:3000)
npm run build              # Production build
npm run start              # Serve production build
npm run lint               # ESLint checking
npm run type-check         # TypeScript type checking
```

### Project Structure

#### Core Configuration
```
next-blog/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utilities and configurations
│   └── types/               # TypeScript type definitions
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.mjs         # Next.js configuration
└── .env.example            # Environment variables template
```

#### App Router Structure
```
src/app/
├── layout.tsx              # Root layout with Header/Footer
├── page.tsx                # Homepage (blog post listing)
├── globals.css             # Global styles and CSS variables
├── about/page.tsx          # Static about page
├── contact/page.tsx        # Static contact page
├── posts/[slug]/page.tsx   # Dynamic post pages
└── [slug]/page.tsx         # Dynamic WordPress pages (legal, etc.)
```

### Configuration Management

#### Environment Variables (/.env.example)
```
NEXT_PUBLIC_WORDPRESS_API_URL=https://wp.oriol.im/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://www.oriol.im
NEXT_PUBLIC_SITE_TITLE=I'm Oriol
NEXT_PUBLIC_SITE_DESCRIPTION=Just the place where @OriolEgea writes things...
NEXT_PUBLIC_CONTACT_FORM_URL=https://wp.oriol.im/contact-form/index.php
NEXT_PUBLIC_WP_CONTENT_URL=https://wp.oriol.im/wp-content/uploads
```

#### Centralized Config (/src/lib/config.ts)
All URLs, titles, and theme colors are centralized in a single configuration file to avoid duplication across the codebase.

### Design System

#### Color Scheme
```css
:root {
  --primary-color: #fccb0b;           /* JavaScript yellow */
  --text-dark: rgba(12, 17, 43);      /* Main text color */
  --text-light: rgba(12, 17, 43, 0.8); /* Content text */
  --text-meta: rgba(12, 17, 43, 0.9);  /* Meta text (dates, etc.) */
  --link-color: rgb(239, 190, 0);      /* Link color */
}
```

#### Typography
- **Body Font**: Apple system fonts stack for optimal reading
- **Title Font**: Kaushan Script (Google Fonts) for branding
- **Font Size**: 17px base with 1.6em line height
- **Text Alignment**: Justified paragraphs for clean appearance

#### External Dependencies
- **CSS Framework**: Raster Grid (https://rsms.me/raster/raster.grid.css)
- **Code Highlighting**: PrismJS with Coy theme
- **Typography Plugin**: @tailwindcss/typography for content styling

### Component Architecture

#### Core Layout Components

**Header (/src/components/Header.tsx)**
- Fixed header with shadow effect (75px height)
- Logo + title with Kaushan Script font
- Responsive navigation with mobile hamburger menu
- Active page highlighting with aria-current
- Mobile menu overlay with scroll prevention

**Footer (/src/components/Footer.tsx)**
- Modern 3-column layout (responsive)
- Social media links (GitHub, LinkedIn, Twitter)
- Tech stack badges with color coding
- Legal links positioned left/right
- JavaScript easter egg with heart emoji

**Reading Progress (/src/components/ReadingProgress.tsx)**
- Fixed progress bar at top (yellow #fccb0b)
- Smooth scroll-to-top button with emoji
- Appears when user starts scrolling

#### Content Components

**PostCard (/src/components/PostCard.tsx)**
- Clean blog post preview layout
- Featured image optimization with Next.js Image
- Excerpt content with HTML rendering
- "Read more" link with arrow icon
- Border-separated layout for easy scanning

**NewsletterForm (/src/components/NewsletterForm.tsx)**
- Email subscription with validation
- Privacy policy checkbox (required)
- MailerLite integration placeholder
- Yellow accent colors matching brand

### WordPress Integration

#### API Client (/src/lib/wordpress.ts)
- Axios-based client with 10-second timeout
- Centralized error handling and logging
- **Key Function**: Exact slug matching to prevent wrong content

**Core Functions:**
```typescript
getPosts(page, perPage)     # Get paginated blog posts
getPost(slug)               # Get single post by exact slug match
getPage(slug)               # Get single page by exact slug match  
getMedia(id)                # Get media attachments
formatDate(dateString)      # Spanish date formatting
stripHtml(html)             # Clean HTML for excerpts
```

#### TypeScript Types (/src/types/wordpress.ts)
Complete type definitions for WordPress REST API responses including:
- WordPressPost: Blog posts with metadata
- WordPressPage: Static pages
- WordPressMedia: Image attachments with size variants

### Routing System

#### Static Routes
- `/` - Homepage with post listing + newsletter form
- `/about` - Complex about page with timeline, certifications, tech stack
- `/contact` - Contact form with honeypot protection

#### Dynamic Routes
- `/posts/[slug]` - Individual blog posts with SEO metadata
- `/[slug]` - WordPress pages (aviso-legal, politica-de-privacidad, etc.)

**Critical Implementation Detail**: Dynamic routing uses `find()` method to match exact slugs because WordPress API returns multiple results even with slug parameter.

### About Page Implementation

The about page (/src/app/about/page.tsx) is a comprehensive recreation of the original Frontity design:

#### Content Sections
1. **Profile Section**: Photo + social links + bio with dynamic age calculation
2. **Certifications**: PSM1 + PSPO1 badges with Credly links  
3. **Tech Stack**: Animated slideshow of technology logos
4. **Interests**: Material Design chip components with emoji icons
5. **Learning**: Books + courses with completion certificates
6. **Timeline**: Complete chronological history from 1996-2024

#### Technical Features
- **Grid System**: Uses raster-grid CSS for complex layouts
- **Image Optimization**: All images served via Next.js Image component
- **Animation**: CSS keyframes for technology logo slideshow
- **Responsive**: Mobile-first design with grid breakpoints

### Styling Implementation

#### Global Styles (/src/app/globals.css)
- CSS custom properties for consistent theming
- Material Design chip components
- WordPress Gutenberg block support
- Code highlighting with left border accent
- Animation keyframes for interactive elements

#### Tailwind Configuration
- Extended color palette with CSS variables
- Typography plugin for rich content
- Custom utility classes for header shadows
- Responsive breakpoints for mobile-first design

### Performance Optimizations

#### Next.js Features
- **Server-Side Rendering**: All pages pre-rendered for SEO
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Font Optimization**: Google Fonts with display=swap
- **Code Splitting**: Automatic bundle optimization

#### WordPress API
- **Data Fetching**: Server-side API calls for better performance
- **Error Handling**: Graceful fallbacks for missing content
- **Caching**: Leverages Next.js automatic caching

### SEO Implementation

#### Metadata Generation
- Dynamic titles and descriptions for all pages
- Open Graph tags for social sharing
- Structured data for blog posts
- Automatic sitemap generation potential

#### Content Optimization
- Semantic HTML structure
- Alt text for all images
- Proper heading hierarchy
- Clean URL structure

### Migration Status

#### ✅ Completed Features
- Full visual parity with original Frontity design
- All original components and layouts recreated
- WordPress API integration with exact content matching
- Responsive design for all screen sizes
- Performance optimizations and SEO setup
- Newsletter form with validation
- Reading progress indicator
- Complex about page with animations
- Contact form foundation
- Dynamic routing for WordPress content

#### 🔄 Next Steps
- Contact form backend integration
- Newsletter service integration (MailerLite)
- Search functionality
- Pagination for blog posts
- RSS feed generation
- Sitemap automation

### Original Frontity Project
This is a personal blog that was rapidly developed over a weekend. The code may not follow all Frontity best practices but serves as a functional example of a Frontity-powered WordPress frontend. This will be phased out once the Next.js migration is complete.