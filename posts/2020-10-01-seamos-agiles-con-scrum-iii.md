---
title: "Seamos ágiles con Scrum (III) &#8211; Conceptos básicos: Sprints, Sprint Goals, Sprint Backlog, Definition of Done, Product Owner"
slug: "seamos-agiles-con-scrum-iii"
date: "2020-10-01"
excerpt: "Gentil introducción Este serie de publicaciones describe paso por paso los conceptos más importantes de Scrum, así como la forma en que pueden ser aplicados en una organización real. Puedes acceder a toda la serie a través de estos enlaces: Primera parte &#8211; El agilismo y el manifiesto ágil. Segunda parte &#8211; Conceptos básicos: La &hellip; Sigue leyendo Seamos ágiles con Scrum (III) &#8211; Conceptos básicos: Sprints, Sprint Goals, Sprint Backlog, Definition of Done, Product Owner"
status: "publish"
type: "post"
id: "801"
categories:
  - "Desarrollo ágil"
tags:
  - "ágil"
  - "agile"
  - "backlog"
  - "desarrollo"
  - "development"
  - "owner"
  - "planning"
  - "product"
  - "scrum"
  - "sprint"
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

En la publicación anterior introdujimos los conceptos de **Sprint, Product Backlog**, **User Story** (una forma de redactar e idear los **ítems** que conformarán nuestro Product Backlog), y vimos también que podemos denominar cómo **«waterfall»** a las metodologías que ofrecen una forma más convencional de idear, crear y gestionar un producto.

En esta publicación vamos a introducir algunos conceptos adicionales, que abarcarán tanto roles cómo eventos de Scrum. Me reitero otra vez diciendo que, aunque puede parecer que estas publicaciones introducen de forma poco ordenada estos conceptos, en las últimas publicaciones se ofrecerá un resumen a modo de recapitulación, con lo cual los conceptos *deberían quedar* ordenados y claros.

## Recapitulando: Los ítems del Product Backlog no pueden ser técnicos o interdependientes

Uno de los aspectos que se trataron en la publicación anterior, fue que los ítems que conforman el Product Backlog, no pueden tener naturaleza técnica. Es decir, que no pueden hacer referencia por ejemplo a «Configurar el servidor de base de datos», y que este tipo de tareas, en lugar de incluirlas en el Product Backlog, deben realizarse de forma implícita la primera vez que se desarrolle una funcionalidad del producto que requiera de su implementación.

Antes de avanzar, es conveniente contemplar otro tipo de casuísticas. Por ejemplo: En el Product Backlog tampoco es válido incluir ítems que hagan referencia a la seguridad, mantenibilidad o escalabilidad, porque también son aspectos técnicos.

¿Y qué debe hacerse en este supuesto? Una posible solución es incluirlo en nuestra definición de acabado (nos referiremos a partir de ahora cómo **definición de DONE**).

La definición de DONE es una lista de verificación que debe cumplirse de forma estricta para poder considerar que un ítem ha sido completado y se encuentra finalizado. En lugar de incluir ítems en el Product Backlog que contemplen la documentación o testeo de un ítem, será en esta definición de DONE en la que incluiremos todos aquellos aspectos relativos a la seguridad, documentación, etcétera, que deban ser contemplados y realizados en **todos los ítems** finalizados.

Esta definición es creada y mejorada constantemente **por el equipo de desarrollo** (recordemos que, uno de los objetivos fundamentales de Scrum es el aprendizaje constante de forma iterativa), no obstante cabe mencionar que es totalmente válido y común que algunos aspectos mínimos de esta definición sean «impuestos» por la organización. Por ejemplo: El equipo de desarrollo del producto podrá decidir si desea realizar testeos de seguridad, y de qué forma, pero la organización incluye por defecto en la definición de DONE, que todo ítem finalizado debe disponer de tests unitarios, y debe además completar un test de aceptación.

## ¿Quién gestiona el Product Backlog?

Ya sabemos qué es el Product Backlog, y algunos requisitos de su composición. ¿Pero, quien es la persona que se encargará de mantenerlo?

El rol de esta persona, encargada de mantener el Product Backlog y sus ítems, recibe el nombre de **Product Owner**.

Podemos describir al Product Owner como el responsable encargado de maximizar el valor del Product Backlog.

Asimismo, cuando se introdujo el concepto de Product Backlog, se indicó que era necesario incluir todas las piezas o funcionalidades que querían incorporarse a nuestro producto, priorizándolas por el valor que aportaban, pero que de alguna forma no era necesario que fuesen -aún- exactas, o altamente detalladas.

Esto es, porque el Product Backlog se encuentra constantemente en evolución. El Product Backlog no queda definido por completo al inicio, de forma inmóvil o altamente detallada: Al inicio del proyecto, el Product Owner debe dedicar algún tiempo a introducir estos ítems que resumen todas las funcionalidades que **en ese momento parece que van a aportar al producto todo el valor que queremos**, no obstante nunca puede considerarse el Product Backlog completo, pues irá cambiando y evolucionando bajo la tutela y gestión del Product Owner, que será el encargado de orquestar y liderar la dirección que deberá tomar el desarrollo del producto.

Nuevamente el aprendizaje continuo, en este caso a través del cliente o usuarios finales, permite al Product Owner entender y validar la mejor forma de aportar valor a estos, y por tanto reflejarlo a través de cambios constantes en el Product Backlog.

## Conceptos clave de un Sprint

**Síntesis del concepto de Sprint:**

Un Sprint es un periodo de tiempo en el que el equipo se compromete a cumplir unos objetivos que se materializan en terminar un conjunto de ítems del Product Backlog.

