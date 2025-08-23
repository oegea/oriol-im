---
title: "Añadiendo interactividad en Twitch a través de un bot"
slug: "anadiendo-interactividad-en-twitch-a-traves-de-un-bot"
date: "2021-04-30"
excerpt: "Twitch nos brinda la posibilidad de disfrutar y consumir contenido creado por individuales a diario. Ya sean gameplays, música, cocina, livecoding o cualquier otro tipo de contenido: Casi cualquier cosa existe en Twitch, y aquello que no existe (y no incumpla los términos y condiciones del servicio) probablemente se esté gestando en la mente de &hellip; Sigue leyendo Añadiendo interactividad en Twitch a través de un bot"
status: "publish"
type: "post"
id: "915"
categories:
  - "Sin categoría"
---

Twitch nos brinda la posibilidad de disfrutar y consumir contenido creado por individuales a diario. Ya sean *gameplays*, música, cocina, *livecoding* o cualquier otro tipo de contenido: Casi cualquier cosa existe en Twitch, y aquello que no existe (y no incumpla los términos y condiciones del servicio) probablemente se esté gestando en la mente de algún *streamer* en estos momentos.

En este escenario en el que un individuo, a título personal, crea contenido en directo para su audiencia, la capacidad del público para interactuar con el emisor es indispensable, y es aquí dónde entran en juego las recompensas y puntos de canal, las extensiones de Twitch, y cómo no: Los bots.

Podemos implementar un bot de múltiples formas, existen gran cantidad de bots customizables que no requieren escribir una sola línea de código (tales cómo Nightbot, o StreamLabs bot), no obstante, es posible desarrollar un bot propio de forma muy sencilla utilizando NodeJS, una librería proporcionada por Twitch, y siguiendo un sencillo [tutorial](https://dev.twitch.tv/docs/irc).

## Por qué desarrollé un bot

Los inicios en Twitch son duros: Hasta que no logras cumplir una serie de requisitos (entre los que se incluyen alcanzar los 50 seguidores), Twitch no te permite añadir elementos de interactividad tales como los puntos de canal y recompensas, así como tampoco permite recibir bits u otro tipo de contraprestación económica.

En esta situación, y queriendo añadir interactividad a mis directos, me propuse desarrollar un bot siguiendo el [tutorial acerca de cómo crear un bot sencillo, que permita ejecutar el comando *!dice*](https://dev.twitch.tv/docs/irc).

Fue un desarrollo entretenido, y [*botyto*](https://github.com/oegea/botyto) (que así se llama el software), acabó más pronto que tarde artículandose en forma de aplicación de ElectronJS: Una aplicación de escritorio que, a partir de unos diálogos de configuración sencillos, permite añadir a tu canal un sistema de puntos (aunque no seas afiliado), y ejecutar recompensas a través de comandos.

El mecanismo es sencillo, y muy similar al de los puntos de canal que nos permite utilizar Twitch cuando llegamos a afiliados. El visualizador del *stream*, recibe puntos (que podemos consultar con el comando *!puntos*), que podrá utilizar para ejecutar otros comandos que generarán mensajes en el chat, o incluso en la misma ventana de vídeo (por ejemplo, *!hidratacion*, que indicará al *streamer* que es momento de hidratarse y beber algo de agua, o *!mensaje*, con el que reproducir un mensaje durante el *streaming* a través de la API de voz sintetizada del navegador).

## Arquitectura básica

La arquitectura de *botyto* es sencilla. Se trata de una aplicación de escritorio ([Electron](https://www.electronjs.org/) a través de [electron-forge](https://www.npmjs.com/package/electron-forge)) que inicia un diálogo sencillo que nos permite configurar el software, y una vez configurado iniciar el bot.

[![Pantalla principal de botyto](/images/posts/2021-twitch-bot/botyto.png)](/images/posts/2021-twitch-bot/botyto.png)

Al iniciar el bot, no sólo inicia una conexión al sistema IRC de Twitch a través de la librería [tmi.js](https://www.npmjs.com/package/tmi.js) sino que inicia un servidor web a través de [express](https://www.npmjs.com/package/express) y [socket.io](https://www.npmjs.com/package/socket.io), que cumplirá dos funciones:

*   Servir una página HTML que a través de websockets muestre avisos visuales en el vídeo del *streaming*.
*   Servir una página HTML que a través de websockets lea mensajes en voz alta, utilizando la [API de sintetización de voz](https://wicg.github.io/speech-api/) disponible en la mayoría de navegadores.

Iniciado el bot, basta con añadir a StreamLabs OBS (U OBS Studio) una nueva fuente de navegador, que cargue la ruta *http://localhost:3000*, que es el puerto utilizado por defecto por el bot. A partir de aquí, cada vez que utilicemos un comando que deba mostrar un aviso en el vídeo, se enviará un comando vía websocket al navegador que utiliza StreamLabs OBS, que al recibirlo lo interpretará, y mostrará un mensaje en el vídeo acompañado de alguna imagen. Y lo mismo sucede con la voz sintetizada.

## Después de ser afiliado: Desarrollos recientes

Es cierto que una vez alcanzamos el hito de ser afiliados, *botyto* pierde parte de su «gracia», dado que la mayoría de sus acciones podemos llevarlas a cabo mediante el sistema de recompensas de Twitch.

No obstante, adaptando el software a este nuevo escenario, recientemente se han implementado las siguientes características:

*   Una interfaz que permita configurar comandos personalizados que muestren mensajes por chat o vídeo, de forma que puedan añadirse nuevos comandos sin necesidad de modificar el código, y eliminar aquellos que pierden sentido una vez alcanzada la condición de afiliado.
*   La posibilidad asimismo de que estos comandos pulsen teclas de nuestro ordenador una vez son ejecutados. Esto último, con la intención de que *botyto* pueda crear sesiones de juego similares a las de «Twitch plays Pokemon» en las que el espectador, a través de comandos, puede pulsar teclas de nuestro teclado y controlar el juego que en cuestión se encuentre abierto.

Esto último, a título informativo, se ha realizado gracias a la librería *[robotjs](http://robotjs.io/)*, que para ser compilada requiere disponer de Python y otras dependencias de .Net, que en caso de no tener instaladas provocarán un error al compilar.

## Dónde descargar el software, cómo contribuir

Botyto es software libre, liberado bajo licencia MIT.

Puedes descargar su código fuente en el siguiente repositorio: [GitHub – oegea/botyto](https://github.com/oegea/botyto)

Además, en caso de problemas, también puedes descargar una versión pre-compilada del software en el apartado de *releases* de GitHub.