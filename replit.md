# Personal Resume & Project Showcase Website

## Overview

This is a bilingual (English/Chinese) personal portfolio website for ManYao Li, a Data Science & NLP researcher. The application is built as a full-stack web application using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The site showcases resume content, research projects, blog posts, and contact information with smooth animations and responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom GitHub-inspired design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state, React Context for language switching
- **Animations**: Custom scroll animations with Intersection Observer API
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Design**: RESTful API structure with `/api` prefix
- **Error Handling**: Centralized error middleware
- **Development**: Hot module replacement via Vite integration

### Database & ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with schema-first approach
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: `@neondatabase/serverless` for serverless PostgreSQL connections

## Key Components

### Language System
- **Implementation**: React Context API for global language state
- **Features**: Toggle between English and Chinese, persistent across navigation
- **Content Structure**: Centralized content object with `{ en: string, zh: string }` format

### UI Component Library
- **Base**: Radix UI primitives for accessibility and behavior
- **Styling**: Tailwind CSS with custom design tokens
- **Theme**: GitHub-inspired color palette with CSS custom properties
- **Components**: Comprehensive set including buttons, cards, dialogs, forms, navigation

### Animation System
- **Scroll Animations**: Custom hook using Intersection Observer
- **CSS Transitions**: Tailwind classes for hover and focus states
- **Performance**: Optimized animations with `transform` and `opacity`

### Content Sections
- **Hero Section**: Introduction with profile image and call-to-action buttons
- **About Section**: Education, research focus, and technical skills
- **Projects Section**: Research projects with categorization and skill tags
- **Blog Section**: Article previews with categories
- **Contact Section**: Multiple contact methods with social links

## Data Flow

### Client-Side State
1. **Language Context**: Global language preference managed through React Context
2. **Query Client**: TanStack React Query handles server state and caching
3. **Component State**: Local state for UI interactions (mobile menu, animations)

### Server Communication
1. **API Routes**: Currently minimal backend with placeholder user storage
2. **Static Assets**: Profile images and documents served from `attached_assets`
3. **Development**: Vite proxy handles API requests during development

### Content Management
1. **Static Content**: All text content defined in TypeScript objects
2. **Bilingual Support**: Content structure supports both English and Chinese
3. **Type Safety**: Full TypeScript coverage for content and API responses

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **UI Libraries**: Radix UI primitives, Lucide React icons, Class Variance Authority
- **Database**: Drizzle ORM, Drizzle Zod, Neon serverless PostgreSQL
- **Development**: Vite, TypeScript, ESBuild, Replit plugins

### Styling & Design
- **Tailwind CSS**: Core styling framework with custom configuration
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Google Fonts**: Inter font family for typography
- **Custom Animations**: CSS transitions and transforms

### Backend Services
- **Express.js**: Web server framework
- **Session Management**: PostgreSQL session store (configured but not used)
- **File Serving**: Static file serving for assets and built frontend

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles Express server to `dist/index.js`
3. **Assets**: Static assets copied to build directory

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Express serves built React app and API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Replit Integration
- **Development Tools**: Replit-specific plugins for debugging and error overlay
- **File Structure**: Organized for Replit's file system and deployment
- **Environment**: Configured for Replit's Node.js runtime

### Database Management
- **Schema**: Drizzle schema defined in `shared/schema.ts`
- **Migrations**: Generated and stored in `migrations/` directory
- **Deployment**: `db:push` command for schema synchronization

The application follows a monorepo structure with clear separation between client, server, and shared code, making it suitable for both development and production deployment on Replit's platform.