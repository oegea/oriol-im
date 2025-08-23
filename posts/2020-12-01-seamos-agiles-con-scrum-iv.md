---
title: "Seamos ágiles con Scrum (IV) &#8211; Cómo medir el progreso del desarrollo"
slug: "seamos-agiles-con-scrum-iv"
date: "2020-12-01"
excerpt: "Gentil introducción Este serie de publicaciones describe paso por paso los conceptos más importantes de Scrum, así como la forma en que pueden ser aplicados en una organización real. Puedes acceder a toda la serie a través de estos enlaces: Primera parte &#8211; El agilismo y el manifiesto ágil. Segunda parte &#8211; Conceptos básicos: La &hellip; Sigue leyendo Seamos ágiles con Scrum (IV) &#8211; Cómo medir el progreso del desarrollo"
status: "publish"
type: "post"
id: "834"
categories:
  - "Desarrollo ágil"
tags:
  - "ágil"
  - "agile"
  - "development"
  - "estimation"
  - "gantt"
  - "management"
  - "points"
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

En la publicación anterior introdujimos los conceptos de **definición de DONE**, **Product Owner**, sintetizamos el concepto de **Sprint** y también analizamos el evento en el que debíamos planificar su contenido: **El Sprint Planning**.

Esta publicación, se adentrará en la forma en que podemos medir el progreso del desarrollo de un producto y del propio equipo de desarrollo, así como algunos consejos al respecto para que esta medición del progreso sea realmente una herramienta que nos permita conocer nuestra capacidad de desarrollo de forma constructiva.

## La forma de medir el progreso no es parte del núcleo de Scrum, pero eso no significa que cualquier técnica sea válida

A continuación vamos a describir una posible forma de medir el progreso del desarrollo de un producto. Es importante conocer en cualquier caso que, esta forma de medir el progreso no forma parte del *core* o núcleo de Scrum, es decir que no estamos obligados a utilizar esta técnica.

No obstante si decidimos adoptar otra distinta, deberemos asegurarnos que se ajusta perfectamente a los principios y requisitos de Scrum. Veamos un ejemplo que además aparece habitualmente en los exámenes de certificación:

¿Es válido entonces utilizar un diagrama de Gantt? La respuesta es no, veamos el porqué:

Un diagrama de Gantt expone el tiempo previsto y estimado para completar una serie de tareas, en este caso contendría todas las tareas necesarias para completar el desarrollo de un producto. Cómo ya hemos visto, en Scrum configuramos nuestros objetivos en periodos pequeños de tiempo, y tras estos, volvemos a revisar qué siguientes tareas debemos realizar y si las prioridades han cambiado. Cómo ya dijimos, esto implica que ni disponemos de una lista estática de tareas, ni mucho menos conocemos el orden absoluto en el que las realizaremos, dado que es algo que debemos ir descubriendo y adaptando a lo largo del desarrollo del propio producto. Es por ello, que no podemos utilizar un diagrama de Gantt para medir el progreso de desarrollo del producto.

En cualquier caso: ¿Crees que el diagrama de Gantt se ajusta al desarrollo de tu producto? Entonces ten cuidado, dado que pueden estar sucediendo dos casuísticas; En primer lugar, puede que te encuentres ante un proyecto o producto cuyo desarrollo no tiene incertidumbre alguna, y no se enfrente a un entorno cambiante, en cuyo caso no tiene sentido alguno utilizar Scrum para su desarrollo; En segundo lugar, puede que estés dando por hecho que no existe incertidumbre ni entorno cambiante, cuando en realidad sí existe. Puede que simplemente nos encontremos en una fase incipiente del producto dónde parezca que no necesitamos ir analizando y adaptándonos a los cambios, pero que una vez empecemos a trabajar, nos percatemos que muchos aspectos deben ser modificados o eran erróneos.

## *Story points* o puntos de velocidad

Los *Story points* o *velocity points*, representan el esfuerzo que vamos a dedicar para finalizar por completo un ítem (es decir, un ítem completamente finalizado que cumple toda la definición de DONE).

Se trata de un número, letra, talla o unidad de medida que queramos utilizar, que asignamos a cada ítem de nuestro Product Backlog, y que representa la cantidad de esfuerzo e incertidumbre que deberemos afrontar para completarlo.

A continuación expondremos un ejemplo en el que utilizaremos números por la facilidad que nos aportan a posteriori para calcular la velocity o velocidad del equipo, es decir la cantidad de esfuerzo que puede afrontar el equipo en un único Sprint.

