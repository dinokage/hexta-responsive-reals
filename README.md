# HextaSphere Website

A modern, responsive website for HextaSphere - an IT and Engineering services company. Built with Next.js 14 (App Router), TailwindCSS, and PWA support.

## Features

- **Modern Design**: Clean, professional UI based on the company's Figma design
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Progressive Web App (PWA)**: Installable on devices with offline capabilities
- **SEO Optimized**: Proper metadata and semantic HTML
- **Performance Focused**: Fast loading and optimal Core Web Vitals
- **Accessibility**: WCAG compliant design and implementation

## Technology Stack

- **Next.js 14**: Using the App Router architecture for enhanced performance and SEO
- **TypeScript**: Type-safe code for better reliability and developer experience
- **TailwindCSS**: Utility-first CSS framework for efficient styling
- **next-pwa**: PWA integration for offline capabilities
- **Lucide Icons**: Modern icon library
- **Service Worker**: Custom offline experience

## Getting Started

### Prerequisites

- Node.js 16.8.0 or later

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/hextasphere-website.git
cd hextasphere-website
```

1. Install dependencies

```bash
npm install
```

1. Run the development server

```bash
npm run dev
```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/app                 # Next.js App Router pages
  /about             # About page
  /projects          # Projects listing page
  /projects/[slug]   # Project detail page
  /services          # Services page
  /contact           # Contact page
  /offline           # Offline fallback page
  /api               # API routes
  /page.tsx          # Home page
  /layout.tsx        # Root layout
  /globals.css       # Global styles
/components          # Reusable UI components
  /layout            # Layout components (Header, Footer)
  /home              # Home page sections
  /projects          # Project related components
  /ui                # UI elements
/public              # Static assets
  /images            # Image files
  /icons             # PWA icons
  /manifest.json     # PWA manifest
  /sw.js             # Service worker
```

## PWA Features

This website is configured as a Progressive Web App, which means it can be installed on devices and includes offline capabilities. Key PWA features include:

- **Installable**: Can be added to home screen on mobile devices and desktops
- **Offline Support**: Core pages and assets are cached for offline use
- **Service Worker**: Manages caching and offline experience
- **Web Manifest**: Defines app appearance when installed

## Deployment

This project is ready to be deployed to any hosting service that supports Next.js applications, including:

- **Vercel**: Optimized for Next.js applications
- **Netlify**: Easy deployment with continuous integration
- **AWS Amplify**: Scalable hosting with AWS services

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
