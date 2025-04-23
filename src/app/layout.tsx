import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import "./globals.css"
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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
    apple: '/icons/apple-icon.png',
  },
  themeColor: '#217496',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}