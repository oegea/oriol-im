'use client'

import Image from 'next/image'
import Head from 'next/head'
import { MapPin, Briefcase, Linkedin, Twitter, Github, Coffee, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState, type ReactNode } from 'react'


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
    image: "/images/logos/management30-logo.png",
    url: "https://management30.com/badges/oriol-egea-143512756465189737d2398/"
  },
  {
    year: "2026",
    title: "Open Knowledge",
    description: "Creo Open Knowledge, una plataforma open source y auto-hospedable para publicar bibliotecas de cursos abiertos curados con IA, junto a su biblioteca oficial. Fuentes citadas con rigor, descarga en EPUB y PDF bajo demanda, y sin necesidad de cuenta alguna.",
    type: "project",
    icon: "📚",
    link: "https://www.openknowledge.es"
  },
  {
    year: "2026",
    title: "FreeSCP",
    description: "Desarrollo FreeSCP, un port nativo de WinSCP para macOS y Linux: el motor de protocolos original de WinSCP recompilado de forma nativa, tras una reconstrucción de su interfaz en Qt. El gestor de ficheros de doble panel de siempre (SFTP, FTP, SCP, WebDAV y S3), ahora en el Mac. Gratuito y open source.",
    type: "project",
    icon: "🗂️",
    link: "https://freescp.com/"
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
    description: "Desarrollo Passager, un gestor de contraseñas Open Source liberado bajo licencia AGPL, que utiliza la Crypto Web API. Desde 2026, una aplicación web instalable (PWA) con desbloqueo biométrico.",
    type: "project",
    icon: "🔐",
    link: "https://www.passager.app"
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
]

type TimelineEvent = {
  year: string
  title: string
  description: string
  type: string
  icon: string
  image?: string
  link?: string
  url?: string
  current?: boolean
}

// "2015-2019" -> 2019, "2024" -> 2024
const getEndYear = (year: string): number =>
  parseInt(year.includes('-') ? year.split('-')[1] : year)

const byMostRecent = (a: TimelineEvent, b: TimelineEvent) =>
  getEndYear(b.year) - getEndYear(a.year)

const eventsOfType = (...types: string[]): TimelineEvent[] =>
  (timelineEvents as TimelineEvent[])
    .filter(event => types.includes(event.type))
    .sort(byMostRecent)

/** Fades its content in the first time it enters the screen. */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}

function SectionTitle({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <Reveal className="mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">{title}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-3 mb-3" />
      <p className="text-slate-600 dark:text-slate-400">{subtitle}</p>
    </Reveal>
  )
}

function EventLogo({ event, size }: { event: TimelineEvent, size: number }) {
  if (event.image) {
    return (
      <div
        className="shrink-0 rounded-2xl bg-white border border-slate-200/70 dark:border-transparent flex items-center justify-center p-1.5"
        style={{ width: size, height: size }}
      >
        <Image
          src={event.image}
          alt=""
          width={size}
          height={size}
          className="object-contain w-full h-full"
        />
      </div>
    )
  }
  return (
    <div
      className="shrink-0 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
      aria-hidden="true"
    >
      {event.icon}
    </div>
  )
}

const socialLinks = [
  { href: 'https://www.linkedin.com/in/oriolegea/', label: 'LinkedIn', icon: Linkedin, hover: 'hover:text-blue-600 dark:hover:text-blue-400' },
  { href: 'https://www.twitter.com/OriolEgea', label: 'X (Twitter)', icon: Twitter, hover: 'hover:text-sky-500 dark:hover:text-sky-400' },
  { href: 'https://github.com/oegea', label: 'GitHub', icon: Github, hover: 'hover:text-slate-900 dark:hover:text-slate-50' },
  { href: 'https://ko-fi.com/oriolegea', label: 'Invítame a un café en Ko-fi', icon: Coffee, hover: 'hover:text-rose-500 dark:hover:text-rose-400' },
]

const cardClass =
  'relative h-full rounded-2xl overflow-hidden backdrop-blur-sm about-timeline-card-glassmorphism ' +
  'border border-slate-200/70 dark:border-slate-700/50 shadow-sm ' +
  'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-yellow-400/60'

const linkClass =
  'text-yellow-600 hover:text-yellow-700 font-medium'

