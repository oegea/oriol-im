'use client'

import Image from 'next/image'
import Head from 'next/head'
import { config } from '@/lib/config'
import { MapPin, Briefcase, Calendar, Filter } from 'lucide-react'
import { useState } from 'react'


const personalIntro = {
  title: "Mi historia",
  content: "¡Hola! Soy Oriol. Nací hace {age} años en Terrassa (España). Desde pequeño he sido apasionado por la tecnología, siempre experimentando y aprendiendo."
}

const timelineEvents = [
  {
    year: "2024",
    title: "CTO & Co-Founder - Amplify Software",
    description: "Me uno a Amplify Software como CTO y co-fundador para democratizar la IA en broadcast. Nuestra misión es hacer accesibles tecnologías que antes requerían infraestructuras complejas y presupuestos prohibitivos, permitiendo que cualquier profesional de medios pueda innovar.",
    type: "work",
    icon: "🚀",
    image: "/logos/amplify-logo.webp",
    link: "https://www.amplifysoft.io",
    current: true
  },
  {
    year: "2022",
    title: "Management 3.0 Foundation Workshop",
    description: "Metodologías ágiles de liderazgo y gestión de equipos de alto rendimiento.",
    type: "education",
    icon: "👥",
    url: "https://management30.com/badges/oriol-egea-143512756465189737d2398/"
  },
  {
    year: "2023",
    title: "Docky",
    description: "Desarrollo Docky, una herramienta open source para desarrollar servicios REST rápidamente, con enfoque similar a Firebase. NodeJS y simplicidad.",
    type: "project",
    icon: "⚡",
    link: "https://www.docky.tech/"
  },
  {
    year: "2023", 
    title: "Adevinta FE Day Speaker",
    description: "Participo en el Adevinta FE Day para compartir algunos aprendizajes del desarrollo y mantenimiento de Passager.",
    type: "achievement",
    icon: "🎤"
  },
  {
    year: "2022-2024",
    title: "Senior Frontend Engineer - Adevinta Spain",
    description: "Desarrollo frontend en coches.net PRO, trabajando en la plataforma de gestión de concesionarios. Desarrollo paralelo de proyectos open source como Passager y Docky.",
    type: "work",
    icon: "💻",
    image: "/logos/adevinta-logo.png",
    link: "https://adevinta.es"
  },
  {
    year: "2022",
    title: "Passager",
    description: "Desarrollo Passager, un gestor de contraseñas Open Source liberado bajo licencia AGPL, que utiliza la Crypto Web API. Encapsulado como mobile app con Capacitor.",
    type: "project",
    icon: "🔐",
    link: "https://github.com/oegea/passager-password-manager"
  },
  {
    year: "2022",
    title: "Dial a Norris",
    description: "Desarrollo un servicio VoIP tipo 'dial-a-joke' que ofrece frases de Chuck Norris. Experimentación con VoIP y servicios telefónicos.",
    type: "project",
    icon: "📞",
    link: "https://github.com/oegea/dial-a-norris"
  },
  {
    year: "2019",
    title: "Professional Scrum Product Owner I",
    description: "Obtengo la certificación PSPO1 de Scrum.org siguiendo un curso de Mplaza.",
    type: "education",
    icon: "📜",
    image: "https://static.scrum.org/web/badges/badge-pspoi.svg",
    url: "https://www.credly.com/badges/6fcefa1a-473a-474d-b7d8-f26e5504d878"
  },
  {
    year: "2015-2019",
    title: "Grado Superior: Desarrollo de Aplicaciones Multiplataforma",
    description: "Finalizo el Grado Superior en Desarrollo de Aplicaciones Multiplataforma a distancia.",
    type: "education",
    icon: "🎓"
  },
  {
    year: "2018-2022",
    title: "Tech Lead - VSN",
    description: "Liderazgo de equipo de desarrollo creando VSNCREA, plataforma escalable y multitenant para gestión, programación y distribución de contenidos multimedia para broadcasters. Crecimiento del equipo de 2 a 5 personas.",
    type: "work",
    icon: "👥"
  },
  {
    year: "2018",
    title: "Professional Scrum Master I",
    description: "Obtengo la certificación PSM1 de Scrum.org siguiendo un curso de Mplaza.",
    type: "education", 
    icon: "📜",
    image: "https://static.scrum.org/web/badges/badge-psmi.svg",
    url: "https://www.credly.com/badges/1694eade-5c2e-482c-876c-48636805be31"
  },
  {
    year: "2018",
    title: "IBC Amsterdam",
    description: "Viajo por primera vez a Amsterdam, para asistir al IBC, una feria del sector Media & Entertainment.",
    type: "personal",
    icon: "✈️"
  },
  {
    year: "2016",
    title: "La familia crece",
    description: "Adoptamos a Jeiko, el Spitz Japonés más listo y cariñoso del mundo.",
    type: "personal",
    icon: "🐕"
  },
  {
    year: "2014-2018",
    title: "Web & CRM Developer - VSN",
    description: "Desarrollo full-stack y administración de Salesforce. Evolución desde posición de becario hasta developer, trabajando en el rediseño del sitio web corporativo y desarrollo de aplicaciones internas.",
    type: "work",
    icon: "⚡"
  },
  {
    year: "2013",
    title: "FrikiPoint",
    description: "Programo FrikiPoint junto a un colega, una red social que permite conocer gente cercana a ti de tus mismas aficiones frikis. Primer proyecto serio, muchos errores, mucho aprendizaje.",
    type: "project",
    icon: "👥",
    link: "https://www.frikipoint.com"
  },
  {
    year: "2012-2014",
    title: "Grado Medio: Sistemas Microinformáticos y Redes",
    description: "Curso el Grado Medio en Sistemas Microinformáticos y Redes.",
    type: "education",
    icon: "🔧"
  },
  {
    year: "2011",
    title: "Fork de rAthena",
    description: "Creamos un fork del emulador rAthena modificando el core para permitir role-play avanzado. Aprendo aspectos básicos de MySQL, PHP y administración de servidores gracias al resto de partícipes del proyecto.",
    type: "project",
    icon: "🎮"
  },
  {
    year: "2009",
    title: "Piratas de Silicon Valley",
    description: "Veo Piratas de Silicon Valley por primera vez. Un colega de mi hermano me enseña EyeOS y me hago fan del proyecto.",
    type: "personal",
    icon: "🎬"
  },
  {
    year: "2006",
    title: "El lío con Windows Vista",
    description: "Microsoft libera Windows Vista. Me las apaño para descargarlo por P2P, y al lograr instalarlo (para disgusto de mis padres) dejo inservible el PC por falta de drivers. Consigo repararlo utilizando los discos de restauración.",
    type: "personal",
    icon: "🔄"
  },
  {
    year: "2006",
    title: "Windows Live Messenger",
    description: "Windows Live Messenger se convierte en el Whatsapp de la época (pero sin ser portátil, y sólo por las tardes) para la mayoría de compañeros de clase.",
    type: "personal",
    icon: "💬"
  },
  {
    year: "2006",
    title: "El primer ordenador",
    description: "Mis padres compran un nuevo ordenador. Empiezo a instalar programas que pruebo indiscriminadamente en Softonic. El Internet llega a casa gracias al ADSL de Wanadoo.",
    type: "personal",
    icon: "💻"
  },
]

