'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const { actualTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center p-2.5 rounded-full">
        <Sun size={18} className="text-slate-700 dark:text-slate-200" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(actualTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2.5 rounded-full hover:bg-white/30 dark:hover:bg-slate-700/30 transition-all duration-300 border border-transparent hover:border-yellow-400/30 group"
      aria-label={`Cambiar a modo ${actualTheme === 'dark' ? 'claro' : 'oscuro'}`}
      title={`Cambiar a modo ${actualTheme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {actualTheme === 'dark' ? (
        <Sun size={18} className="text-slate-700 dark:text-slate-200 group-hover:text-yellow-500 transition-colors duration-300" />
      ) : (
        <Moon size={18} className="text-slate-700 dark:text-slate-200 group-hover:text-blue-400 transition-colors duration-300" />
      )}
    </button>
  )
}