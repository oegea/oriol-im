---
title: "Trabajando y programando en un iPad sin gastarse una fortuna en ello."
slug: "trabajando-y-programando-en-un-ipad-sin-gastarse-una-fortuna-en-ello"
date: "2021-01-01"
excerpt: "Recientemente he sufrido un percance que me está obligando a llevar el brazo izquierdo completamente inmovilizado, situación que se prolongará durante varios meses. Pocas semanas después de lo ocurrido, empecé a buscar una plataforma que me permitiese al menos realizar tareas básicas: Atender llamadas, contestar e-mails, y redactar documentos, todo ello utilizando una funcionalidad de &hellip; Sigue leyendo Trabajando y programando en un iPad sin gastarse una fortuna en ello."
status: "publish"
type: "post"
id: "856"
categories:
  - "Desarrollo"
  - "Dispositivos y hardware"
tags:
  - "Apple"
  - "coder"
  - "iPad"
  - "iPadOS"
  - "programar"
  - "Studio"
  - "tablet"
  - "Tableta"
  - "trabajar"
  - "Visual"
---

Recientemente he sufrido un percance que me está obligando a llevar el brazo izquierdo completamente inmovilizado, situación que se prolongará durante varios meses.

Pocas semanas después de lo ocurrido, empecé a buscar una plataforma que me permitiese al menos realizar tareas básicas: Atender llamadas, contestar e-mails, y redactar documentos, todo ello utilizando una funcionalidad de dictado por voz siempre que fuese posible, dado que escribir con una única mano es lento y cansado.

Durante el primer filtrado de dispositivos descarté el ordenador portátil en cuestión de minutos: La funcionalidad de dictado por voz de Windows (desconozco si debido a que el micrófono del que disponía era de mala calidad) no me ofrecía una respuesta precisa, además de ser el portátil considerablemente poco manejable debido a sus dimensiones, lo cual también descartó de facto utilizar Samsung DeX en él.

Siguiendo la prueba de dispositivos, mi hermano me dejó su iPad de sexta generación, que pese a contar con el ya veterano chip A10, ofreció una respuesta satisfactoria en redacción de e-mails y documentos a través de la voz, y una respuesta igualmente satisfactoria en llamadas, multitarea con split view, e incluso conectando por bluethoot un teclado con trackpad no oficial.