const filterOptions = [
  { id: 'work', label: 'Trabajo', color: 'blue', count: 0 },
  { id: 'project', label: 'Proyectos', color: 'green', count: 0 },
  { id: 'education', label: 'Formación', color: 'purple', count: 0 },
  { id: 'personal', label: 'Momentos', color: 'gray', count: 0 }
]

export default function AboutPage() {
  const currentYear = new Date().getFullYear()
  const age = currentYear - 1996
  
  // Por defecto solo trabajo y formación activos
  const [activeFilters, setActiveFilters] = useState(new Set(['work', 'education']))
  
  // Actualizar contadores
  const filtersWithCounts = filterOptions.map(filter => ({
    ...filter,
    count: timelineEvents.filter(event => event.type === filter.id).length
  }))
  
  // Función para extraer el año de fin de un rango (ej: "2015-2019" -> 2019, "2024" -> 2024)
  const getEndYear = (yearString: string): number => {
    if (yearString.includes('-')) {
      return parseInt(yearString.split('-')[1])
    }
    return parseInt(yearString)
  }
  
  // Filtrar y ordenar eventos por año de fin (descendente)
  const filteredEvents = timelineEvents
    .filter(event => activeFilters.has(event.type))
    .sort((a, b) => getEndYear(b.year) - getEndYear(a.year))
  
  const toggleFilter = (filterId: string) => {
    const newFilters = new Set(activeFilters)
    if (newFilters.has(filterId)) {
      newFilters.delete(filterId)
    } else {
      newFilters.add(filterId)
    }
    setActiveFilters(newFilters)
  }
  
  return (
    <>
      <Head>
        <title>Sobre mí</title>
        <meta name="description" content="CTO & Co-Founder con más de 10 años de experiencia en desarrollo, liderazgo técnico y construcción de productos que resuelven problemas reales." />
      </Head>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="relative">
            <div 
              className="relative backdrop-blur-sm rounded-3xl border border-white/30 overflow-hidden p-1"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <Image
                src={`${config.wordpress.contentUrl}/2016/07/rsz_aaeaaqaaaaaaaalxaaaajda2zdljytzlltiymjetndqyys1hmzi4lwm1mti2nwfiodexma.jpg`}
                alt="Oriol Egea"
                width={400}
                height={400}
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a 
                href="https://www.linkedin.com/in/oriolegea/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image 
                  src={`${config.wordpress.contentUrl}/2020/05/linkedin-logo-1.png`}
                  alt="LinkedIn"
                  width={35}
                  height={35}
                />
              </a>
              <a 
                href="https://www.twitter.com/OriolEgea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image 
                  src={`${config.wordpress.contentUrl}/2020/05/twitter.png`}
                  alt="Twitter"
                  width={35}
                  height={35}
                />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Oriol Egea
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Briefcase size={18} />
                  <span>CTO & Co-Founder en </span>
                  <a 
                    href="https://www.amplifysoft.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    Amplify Software
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 mb-6">
                <MapPin size={16} />
                <span>Barcelona, España</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                {personalIntro.content.replace('{age}', age.toString())}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Actualmente trabajo como CTO & Co-Founder en <a href="https://www.amplifysoft.io/" target="_blank" className="text-yellow-600 hover:text-yellow-700 font-medium">Amplify Software</a>, donde construimos herramientas de IA para profesionales del broadcast. Antes he contribuido como Senior Frontend Engineer al desarrollo de <a href="https://www.coches.net/" target="_blank" className="text-yellow-600 hover:text-yellow-700 font-medium">coches.net</a>, el portal de compraventa de vehículos líder en España, en <a href="https://adevinta.es/" target="_blank" className="text-yellow-600 hover:text-yellow-700 font-medium">Adevinta Spain</a>, y anteriormente como Tech Lead al liderazgo del desarrollo de uno de los principales productos en <a href="https://www.vsn-tv.com/" target="_blank" className="text-yellow-600 hover:text-yellow-700 font-medium">VSN</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Calendar size={24} className="text-yellow-600" />
            <h2 className="text-3xl font-bold text-gray-900">Mi cronología</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Filtros */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Filter size={18} className="text-gray-500" />
            <span className="text-sm text-gray-600">Filtrar por categoría:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filtersWithCounts.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilters.has(filter.id)
                    ? `${filter.color === 'blue' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                        filter.color === 'green' ? 'bg-green-100 text-green-700 border-green-200' :
                        filter.color === 'purple' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                        'bg-gray-100 text-gray-700 border-gray-200'} border-2`
                    : 'bg-white text-gray-500 border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  activeFilters.has(filter.id)
                    ? 'bg-white/70'
                    : 'bg-gray-100'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {filteredEvents.map((event, index) => {
            const isFirstEvent = index === 0
            
            return isFirstEvent ? (
              // Banner especial para el primer evento
              <article 
                key={index}
                className="group relative w-full"
              >
                <div 
                  className={`relative backdrop-blur-sm rounded-3xl border overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) ${
                    event.type === 'work' ? 'border-blue-200/50' :
                    event.type === 'project' ? 'border-green-200/50' :
                    event.type === 'education' ? 'border-purple-200/50' :
                    'border-gray-200/50'
                  }`}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    boxShadow: '0 20px 64px rgba(0,0,0,0.15)',
                  }}
                >
                  {/* Hover glow effect with category color */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    event.type === 'work' ? 'bg-gradient-to-br from-blue-400/10 to-blue-600/10' :
                    event.type === 'project' ? 'bg-gradient-to-br from-green-400/10 to-green-600/10' :
                    event.type === 'education' ? 'bg-gradient-to-br from-purple-400/10 to-purple-600/10' :
                    'bg-gradient-to-br from-gray-400/10 to-gray-600/10'
                  }`} />

                  {/* Category header bar más gruesa */}
                  <div className={`h-2 w-full ${
                    event.type === 'work' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                    event.type === 'project' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                    event.type === 'education' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                    'bg-gradient-to-r from-gray-400 to-gray-600'
                  }`} />

                  {/* Content con padding mayor */}
                  <div className="p-8 relative">
                    {/* Header con año y categoría */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        {/* Category icon más grande */}
                        {event.image ? (
                          <div className="relative">
                            <Image
                              src={event.image}
                              alt={event.title}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium ${
                            event.type === 'work' ? 'bg-blue-100 text-blue-700' :
                            event.type === 'project' ? 'bg-green-100 text-green-700' :
                            event.type === 'education' ? 'bg-purple-100 text-purple-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {event.icon}
                          </div>
                        )}
                        
                        {/* Category label más grande */}
                        <span className={`text-sm font-semibold px-3 py-2 rounded-full ${
                          event.type === 'work' ? 'bg-blue-50 text-blue-600' :
                          event.type === 'project' ? 'bg-green-50 text-green-600' :
                          event.type === 'education' ? 'bg-purple-50 text-purple-600' :
                          'bg-gray-50 text-gray-600'
                        }`}>
                          {event.type === 'work' ? 'Trabajo' :
                           event.type === 'project' ? 'Proyecto' :
                           event.type === 'education' ? 'Formación' : 'Momento'}
                        </span>
                      </div>
                      
                      {/* Year and status más grandes */}
                      <div className="flex items-center space-x-3">
                        <span className="text-lg font-bold text-gray-700">
                          {event.year}
                        </span>
                        {event.current && (
                          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-2 rounded-full animate-pulse">
                            Actual
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title más grande */}
                    <h3 className="mb-4 text-3xl font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Description más grande */}
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Links si existen */}
                    {(event.link || event.url) && (
                      <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                        {event.link && (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-green-600 font-medium hover:text-green-700 transition-colors duration-300 text-base"
                          >
                            <span>Ver proyecto</span>
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                            </svg>
                          </a>
                        )}
                        {event.url && (
                          <a
                            href={event.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-base"
                          >
                            <span>Ver certificado</span>
                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ) : null
          })}
          
          {/* Grid normal para el resto de eventos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.slice(1).map((event, index) => (
              <article 
                key={index + 1}
                className="group relative h-full"
              >
              {/* Card with glassmorphism similar to blog posts */}
              <div 
                className={`relative h-full backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) ${
                  event.type === 'work' ? 'border-blue-200/50' :
                  event.type === 'project' ? 'border-green-200/50' :
                  event.type === 'education' ? 'border-purple-200/50' :
                  'border-gray-200/50'
                }`}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                {/* Hover glow effect with category color */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  event.type === 'work' ? 'bg-gradient-to-br from-blue-400/10 to-blue-600/10' :
                  event.type === 'project' ? 'bg-gradient-to-br from-green-400/10 to-green-600/10' :
                  event.type === 'education' ? 'bg-gradient-to-br from-purple-400/10 to-purple-600/10' :
                  'bg-gradient-to-br from-gray-400/10 to-gray-600/10'
                }`} />

                {/* Category header bar */}
                <div className={`h-1 w-full ${
                  event.type === 'work' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                  event.type === 'project' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                  event.type === 'education' ? 'bg-gradient-to-r from-purple-400 to-purple-600' :
                  'bg-gradient-to-r from-gray-400 to-gray-600'
                }`} />

                {/* Content */}
                <div className="p-6 relative">
                  {/* Header with year and category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Category icon */}
                      {event.image ? (
                        <div className="relative">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-medium ${
                          event.type === 'work' ? 'bg-blue-100 text-blue-700' :
                          event.type === 'project' ? 'bg-green-100 text-green-700' :
                          event.type === 'education' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {event.icon}
                        </div>
                      )}
                      
                      {/* Category label */}
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        event.type === 'work' ? 'bg-blue-50 text-blue-600' :
                        event.type === 'project' ? 'bg-green-50 text-green-600' :
                        event.type === 'education' ? 'bg-purple-50 text-purple-600' :
                        'bg-gray-50 text-gray-600'
                      }`}>
                        {event.type === 'work' ? 'Trabajo' :
                         event.type === 'project' ? 'Proyecto' :
                         event.type === 'education' ? 'Formación' : 'Momento'}
                      </span>
                    </div>
                    
                    {/* Year and status */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-gray-700">
                        {event.year}
                      </span>
                      {event.current && (
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full animate-pulse">
                          Actual
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Links */}
                  {(event.link || event.url) && (
                    <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-green-600 font-medium hover:text-green-700 transition-colors duration-300 text-sm"
                        >
                          <span>Ver proyecto</span>
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                          </svg>
                        </a>
                      )}
                      {event.url && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-sm"
                        >
                          <span>Ver certificado</span>
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
            ))}
          </div>
        </div>
      </section>



    </div>
    </>
  )
}