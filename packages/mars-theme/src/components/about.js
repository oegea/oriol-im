import React, { useEffect } from "react";
import { connect, styled, css } from "frontity";
import List from "./list";
import ReadingProgress from "../../../reading-progress";

const Post = ({ state, actions, libraries }) => {


  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();

    //Prismjs to highlight code snippets
    if (Prism !== undefined){
      Prism.highlightAll();
    }
  }, []);


  const certifications = [
    {
      image: "https://static.scrum.org/web/badges/badge-psmi.svg",
      url: "https://www.credly.com/badges/1694eade-5c2e-482c-876c-48636805be31",
    },
    {
      image: "https://static.scrum.org/web/badges/badge-pspoi.svg",
      url: "https://www.credly.com/badges/6fcefa1a-473a-474d-b7d8-f26e5504d878",
    },
  ];

  const technologies = [
    {
      image: "https://wp.oriol.im/wp-content/uploads/2020/05/node.png",
    },
    {
      image: "https://wp.oriol.im/wp-content/uploads/2016/01/salesforce_logo.png",
    },
    {
      image: "https://wp.oriol.im/wp-content/uploads/2016/07/Angular_full_color_logo.svg_.png",
    },
    {
      image: "https://wp.oriol.im/wp-content/uploads/2020/05/react-1.png",
    },
    {
      image: "https://wp.oriol.im/wp-content/uploads/2020/05/csharp.png",
    },
  ];


  const things = [
    { name: "Product Design & Management", icon: "✍️" },
    { name: "Desarrollo de Software", icon: "🛠️" },
    { name: "Administración de sistemas y redes", icon: "📡" },
    { name: "Tecnología", icon: "💻" },
    { name: "Legislación y protección de datos", icon: "⚖️" },
    { name: "Carnavales de Cádiz", icon: "💃" },
    { name: "Roadtripear por el mundo", icon: "🚗" },
    { name: "Enseñanza y compartir conocimientos", icon: "👨‍🎓" },
  ];

  const booksAndLearning = [
    { icon: "📚", name: "DDD Distilled"},
    { icon: "📚", name: "Clean architecture"},
    { icon: "🎓", name: "CodelyTV: Hexagonal architecture", link: "https://pro.codely.com/library/arquitectura-hexagonal-31201/66748/"},
    { icon: "📚", name: "IWoz. Computer geek to cult icon"},
    { icon: "🎓", name: "CodelyTV: Web Performance", link: "https://pro.codely.com/library/web-performance-168675/364571/"},
    { icon: "🎓", name: "Adevinta Leaderships Essentials LiteTrack", link: "https://www.adevinta-academies.com/courses/leadership-essentials-lite-track"},
    { icon: "📚", name: "How to Avoid a Climate Disaster: The Solutions We Have and the Breakthroughs We Need"},
    { icon: "📚", name: "Accelerate: The Science of Lean Software and Devops"},
    { icon: "🎓", name: "Adevinta Product Academy", link: "https://www.adevinta-academies.com/certificates/mowdblbpyg"},
    { icon: "📚", name: "Revolution in the Valley"},
    { icon: "📚", name: "Steve Jobs Biography"},
    { icon: "🎓", name: "Firebase with React v2", link: "https://frontendmasters.com/courses/firebase-react-v2/"},
    { icon: "🎓", name: "Curso de complejidad algorítmica con Javascript", link: "https://platzi.com/p/oriol-egea-carvajal/curso/2517-complejidad-js/diploma/detalle/"},
    { icon: "🎓", name: "Curso de end to end testing con Cypress", link: "https://platzi.com/p/oriol-egea-carvajal/curso/1411-testing-cypress/diploma/detalle/"},
    { icon: "🎓", name: "Start the UX Design Process", link: "https://coursera.org/share/dbb108da80b1a86257b5afd5dcbec684"},
    { icon: "🎓", name: "Foundations of User Experience (UX) Design", link: "https://coursera.org/share/e7615a4d598d33151327964e16e18d7f"},
    { icon: "🎓", name: "Curso de Design Sprint", link: "https://platzi.com/p/oriol-egea-carvajal/curso/1702-design-sprint/diploma/detalle/"},
    { icon: "📚", name: "The Pragmmatic Programmer"},
    { icon: "🎓", name: "MongoDB Basics", link: "https://university.mongodb.com/course_completion/90d118c2-1540-41f1-8890-b3b3320f7dc0"},
    { icon: "🎓", name: "Curso de Electron", link: "https://platzi.com/p/oriol-egea-carvajal/curso/1124-electron/diploma/detalle/"},
    { icon: "🎓", name: "Curso de Motivación para Equipos de Trabajo", link: "https://platzi.com/p/oriol-egea-carvajal/curso/1896-motivacion/diploma/detalle/"},
    { icon: "🎓", name: "Curso de Inteligencia Emocional", link: "https://platzi.com/p/oriol-egea-carvajal/curso/1614-inteligencia-emocional/diploma/detalle/"},
    { icon: "📚", name: "Lean UX: Designing Great Products with Agile Teams"},
    { icon: "📚", name: "Clean JavaScript: Código limpio, SOLID y Testing"},
    { icon: "📚", name: "The Lean Startup"},
    { icon: "📚", name: "The Personal MBA" },
    { icon: "📚", name: "Inspired: How to Create Tech Products Customers Love" },
    { icon: "📚", name: "Don't make me think" },
  ]

  return (
    <>
    <ReadingProgress />
    <Container>
      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <h1>Sobre mí</h1>
        <r-grid columns="20">
            <r-cell span="9" span-s="row">
              <img css={css`margin-top: 7px;`} src="https://wp.oriol.im/wp-content/uploads/2016/07/rsz_aaeaaqaaaaaaaalxaaaajda2zdljytzlltiymjetndqyys1hmzi4lwm1mti2nwfiodexma.jpg" alt="Oriol Egea" />
              <a className="no-border" href="https://www.linkedin.com/in/oriolegea/" target="_blank">
                <img css={css`width: 35px !important; margin-top: 10px; margin-right: 15px;`} src="https://wp.oriol.im/wp-content/uploads/2020/05/linkedin-logo-1.png" alt="LinkedIn logo"/>
              </a>
              <a className="no-border" href="https://www.twitter.com/OriolEgea" target="_blank">
                <img css={css`width: 35px !important; margin-top: 10px;`} src="https://wp.oriol.im/wp-content/uploads/2020/05/twitter.png" alt="LinkedIn logo"/>
              </a>
              
            </r-cell>
            <r-cell span="1" span-s="row"></r-cell>
            <r-cell span="10" span-s="row">
                <p css={css`margin-top: 0;`}>
                    ¡Hola! Soy Oriol. Nací hace {new Date().getFullYear()-1996} años en Terrassa (España). 
                    Actualmente trabajo como Senior Frontend Engineer en <a href="https://adevinta.es/" target="_blank">Adevinta Spain</a>, previamente he trabajado en <a href="https://www.vsn-tv.com/" target="_blank">VSN</a> liderando un pequeño, pero muy talentoso, equipo de programadores, que desarrollamos VSNCREA; un producto de tráfico, programación y distribución de contenidos multimedia.
                </p>
                <p>
                    Siempre me ha apasionado cómo el Software puede aportar valor a casi cualquier situación y entorno. Por ello, siempre que puedo destino tiempo a seguir formándome tanto en desarrollo de Software, como en ideación, descubrimiento y definición de producto.
                </p>
            </r-cell>
        </r-grid>
        <r-grid columns="8">
            <r-cell span="4" span-s="row">
                <h1>Certificado en</h1>
                <r-grid columns="8">
                    <r-cell span="4" span-s="row">
                      <a className="no-border" href={certifications[0].url} target="_blank">
                        <Badge src={certifications[0].image} />
                      </a>
                    </r-cell>
                    <r-cell span="4" span-s="row">
                      <a className="no-border" href={certifications[1].url} target="_blank">
                        <Badge src={certifications[1].image} />
                      </a>
                    </r-cell>
                </r-grid>
                
            </r-cell>
            <r-cell span="4" span-s="row">
                <h1>Trabajo diariamente con</h1>
                  <Slideshow>
                    <Marquee>
                      {
                        technologies.map((technology, index) => {
                          return <MarqueeLogo key={"tech-1-"+index} src={technology.image} />
                        })
                      }

{
                      technologies.map((technology, index) => {
                          return <MarqueeLogo key={"tech-2-"+index} src={technology.image} />
                        })
                      }
                    </Marquee>
                  </Slideshow>
            </r-cell>
        </r-grid>
        <r-grid columns="8" css={css`margin-top: 10px;`}>
            <r-cell span="4" span-s="row"></r-cell>
            <r-cell span="4" span-s="row">
              <SmallText>Puedes revisar mi <a href="https://www.linkedin.com/in/oriolegea/" target="_blank">LinkedIn</a>, contactarme, o revisar mis publicaciones para ver las tecnologías con las que voy trabajando. Este slider se ofrece sólo a modo de resumen ilustrativo.</SmallText> 
            </r-cell>
        </r-grid>

        <r-grid columns="8">
            <r-cell span="4" span-s="row">

            <h1>Qué me interesa</h1>

            <div className="md-chips">
              {things.map((item, index)=>{
                return(
                  <div className="md-chip" key={"thing-"+index}>
                    <div className="md-chip-icon">{item.icon}</div>
                    {item.name}
                  </div>
                );
              })}


            </div>

            </r-cell>
            <r-cell span="4" span-s="row">
            <h1>Libros y formación reciente</h1>

              <div className="md-chips">
                {booksAndLearning.map((item, index)=>{
                  return(
                    <div className="md-chip" key={"thing-"+index}>
                      <div className="md-chip-icon">{item.icon}</div>
                      {item.name}
                      {item.link && 
                      <a href={item.link} target="_blank"> 🔗</a>}
                    </div>
                  );
                })}
              </div>
            </r-cell>
        </r-grid>

        
        <h1>Mi cronología</h1>
        <ul>
          <li>
            <strong>2024:</strong>
            <ul>
              <li>💻 Me uno a Amplify Software como CTO y co-founder para democratizar las herramientas de IA para los profesionales del broadcast y revolucionar algunos procesos a través de la IA.</li>
              <li>👋 Finaliza mi etapa en Adevinta Spain.</li>
            </ul>
          </li>
          <li>
            <strong>2023:</strong>
            <ul>
              <li>🎙️ Participo en el Adevinta FE Day para compartir algunos aprendizajes del desarrollo y mantenimiento de Passager.</li>
              <li>🍏 Después de mucho tiempo, Apple vuelve a pronunciar el famoso "One more thing" para presentar las Apple Vision Pro. Aunque también anuncian que necesitarán One more year para empezar a venderlas sólo en EEUU.</li>
              <li>✔️ Desarrollo <a href="https://www.docky.tech/" target="_blank">Docky</a> una herramienta con la que desarrollar servicios REST rápidamente con un enfoque similar a Firebase.</li>
              <li>🤖 ChatGPT consigue 100 millones de usuarios durante un sólo mes, en enero. Empieza el boom de la IA.</li>
            </ul>
          </li>
          <li>
            <strong>2022:</strong>
            <ul>
              <li>✔️ Desarrollo <a href="https://github.com/oegea/dial-a-norris" target="_blank">Marca un Norris (Dial a Norris)</a> un servicio a través de VoIP de tipo "dial-a-joke" que cada día ofrece una frase de Chuck Norris distinta.</li>
              <li>📱 Encapsulo Passager como mobile app utilizando <a href="https://capacitorjs.com/" target="_blank">Capacitor</a> y lo publico en las stores de iOS y Android.</li>
              <li>✔️ Desarrollo <a href="https://github.com/oegea/passager-password-manager" target="_blank">Passager</a> un gestor de contraseñas Open Source liberado bajo licencia AGPL, que utiliza la Crypto Web API.</li>
              <li>😷 Disfrutamos de un periodo de tiempo en el que no existen restricciones de movilidad debido a la COVID-19. Las mascarillas dejan de ser obligatorias en interiores en España.</li>
              <li>💻 Empiezo a trabajar en Adevinta Spain como Senior Frontend Engineer.</li>
            </ul>
          </li>
          <li>
            <strong>2021:</strong>
            <ul>
              <li>👋 Finaliza mi etapa en VSN para empezar a trabajar en Adevinta Spain.</li>
              <li>💉 Empieza la campaña de vacunación para la COVID-19. Empezamos a salir de casa y a recuperar parcialmente la normalidad.</li>
              <li>🏠 ¡Cambio de residencia! Me establezco en una ciudad cercana a Barcelona, España.</li>
              <li>🎥 Inicio mi canal de Twitch y YouTube.</li>
            </ul>
          </li>
          <li>
            <strong>2020:</strong>
            <ul>
              <li>✔️ Finalizamos la primera versión estable de VSNCREA y la desplegamos en diversos entornos de producción de diversos clientes. Seguimos trabajando en un montón de nuevas funcionalidades nuevas.</li>
              <li>🦠 Se declara una pandemia por la COVID-19. Nos quedamos en casa confinados para protegernos a nosotros y a nuestros seres queridos.</li>
              <li>✔️ Finalizamos la remodelación del nuevo sitio web de VSN. ¡Ya era hora de un cambio de look!</li>
            </ul>
          </li>
          <li>
            <strong>2019:</strong>
            <ul>
              <li>📜 Finalizo el Grado Superior en Desarrollo de Aplicaciones Multiplataforma a distancia.</li>
              <li>📜 Obtengo la certificación PSPO1 de Scrum.org siguiendo un curso de Mplaza.</li>
              <li>👩‍👩‍👧‍👦 El equipo de desarrollo crece gracias a dos nuevas incorporaciones. Empezamos a remodelar de nuevo el sitio web de VSN.</li>
            </ul>
          </li>
          <li>
            <strong>2018:</strong>
            <ul>
              <li>👷 Empiezo a liderar un equipo de desarrollo en VSN. Además de mantener el portal web y todo el trabajo hecho hasta el momento, empezamos a trabajar en VSNCREA, una plataforma de tráfico y programación escalable, multitenant, y altamente customizable y extensible, encargada de la gestión, planificación y programación de contenidos tanto en estaciones de TV convencionales, como en medios no lineales.</li>
              <li>✈️ Viajo por primera vez a Amsterdam, para asistir al IBC, una feria del sector Media & Entertainment.</li>
              <li>⚖️ Empieza a aplicarse el Reglamento General de Protección de datos, y nos adaptamos y formamos para ello.</li>
              <li>📜 Obtengo la certificación PSM1 de Scrum.org siguiendo un curso de Mplaza.</li>
            </ul>
          </li>
          <li>
            <strong>2017:</strong>
            <ul>
              <li>✔️ Finaliza mi implicación con el proyecto de gestión y venta de contenidos y noticias. Finaliza un periodo en el que aprendo muchísimo gracias a unos compañeros muy profesionales y experimentados.</li>
              <li>✈️ Viajo a Lisboa por primera vez para asistir al Web Summit.</li>
              <li>✈️ Viajo a Cádiz por primera vez y conozco a gente estupenda.</li>
              <li>✈️ Viajo a Bilbao por primera vez junto a gente estupenda.</li>
            </ul>
          </li>
          <li>
            <strong>2016:</strong>
            <ul>
              <li>👷 Empiezo a trabajar con un equipo de programadores de VSN. Trabajamos en una aplicación web para la gestión y venta de contenidos y noticias para un organismo de la administración pública de la provincia de Barcelona.</li>
              <li>👨‍🎓 Me inscribo en <a href="https://teamtreehouse.com/" target="_blank">Treehouse</a>. Aprendo y consolido mis conocimientos de Javascript y AngularJS. Durante los sucesivos años me sirve para aprender ReactJS, y realizar algún curso de programación básica en Swift y Android nativo. Poco después también realizo algunos cursos a través de Udemy.</li>
              <li>🐶 La familia crece: Adoptamos a Jeiko, el Spitz Japonés más listo y cariñoso del mundo.</li>  
            </ul>
          </li>
          <li>
            <strong>2015:</strong>
            <ul>
              <li>✔️ Finaliza en VSN el desarrollo del nuevo sitio web, y otras aplicaciones internas integradas con Salesforce y otros servicios, relativas a la gestión de tiempo de trabajo y satisfacción del cliente.</li>
              <li>👨‍🎓 Empiezo a cursar el Grado Superior en Desarrollo de Aplicaciones Multiplataforma a distancia.</li>
            </ul>
          </li>
          <li>
            <strong>2014:</strong>
            <ul>
              <li>📜 Finalizo el Grado Medio en Sistemas Microinformáticos y Redes. Aprendo un montón gracias a un profesorado muy comprometido.</li>
              <li>👷 Tras seis meses cómo becario, empiezo a trabajar cómo Web & CRM Developer en <a href="https://www.vsn-tv.com" target="_blank">VSN</a>. Encargándome de remodelar el sitio web corporativo, administrar Salesforce, y gestionar y desarrollar el stack de aplicaciones internas.</li>
            </ul>
          </li>
          <li>
            <strong>2013:</strong> 
            <ul>
              <li>💻 Programo <a href="https://www.frikipoint.com" target="_blank">FrikiPoint</a> junto a un colega, una red social que permite conocer gente cercana a ti de tus mismas aficiones frikis. El proyecto tiene muchos aspectos mejorables, pero acaba resultando una experiencia muy enriquecedora.</li>
            </ul>
          </li>
          <li>
            <strong>2012:</strong> 
            <ul>
              <li>📜 Finalizo la Educación Secundaria Obligatoria.</li>
              <li>👨‍🎓 Empiezo a cursar el Grado Medio en Sistemas Microinformáticos y Redes.</li>
            </ul>
          </li>
          <li>
            <strong>2011:</strong> 
            <ul>
              <li>🎮 Colaboro en el desarrollo de una adaptación del emulador <a href="https://rathena.org/" target="_blank">rAthena</a> para crear un juego de rol. Aprendo aspectos básicos de MySQL, PHP y administración de servidores gracias al resto de partícipes del proyecto, que dedican mucho tiempo a enseñarme y compartir su conocimiento.</li>
            </ul>
          </li>
          <li><strong>2009:</strong> 
            <ul>
              <li>🏴‍☠️‍ Veo Piratas de Silicon Valley por primera vez.</li>
              <li>👁️ Un colega de mi hermano me enseña EyeOS y me hago fan del proyecto.</li>
            </ul>
          </li>
          <li>
            <strong>2006:</strong>
            <ul>
              <li>🖥️ Mis padres compran un nuevo ordenador. Empiezo a instalar programas que pruebo indiscriminadamente en Softonic.</li>
              <li>📡 El Internet llega a casa gracias al ADSL de Wanadoo. Utilizamos programas P2P para descargar música, nuestra ratio de descarga es de una canción cada cuatro horas.</li>
              <li>💬 Windows Live Messenger se convierte en el Whatsapp de la época (pero sin ser portátil, y sólo por las tardes) para la mayoría de compañeros de clase.</li>
              <li>🔄 Microsoft libera Windows Vista. Me las apaño para descargarlo por P2P, y al lograr instalarlo (para disgusto de mis padres) dejo inservible el PC por falta de drivers. Consigo repararlo en algún momento utilizando los discos de restauración.</li>
            </ul>
          </li>
          <li>
            <strong>2002:</strong>
            <ul>
              <li>🎮 Paso las tardes con mi hermano: Veo la historia de los Zeldas a través de las partidas de mi hermano, vemos el K3 en casa de nuestra abuela 👵, o salimos a dar vueltas con los patinetes de la época.</li>
            </ul>
          </li>
          <li><strong>1996:</strong> 
            <ul>
              <li>👶 Nazco a mediados de abril en Terrassa, Barcelona.</li>
            </ul>
          </li>
        </ul>
      </Content>
    </Container>
    </>
  );
};

export default connect(Post);

const SmallText = styled.p`
  font-size: 10px;
`;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Badge = styled.img`
    max-width: 50%;
    margin-left: 25% !important;
`;

const Slideshow  = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  height: 110px;
  max-height: 110px;
`;

const Marquee = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 5000px;
  max-width: 5000px;
  animation: slideshow 10s linear infinite;
`;

const MarqueeLogo = styled.img`
    display: inline !important;
    max-width: 100px;
    width: 100px;
    margin-right: calc(20px) !important;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(239, 190, 0) !important;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover{
    border-bottom: 2px solid rgb(239, 190, 0);
  }

  a.no-border{
    border-bottom: none !important;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
