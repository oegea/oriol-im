import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReadingProgress from '@/components/ReadingProgress'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  metadataBase: new URL(config.site.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-coy.min.css" 
        />
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"
          defer
        />
        <script 
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"
          defer
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors">
        <ThemeProvider>
          <ReadingProgress />
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}