Durante este periodo de tiempo, van a suceder y en algunos casos repetirse algunos eventos, cada cual con una finalidad concreta, que serán expuestos en esta y sucesivas publicaciones.

**La duración de un Sprint:**

Al definir el concepto de Sprint en la anterior publicación, indicamos que el tiempo de estos debía comprenderse **entre una semana y un mes**. Conocemos esto como eventos cronometrados o de duración determinada ***(time-boxed events).***

La duración de los Sprints debe definirse al inicio del proyecto y no alterarse de forma individualizada para cada Sprint.

Es decir: Si el equipo decide que cada Sprint debe tener una duración de dos semanas, no es posible decidir que un Sprint concreto durará tres semanas debido a que se quiere desarrollar más funcionalidades.

U otro ejemplo: Si el equipo decide una duración de dos semanas por Sprint, no resulta válido extender un Sprint concreto que abarca un periodo vacacional. Sí, en ese Sprint en periodo vacacional se completarán menos ítems debido a la ausencia parcial o total del equipo, no obstante, por el hecho de ampliar el Sprint no vamos a lograr abarcar más trabajo en esas dos semanas, y en su lugar alteraremos de forma errónea todo el flujo de trabajo.

**¿Significa esto que la duración de los Sprints no puede cambiar bajo ningún concepto?**

La duración de Sprint sí puede cambiar, aunque no en mitad de uno, y en todo caso debe hacerse siguiendo los procesos que Scrum pone a nuestra disposición para mejorar nuestro flujo de trabajo (algo que veremos pronto).

No obstante, debemos tener en mente que un cambio en la duración de los Sprint no puede ser algo arbitrario, debe realizarse con el fin de mejorar nuestro flujo de trabajo o nuestra capacidad para cumplir los objetivos de Sprint en líneas generales.

Asimismo, tampoco debe modificarse la duración de Sprint con frecuencia (cómo se comentaba en el anterior punto, no es factible que definamos una duración distinta para cada Sprint que iniciamos).

**¿Por qué definimos una duración de Sprint?**

El hecho de que los Sprint tengan una duración determinada, y comprendan un conjunto de ítems del Product Backlog que el equipo se compromete a implementar, responde a la necesidad de evitar el hecho de que, si damos mayor grado de libertad al equipo de desarrollo para que en un tiempo indeterminado (o determinado vagamente) desarrolle características indeterminadas (o determinadas vagamente), posiblemente termine dedicando mucho tiempo a desarrollar características *fancies* pero innecesarias al producto, y que de hecho restarán valor en lugar de añadirlo.

Por este motivo, para evitar que se introduzcan características libremente, para asegurarnos que realmente **el incremento generado** aporta valor al producto, los Sprints toman un objetivo que debe concluirse en un tiempo concreto.

## ¿Cómo se planifica un Sprint?

**El primer suceso que tiene lugar en un Sprint es el evento de Sprint Planning**. El Sprint Planning es un evento, una reunión, en la que deben definirse dos aspectos relativos al Sprint que justo está a punto de empezar:

*   El objetivo de Sprint o **Sprint goal**: Es decir, una frase que resume los objetivos a alcanzar durante el Sprint.  
      
    Esta frase inspirará al equipo de desarrollo durante las semanas que dure el Sprint, y todas las acciones de este deberán ser encaminadas a cumplir con el objetivo planificado.  
      
    El Sprint goal es decidido por todo el equipo de Scrum **(es decir, incluyendo tanto a Product Owner como a desarrolladores)**. Es factible y probable que el Product Owner haya ordenado el Product Backlog de forma que ya refleje el orden a seguir y los objetivos próximos, no obstante resulta indispensable que el equipo de desarrollo tenga la oportunidad de influir en este objetivo durante el Sprint planning, en una conversación transparente y madura.  
    
*   El **Sprint Backlog**: Una vez definido el Sprint goal, el equipo de desarrollo tomará aquellas tareas del Product Backlog que deban ser completadas para cumplir con el objetivo, y manteniendo el orden, las moverá a lo que se denominará como pila de Sprint o **Sprint Backlog**.  
      
    Así como el Product Owner es la única persona que posee la capacidad de gestionar el Product Backlog, en el caso del Sprint Backlog es el equipo de desarrollo quien ostenta la propiedad, y por tanto quien decide tanto el número de tarjetas que van a añadirse durante el Sprint planning, como los cambios que puedan llegar a haber durante el Sprint. Dicho de otra forma: El Sprint Backlog pertenece al equipo de desarrollo, es quien puede y debe mantenerlo, y una vez decidido el objetivo de Sprint, no corresponde al Product Owner mantener o definir el Sprint Backlog.

**¿Cuánto dura el Sprint Planning?**

La duración del Sprint Planning es de 8 horas para un Sprint de 4 semanas. Deberá ser proporcionalmente inferior para Sprints de menor duración, por ejemplo: 4 horas para un Sprint de 2 semanas.

## Conclusión

Pautadamente hemos introducido nuevos conceptos de Scrum que poco a poco van tomando forma. Si en las publicaciones anteriores hablábamos de forma poco concisa de que en desarrollo ágil «debíamos tener pequeños planes» ahora sabemos que estos pequeños planes son los Sprints, que tienen un objetivo (Sprint goal) y un alcance de un conjunto de ítems (Sprint backlog). Sabemos también quien gestiona y define cada uno de estos ámbitos, y cuándo debemos definir estos aspectos (En el Sprint Planning).

En esta publicación, también se han introducido concepto altamente importantes, como la definición de DONE.

En la próxima publicación expondremos una forma mediante la cual podemos medir el progreso del desarrollo, así como todos los eventos que tienen lugar durante un Sprint. Por el momento hemos visto uno: El Sprint Planning. ¡Pero hay muchos más!