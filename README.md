# Provider Application - Marketing Website

A fully responsive, SEO-friendly marketing website for Provider Application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **9 Complete Pages**: Home, About, Services, How It Works, Features, Pricing, Download, FAQ, and Contact
- **Dark Mode Support**: Toggle between light and dark themes with persistent preference
- **SEO Optimized**: Complete metadata, Open Graph tags, sitemap, and robots.txt
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Fully Responsive**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with orange (#F97316) and white color scheme
- **Accessible**: Semantic HTML, proper contrast ratios, and ARIA labels
- **Fast Performance**: Optimized static generation and asset optimization

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Geist Sans & Geist Mono

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── download/
│   ├── faq/
│   ├── features/
│   ├── how-it-works/
│   ├── pricing/
│   ├── services/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── sitemap.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ThemeToggle.tsx
└── constants/
    └── navigation.ts
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Hero section, product overview, and CTA
- **About** (`/about`) - Company vision, values, and team information
- **Services** (`/services`) - Comprehensive services offered
- **How It Works** (`/how-it-works`) - Step-by-step process flow
- **Features** (`/features`) - Key app features and benefits
- **Pricing** (`/pricing`) - Commission and pricing models
- **Download** (`/download`) - App download links and requirements
- **FAQ** (`/faq`) - Frequently asked questions with accordion
- **Feedback** (`/feedback`) - Feedback form and support information

## SEO Features

- Next.js Metadata API for all pages
- Proper heading hierarchy (h1, h2, h3)
- SEO-friendly URLs
- Open Graph tags
- Twitter Card support
- Sitemap.xml generation
- Robots.txt configuration

## Dark Mode

Dark mode is implemented using Tailwind's dark mode strategy with class-based toggling. User preference is stored in localStorage and persists across sessions.

## Customization

### Colors

Primary color (Orange): `#F97316` - Update in Tailwind config or component classes

### Navigation

Update navigation links in `src/constants/navigation.ts`

### Site Information

Update site name and description in `src/constants/navigation.ts`

## Build

Build the production version:

```bash
npm run build
```

The build output will be in the `.next` folder. All pages are statically generated for optimal performance.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

### Other Platforms

This Next.js app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Performance

- Static page generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.
