import { getPage } from '@/lib/wordpress'

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con Oriol Egea',
}

export default async function ContactPage() {
  const page = await getPage('contact')

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Contacto
          </h1>
          <div className="prose prose-lg max-w-none">
            <p>Información de contacto próximamente...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {page.title.rendered}
        </h1>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </div>
  )
}