## Ejemplo de nomenclatura de *Story points*

1: Ítem que representa una cantidad ínfima de esfuerzo, conocemos como completarlo, y lo podemos llevar a cabo con mucha soltura sin que nos suponga ningún reto.

2: Ítem que representa una cantidad pequeña de esfuerzo, conocemos como completarlo, y lo podemos llevar a cabo con soltura sin que nos suponga ningún reto, aunque el proceso per se conllevará algo más de atención y dedicación que un «1».

4: Ítem que conlleva algo más de esfuerzo. No prevemos que vaya a suponer algo muy costoso, pero sí conlleva varias áreas de actuación que debemos cubrir, o nos provoca mayor incertidumbre acerca de cómo afrontar algunos aspectos requeridos.

6: Ítem que por su naturaleza va a requerir de nuestra atención y foco de forma considerable. Sea porque nos provoca mucha incertidumbre, o porque es un proceso que requiere desarrollar nuevas y complejas lógicas, o bien porque debemos trabajar en multitud de puntos del producto: Se trata de un ítem que prevemos que empieza a ser considerablemente grande.

9: Ítem que sin lugar a dudas va a requerir de la atención prolongada de uno o más miembros del equipo. O bien requiere de mayor investigación o aún más incertidumbre que los casos anteriores.

18: Ítem con gran cantidad de incertidumbre o que aún debe ser estudiado y sub-dividido en ítems más pequeños antes de ser añadido a un Sprint.

36: Ítem inmenso. No sólo debe ser estudiado y sub-dividido, sino que su alcance es mucho mayor de lo que podríamos encontrar en un «18».

## Evitemos estimar pensando en el tiempo de trabajo

Tal y como se muestra en el ejemplo anterior, hemos desarrollado una nomenclatura por la cual asignamos un número a cada *user story*, basándonos en el esfuerzo e incertidumbre que debemos afrontar para completarla.

No obstante, es recomendable que no conformemos esta nomenclatura basándonos en el tiempo en el que tardamos en completar el ítem. (Por ejemplo, un «2» no representa medio día de desarrollo, o un «6» no representa día y medio).

Esto es debido a que posteriormente dispondremos de medios con los que poder analizar cuánto tiempo representa para nuestro equipo completar un ítem cuya valoración es un «2» (por poner un ejemplo), pero debemos intentar que no sea el equipo de desarrollo quien estime los ítems calculando el tiempo de trabajo, dado que la reacción natural entonces será infra-estimarlas para satisfacer a quien solicita la estimación, o bien sobre-estimarlas como medida protectora para asegurarse que cumplen con el tiempo estimado.

En este caso, estimamos basándonos en el esfuerzo que va a comportar dicho ítem, y en la incertidumbre (aspectos que no conocemos) que vamos a tener que afrontar. Son aspectos poco tangibles, pero debemos insistir al equipo de desarrollo que los utilice como medio para estimar, y se olvide de estimaciones en días de desarrollo.

## ¿Por qué los números no son consecutivos?

Uno de los aspectos que sucede en nuestra nomenclatura de ejemplo, es que la numeración de estimación no es consecutiva. Es decir, saltamos de un 2 a un 4, de un 6 a un 9, y de un 9 a un 18.

Esto va en relación especialmente a el cálculo de la velocidad del equipo, algo que veremos a continuación. No obstante, el motivo principal es que consideramos que cuánto más grande sea un ítem, mayor incertidumbre representa hasta que sea sub-dividido en ítems pequeños, y por ello dejamos mayor distancia entre una opción u otra, para reflejar esta incertidumbre.

## Calculando la *velocity* o velocidad del equipo

El gran beneficio de utilizar una nomenclatura como la anterior, es sin duda la capacidad de poder calcular la velocidad del equipo.

Una vez finalizado un Sprint, podemos sumar los puntos de historia de todos los ítems, y eso representará el trabajo finalizado ese Sprint. Tras esto, si calculamos la media del trabajo finalizado en ése Sprint, junto a la de los Sprints anteriores, podremos obtener nuestra *velocity*, es decir, la media de trabajo que es capaz de completar el equipo en un Sprint.

Además, podemos obtener datos aún más interesantes. Veamos un ejemplo: Se nos ha solicitado estimar el tiempo en días de desarrollo que va a comportar completar un ítem, este ítem ha sido estimado por el equipo de desarrollo con un 6, nos encontramos además con que el equipo (que es de tres personas) tiene una *velocity* media de 90 puntos por Sprint, y que nuestros Sprints duran 15 días.

