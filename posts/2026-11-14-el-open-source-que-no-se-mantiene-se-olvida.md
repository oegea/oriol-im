---
title: "El open source que no se mantiene, se olvida"
slug: "el-open-source-que-no-se-mantiene-se-olvida"
date: "2026-11-14"
excerpt: "Publicar un proyecto open source es la parte fácil. Lo difícil viene después: Mantenerlo actualizado, seguro y vivo cuando la ilusión del primer día ya ha pasado. Creo que ahora, más que nunca, es el momento de volver a esos proyectos e iterarlos, para que no queden en el olvido o como simples pruebas de concepto. &hellip; Sigue leyendo El open source que no se mantiene, se olvida"
status: "publish"
type: "post"
id: "1058"
categories:
  - "Desarrollo"
tags:
  - "Open Source"
  - "Passager"
  - "FreeSCP"
  - "mantenimiento"
---

Publicar un proyecto open source es la parte fácil. Tienes una idea, la ilusión del primer día, un fin de semana largo, y de repente existe un repositorio con un README que promete mucho. Lo difícil viene después: Cuando la ilusión ya ha pasado, las dependencias empiezan a acumular avisos de seguridad, y aquello que funcionaba deja de compilar porque el mundo a su alrededor ha seguido moviéndose.

Todos tenemos algún repositorio así. Y GitHub está lleno de ellos: Proyectos que resolvían un problema real, que alguien llegó a usar, y cuyo último commit es de hace cuatro años.

Creo que ahora, más que nunca, es el momento de volver a ellos.

## Por qué ahora

Por dos motivos que, curiosamente, empujan en la misma dirección.

El primero es que **crear software nunca había sido tan barato**. Hoy cualquiera puede generar una prueba de concepto en una tarde, y eso es una noticia estupenda, pero tiene una consecuencia: Las pruebas de concepto han dejado de tener valor por sí mismas. Internet se está llenando de software que alguien generó, publicó y abandonó en la misma semana. En ese contexto, lo que distingue a un proyecto ya no es existir, sino seguir existiendo: Que alguien responda de él, lo actualice, y corrija lo que se rompe.

El segundo es que **mantener también se ha vuelto más barato**. Las tareas que hacían que mantener un proyecto personal fuese una carga (actualizar dependencias con cambios incompatibles, migrar de herramienta de compilación, reescribir aquello que dependía de una librería abandonada, y sobre todo, probar que nada se ha roto por el camino) son precisamente aquellas en las que la IA más ayuda, siempre que quien la dirige entienda el sistema y verifique el resultado. Lo que antes eran semanas de ratos libres, hoy son unas pocas horas.

Es decir: Tenemos menos excusas que nunca para dejar morir un proyecto, y más motivos que nunca para no hacerlo.

## Mantener no es solo actualizar versiones

Estas últimas semanas he aplicado esto a mis propios proyectos, y me ha servido para recordar que mantener bien un software tiene bastante más de decidir que de teclear.

