import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white pt-16 pb-8 px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and Info */}
          <div className="mb-8 md:mb-0">
            <div className="h-14 w-32 relative mb-4">
              <Image
                src="/images/logo.png"
                alt="HextaSphere Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-dark text-sm max-w-xs">
              Providing innovative IT and Engineering solutions for businesses worldwide.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-dark text-base mb-4">Quick Links</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/" className="text-dark hover:text-primary text-sm">Home</Link></li>
                <li><Link href="/about" className="text-dark hover:text-primary text-sm">About</Link></li>
                <li><Link href="/projects" className="text-dark hover:text-primary text-sm">Projects</Link></li>
                <li><Link href="/clients" className="text-dark hover:text-primary text-sm">Clients</Link></li>
                <li><Link href="/careers" className="text-dark hover:text-primary text-sm">Careers</Link></li>
                <li><Link href="/contact" className="text-dark hover:text-primary text-sm">Contact us</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-dark text-base mb-4">Contact Us</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <address className="not-italic">
              <p className="text-dark text-sm mb-2">123 Tech Lane,</p>
              <p className="text-dark text-sm mb-2">Innovation Park,</p>
              <p className="text-dark text-sm mb-2">CA 94103</p>
              <p className="text-dark text-sm mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-dark text-sm mb-2">Email: info@hextasphere.com</p>
            </address>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-dark text-base mb-4">Follow Us</h3>
            <div className="h-px w-20 bg-dark mb-4"></div>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" aria-label="Twitter">
                <Twitter size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark hover:text-primary" aria-label="Facebook">
                <Facebook size={22} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="h-px w-full bg-gray-200 my-8"></div>
        <div className="text-center">
          <p className="text-dark text-xs">
            © {currentYear} HextaSphere. All rights reserved. info@hextasphere.com
          </p>
        </div>
      </div>
    </footer>
  )
}