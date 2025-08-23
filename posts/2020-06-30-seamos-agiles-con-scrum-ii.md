---
title: "Seamos ágiles con Scrum (II) &#8211; Conceptos básicos: La guía de Scrum, Product Backlog, Items y User Stories"
slug: "seamos-agiles-con-scrum-ii"
date: "2020-06-30"
excerpt: "Gentil introducción Este serie de publicaciones describe paso por paso los conceptos más importantes de Scrum, así como la forma en que pueden ser aplicados en una organización real. Puedes acceder a toda la serie a través de estos enlaces: Primera parte &#8211; El agilismo y el manifiesto ágil. Segunda parte &#8211; Conceptos básicos: La &hellip; Sigue leyendo Seamos ágiles con Scrum (II) &#8211; Conceptos básicos: La guía de Scrum, Product Backlog, Items y User Stories"
status: "publish"
type: "post"
id: "702"
categories:
  - "Desarrollo ágil"
tags:
  - "agile"
  - "foundations"
  - "manifesto"
  - "planning"
  - "scrum"
  - "sprint"
  - "sprints"
---

## Gentil introducción

Este serie de publicaciones describe paso por paso los conceptos más importantes de Scrum, así como la forma en que pueden ser aplicados en una organización real.

Puedes acceder a toda la serie a través de estos enlaces:

[Primera parte – El agilismo y el manifiesto ágil.](https://www.oriol.im/seamos-agiles-con-scrum-i/)

[Segunda parte – Conceptos básicos: La guía de Scrum, Product Backlog, Items y User Stories](https://www.oriol.im/seamos-agiles-con-scrum-ii/)

[Tercera parte – Conceptos básicos: Sprints, Sprint Goals, Sprint Backlogs, Definition of Done, Product Owner](https://www.oriol.im/seamos-agiles-con-scrum-iii/)

[Cuarta parte – Cómo medir el progreso de desarrollo](https://www.oriol.im/seamos-agiles-con-scrum-iv/)

[Quinta parte – Conceptos básicos: El Scrum Master, el equipo de desarrollo, y Scaled Scrum](https://www.oriol.im/seamos-agiles-con-scrum-v/)

**Sobre la guía de Scrum 2020:** Esta serie de publicaciones se encuentra en construcción, y su contenido se basa íntegramente en la guía de Scrum de 2017. Finalizada la publicación de la serie, se trabajará en actualizar el contenido a la última versión de la guía de Scrum.

## Qué esperar de esta publicación

Ahora que hemos analizado brevemente el manifiesto ágil, sabemos que en determinados entornos de alta incertidumbre, o cambiantes a lo largo del tiempo, puede resultar muy conveniente implementar una metodología de trabajo ágil que nos permitan aportar a nuestro cliente, y a nuestros usuarios finales, el valor que necesitan o esperan de nuestro producto.

En esta primera entrada, se da una revisión rápida e inicial a la forma mediante la que organizar un proyecto con desarrollo ágil. Se explican algunos conceptos de forma muy breve y quizás algo simplista en esta primera fase inicial, no obstante cabe mencionar que en sucesivas publicaciones se concretarán más detalles 🙂

## La guía de Scrum

Cómo se citaba previamente, de ahora en adelante van a empezar a introducirse conceptos de Scrum. Es importante que sepas que todas las indicaciones explicadas en esta y sucesivas entradas son interpretaciones de la guía de Scrum.

La guía de Scrum es un documento escrito por Ken Schwaber y Jeff Sutherland, los creadores de Scrum, que establece los conceptos y forma en que debe desarrollarse este marco de trabajo. Puedes encontrar la versión en Español [pulsando aquí](https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-Spanish-European.pdf), o bien accediendo y navegando por el portal web oficial: [https://www.scrumguides.org/](https://www.scrumguides.org/)

Es muy conveniente leer esta guía varias veces e intentar comprenderla al máximo. La guía ofrece las premisas de Scrum, pero esta guía debe interpretarse en situaciones complejas, por poner un ejemplo, puede que la guía no haga referencia expresa a cómo actuar ante una situación concreta, pero seguro podremos interpretar a través de su contenido cómo debemos actuar.

De igual forma existen distintas técnicas recomendadas para lograr un entorno exitoso. Es en estos casos, en los que cobra sentido leer información adicional contrastada para aprender a interpretarla. En este sentido, existen distintas organizaciones a las que puedes recurrir: Scrum.org es una de las más populares, y en sus foros, blogs, y cursos encontrarás las respuestas a tus dudas.

De igual forma, tal y como comentaba en la cabecera de estas entradas, un curso en un sitio web de terceros (por ejemplo Management Plaza), siempre y cuando el contenido sea actualizado y de calidad, puede prepararte para saber implementar Scrum en una organización, y responder ante las situaciones más comunes a las que vas a enfrentarte.

## Recapitulando: ¿Qué es el desarrollo ágil?

Tras analizar brevemente el manifiesto ágil en la publicación previa, es viable resumir de forma muy básica, que el desarrollo ágil es un conjunto de premisas que dan lugar a diversas formas de desarrollar productos.

Profundizando más allá, uno de los aspectos más relevantes es la necesidad de realizar pequeños planes que deben ser analizados una vez ejecutados, para que el aprendizaje obtenido durante la ejecución de estos, sea aplicado y tenido en cuenta durante el diseño y ejecución del siguiente pequeño plan, adaptándonos así a los cambios que presente el entorno.

Dicho de otra forma: El desarrollo ágil, es una forma de desarrollar un producto de forma iterativa y adaptativa.

**¿Y qué significa desarrollar un producto de forma iterativa y adaptativa?**

Si consideramos el desarrollo de un producto en las fases de *«Especificación, diseño, implementación, testeo o prueba, integración y documentación»*, podríamos simplificar la cuestión afirmando que en un producto desarrollado de forma convencional, estas fases sucederían una única vez en el proyecto: Especificaríamos cómo va a ser todo el software, diseñaríamos toda su interfaz, implementaríamos las funcionalidades, las probaríamos, integraríamos, y posteriormente documentaríamos.

Pequeño paréntesis: A estas metodologías no-ágiles, a las que me acabo de referir cómo «forma convencional», las llamaremos de ahora en adelante **metodologías o marcos de trabajo «waterfall»**. Una metodología waterfall es aquella opuesta a un proceso ágil. Las fases de nuestro producto suceden una única vez, una tras otra.

**¿Pero qué sucede si trabajamos en entornos altamente cambiantes?**

El tiempo y coste de ejecución de estas fases son elevados en su conjunto si las realizamos para todo el producto. En entornos altamente cambiantes, con gran probabilidad sucederá que al finalizar la ejecución de todo este gran plan existirían muchos aspectos que deberán ser modificados, y estas modificaciones en su mayoría comportarán un gran coste adicional para el desarrollo del producto, si no en ocasiones la necesidad de replantear el producto desde sus cimientos.

Los motivos pueden ser muchos: Ya sea porque desconocíamos qué valor debíamos aportar a nuestro usuario final para construir un producto que fuese aclamado y apreciado por su público, o bien porque los requisitos establecidos de forma estricta en las condiciones contractuales no reflejaban las necesidades de nuestro cliente (o nuestro cliente creía conocer -de forma errónea- la solución a sus problemas, y lo plasmó en estas condiciones), o cualquier otro motivo que a la postre provoque la necesidad de realizar multitud de cambios traumáticos desde un punto de vista de viabilidad de proyecto.

Para evitar todos estos inconvenientes, el desarrollo ágil nos aconseja realizar estos pequeños planes, pequeños proyectos dentro de nuestro gran proyecto, pequeños objetivos, a los que **de ahora en adelante nos referiremos bajo el concepto de Sprints**. En cada uno de estos Sprints realizaremos todas las fases del proceso de desarrollo que hemos detallado previamente, pero delimitaremos su alcance solo a unas pocas características concretas de nuestro producto, y además, lo delimitaremos a un periodo de tiempo breve, que **se comprenderá entre una semana y un mes**.

Pequeño paréntesis: Es decir, si nuestro primer Sprint comprende por ejemplo, poder realizar login con un usuario, realizaremos el proceso de *«Especificación, diseño, implementación, testeo o prueba, integración y documentación»* para esta funcionalidad. En el siguiente Sprint, repetiremos el mismo proceso pero para otras tareas distintas. En lugar de especificar y diseñar todo el producto desde el principio, lo cual sería más propio de un proceso waterfall, lo haremos sólo para las tareas concretas que vayamos afrontando según el plan de nuestros Sprints.

Focalizaremos al máximo todos los esfuerzos del equipo de desarrollo, para asegurarnos que al finalizar el Sprint podamos entregar una pieza de software terminada que refleje el alcance que determinamos para nuestro Sprint, aunque sea poco, aunque sea algo que *casi no haga nada* (algo común en fases iniciales del desarrollo). Y a esta pieza de software que habremos especificado, diseñado, implementado, probado y documentado en un solo Sprint, la llamaremos **incremento**. El incremento es el resultado de un Sprint: Es una **pieza de software funcional potencialmente entregable** a cliente. Es decir, que en caso de quererlo, puede ser entregada al cliente (aunque no existe obligación de hacerlo), porque es funcional, está completamente acabada y probada.

Acabado el Sprint, y generado el incremento del producto, tal y como veremos más adelante, compartiremos nuestros progresos con el cliente, para obtener así cualquier tipo de retroacción o *feedback* de este, y tener en cuenta estos comentarios, para el diseño del siguiente Sprint, que deberá dar comienzo inmediatamente después del que acabamos de concluir. «Sin prisa pero sin pausa»

## ¿Cómo empezamos nuestro producto de forma ágil?

Al igual que en otros momentos, me permito reiterar que en estas fases iniciales, muchos conceptos se simplifican para introducirlos rápidamente y verlos de forma breve por primera vez. Solo el inicio y planificación de un producto puede dar lugar a multitud de publicaciones, incluso libros, pero en este punto trataremos de simplificarlo al máximo, y plantear cómo iniciar un producto o proyecto mediante Scrum. ¡Veámoslo!

*   En primer lugar, redactaremos pequeños post-its con piezas que queremos o consideramos que debe tener el producto en el que vamos a trabajar. Trataremos de incluir todos los aspectos que queremos incluir en nuestro producto, aunque en esta primera fase como es obvio, los post-its estarán redactados de forma sencilla y amplia, no especificaremos en gran detalle todo aquello que queremos para nuestro producto.
*   A continuación ordenaremos estos post-its que acabamos de redactar según el valor que aporten al producto en si. El resultado de esto será una lista de post-its, una lista de elementos, en el orden en que deben ser ejecutados. Esta lista, de ahora en adelante la conoceremos bajo el nombre de pila de producto o **Product Backlog**.
*   ¿Y cómo conocemos el valor que aportan? El concepto de valor es algo intangible, y a este respecto existen multitud de técnicas o acercamientos, que no cubriremos (al menos de forma amplia) en esta serie de publicaciones. Pero por ejemplo, si conocemos que un módulo de nuestro Software es indispensable para que nuestro producto pueda hacerse un hueco en el mercado, podemos afirmar que este módulo va a aportar mucho más valor, que una funcionalidad trivial mediante la cual los usuarios puedan personalizar el color de fondo del Software. Esto es solo un ejemplo, en la práctica conocer el valor que aporta cada ítem requiere conocer el mercado, las necesidades del cliente, saber interpretar los comentarios, reacciones y emociones de este cliente mientras prueba nuestro producto y tener visión de negocio, entre otros aspectos.

## ¿Cómo deben ser los ítems del Product Backlog?

Hemos afirmado dos cosas previamente: Que queremos mostrar el incremento a nuestro cliente al finalizar cada Sprint, y que queremos poder ordenar libremente nuestro Product Backlog según el valor que aporte cada ítem.

Para que estas dos premisas puedan cumplirse, necesitamos:

*   Que los ítems del Product Backlog no sean de naturaleza técnica. Por ejemplo: «Crear el script de generación de base de datos» o «Crear y configurar servidor de testeo».  
      
    Si queremos poder enseñarle al cliente en qué hemos progresado al finalizar el Sprint, debemos asegurarnos que tenemos funcionalidades que enseñarle, y no aspectos técnicos que puede no entender (ni tiene por qué hacerlo).  
      
    En lugar de «Crear el script de generación de base de datos», podemos empezar a trabajar en una funcionalidad, y definir el script de base de datos para esa pequeña pieza concreta en la que empezamos a trabajar. Conforme avancemos en el resto de funcionalidades, tendremos tiempo y oportunidad de definir todos estos mecanismos técnicos necesarios. *Además, si sabemos que pueden cambiar las funcionalidades, y hemos comentado que debemos realizar todo el proceso de desarrollo en cada Sprint: ¿Qué sentido tiene generar ahora todo el script de base de datos?*  
      
    Aplica lo mismo a «Crear y configurar servidor de testeo». Si necesitamos un servidor de testeo, configurémoslo cuando nos encontremos la primera tarea para la que requerimos este servidor de testeo. Es obvio que tardaremos más en finalizar esta tarea, pero cuando finalicemos el Sprint, presentaremos al cliente una funcionalidad, y no un servidor de testeo que en la práctica no puede ver ni probar.
*   Que los ítems del Product Backlog sean independientes entre ellos: Si queremos poder ordenarlos según su valor, de forma totalmente libre, no podemos permitirnos dependencias entre ellos. Debemos ser capaces de priorizar en un momento dado, una funcionalidad concreta sobre otra, y para ello los ítems deben estar correctamente redactados y no depender entre ellos.

## Definiendo los ítems en forma de historias de usuario o User Stories

Para concluir, veamos ahora de qué forma podemos redactar estos ítems que conforman nuestro Product Backlog. Cabe mencionar, que Scrum no *obliga* a utilizar este método como forma de escribir nuestros ítems, aunque no deja de ser una forma bastante recomendable.

Esta forma, **conocida como historias de usuario (nos referiremos en inglés cómo User Stories)** consiste en describir de la siguiente forma los post-its que redactamos inicialmente:

*Cómo -rol- quiero -algo- para -lograr un objetivo-*.

O en inglés:

*As a -role- I want to do -something- so that -something happens-*.

Es decir, estamos describiendo aquello que queremos lograr, aquella funcionalidad que queremos que tenga nuestro producto, desde el punto de vista de la persona que va a utilizarla. Un ejemplo de User Story puede ser:

*Cómo administrador quiero poder desactivar usuarios en desuso para garantizar que el listado de usuarios activos que pueden acceder a la plataforma se encuentra siempre actualizado y nadie puede acceder con credenciales antiguas.*

Como pequeña anotación, cabe mencionar que en situaciones en las que resulte muy obvio, podemos excluir la última parte en la que especificamos el motivo en cuestión por el que queremos poder realizar la acción descrita.

## Conclusión: La clave está en aprender y en tomar decisiones en base al empirismo

Aún quedan muchos conceptos por introducir para conocer Scrum de forma básica. No obstante, en esta publicación hemos visto aspectos clave muy interesantes: El Sprint, el Product Backlog, y los ítems que lo conforman, que pueden tomar la forma de User Stories.

A modo de conclusión es importante analizar que el objetivo último de organizar el desarrollo en estos Sprints, es que al finalizar cada Sprint vamos a realizar algunas acciones (por ejemplo, enseñarle a nuestro cliente el progreso), para aprender. En cada Sprint vamos a obtener mucha información, que nos va a permitir tomar decisiones empíricas. Es decir: En lugar de tomar decisiones sobre nuestro producto, asumiendo determinados supuestos (por ejemplo, asumiendo que nosotros, o nuestro propio cliente, sabemos cómo dar solución a una necesidad concreta), vamos a tratar de obtener el máximo de información durante y al finalizar cada Sprint, de forma que las decisiones que adoptaremos en los siguientes Sprints serán más acertadas siempre y cuando las basemos en el aprendizaje que hemos obtenido.

En la próxima publicación, avanzaremos y analizaremos más aspectos. Por supuesto, a lo largo de estas publicaciones futuras, también detallaremos aspectos que puedan haberse quedado en el tintero.