Toda esta versatilidad, portabilidad y demás cualidades me hicieron aumentar rápidamente la finalidad dada a la tableta: Empecé a utilizarla también para la administración de servidores, tanto mediante SSH como por RDP, para acceder a servicios VPN que suelo utilizar mediante OpenVPN, y finalmente para programar a través de VSCode (aprovechando las cualidades de las últimas versiones de Safari para iPadOS.

## Publicación no patrocinada

Aunque últimamente se estila mucho recomendar productos incluyendo enlaces patrocinados, de forma que el autor recibe beneficios cada vez que alguien compra a través de sus enlaces, este sitio web se realiza sin ánimo lucrativo, y como tal no voy a recibir un sólo euro si decides comprar algo a través de esta publicación.

Además, así puedes estar seguro de que realmente te estoy recomendando productos que he probado y me han satisfecho. Decidir comprar o rehusar la propuesta, y sacar tus propias conclusiones, es algo que deberás hacer tú mismo 😉

## Antes de empezar: iPadOS ha mejorado mucho, pero no es oro todo lo que reluce

Existen cambios recientes en iPadOS sin los cuales no podríamos siquiera plantearnos utilizar iPad como medio de trabajo de uso prolongado. Hasta ahora, el uso de iPad se relegaba a un uso esporádico o auxiliar, debido a una incapacidad para completar determinadas tareas.

La aplicación de gestión de ficheros, el dock inferior, la posibilidad de disponer de más de una app en pantalla con split view, las mejoras notables en Safari, o el soporte para utilizar un teclado y ratón sin necesidad de utilizar alguno de los originales (y caros) de Apple, son algunos ejemplos de cambios relativamente recientes que hacen que podamos empezar a pensar que es posible crear contenido desde un iPad, y no sólo consumirlo.

No obstante, sirva este párrafo de advertencia: Al trabajar desde un iPad vas a echar en falta determinadas comodidades de tu ordenador habitual. Vas a poder realizar la mayoría de tareas, pero puede que para realizar algunas el procedimiento no sea tan cómodo como en PC o Mac, o que existan algunas incompatibilidades en algunas apps web, por ejemplo para reconocer las pulsaciones del teclado (por poner un ejemplo, Google Docs tiene algunos problemas y VSCode los tenía hasta no hace tanto).

Esto es algo que a día de hoy (finales de 2020) ya es sorteable, y si las demás cualidades del iPad aportan valor suficiente en tu caso concreto, sabrás y podrás aprender a completar cada una de tus tareas desde estas tabletas. Personalmente, creo que además estos inconvenientes van a ir desapareciendo en cada versión de iPadOS, y los fabricantes de software irán adaptándose conforme pase el tiempo. Además, existen novedades cómo Apple silicon, que se encuentran a la vuelta de la esquina, y a la larga podrían ayudar a que exista una mayor cohesión entre macOS e iPadOS. Se trata simplemente de que valores si a día de hoy, trabajar desde un iPad es algo que va a aportarte valor real alguno.

## ¿Qué iPad debo comprar?

Este punto es en el que la inversión va a ser mayor. Personalmente, aunque me encanta el aspecto del iPad pro o del iPad air, para el tipo de tareas que desarrollo habitualmente el iPad de sexta generación con chip A10 ya era solvente, por lo que sin duda iba a serlo el A12 del iPad de octava generación.

En este punto es conveniente que te plantees qué tipo de tareas vas a llevar a cabo, y si la versión de entrada de iPad más actual puede servirte y durante cuánto tiempo podrá hacerlo.

Por último: Las versiones de entrada de iPad suelen llevar CPUs de generaciones antiguas. La recomendación es asegurarse que al momento de compra la CPU no tenga más de dos años, de esta forma nos aseguraremos que durante los próximos tres años nuestro dispositivo recibirá actualizaciones.

Respecto a lo anterior: Especial atención hay que prestar a modelos de entrada de iPad que vienen con CPUs aún más antiguas. Un ejemplo claro es el iPad de séptima generación (2019), que incluía el mismo chip A10 que el iPad de 2018, y que el iPhone de 2016, y tan sólo mejoraba el tamaño de pantalla, y la compatibilidad con accesorios. Es decir, en 2019, comprando el modelo de entrada de iPad, se obtenía una CPU de tres años de antiguedad. El trato en esa ocasión no parecía tan justo, y puede que acudir a un modelo superior sí estuviese justificado (aunque se trate de una especie de barrera psicológica).

En 2020 el modelo de entrada introdujo el chip A12, lanzado al mercado por primera vez en iPhone en 2018, por lo que es el que finalmente utilizaremos en este setup.

## Hardware utilizado

**iPad de octava generación:** Su precio oficial se sitúa en los 379 euros para la versión de 32GB. Puedes valorar si realmente necesitas más espacio, o si una versión con conectividad 4G te resulta imprescindible, lo cual inccrementaría su precio. [Pulsa aquí para ver todas las opciones de compra](https://www.apple.com/es/shop/buy-ipad/ipad-10-2).

**Teclado y ratón:** Indispensable si queremos realizar algunas tareas propias de un PC convencional. En este caso no vamos siquiera a contemplar la posibilidad de invertir los 179 euros por los que se vende la funda *Smart keyboard*, que además siquiera incluye trackpad.

En Amazon podemos encontrar un teclado con trackpad bluethoot de marca 1byone, cuya batería es duradera, teclas cómodas al tacto, y trackpad mejorable, pero que supera en calidad a más de un portátil convencional y cuya respuesta no es mala.

Su precio se situa entre los 20 y 30 euros, y [puedes comprarlo pulsando aquí](https://www.amazon.es/Ultra-delgado-teclado-bluetooth-multi-touchpad-recargable/dp/B014CEQI7S/ref=sr_1_1?__mk_es_ES=ÅMÅŽÕÑ&dchild=1&keywords=1byone+teclado&qid=1604742522&sr=8-1).

**Logitech Crayon:** No queremos sólo trasladar algunas tareas que normalmente realizamos en nuestro PC hacia un iPad: Estas tabletas ofrecen una experiencia única para tomar notas y dibujar, y no tiene sentido desaprovechar estas posibilidades, al menos las relativas a tomar notas a mano.

Logitech Crayon es un lápiz que se basa en parte de la tecnología del Apple Pencil, y como tal es compatible con todas las funcionalidades de éste (inclusive el recientemente implementado reconocimiento de escritura). La respuesta ofrecida es idéntica a la del lápiz oficial de Apple, con lo que no apreciarás ningún tipo de *input lag*, y su precio al momento de escribir esta publicación se situa entorno a los 40 euros por promoción, aunque su precio oficial ronda los 70 euros. [Pulsa aquí para ver las opciones de compra.](https://www.apple.com/es/shop/product/HMGA2ZM/A/logitech-crayon-para-el-ipad)

El único motivo por el que podrías preferir adquirir un Apple pencil, es porque tengas muy claro que vas a utilizarlo para dibujar en lugar de tomar notas: El Crayon no dispone de detección de presión, y como tal bajo mi punto de vista, para cualquier tarea relacionada con el dibujo es preferible optar por el accesorio original (100 euros de precio, dado que este iPad sólo es compatible con el de primera generación). [Pulsa aquí para ver las opciones de compra.](https://www.apple.com/es/apple-pencil/)

El presupuesto final se situa entre los 470 y 510 euros, dependiendo de qué accesorios optemos por comprar, y el precio al que podamos conseguirlos. Debemos tener en cuenta, que prescindiendo del lápiz, podríamos situarnos entorno a los 400 euros, se trata de un precio medio asumible para una tablet que nos garantiza una buena respuesta en el trabajo, una política de actualizaciones *que ojalá encontrásemos en otros fabricantes*, y cuyo sistema operativo, aunque esto es una opinión personal, se encuentra mejor preparado (y cada vez más) para crear contenido y trabajar, que un entorno que ejecute Android.

## Software utilizado

Las Apps a instalar dependerán en gran medida de cada caso de uso. En mi caso utilizo principalmente las siguientes:

**Aplicaciones de productividad:** GMail, Google Drive, Meets, Calendar, etcétera. En esencia las aplicaciones de Google Workspace, y otras cómo Skype, Trello, 1Password, y similares.

Lo mejor: La aplicación de Google Drive es compatible con la app de archivos de iPadOS. Es realmente útil poder copiar y mover ficheros entre iPad, iCloud, Google Drive, servidores SFTP (ver Termius), etcétera.

Lo peor: La aplicación de Documentos de Google ofrece un entorno muy limitado. Merece la pena no instalarla y utilizar el navegador web (pese a que tiene algunas incompatibilidades).

**GoodNotes:** Sin duda una de las aplicaciones estrella. La aplicación de notas que incluye el sistema por defecto cumple su cometido, no obstante GoodNotes nos ofrece un entorno infinitamente más cómodo y organizado, y un sinfin de opciones adicionales. Aunque su precio se encuentra en alrededor de 10 euros, pago único, se trata de una elección a valorar si pretendemos utilizar la tablet para tomar notas.

**Termius:** Imprescindible para acceder a servidores remotos a través de SSH, es la aplicación que mejor compatibilidad ofrece. La aplicación *per se* es gratuíta, no obstante si optamos por suscribirnos (6 euros al mes), dispondremos de la posibilidad de redireccionar puertos o acceder a un cliente SFTP compatible con la aplicación de archivos de iPadOS.

**RD Client:** Se trata de la app gratuíta de Microsoft para acceder a servidores mediante el protocolo RDP. La respuesta es francamente fluída (siempre que el servidor lo sea).

**OpenVPN:** App igualmente gratuíta. Indispensable si queremos simplificar la conexión a redes VPN que utilicen OpenVPN. Cabe mencionar que la configuración no es intuitiva: No es posible (o al menos yo no lo logré) importar perfiles OpenVPN que incluyan clave y certificado en ficheros adicionales al perfil, el perfil debe incluir en un único fichero todos los aspectos requeridos.

**Miro:** Aunque la considero una app de productividad, mención diferenciada merece la app de Miro y su integración con el lápiz táctil.

**Adobe XD:** Podría calificarse como la gran decepción de esta lista. Su funcionalidad se limita a poder ver los prototipos, y no crearlos o editarlos, con lo que su uso es cercano a lo testimonial salvo quizás para presentaciones en reuniones.

## Utilizando VSCode

Tras realizar todo lo anterior, podemos llegar a preguntarnos: ¿No es posible entonces, teniendo un navegador web avanzado y soporte para teclado y ratón, instalar un entorno de desarrollo cómo VSCode, y programar desde el iPad?

En la teoría lo es, gracias a que VSCode es una aplicación desarrollada mediante Electron, es decir: Que aunque se ejecuta como una aplicación de escritorio, la tecnología que lo nutre es 100% web, y en la práctica un navegador basado en chromium es quien ejecuta VSCode cada vez que iniciamos la aplicación de escritorio.

Dicho esto, pese a lo anterior VSCode no dispone de aplicación para iPad, ni soporta ser ejecutado en un navegador web de forma oficial, pero gracias a proyectos cómo [coder](https://github.com/cdr/code-server) podemos instalar VSCode en un servidor, y que éste sea quien sirva a través de http/s la aplicación de VSCode al navegador web de nuestro iPad.

Lo anterior es a día de hoy lo más cercano que podemos obtener a disponer de VSCode en nuestro iPad, y francamente, el resultado es bastante satisfactorio.

Antes de proceder a instalarlo, cabe mencionar que aunque la aplicación web se ejecuta en nuestro iPad, en Safari, parte de la funcionalidad será manejada por el servidor, por lo que cuando accedamos al listado de ficheros, o iniciemos un terminal, estaremos en realidad visualizando el contenido de nuestro servidor, y ejecutando comandos en él. Por lo que sí: La experiencia es bastante satisfactoria y útil para trabajar, pero no, aún no es posible disponer de VSCode 100% ejecutado en nuestro iPad sin depender de servidores terceros.

Para instalar coder en nuestro servidor, bastará con ejecutar el siguiente comando:

```bash
curl -fsSL https://code-server.dev/install.sh | sh 
```

Al finalizar la instalación, el script nos indicará cómo podemos ejecutar code-server a través de la linea de comandos, y cómo podemos configurarlo para que se ejecute como servicio, y auto-inicie cada vez que el servidor sea reiniciado.

Por último, deberemos modificar la dirección IP en la que se sirve code-server, así como la contraseña de acceso solicitada para acceder. Por otro lado, es vital que o bien sirvamos coder a través de un reverse proxy que utilice https en lugar de http, o bien redireccionemos puertos a través de SSH. Independientemente de la opción por la que nos decantemos la motivación es la misma: Cifrar la comunicación entre nuestro cliente (iPad) y el servidor y evitar que ésta se realice en texto plano.

De todo lo anterior podemos obtener más información [aquí](https://github.com/cdr/code-server/blob/v3.6.2/doc/guide.md), en la guía de instalación oficial.