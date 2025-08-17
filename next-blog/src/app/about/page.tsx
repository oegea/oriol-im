import Image from 'next/image'
import { config } from '@/lib/config'
import { MapPin, Briefcase, Lightbulb } from 'lucide-react'

export const metadata = {
  title: 'Sobre mí',
  description: 'CTO & Co-Founder con experiencia en desarrollo, liderazgo técnico y construcción de productos.',
}

const professionalExperience = [
  {
    year: "2024 - Presente",
    role: "CTO & Co-Founder",
    company: "Amplify Software",
    description: "Democratizando herramientas de IA para profesionales del broadcast. Liderando el desarrollo de productos que revolucionan procesos de generación y distribución de contenidos multimedia a través de inteligencia artificial. Definiendo la estrategia tecnológica y arquitectura de la plataforma.",
    achievements: ["Estrategia tecnológica", "Liderazgo de producto", "IA para broadcast", "Arquitectura de sistemas"],
    type: "current"
  },
  {
    year: "2022 - 2024", 
    role: "Senior Frontend Engineer",
    company: "Adevinta Spain",
    description: "Desarrollo frontend en coches.net PRO, trabajando en la plataforma de gestión de concesionarios. Participación activa en el Adevinta FE Day compartiendo aprendizajes técnicos. Desarrollo paralelo de proyectos open source como Passager y Docky.",
    achievements: ["React & TypeScript", "Tech talks", "Open source projects", "Frontend architecture"],
    type: "experience"
  },
  {
    year: "2018 - 2022",
    role: "Tech Lead",
    company: "VSN",
    description: "Liderazgo de equipo de desarrollo creando VSNCREA, plataforma escalable y multitenant para gestión, programación y distribución de contenidos multimedia para broadcasters. Crecimiento del equipo de 2 a 5 personas, definición de arquitectura y participación en ferias internacionales como IBC Amsterdam.",
    achievements: ["Team leadership", "Scalable architecture", "Broadcast technology", "International conferences"],
    type: "experience"
  },
  {
    year: "2014 - 2018",
    role: "Web & CRM Developer",
    company: "VSN", 
    description: "Desarrollo full-stack y administración de Salesforce. Evolución desde posición de becario hasta developer, trabajando en el rediseño del sitio web corporativo y desarrollo de aplicaciones internas integradas con diversos servicios. Aprendizaje intensivo en arquitecturas web modernas.",
    achievements: ["Full-stack development", "Salesforce administration", "Corporate website", "Internal tools"],
    type: "experience"
  }
]

const education = [
  {
    year: "2015 - 2019",
    title: "Grado Superior DAM",
    institution: "Desarrollo de Aplicaciones Multiplataforma",
    description: "Formación a distancia compaginada con trabajo. Consolidación de conocimientos en programación y arquitectura.",
    type: "education"
  },
  {
    year: "2012 - 2014", 
    title: "Grado Medio SMR",
    institution: "Sistemas Microinformáticos y Redes",
    description: "Primera toma de contacto formal con la informática. Descubrimiento de la programación y administración de sistemas.",
    type: "education"
  }
]

const certifications = [
  {
    year: "2024",
    title: "Management 3.0 Foundation Workshop",
    institution: "Management 3.0",
    description: "Metodologías ágiles de liderazgo y gestión de equipos de alto rendimiento.",
    type: "certification"
  },
  {
    year: "2019",
    title: "Professional Scrum Product Owner I",
    institution: "Scrum.org",
    description: "Gestión de producto con metodologías ágiles y framework Scrum.",
    type: "certification"
  },
  {
    year: "2018",
    title: "Professional Scrum Master I", 
    institution: "Scrum.org",
    description: "Facilitación de equipos y procesos de desarrollo ágil.",
    type: "certification"
  }
]

const sideProjects = [
  {
    year: "2023",
    name: "Docky",
    description: "Herramienta open source para desarrollar servicios REST rápidamente, con enfoque similar a Firebase. NodeJS y simplicidad.",
    tech: ["NodeJS", "REST", "Open Source"],
    link: "https://www.docky.tech/"
  },
  {
    year: "2022",
    name: "Passager",
    description: "Gestor de contraseñas open source con Crypto Web API. Encapsulado como mobile app con Capacitor para iOS y Android.",
    tech: ["Crypto API", "Mobile App", "AGPL"],
    link: "https://github.com/oegea/passager-password-manager"
  },
  {
    year: "2022",
    name: "Dial a Norris",
    description: "Servicio VoIP tipo 'dial-a-joke' que ofrece frases de Chuck Norris. Experimentación con VoIP y servicios telefónicos.",
    tech: ["VoIP", "API", "Fun project"],
    link: "https://github.com/oegea/dial-a-norris"
  },
  {
    year: "2013",
    name: "FrikiPoint",
    description: "Red social para conectar gente con aficiones frikis similares. Primer proyecto serio, muchos errores, mucho aprendizaje.",
    tech: ["Social Network", "PHP", "Learning project"]
  }
]

const personalNote = {
  title: "Lo personal",
  content: "Desde pequeño he sido un friki de la informática. Me pasaba horas instalando todo lo que pillaba en Softonic, experimentando con cada programa que encontraba. Me fascina la historia de la computación: desde Mac System 1 hasta cómo los ordenadores personales cambiaron el mundo para siempre. Esa curiosidad de niño nunca se me ha quitado, y ahora la canalizo construyendo productos que resuelven problemas reales. Sigo siendo de esos que se emociona hablando de tecnología."
}

export default async function AboutPage() {
  return (
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

            <p className="text-lg text-gray-600 leading-relaxed">
              Desarrollo, liderazgo tecnológico y construcción de productos desde hace más de 10 años. 
              Especializado en crear equipos de alto rendimiento y arquitecturas escalables que resuelven problemas reales.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div 
          className="backdrop-blur-sm rounded-2xl border border-white/30 p-8"
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Lightbulb size={24} className="text-yellow-600" />
            <h3 className="text-xl font-semibold text-gray-900">{personalNote.title}</h3>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {personalNote.content}
          </p>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            💼 Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-orange-400"></div>
          
          <div className="space-y-8">
            {professionalExperience.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full border-2 border-white ${
                    event.type === 'current' ? 'bg-yellow-400' : 'bg-blue-500'
                  }`}></div>
                  {event.type === 'current' && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-yellow-400 animate-ping"></div>
                  )}
                </div>

                <div 
                  className="flex-1 backdrop-blur-sm rounded-2xl border border-white/30 p-6 animate-fade-in-up"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                    {event.type === 'current' && (
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                        Actual
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.role}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {event.company}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.achievements.map((achievement, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎓 Formación y Certificaciones
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full" />
        </div>

        {/* Education */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Formación Académica</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm rounded-2xl border border-white/30 p-6 animate-fade-in-up"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {item.institution}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Certificaciones Profesionales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm rounded-2xl border border-white/30 p-6 animate-fade-in-up"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  animationDelay: `${(index + education.length) * 150}ms`,
                }}
              >
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 font-medium mb-3">
                  {cert.institution}
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Projects */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🚀 Proyectos Personales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sideProjects.map((project, index) => (
            <div 
              key={index}
              className="backdrop-blur-sm rounded-2xl border border-white/30 p-6 animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{ 
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {project.year}
                </span>
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-2 2H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2v7H5V7h7V5z"/>
                    </svg>
                  </a>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}