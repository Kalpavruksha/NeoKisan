'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      try {
        setScrolled(window.scrollY > 20)
      } catch (error) {
        console.error('Scroll handler error:', error)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      try {
        window.removeEventListener('scroll', handleScroll)
      } catch (error) {
        console.error('Scroll cleanup error:', error)
      }
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/impact', label: 'Impact' },
    { href: '/team', label: 'Team' },
    { href: '/careers', label: 'Careers' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-card shadow-2xl border-b border-primary-200/30' 
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="hidden sm:inline">Neokisan</span>
            <span className="hidden md:inline">Innovations</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-700 bg-primary-50/50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/30'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="ml-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-primary-700 bg-primary-50/50 border-l-4 border-primary-600'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg mt-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
