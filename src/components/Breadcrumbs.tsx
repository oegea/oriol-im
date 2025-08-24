import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
        {/* Home link */}
        <Link 
          href="/" 
          className="flex items-center hover:text-yellow-600 transition-colors duration-300"
        >
          <Home size={14} className="mr-1" />
          <span className="hidden sm:inline">Inicio</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-slate-400 dark:text-slate-500" />
            {item.href && index < items.length - 1 ? (
              <Link 
                href={item.href}
                className="hover:text-yellow-600 transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700 dark:text-slate-200 font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}