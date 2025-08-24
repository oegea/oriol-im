'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { config } from '@/lib/config'
import { Home, User, Mail, BookOpen } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navigation = [
  { name: 'Inicio', href: '/', icon: Home },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Sobre mí', href: '/about', icon: User },
  { name: 'Contacto', href: '/contact', icon: Mail },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = isMobileMenuOpen ? 'unset' : 'hidden'
  }

  return (
    <>
      {/* Glassmorphism header */}
      <header 
        className="fixed w-full top-0 z-50 backdrop-blur-xl overflow-hidden header-glassmorphism"
        style={{ 
          height: '70px',
        }}
      >
        {/* Subtle moving gradient animation */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `linear-gradient(-45deg, 
              rgba(252,203,11,0.1) 0%, 
              transparent 25%, 
              transparent 50%, 
              rgba(245,158,11,0.1) 75%, 
              rgba(252,203,11,0.1) 100%)`,
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease-in-out infinite',
          }}
        />
        
        <div className="max-w-6xl mx-auto px-6 h-full relative">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-4 group relative"
            >
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Oriol Egea Logo"
                  width={40}
                  height={40}
                  className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col">
                <span 
                  className="text-slate-900 dark:text-slate-50 text-xl font-bold group-hover:text-yellow-600 transition-colors duration-300"
                  style={{ fontFamily: "'Kaushan Script', cursive" }}
                >
                  {config.site.title}
                </span>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {navigation.map((item, index) => {
                  const isActive = pathname === item.href
                  const IconComponent = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group relative px-5 py-2.5 rounded-full font-medium transition-all duration-500 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-slate-700 dark:text-slate-200 hover:text-yellow-600'
                      }`}
                      style={{
                        background: isActive 
                          ? 'var(--color-gradient-active)' 
                          : 'transparent',
                        animationDelay: `${index * 100}ms`
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                      
                      {/* Active state glow */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-sm scale-105" />
                      )}
                      
                      <div className="relative z-10 flex items-center space-x-2">
                        <IconComponent size={18} className="flex-shrink-0" />
                        <span className="hidden xl:block">{item.name}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
              
              {/* Theme toggle separated on the right */}
              <div className="ml-6 pl-6 border-l border-white/20 dark:border-slate-600/30">
                <ThemeToggle />
              </div>
            </nav>
            
            {/* Mobile controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button 
                className="relative p-3 rounded-full hover:bg-white/30 dark:hover:bg-slate-700/30 transition-all duration-300"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center space-y-1">
                  <div className={`w-4 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                  }`} />
                  <div className={`w-4 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`} />
                  <div className={`w-4 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Glassmorphism backdrop */}
          <div 
            className="fixed inset-0 bg-black/10 dark:bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => {
              setIsMobileMenuOpen(false)
              document.body.style.overflow = 'unset'
            }}
          />
          
          {/* Floating menu panel */}
          <div 
            className="fixed top-20 left-4 right-4 z-50 lg:hidden"
            style={{ 
              animation: 'floatIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <div 
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-slate-700/30 shadow-2xl overflow-hidden mobile-menu-glassmorphism"
            >
              <div className="p-6">
                <nav className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = pathname === item.href
                    const IconComponent = item.icon
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center p-4 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? 'gradient-primary text-white shadow-lg' 
                            : 'text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700/70 hover:text-yellow-600'
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: `slideInRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms both`
                        }}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          document.body.style.overflow = 'unset'
                        }}
                      >
                        <div className="flex items-center space-x-3">
                          <IconComponent size={20} className="flex-shrink-0" />
                          <span className="font-semibold text-lg">{item.name}</span>
                        </div>
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                        )}
                      </Link>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer for fixed header */}
      <div style={{ height: '70px' }} />
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes floatIn {
          from {
            opacity: 0;
            transform: translateY(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(1deg);
          }
        }
        
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}