export default function AboutPage() {
  const age = new Date().getFullYear() - 1996

  const work = eventsOfType('work')
  const projects = eventsOfType('project')
  const education = eventsOfType('education', 'achievement')

  return (
    <>
      <Head>
        <title>Sobre mí</title>
        <meta name="description" content="CTO & Co-Founder con más de 10 años de experiencia en desarrollo, liderazgo técnico y construcción de productos que resuelven problemas reales." />
      </Head>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        {/* Hero */}
        <section className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <Reveal>
              <div className="relative backdrop-blur-sm rounded-3xl border border-white/30 dark:border-slate-700/30 overflow-hidden p-1 about-profile-glassmorphism transition-transform duration-500 hover:-rotate-1 hover:scale-[1.02]">
                <Image
                  src="/images/oriol-profile.jpg"
                  alt="Oriol Egea"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>

              <div className="flex space-x-4 mt-5 justify-center">
                {socialLinks.map(({ href, label, icon: Icon, hover }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className={`p-2.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-600/30 text-slate-700 dark:text-slate-300 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 shadow-sm ${hover}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-5">
                  Oriol Egea
                </h1>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
                    <Briefcase size={16} />
                    <span>
                      CTO & Co-Founder en{' '}
                      <a href="https://www.amplifysoft.io" target="_blank" rel="noopener noreferrer" className={linkClass}>
                        Amplify Software
                      </a>
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
                    <MapPin size={16} />
                    Barcelona, España
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  {personalIntro.content.replace('{age}', age.toString())}
                </p>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  Actualmente trabajo como CTO & Co-Founder en <a href="https://www.amplifysoft.io/" target="_blank" rel="noopener noreferrer" className={linkClass}>Amplify Software</a>, donde construimos herramientas de IA para profesionales del broadcast. Antes he contribuido como Senior Frontend Engineer al desarrollo de <a href="https://www.coches.net/" target="_blank" rel="noopener noreferrer" className={linkClass}>coches.net</a>, el portal de compraventa de vehículos líder en España, en <a href="https://adevinta.es/" target="_blank" rel="noopener noreferrer" className={linkClass}>Adevinta Spain</a>, y anteriormente como Tech Lead al liderazgo del desarrollo de uno de los principales productos en <a href="https://www.vsn-tv.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>VSN</a>.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trayectoria */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <SectionTitle title="Trayectoria" subtitle="Dónde he trabajado, y en qué." />

          <ol className="relative ml-3 border-l-2 border-slate-200 dark:border-slate-700 space-y-8">
            {work.map((event, index) => (
              <li key={event.title} className="relative pl-6 md:pl-10">
                <span
                  className={`absolute -left-[9px] top-7 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${
                    event.current ? 'bg-yellow-400' : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                  aria-hidden="true"
                >
                  {event.current && (
                    <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-60 motion-reduce:hidden" />
                  )}
                </span>
                <Reveal delay={index * 60}>
                  <article className={`${cardClass} p-5 md:p-7`}>
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-5">
                      <EventLogo event={event} size={52} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                          <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{event.year}</span>
                          {event.current && (
                            <span className="text-xs font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-0.5 rounded-full">
                              Actualidad
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 leading-snug mb-2">
                          {event.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                          {event.description}
                        </p>
                        {event.link && (
                          <a href={event.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 mt-3 text-sm ${linkClass}`}>
                            Visitar <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Proyectos */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <SectionTitle title="Proyectos" subtitle="Software libre y experimentos que he ido construyendo en mis ratos libres." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((event, index) => {
              const content = (
                <article className={`${cardClass} group p-6 flex flex-col`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                      {event.icon}
                    </div>
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{event.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 flex items-center gap-1.5">
                    {event.title}
                    {event.link && (
                      <ArrowUpRight size={17} className="text-slate-400 transition-all duration-300 group-hover:text-yellow-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-left">
                    {event.description}
                  </p>
                </article>
              )
              return (
                <Reveal key={event.title} delay={(index % 3) * 80}>
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
                      {content}
                    </a>
                  ) : content}
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Formación */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
          <SectionTitle title="Formación y charlas" subtitle="Estudios, certificaciones y alguna que otra charla." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((event, index) => (
              <Reveal key={event.title} delay={(index % 2) * 80}>
                <article className={`${cardClass} p-5 flex items-start gap-4`}>
                  <EventLogo event={event} size={44} />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{event.year}</span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-50 leading-snug mb-1">
                      {event.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-left">
                      {event.description}
                    </p>
                    {event.url && (
                      <a href={event.url} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 mt-2 text-sm ${linkClass}`}>
                        Ver certificado <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
