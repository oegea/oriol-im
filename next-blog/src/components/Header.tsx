'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { config } from '@/lib/config'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre mí', href: '/about' },
  { name: 'Contacto', href: '/contact' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'unset' : 'hidden'
  }

  return (
    <>
      <header className="bg-white header-shadow fixed w-full top-0 z-50" style={{ height: '75px' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center h-full">
            <Link 
              href="/" 
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image
                src={`${config.wordpress.contentUrl}/2020/05/logo.png`}
                alt="Oriol Egea Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span 
                className="text-black text-xl"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                {config.site.title}
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-black transition-colors ${
                    pathname === item.href 
                      ? 'font-bold' 
                      : 'font-semibold hover:opacity-70'
                  }`}
                  style={{ fontSize: '1.3em', fontWeight: pathname === item.href ? 700 : 600 }}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-white z-40 lg:hidden"
          style={{ paddingTop: '75px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black text-xl font-semibold hover:bg-black hover:bg-opacity-5 px-6 py-3 rounded transition-colors"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  document.body.style.overflow = 'unset'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div style={{ height: '75px' }} />
    </>
  )
}