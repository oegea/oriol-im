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

## Migration Project

### Next.js Migration (next-blog/)
A new Next.js project is being developed in the `next-blog/` directory to replace the Frontity implementation:

- **Technology Stack**: Next.js 14 + TypeScript + Tailwind CSS + WordPress API
- **Development Commands**:
  - `cd next-blog && npm run dev` - Start Next.js development server
  - `cd next-blog && npm run build` - Build for production
  - `cd next-blog && npm run type-check` - TypeScript type checking
- **Structure**: App Router with server-side rendering
- **WordPress Integration**: Same API endpoint (`https://wp.oriol.im/wp-json`)
- **Responsive Design**: Tailwind CSS with mobile-first approach

### Original Frontity Project
This is a personal blog that was rapidly developed over a weekend. The code may not follow all Frontity best practices but serves as a functional example of a Frontity-powered WordPress frontend. This will be phased out once the Next.js migration is complete.