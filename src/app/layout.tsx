import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from '@/components/theme-provider'
import NextTopLoader from 'nextjs-toploader'
import { PostHogProvider } from '@/components/PostHogProvider'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
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
      <body className={`${openSans.variable} font-sans`}>
        <PostHogProvider>
          <HeroUIProvider>
            <ThemeProvider attribute="class">
              <NextTopLoader color="#007BFF" showSpinner={false} initialPosition={0.2}  />
              <Header />
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