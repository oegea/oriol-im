import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./list";

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
      url: "https://www.scrum.org/certificates/351942",
    },
    {
      image: "https://static.scrum.org/web/badges/badge-pspoi.svg",
      url: "https://www.scrum.org/certificates/445969",
    },
  ];

  const technologies = [
    {
      image: "https://www.oriol.im/wp-content/uploads/2020/05/node.png",
    },
    {
      image: "https://www.oriol.im/wp-content/uploads/2016/01/salesforce_logo.png",
    },
    {
      image: "https://www.oriol.im/wp-content/uploads/2016/07/Angular_full_color_logo.svg_.png",
    },
    {
      image: "https://www.oriol.im/wp-content/uploads/2020/05/react-1.png",
    },
    {
      image: "https://www.oriol.im/wp-content/uploads/2020/05/csharp.png",
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
  ];

  const books = [
    { name: "The Personal MBA" },
    { name: "Inspired: How to Create Tech Products Customers Love" },
    { name: "Don't make me think" },
  ]

  return (
    <Container>

      {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
      <Content>
        <h1>Sobre mi</h1>
        <r-grid columns="8">
            <r-cell span="3" span-s="row">
                <img src="https://www.oriol.im/wp-content/uploads/2016/07/rsz_aaeaaqaaaaaaaalxaaaajda2zdljytzlltiymjetndqyys1hmzi4lwm1mti2nwfiodexma.jpg" alt="Oriol Egea" />
            </r-cell>
            <r-cell span="5" span-s="row">
                <p>
                    ¡Hola! Soy Oriol. Nací hace {new Date().getFullYear()-1996} años en Terrassa (España). 
                    Actualmente trabajo en <a href="https://www.vsn-tv.com/" target="_blank">VSN</a> liderando a (y aprendiendo de) un pequeño, pero muy talentoso, equipo de programadores, que desarrollamos VSNCREA; un producto de tráfico, programación y distribución de contenidos multimedia.
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
                      <a href={certifications[0].url} target="_blank">
                        <Badge src={certifications[0].image} />
                      </a>
                    </r-cell>
                    <r-cell span="4" span-s="row">
                      <a href={certifications[1].url} target="_blank">
                        <Badge src={certifications[1].image} />
                      </a>
                    </r-cell>
                </r-grid>
                
            </r-cell>
            <r-cell span="4" span-s="row">
                <h1>Tecnologías que me encantan</h1>
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
        <r-grid columns="8">
            <r-cell span="4" span-s="row">

              
            </r-cell>
            <r-cell span="4" span-s="row">
              <SmallText>Puedes revisar mi <a href="https://www.linkedin.com/in/oriolegea/" target="_blank">LinkedIn</a>, contactarme, o revisar mis publicaciones para ver las tecnologías con las que voy trabajando. Este slider se ofrece sólo a modo de resumen ilustrativo.</SmallText> 
            </r-cell>
        </r-grid>

        <r-grid columns="8">
            <r-cell span="4" span-s="row">

            <h1>Cosas que me interesan</h1>

            <div class="md-chips">
              {things.map((item, index)=>{
                return(
                  <div class="md-chip" key={"thing-"+index}>
                    <div class="md-chip-icon">{item.icon}</div>
                    {item.name}
                  </div>
                );
              })}


            </div>

            </r-cell>
            <r-cell span="4" span-s="row">
            <h1>Libros leídos recientemente</h1>

              <div class="md-chips">
                {books.map((item, index)=>{
                  return(
                    <div class="md-chip" key={"thing-"+index}>
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </r-cell>
        </r-grid>

        
        <h1>Mi cronología</h1>
        <ul>
          <li><strong>1996:</strong> 
            <ul>
              <li>👶 Nazco a mediados de abril en Terrassa, Barcelona.</li>
            </ul>
          </li>
          <li>
            <strong>2004:</strong>
            <ul>
              <li>🎮 Paso las tardes con mi hermano: Veo la historia de los Zeldas a través de las partidas de mi hermano, vemos el K3 en casa de nuestra abuela 👵, o salimos a dar vueltas con los patinetes de la época.</li>
            </ul>
          </li>
          <li>
            <strong>2006:</strong>
            <ul>
              <li>📡 El Internet llega a casa gracias al ADSL de Wanadoo. Utilizamos programas P2P para descargar música, nuestro ratio de descarga es de una canción cada cuatro horas.</li>
              <li>🖥️ Mis padres compran un nuevo ordenador. Empiezo a instalar programas que pruebo indiscriminadamente en Softonic.</li>
              <li>💬 Windows Live Messenger se convierte en el Whatsapp de la época (pero sin ser portátil, y sólo por las tardes) para la mayoría de compañeros de clase.</li>
              <li>🔄 Microsoft libera Windows Vista. Me las apaño para descargarlo por P2P, y al lograr instalarlo (para disgusto de mis padres) en el Ordenador lo dejo inservible por falta de drivers.</li>
            </ul>
          </li>
          <li><strong>2009:</strong> 
            <ul>
              <li>🏴‍☠️‍ Veo Piratas de Silicon Valley por primera vez.</li>
              <li>👁️ Un colega de mi hermano me enseña EyeOS y me hago fan del proyecto.</li>
            </ul>
          </li>
          <li>
            <strong>2011:</strong> 
            <ul>
              <li>🎮 Colaboro en el desarrollo de una adaptación del emulador <a href="https://rathena.org/" target="_blank">rAthena</a> para crear un juego de rol. Aprendo aspectos básicos de MySQL, PHP y administración de servidores gracias al resto de partícipes del proyecto, que dedican mucho tiempo a enseñarme y compartir su conocimiento.</li>
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
            <strong>2013:</strong> 
            <ul>
              <li>💻 Programo <a href="https://www.frikipoint.com" target="_blank">FrikiPoint</a> junto a un colega, una red social que permite conocer gente cercana a ti de tus mismas aficiones frikis. El proyecto tiene muchos aspectos mejorables, pero acaba resultando una experiencia muy enriquecedora.</li>
            </ul>
          </li>
          <li>
            <strong>2014:</strong>
            <ul>
              <li>📜 Finalizo el Grado Medio en Sistemas Microinformáticos y Redes. Aprendo un montón gracias a un profesorado muy comprometido.</li>
              <li>👷 Tras seis meses cómo becario, empiezo a trabajar cómo Web & CRM Developer en <a href="https://www.vsn-tv.com" target="_blank">VSN</a>. Encargándome (al mismo tiempo que aprendo) de remodelar el sitio web corporativo, administrar Salesforce, y gestionar y desarrollar el stack de aplicaciones internas.</li>
            </ul>
          </li>
          <li>
            <strong>2015:</strong>
            <ul>
              <li>👨‍🎓 Empiezo a cursar el Grado Superior en Desarrollo de Aplicaciones Multiplataforma a distancia.</li>
              <li>✔️ Finaliza en VSN el desarrollo del nuevo sitio web, y otras aplicaciones internas integradas con Salesforce y otros servicios, relativas a la gestión de tiempo de trabajo y satisfacción del cliente.</li>
            </ul>
          </li>
          <li>
            <strong>2016:</strong>
            <ul>
              <li>👨‍🎓 Me inscribo en <a href="https://teamtreehouse.com/" target="_blank">Treehouse</a>. Aprendo y consolido mis conocimientos de Javascript y AngularJS. Durante los sucesivos años me sirve para aprender ReactJS, y realizar algún curso de programación básica en Swift y Android nativo. Poco después también realizo algunos cursos a través de Unity.</li>
              <li>👷 Empiezo a trabajar con un equipo de programadores de VSN. Trabajamos en una aplicación web para la gestión y venta de contenidos y noticias para un organismo de la administración pública de la provincia de Barcelona.</li>
            </ul>
          </li>
          <li>
            <strong>2017:</strong>
            <ul>
              <li>✔️ Finaliza mi implicación con el proyecto de gestión y venta de contenidos y noticias. Finaliza un periodo en el que aprendo muchísimo gracias a unos compañeros muy profesionales y experimentados.</li>
              <li>✈️ Viajo por primera vez a Lisboa para asistir al Web Summit.</li>
              <li>✈️ Viajo a Cádiz por primera vez y conozco a gente estupenda.</li>
            </ul>
          </li>
          <li>
            <strong>2018:</strong>
            <ul>
              <li>⚖️ El Reglamento General de Protección de datos entra en vigor, y nos adaptamos y formamos para ello.</li>
              <li>📜 Obtengo la certificación PSM1 de Scrum.org siguiendo un curso de Mplaza.</li>
              <li>👷 Empiezo a liderar un equipo de desarrollo en VSN. Además de mantener el portal web y todo el trabajo hecho hasta el momento, empezamos a trabajar en VSNCREA, una plataforma de tráfico y programación escalable, multitenant, y altamente customizable y extensible, encargada de la gestión, planificación y programación de contenidos tanto en estaciones de TV convencionales, como en medios no lineales.</li>
              <li>✈️ Viajo por primera vez a Amsterdam, para asistir al IBC, una feria del sector Media & Entertainment.</li>
            </ul>
          </li>
          <li>
            <strong>2019:</strong>
            <ul>
              <li>📜 Obtengo la certificación PSPO1 de Scrum.org siguiendo un curso de Mplaza.</li>
              <li>📜 Finalizo el Grado Superior en Desarrollo de Aplicaciones Multiplataforma a distancia.</li>
              <li>👩‍👩‍👧‍👦 El equipo de desarrollo crece gracias a dos nuevas incorporaciones. Empezamos a remodelar de nuevo el sitio web de VSN.</li>
            </ul>
          </li>
          <li>
            <strong>2020:</strong>
            <ul>
              <li>✔️ Finalizamos la primera versión estable de VSNCREA y la desplegamos en diversos entornos de producción de diversos clientes. Seguimos trabajando en un montón de nuevas funcionalidades nuevas.</li>
            </ul>
          </li>
        </ul>
      </Content>
    </Container>
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
  height: calc(100% - 50px);
  min-height: 120px;
`;

const Marquee = styled.div`
  background: url(slideshow.jpg);
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
