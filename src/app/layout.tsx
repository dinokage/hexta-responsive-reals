import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import {Navbar} from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from '@/components/theme-provider'
import NextTopLoader from 'nextjs-toploader'
import { PostHogProvider } from '@/components/PostHogProvider'

const jakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta-sans',
})

// Load Cabinet Grotesk for hero section headings
const cabinetGrotesk = localFont({
  src: [
    {
      path: './fonts/CabinetGrotesk-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CabinetGrotesk-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cabinet-grotesk',
})

export const metadata: Metadata = {
  title: 'HextaSphere - IT & Engineering Services',
  description: 'HextaSphere provides specialized IT and Engineering services including custom software development, blockchain solutions, and IoT systems.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jakartaSans.variable} ${cabinetGrotesk.variable} font-sans`}>
        <PostHogProvider>
          <HeroUIProvider>
            <ThemeProvider attribute="class">
              <NextTopLoader color="#007BFF" showSpinner={false} initialPosition={0.2}  />
              <Navbar />
              <main className="relative">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </HeroUIProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}