El caso más claro es [Passager](https://www.passager.app), el gestor de contraseñas open source que empecé en 2022. Hasta ahora contaba con aplicaciones nativas para iOS y Android, y mantenerlas se había convertido en el principal freno del proyecto: Los sistemas operativos actúan cada vez más como guardianes de lo que puede instalarse y de cuándo puede actualizarse, y eso lastra especialmente a los proyectos pequeños. Un gestor de contraseñas que no puede actualizarse con agilidad es un problema.

Así que la versión 2.0 cambia de estrategia: Passager pasa a ser una única aplicación web instalable (una PWA), que funciona sin conexión y se instala directamente desde el navegador. Y lo interesante es que no se ha perdido nada por el camino: El desbloqueo con Face ID o Touch ID, que antes solo existía en las aplicaciones nativas, hoy funciona desde la propia web gracias a los estándares del navegador.

De paso, el backend se ha reescrito para depender únicamente de dos librerías en lugar de un framework completo, la criptografía se ha reforzado (y las cuentas existentes se actualizan solas, sin que nadie tenga que hacer nada), y se han añadido cosas que llevaban años en la lista: Tarjetas, pares de claves, notas, ficheros cifrados, o varias cuentas en un mismo dispositivo.

Todo ello con una condición que me parece la más importante de todas: **No romper nada a nadie**. Quien siga utilizando una versión antigua de la aplicación, o tenga desplegado un backend de hace años, debe poder seguir trabajando exactamente igual. Mantener un proyecto también es respetar a quien confió en él.

Lo mismo, a otra escala, con [FreeSCP](https://freescp.com), que acaba de recibir el motor actualizado de WinSCP con sus correcciones de seguridad, además de soporte para Mac con Intel y Linux sobre ARM.

Y un caso que ilustra especialmente bien de qué va este artículo: [dockovpn](https://github.com/oegea/dockovpn), una imagen de Docker utilísima que levanta un servidor OpenVPN en un par de segundos, y que sus creadores originales dejaron de actualizar. Mi fork le devuelve las actualizaciones (la imagen base acumulaba 16 vulnerabilidades conocidas, y hoy no arrastra ninguna), y corrige varias decisiones de diseño que, tratándose de una VPN, ponían en cuestión la seguridad de fondo: Parámetros criptográficos compartidos entre todos los despliegues de una misma imagen, la renovación periódica de claves desactivada, el servidor ejecutándose con más privilegios de los necesarios, o fugas de tráfico por IPv6.

Es el ejemplo perfecto de por qué importa mantener: Un software excelente, que mucha gente sigue utilizando para algo tan delicado como su privacidad, y que se había quedado atrás simplemente porque nadie lo estaba cuidando.

## Menos es más

Si tuviese que quedarme con un aprendizaje, sería este: Buena parte del mantenimiento consiste en quitar.

Cada dependencia es una promesa de mantenimiento futuro que hace otra persona en tu nombre, y que puede dejar de cumplirse en cualquier momento. Cada plataforma soportada es una superficie más que probar, y que proteger. Cuando un proyecto se mantiene en ratos libres, simplificar no es una cuestión estética, sino la diferencia entre poder seguir manteniéndolo dentro de cinco años, o no.

Menos dependencias, menos piezas, menos superficie de ataque. Un proyecto pequeño que se entiende de principio a fin envejece muchísimo mejor que uno grande que nadie se atreve a tocar.

## Un ofrecimiento

Hay un motivo de fondo por el que todo esto me importa, y va algo más allá de la técnica.

El software es ya el motor de buena parte de la operativa de nuestra sociedad, y con la IA lo será todavía más: Cómo nos comunicamos, cómo trabajamos, dónde guardamos lo que no queremos perder, y cada vez más, quién (o qué) toma decisiones por nosotros. Casi todo pasa por un programa que alguien escribió, y que alguien controla. Por eso creo que el software libre no es únicamente una forma de licenciar código, sino una forma de contribuir a una sociedad más libre.

Y creo que ahora eso importa, si cabe, más que antes. De la misma forma que hay quien intenta condicionar cómo se desarrolla el software (burocratizándolo, cerrando plataformas, o poniendo trabas a las aportaciones abiertas), quienes nos dedicamos a esto tenemos la responsabilidad de ofrecer alternativas: Piezas abiertas, sólidas y bien cuidadas, sobre las que pueda sustentarse la tecnología que viene, también en la era de la IA.

Eso exige subir el listón. Cuando parece que cualquiera puede hacerlo todo, toca dejar claro que no se trata solo de hacer, sino de comprender, decidir y mantener. Y que esa capacidad no resida únicamente en las grandes tecnológicas es, precisamente, lo que puede equilibrar la balanza: Las mismas herramientas que permiten generar software sin entenderlo, permiten también que una sola persona, o un equipo pequeño, mantenga con rigor proyectos que antes requerían una empresa detrás. Bien aprovechado, eso no conduce a más de lo mismo, sino a que el software libre crezca como nunca lo había hecho.

Para mí, el software libre es, ante todo, un ofrecimiento voluntario: Alguien pone sus creaciones a disposición de los demás, en una relación justa para con quienes las usan. Puedes ver cómo funciona, puedes llevarte tus datos, puedes desplegarlo por tu cuenta, y puedes marcharte cuando quieras. Y eso implica, muchas veces, renunciar deliberadamente a tratar a los usuarios como rehenes, pese a que retenerlos pudiera resultar más rentable en un primer momento.

Es el mismo planteamiento que sigo en [Remanso](https://remanso.help), un proyecto más reciente: Gratuito, sin contrapartidas, sin telemetría, y con los datos cifrados en el dispositivo de cada cual. Una forma sana de contribuir con otras personas, sin esperar de ellas nada más que el uso que quieran darle.

Pero un ofrecimiento que se abandona deja de serlo. Quien confía sus contraseñas, sus ficheros o su diario a un proyecto libre, confía también en que alguien seguirá cuidando de él. De ahí que mantener no sea la parte aburrida del software libre, sino la que lo hace creíble.

Si te apetece conocer en detalle qué ha cambiado en Passager, FreeSCP y dockovpn, lo he ido recogiendo en [este resumen en Ko-fi](https://ko-fi.com/post/November-update-Passager-2-0-FreeSCP-0-2-0-and-a-O7M42ALZU4), donde a partir de ahora iré contando cómo evolucionan estos proyectos 🙂
