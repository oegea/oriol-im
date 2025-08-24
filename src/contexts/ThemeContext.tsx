'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  actualTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Check if dark class is already applied by the script
  const initialTheme = typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [actualTheme, setActualTheme] = useState<'light' | 'dark'>(initialTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check for saved theme first
    const savedTheme = localStorage.getItem('theme') as Theme
    if (savedTheme) {
      setTheme(savedTheme)
      return
    }
    
    // If no saved theme, use system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    const initialTheme = systemPrefersDark.matches ? 'dark' : 'light'
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    setActualTheme(theme)
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}