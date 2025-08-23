# Oriol's Blog - Next.js Frontend

A modern, responsive blog application built with Next.js 14 that uses WordPress as a headless CMS. This project serves as the frontend for [oriol.im](https://oriol.im), featuring a glassmorphism design with Spanish localization.

## Features

- **Headless WordPress Integration**: Fetches content from WordPress REST API
- **Modern Design**: Glassmorphism UI with backdrop blur effects
- **Responsive Layout**: Mobile-first design with floating navigation menu
- **Dynamic Routing**: Automatic page generation for WordPress posts and pages
- **TypeScript**: Full type safety with WordPress entity definitions
- **SEO Optimized**: Server-side rendering with Next.js App Router
- **Image Optimization**: Next.js Image component with WordPress media integration
- **Syntax Highlighting**: Prism.js integration for code blocks

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS with custom glassmorphism effects
- **CMS**: WordPress (headless)
- **API Client**: Axios
- **Icons**: Lucide React
- **Image Handling**: Next.js Image with WordPress media API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Access to a WordPress installation with REST API enabled

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

3. Set up environment variables:
```bash
# Copy the example environment file (create one if needed)
cp .env.example .env.local
```

Configure the following environment variables:
```env
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
NEXT_PUBLIC_WP_CONTENT_URL=https://your-wordpress-site.com/wp-content/uploads
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_TITLE=Your Site Title
NEXT_PUBLIC_SITE_DESCRIPTION=Your site description
NEXT_PUBLIC_CONTACT_FORM_URL=https://your-wordpress-site.com/contact-form/index.php
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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
│   ├── [slug]/         # Dynamic routes for pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── posts/[slug]/   # Dynamic routes for blog posts
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage
├── components/         # Reusable React components
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── NewsletterForm.tsx
│   ├── PostCard.tsx
│   └── ReadingProgress.tsx
├── lib/               # Utility functions and configuration
│   ├── config.ts      # Environment configuration
│   └── wordpress.ts   # WordPress API functions
└── types/             # TypeScript type definitions
    └── wordpress.ts   # WordPress entity types
```

### WordPress Integration

The application integrates with WordPress through the REST API. Key functions include:

- `getPosts(page, perPage)` - Fetch paginated blog posts
- `getPost(slug)` - Fetch single post by slug
- `getPage(slug)` - Fetch single page by slug
- `getAllPageSlugs()` - Get all page slugs for static generation

All WordPress entities are fully typed with TypeScript interfaces.

### Styling

The project uses TailwindCSS with custom configurations:

- **Glassmorphism effects**: Backdrop blur with gradient backgrounds
- **Custom typography**: Extended prose styles for WordPress content
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
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Netlify**: Configure build command as `npm run build`
- **Railway**: Connect GitHub repository and deploy
- **DigitalOcean App Platform**: Use Node.js buildpack

## Configuration

### WordPress Setup

Ensure your WordPress installation has:

1. **REST API enabled** (default in modern WordPress)
2. **CORS configured** if on different domain
3. **Media uploads** properly configured
4. **Permalinks** set to "Post name" or custom structure

### Next.js Configuration

Key configurations in `next.config.mjs`:

- **App Directory**: Experimental app router enabled
- **Image Domains**: WordPress content domain configured
- **API Routes**: Optional API routes for additional functionality

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

Built with ❤️ using Next.js and WordPress