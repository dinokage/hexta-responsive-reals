'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import HextaLogo from './Logo'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Our Team', path: '/team' },
  { name: 'Clients', path: '/clients' },
  { name: 'Careers', path: '/careers' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="w-full fixed top-0 z-40 py-4 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="h-14 w-32 relative">
              <HextaLogo />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-semibold transition-colors ${
                    pathname === item.path
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ModeToggle />
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 border-t mt-4 border-border backdrop-blur-md bg-background/70">
            <ul className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`block text-sm font-semibold ${
                      pathname === item.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}