Con estos datos, podríamos llegar a la conclusión de que el equipo cierra en su conjunto 6 puntos por día (90 puntos entre 15 días es igual a 6 puntos por día), lo que conlleva que cada persona cierre 2 puntos por día (6 puntos por día de todo el equipo, entre 3 personas es igual a 2 puntos por día por persona). Es decir, que un desarrollador tardará tres días en completar un ítem cuya numeración sea un 6.

¿Podemos ser aún más exactos? En efecto, podríamos llegar a realizar el seguimiento individualizado por persona de *velocity* cerrada Sprint tras Sprint, si queremos conocer en mayor exactitud la capacidad de cada persona del equipo, con lo que el cálculo de capacidad de desarrollo por día para una persona concreta sería aún más exacto.

Es por este ejemplo que acabamos de ver, que el equipo no debe estimar los ítems pensando en el tiempo de trabajo, sino en la complejidad de éstos. A partir de la velocidad de equipo podemos extrapolar los datos obtenidos para lograr llegar a conocer el tiempo que deberá dedicarse a cada ítem.

Asimismo, debemos tener en cuenta que la velocidad del equipo es cambiante: Puede que si incorporamos a un miembro adicional del equipo, la velocidad baje durante los primeros Sprints, pero a medio plazo aumente cuando este nuevo miembro haya superado su periodo de adaptación, o puede que incorporemos cambios en el proceso de desarrollo o la definición de DONE que aumenten la calidad, a cambio de disminuir sensiblemente nuestra *velocity* de equipo. En cualquier caso, esto significa que calcular la *velocity* es algo que debemos realizar constantemente, y que ésta afectará directamente al tiempo estimado de finalización de los ítems.

## Recapitulando: ¿Qué hemos visto hasta ahora?

*   El equipo de desarrollo es quien debe estimar los ítems. Podemos elegir la técnica que deseemos, aunque ésta debe ser compatible con el desarrollo ágil.
*   Una técnica recomendable es la de utilizar *Story points*, es decir asignar un número a cada ítem, que represente su esfuerzo e incertidumbre.
*   Si sumamos el total de puntos cerrados en un Sprint, y calculamos la media con Sprints pasados, podemos obtener la velocity del equipo, y esto puede ayudarnos a conocer cuántos puntos logramos cerrar en un día, ergo también cuánto tardará el equipo en completar un ítem con una puntuación concreta.
*   Existen métodos de estimación que cubriremos en otra serie de posts, pero que son interesantes para garantizar que la estimación de estos *Story points* es representativa y comedida. Si te interesa conocer más, puedes leer acerca de **Planning Poker**.

## Recomendaciones acerca de la forma de estimar ítems

*   El equipo de desarrollo es el encargado de calcular la *velocity*, Sprint tras Sprint.
*   El equipo de desarrollo es quien decide cuántos ítems deben asumirse en un Sprint. Es decir, no define el objetivo del Sprint por su única cuenta, pero sí la forma en que se plasma este objetivo en el Sprint Backlog, dado que ellos son los propietarios del Sprint Backlog, y por ello tienen la autoridad de decidir cómo componerlo.
*   Lo más normal es que si alguien trata de forzar al equipo de desarrollo para que añada más ítems al Sprint Backlog, inconscientemente éste, como medio de auto-protección, empezará a estimar los ítems al alza como medida auto-protectora.
*   El Scrum Master, que es quien vela porque Scrum sea implementado y seguido de forma efectiva, debería asegurar que todos los puntos anteriormente descritos se cumplan, y ejercer cómo *coach* cuando esto no sea así.
*   No es nada recomendable comparar la velocity entre diferentes equipos: Cada producto puede tener muchas particularidades (sean técnicas o de otra naturaleza) que afecten y disminuyan la *velocity* respecto a otro equipo. No es fructífero comparar *velocities*, ni nos va a permitir conocer si otro equipo es más rápido desarrollando.

## Conclusión

¡Ya sabemos cómo estimar ítems, y cómo calcular la velocidad y capacidad de desarrollo del equipo y sus componentes! En las sucesivas publicaciones seguiremos indagando en Scrum, e introduciremos nuevos conceptos importantes algunos de los cuales hemos introducido brevemente: Quien es el Scrum Master, a quien nos referimos exactamente cuando mencionamos al «equipo de desarrollo», cuántas personas pueden formar parte del equipo de desarrollo, cuántos Product Owners podemos tener, entre otros aspectos.