---
title: "Construyendo un gestor de contraseñas en pleno 2022, mientras las contraseñas desaparecen"
slug: "construyendo-un-gestor-de-contrasenas-en-pleno-2022-mientras-las-contrasenas-desaparecen"
date: "2023-07-11"
excerpt: "Durante 2022 empecé el proyecto de construir un gestor de contraseñas de código abierto que aún a día de hoy mantengo llamado Passager. (BTW, aceptamos contribuciones) Hace poco, tuve la oportunidad de compartir el proceso y algunos aprendizajes durante el Frontend Day 2023 en Adevinta, y dado que 20 minutos no son suficientes para explicarlo &hellip; Sigue leyendo Construyendo un gestor de contraseñas en pleno 2022, mientras las contraseñas desaparecen"
status: "publish"
type: "post"
id: "1055"
categories:
  - "Desarrollo"
tags:
  - "Passager"
---

Durante 2022 empecé el proyecto de construir [un gestor de contraseñas de código abierto que aún a día de hoy mantengo](https://www.passager.app/) llamado Passager. (BTW, aceptamos contribuciones)

Hace poco, tuve la oportunidad de compartir el proceso y algunos aprendizajes durante el Frontend Day 2023 en Adevinta, y dado que 20 minutos no son suficientes para explicarlo todo, me pareció buena idea publicar una entrada a modo de expansión.

**Descargar la presentación**

Puedes descargar las diapositivas de la presentación [pulsando aquí](https://wp.oriol.im/wp-content/uploads/2023/07/slides-passager.html.zip).

**Cómo probar Passager**

Si quieres probar el gestor de contraseñas, puedes hacerlo en [https://cloud.passager.app](https://cloud.passager.app), o bien descargando la app para Android [pulsando aquí](https://play.google.com/store/apps/details?id=im.oriol.passager), o para iOS [pulsando aquí](https://apps.apple.com/es/app/passager-password-manager/id1631897662).

**Cómo puedo empezar a utilizar la API web de criptografía**

Puedes basarte directamente en la documentación y ejemplos oficiales existentes. Asimismo, también puedes utilizar una librería envoltorio como esta, que puede facilitarte la operativa e inicio:

*   [https://github.com/oegea/useful-tools/tree/main/packages/crypto](https://github.com/oegea/useful-tools/tree/main/packages/crypto)

Puedes instalarla ejecutando **npm i @useful-tools/crypto**

**Algunos comentarios sobre la presentación**

Con el fin de simplificar y optimizar el tiempo disponible, durante la presentación se expuso de forma breve cómo Passager utiliza la API web de criptografía para derivar una clave de cifrado a partir de una contraseña maestra del usuario, valiéndose del algoritmo PBKDF2, y cómo posteriormente esa clave podía utilizarse para cifrar y descifrar contenido.

Asimismo, se expuso cuán determinante es la fortaleza de esta contraseña maestra, y cómo una contraseña maestra débil puede comportar ser vulnerables a ataques de fuerza bruta y/o diccionario.

No obstante, creo que puede ser interesante compartir de qué forma securiza Passager el contenido.

**1\. Cómo se cifran los datos de un directorio**

En Passager las contraseñas se almacenan en carpetas o directorios, con el fin de mantener los datos actualizados.

Cada carpeta tiene asociada una clave de cifrado AES-GCM 256 generada aleatoriamente, que es la que se utiliza para cifrar y descifrar todas las contraseñas contenidas.

Esta clave de cifrado se almacena en la base de datos del servicio. No obstante, antes de ser almacenada, el cliente la cifra con las claves de cifrado del usuario.

**2\. Con qué claves de cifrado opera un usuario**

**Disclaimer**: Durante la presentación no dio tiempo a exponer sobre cifrado asimétrico. Pero podríamos simplificarlo (quizás demasiado) mencionando que es una tiplogía de algoritmos de cifrado donde cada participante dispone de un par de claves (pública, y privada). Cuando se requiere realizar una operación de cifrado, utilizamos estas dos claves de la siguiente forma:

*   Pública: Permite cifrar datos. Como su nombre indica, es pública, y puede ser compartida con cualquier participante que necesite cifrar datos que deban poder ser leídos por el propietario del par de claves.
*   Privada: Permite descifrar los datos que han sido cifrados a través de la clave pública. Esta clave, como su nombre indica, es privada, dado que es la que permite descifrar y leer el contenido cifrado. Por tanto, sólo el propietario del par de claves debe tener acceso.

**El usuario principalmente dispone de dos elementos de cifrado**: Un par de claves RSA OAEP de 4096 bits (pública y privada), y una clave AES-GCM 256 bits derivada de la contraseña maestra del usuario.

Todas las claves de las carpetas donde se almacenan contraseñas, se encuentran cifradas utilizando la clave pública del usuario, de esta forma aunque se encuentren almacenadas en el servidor, son inaccesibles sin el correspondiente acceso a la clave privada del usuario.

A su vez, la clave privada del usuario se cifra utilizando la clave derivada de la contraseña maestra del usuario, de forma que aún en el caso de que alguien llegase a obtenerla, no podría utilizarla si no se encuentra en posesión de la contraseña maestra.

**3\. Dónde se almacenan las claves de cifrado del usuario**

La clave derivada de la contraseña maestra se obtiene en el mismo momento en el que el usuario realiza login, derivándola de su contraseña maestra.

Durante un tiempo, la clave privada del usuario se ha almacenado en la base de datos del servicio. No obstante, dado que ante una posible intrusión, esto permite realizar ataques de fuerza bruta y/o diccionario a través de la contraseña maestra, se ha decidido dar al usuario la responsabilidad de almacenar su clave privada.

De esta forma, el usuario puede generar un kit de recuperación (similar al de 1Password) que contiene su clave privada. Y cada vez que inicie sesión en un nuevo dispositivo (sólo la primera vez), deberá indicar su clave privada, para así poder desbloquear el acceso.

Posteriormente, la clave privada se almacena en el almacenamiento local del dispositivo para evitar introducirla cada vez que se realiza login.

**Conclusiones finales**

La criptografía es una disciplina difícil, cada algoritmo entraña complejidad y requiere un estudio en detenimiento. Las APIs y tecnologías modernas permiten interactuar con ella con una facilidad abrumadora, sin conocer los fundamentos matemáticos subyacentes.

Esto es sin duda, un arma de doble filo 😉 Por una parte, es genial la facilidad con la que hoy en día pueden realizarse aplicaciones, por otra parte abre la puerta a la existencia de aplicaciones que aporten una sensación de aparente seguridad, pero sean altamente vulnerables a ataques (como advierte MDN en su documentación).

Personalmente encuentro más que justificada la advertencia, como también creo que es muy interesante que la accesibilidad que presentan estas APIs de criptografía sea aprovechada tanto para aprender, como para ampliar el espectro de aplicaciones existentes (todo ello sin ánimo de fomentar el intrusismo ni denostar la figura del profesional en criptografía).

Sin duda el mayor de los aprendizajes de este proyecto ha sido buscar continuamente formas de securizar cada vez más la información. Plantear constantemente estrategias alternativas para garantizar la seguridad, y nunca dejar de comprobar la seguridad aportada por los algoritmos utilizados, y el tratamiento que debe dársele a salts y vectores de inicialización.

**Agradecimientos**

Finalmente, aprovecho este espacio para agradecer a:

*   Adevinta, y al mega-equipo que ha preparado el Frontend Day de este año. Adevinta es un lugar genial para trabajar, así que si estás pensando en cambiar, [echa un vistazo a las posiciones abiertas](https://www.adevinta.com/jobs) 😉
*   Las personas que han dedicado tiempo a darme feedback sobre la presentación y han contribuido a que sea mejor.
*   Todas aquellas personas que confían en Passager como su gestor de contraseñas, y que además contribuyen con feedback y sugerencias de mejora.
*   Los contributors que han aportado puntualmente al proyecto.