'use client'

import Image from 'next/image'
import Head from 'next/head'
import { config } from '@/lib/config'
import { MapPin, Briefcase } from 'lucide-react'
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
    icon: "👥",
    image: "/logos/vsn-logo.png"
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
    icon: "⚡",
    image: "/logos/vsn-logo.png"
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


export default function AboutPage() {
  const currentYear = new Date().getFullYear()
  const age = currentYear - 1996
  
  // Estado para filtros por sección
  const [professionalFilters, setProfessionalFilters] = useState({
    work: true,
    education: true
  })
  
  const [personalFilters, setPersonalFilters] = useState({
    project: true,
    personal: false
  })
  
  // Función para extraer el año de fin de un rango (ej: "2015-2019" -> 2019, "2024" -> 2024)
  const getEndYear = (yearString: string): number => {
    if (yearString.includes('-')) {
      return parseInt(yearString.split('-')[1])
    }
    return parseInt(yearString)
  }
  
  // Agrupar eventos por categoría y ordenar dentro de cada categoría
  const groupedEvents = {
    work: timelineEvents.filter(event => event.type === 'work').sort((a, b) => getEndYear(b.year) - getEndYear(a.year)),
    project: timelineEvents.filter(event => event.type === 'project').sort((a, b) => getEndYear(b.year) - getEndYear(a.year)),
    education: timelineEvents.filter(event => event.type === 'education').sort((a, b) => getEndYear(b.year) - getEndYear(a.year)),
    personal: timelineEvents.filter(event => event.type === 'personal').sort((a, b) => getEndYear(b.year) - getEndYear(a.year))
  }

  // Crear arrays combinados y ordenados para cada sección
  const professionalEvents = []
  if (professionalFilters.work) professionalEvents.push(...groupedEvents.work)
  if (professionalFilters.education) professionalEvents.push(...groupedEvents.education)
  professionalEvents.sort((a, b) => getEndYear(b.year) - getEndYear(a.year))

  const personalEvents = []
  if (personalFilters.project) personalEvents.push(...groupedEvents.project)
  if (personalFilters.personal) personalEvents.push(...groupedEvents.personal)
  personalEvents.sort((a, b) => getEndYear(b.year) - getEndYear(a.year))

  // Funciones para toggle de filtros por sección
  const toggleProfessionalFilter = (filterId: 'work' | 'education') => {
    setProfessionalFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }))
  }
  
  const togglePersonalFilter = (filterId: 'project' | 'personal') => {
    setPersonalFilters(prev => ({
      ...prev,
      [filterId]: !prev[filterId]
    }))
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


        {/* Sección Profesional: Trabajo y Formación */}
        {(professionalFilters.work || professionalFilters.education) && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Trabajo y formación</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-4" />
              
              {/* Checkboxes para esta sección */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={professionalFilters.work}
                      onChange={() => toggleProfessionalFilter('work')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      professionalFilters.work
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-gray-300 group-hover:border-yellow-300'
                    }`}>
                      {professionalFilters.work && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Trabajo ({groupedEvents.work.length})
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={professionalFilters.education}
                      onChange={() => toggleProfessionalFilter('education')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      professionalFilters.education
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-gray-300 group-hover:border-yellow-300'
                    }`}>
                      {professionalFilters.education && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Formación ({groupedEvents.education.length})
                  </span>
                </label>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Tarjeta destacada para el trabajo actual */}
              {professionalFilters.work && groupedEvents.work.length > 0 && (
                <article className="group relative w-full">
                  <div 
                    className="relative backdrop-blur-sm rounded-3xl border-0 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-2px) group-hover:shadow-2xl"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.3)',
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/5 to-orange-400/5" />
                    
                    {/* Background logo/emoji */}
                    <div className="absolute bottom-2 right-2 w-[240px] h-[240px] opacity-[0.065] pointer-events-none flex items-end justify-end">
                      {groupedEvents.work[0].image ? (
                        <Image
                          src={groupedEvents.work[0].image}
                          alt=""
                          width={240}
                          height={240}
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-[240px] leading-none select-none">
                          {groupedEvents.work[0].icon}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          {groupedEvents.work[0].image ? (
                            <Image src={groupedEvents.work[0].image} alt={groupedEvents.work[0].title} width={56} height={56} className="object-contain" />
                          ) : (
                            <div className="w-14 h-14 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-2xl font-medium">
                              {groupedEvents.work[0].icon}
                            </div>
                          )}
                          <span className="text-sm font-semibold px-3 py-2 rounded-full bg-gray-100 text-gray-700">Trabajo</span>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-gray-700">{groupedEvents.work[0].year}</span>
                          {groupedEvents.work[0].current && (
                            <span className="block text-sm font-medium text-green-600 bg-green-50 px-3 py-2 rounded-full animate-pulse mt-1">Actual</span>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="mb-4 text-3xl font-bold text-gray-900 leading-tight">
                        {groupedEvents.work[0].title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {groupedEvents.work[0].description}
                      </p>
                      
                      {(groupedEvents.work[0].link || groupedEvents.work[0].url) && (
                        <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                          {groupedEvents.work[0].link && (
                            <a href={groupedEvents.work[0].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-base">
                              <span>Ver proyecto</span>
                              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                              </svg>
                            </a>
                          )}
                          {groupedEvents.work[0].url && (
                            <a href={groupedEvents.work[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-base">
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
              )}
              
              {/* Grid para el resto de trabajo y formación */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Trabajo y formación mezclados cronológicamente (excluyendo el primer trabajo) */}
                {professionalEvents
                  .filter(event => !(event.type === 'work' && event === groupedEvents.work[0]))
                  .map((event, index) => (
                  <article key={`${event.type}-${index}`} className="group relative h-full">
                    <div 
                      className="relative h-full backdrop-blur-sm rounded-2xl border-0 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-1px) group-hover:shadow-xl"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 100%)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.2)',
                      }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/4 to-orange-400/4" />
                      
                      {/* Background logo/emoji */}
                      <div className="absolute bottom-1 right-1 w-[160px] h-[160px] opacity-[0.055] pointer-events-none flex items-end justify-end">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt=""
                            width={160}
                            height={160}
                            className="object-contain"
                          />
                        ) : (
                          <div className="text-[160px] leading-none select-none">
                            {event.icon}
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {event.image ? (
                              <Image src={event.image} alt={event.title} width={48} height={48} className="object-contain" />
                            ) : (
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium ${
                                event.type === 'work' 
                                  ? 'bg-gray-200 text-gray-700' 
                                  : 'bg-gray-100 text-gray-600'
                              }`}>
                                {event.icon}
                              </div>
                            )}
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                              event.type === 'work' 
                                ? 'bg-gray-100 text-gray-700' 
                                : 'bg-gray-50 text-gray-600'
                            }`}>
                              {event.type === 'work' ? 'Trabajo' : 'Formación'}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-gray-700">{event.year}</span>
                        </div>
                        
                        <h3 className="mb-3 font-bold text-gray-900 leading-tight">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>
                        
                        {(event.link || event.url) && (
                          <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                            {event.link && (
                              <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-sm">
                                <span>Ver proyecto</span>
                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                                </svg>
                              </a>
                            )}
                            {event.url && (
                              <a href={event.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-sm">
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
          </div>
        )}

        {/* Sección Personal: Proyectos y Momentos */}
        {(personalFilters.project || personalFilters.personal) && (
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proyectos y momentos</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-4" />
              
              {/* Checkboxes para esta sección */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={personalFilters.project}
                      onChange={() => togglePersonalFilter('project')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      personalFilters.project
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-gray-300 group-hover:border-yellow-300'
                    }`}>
                      {personalFilters.project && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Proyectos ({groupedEvents.project.length})
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={personalFilters.personal}
                      onChange={() => togglePersonalFilter('personal')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
                      personalFilters.personal
                        ? 'bg-yellow-400 border-yellow-400'
                        : 'bg-white border-gray-300 group-hover:border-yellow-300'
                    }`}>
                      {personalFilters.personal && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    Momentos ({groupedEvents.personal.length})
                  </span>
                </label>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Proyectos y momentos mezclados cronológicamente */}
              {personalEvents.map((event, index) => (
                <article key={`${event.type}-${index}`} className="group relative h-full">
                  <div 
                    className="relative h-full backdrop-blur-sm rounded-2xl border-0 overflow-hidden transition-all duration-500 group-hover:transform group-hover:translateY(-1px) group-hover:shadow-xl"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.78) 100%)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06), 0 0 0 1px rgba(255,255,255,0.2)',
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-400/4 to-orange-400/4" />
                    
                    {/* Background logo/emoji */}
                    <div className="absolute bottom-1 right-1 w-[160px] h-[160px] opacity-[0.055] pointer-events-none flex items-end justify-end">
                      <div className="text-[160px] leading-none select-none">
                        {event.icon}
                      </div>
                    </div>
                    
                    <div className="p-6 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-medium ${
                            event.type === 'project'
                              ? 'bg-gray-150 text-gray-600'
                              : 'bg-gray-50 text-gray-500'
                          }`}>
                            {event.icon}
                          </div>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                            event.type === 'project'
                              ? 'bg-gray-75 text-gray-600'
                              : 'bg-gray-25 text-gray-500'
                          }`}>
                            {event.type === 'project' ? 'Proyecto' : 'Momento'}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{event.year}</span>
                      </div>
                      
                      <h3 className="mb-3 font-bold text-gray-900 leading-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {event.description}
                      </p>
                      
                      {(event.link || event.url) && (
                        <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
                          {event.link && (
                            <a href={event.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-yellow-600 font-medium hover:text-yellow-700 transition-colors duration-300 text-sm">
                              <span>Ver proyecto</span>
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
        )}
      </section>



    </div>
    </>
  )
}