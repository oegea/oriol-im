# Oriol's Blog - Next.js Frontend

A modern, responsive blog application built with Next.js 14 that serves content from local markdown files. This project serves as the frontend for [oriol.im](https://oriol.im), featuring a glassmorphism design with Spanish localization.

## Features

- **Local Markdown Content**: Posts and pages served from local markdown files
- **Modern Design**: Glassmorphism UI with backdrop blur effects
- **Responsive Layout**: Mobile-first design with floating navigation menu
- **Dynamic Routing**: Automatic page generation for posts and pages
- **TypeScript**: Full type safety with content entity definitions
- **SEO Optimized**: Server-side rendering with Next.js App Router
- **Image Optimization**: Next.js Image component with local static images
- **Syntax Highlighting**: Prism.js integration for code blocks

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with custom glassmorphism effects
- **Content**: Local Markdown files with Gray Matter frontmatter
- **HTTP Client**: Native fetch API
- **Icons**: Lucide React
- **Image Handling**: Next.js Image with local static files

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/oriol-im.git
cd oriol-im
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
# Copy the example environment file (create one if needed)
cp .env.example .env.local
```

Configure the following environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_TITLE=Your Site Title
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
NEXT_PUBLIC_CONTACT_FORM_URL=https://your-contact-form-endpoint.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Adding Posts

1. Create a new markdown file in the `posts/` directory
2. Follow the naming convention: `YYYY-MM-DD-slug.md`
3. Add frontmatter with required fields:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
date: "2024-01-01"
excerpt: "Post excerpt here"
status: "publish"
type: "post"
id: "unique-id"
categories:
  - "Category 1"
  - "Category 2"
tags:
  - "tag1"
  - "tag2"
---

Your post content here...
```

### Adding Pages

1. Create a new markdown file in the `pages/` directory
2. Name it after the slug: `page-slug.md`
3. Add frontmatter with required fields:

```markdown
---
title: "Your Page Title"
slug: "page-slug"
date: "2024-01-01"
modified: "2024-01-01"
excerpt: "Page excerpt here"
status: "publish"
type: "page"
id: "unique-id"
parent: 0
menu_order: 0
---

Your page content here...
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── [slug]/         # Dynamic routes for posts and pages
│   ├── about/          # About page
│   ├── blog/           # Blog listing page
│   ├── contact/        # Contact page
│   ├── api/            # API routes
│   │   ├── posts/      # Posts API endpoints
│   │   └── pages/      # Pages API endpoints
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PostCard.tsx
│   └── ReadingProgress.tsx
├── lib/               # Utility functions and configuration
│   ├── config.ts      # Environment configuration
│   ├── markdown.ts    # Server-side markdown parsing for posts
│   ├── pages-markdown.ts # Server-side markdown parsing for pages
│   ├── posts.ts       # Client-side posts API
│   ├── pages.ts       # Client-side pages API
│   └── utils.ts       # Utility functions
├── types/             # TypeScript type definitions
│   ├── post.ts        # Post entity types
│   └── page.ts        # Page entity types
posts/                 # Markdown blog posts
pages/                 # Markdown pages
└── public/
    └── images/        # Static images
```

### Content Architecture

The application serves content through a dual-layer system:

**Server-side parsing:**
- `src/lib/markdown.ts` - Parses post markdown files
- `src/lib/pages-markdown.ts` - Parses page markdown files

**Client-side API:**
- `src/lib/posts.ts` - Client-side posts interface
- `src/lib/pages.ts` - Client-side pages interface
- `/api/posts/` and `/api/pages/` - REST API endpoints

All content entities are fully typed with TypeScript interfaces.

### Styling

The project uses TailwindCSS with custom configurations:

- **Glassmorphism effects**: Backdrop blur with gradient backgrounds
- **Custom typography**: Extended prose styles for markdown content
- **Responsive design**: Mobile-first approach with breakpoint utilities
- **Custom animations**: CSS keyframes for UI interactions

## Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard (optional)
4. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Configure build command as `npm run build`
- **Railway**: Connect GitHub repository and deploy
- **DigitalOcean App Platform**: Use Node.js buildpack

## Configuration

### Next.js Configuration

Key configurations in `next.config.mjs`:

- **App Directory**: App router enabled
- **Image Optimization**: Configured for local images
- **API Routes**: RESTful endpoints for content

### Content Configuration

- **Posts**: Stored in `/posts/` directory as markdown files
- **Pages**: Stored in `/pages/` directory as markdown files
- **Images**: Static images in `/public/images/`
- **Metadata**: Frontmatter-based with Gray Matter parsing

## Migration

This project was migrated from a WordPress-based architecture. Migration scripts are available in `/scripts/` for reference, but the application now runs entirely on local markdown files for improved performance and maintainability.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Website**: [oriol.im](https://oriol.im)
- **Email**: Contact through the website form
- **GitHub**: [@OriolEgea](https://github.com/OriolEgea)

---

Built with ❤️ using Next.js and Markdown