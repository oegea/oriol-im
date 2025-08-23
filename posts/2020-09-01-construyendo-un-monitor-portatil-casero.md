---
title: "Construyendo un monitor portátil casero"
slug: "construyendo-un-monitor-portatil-casero"
date: "2020-09-01"
excerpt: "Introducción A todos se nos ha ocurrido alguna vez: ¿Y si pudiésemos desplegar una segunda o incluso una tercera pantalla de nuestro portátil, para poder trabajar con más de una pantalla allá dónde fuésemos? Lo cierto es que los monitores portátiles ya existen desde hace algún tiempo, su precio ronda entre los 200 y 400 &hellip; Sigue leyendo Construyendo un monitor portátil casero"
status: "publish"
type: "post"
id: "669"
categories:
  - "General"
tags:
  - "casera"
  - "experimento"
  - "hdmi"
  - "monitor"
  - "pantalla"
  - "portátil"
  - "vga"
  - "video"
---

## Introducción

A todos se nos ha ocurrido alguna vez: ¿Y si pudiésemos desplegar una segunda o incluso una tercera pantalla de nuestro portátil, para poder trabajar con más de una pantalla allá dónde fuésemos?

Lo cierto es que los monitores portátiles [ya existen desde hace algún tiempo](https://www.pccomponentes.com/msi-optix-mag161v-156-led-ips-fullhd), su precio ronda entre los 200 y 400 euros, e inclusive existen algunos que permiten desplegarlos de forma contigua a la pantalla principal del portátil.

En esta publicación vamos a planificar la construcción de una pantalla portable casera con un presupuesto mucho más ajustado: Entre 20 y 30 euros. La construiremos aprovechando un ordenador portátil que ya no utilicemos, pero cuya pantalla pueda servirnos como pantalla auxiliar. ¿Interesante, verdad? ¡Vamos allá!

## ¿Dónde obtener un portátil para aprovechar su pantalla?

El componente principal en este caso es un ordenador portátil antiguo o que no vayamos a utilizar, cuya pantalla funcione correctamente y ofrezca una resolución aceptable. Puede parecer una barbaridad algo así, pero nada más lejos de la realidad:

En mi caso adquirí un portátil Acer en 2015. Acer fabricó este modelo montando una CPU AMD A6 de dos núcleos dónde cada núcleo rendía a 1 GHz (y que fue muy mala decisión de compra por mi parte), que en la actualidad no era capaz de ejecutar las tareas más simples que se espera de un ordenador. Además, algunas teclas dejaron de responder de un día para otro, lo cual en definitiva condenó al ordenador a su despiece para aprovechar las piezas en otros entornos.

Si en tu caso no tienes una portátil antiguo o que quieras despiezar, tal vez puedas buscar uno de segunda mano, incluso uno de segunda mano que no funcione, pero cuya pantalla no se encuentre deteriorada. Si vas a comprar un portátil en mal estado o antiguo para este fin, antes ten en cuenta que esto va a incrementar el presupuesto, con lo que asegúrate de algunas cosas:

*   Huye de los *netbooks* antiguos de pantallas pequeñas, ya que presentan una resolución muy pobre en un espacio insuficiente para cualquier tarea.
*   En el caso de que el portátil no funcione, asegúrate de que el problema no se encuentra en la pantalla. Al menos trata de obtener el compromiso por parte del vendedor de que si la pantalla no funciona, podrás devolver el portátil en las mismas condiciones.
*   Asegúrate que puedes encontrar una placa controladora para el modelo de pantalla que vas a utilizar. Es decir, si puedes mira el modelo de panel que incluye el ordenador previamente a la compra.
*   Contempla el incremento de precio que esto va a suponer: Personalmente, no creo que valga la pena invertir más de 50 € en un proyecto de este tipo. Más allá de ese precio los resultados «caseros» que podemos obtener no justificarán la inversión, salvo que queramos realizar el experimento con fines de aprendizaje o curiosidad, y no nos importe el precio destinado a ello.

En cualquier caso, este proyecto responde al espíritu de aprovechar al máximo las piezas de un portátil, y realizar un proyecto casero, y no tanto al de obtener resultados profesionales. Salvo ser muy manitas, estos resultados no van a ser perfectos, con lo que finalmente debes valorar si realmente puede merecer la pena adquirir un monitor portátil no-casero.

## Primer paso: Despiezando el portátil

En primer lugar debemos despiezar el portátil. Nos centraremos en extraer la pantalla con los mínimos aspectos posibles.

En mi portátil fue posible mantener la carcasa de la pantalla, separándola del resto del cuerpo del portátil. Para ello tuve que retirar las bisagras, la cámara web y todo el cableado, quedando únicamente la pantalla junto a la carcasa de plástico.

![Pantalla del portátil desmontada y sin cableado](/images/posts/2020-monitor-portatil/pantalla-desmontada.jpg)

Dependiendo del modelo de portátil es posible que sea necesario extraer el panel de la pantalla sin poder conservar la carcasa.

## Segundo paso: Comprando una placa controladora

Nuestra pantalla de portátil que vamos a aprovechar está diseñada para recibir directamente la señal de vídeo que ha de mostrar. La placa base del portátil es la que se encarga de procesar el vídeo y mostrarlo por pantalla, con lo que en el momento en que despiezamos el portátil y extraemos la pantalla, ésta queda inservible salvo que consigamos una placa controladora que pueda enviarle la señal de vídeo que reciba a través de HDMI, VGA, u otro.

Afortunadamente, buscando el modelo de pantalla (que deberíamos poder encontrar en alguna pegatina que se encuentre pegada sobre el panel), y buscándolo en páginas como eBay o AliExpress, podremos encontrar una placa controladora que nos permitirá dotar a la pantalla de una entrada de vídeo.

![Etiqueta de la pantalla](/images/posts/2020-monitor-portatil/etiqueta-pantalla.jpg)

Aspectos importantes a considerar:

*   Asegúrate que la placa comprada es para el modelo de panel específico con el que vas a trabajar. Busca el modelo de panel en las pegatinas que pueda haber sobre éste.
*   Comprueba la alimentación que va a necesitar la placa controladora, y adquiérelo en el mismo pedido. Salvo que ya tengas uno, lo necesitarás para poder hacer funcionar la pantalla.
*   Por último: Asegúrate que la placa soporta la resolución máxima de tu pantalla. Normalmente esto no debería suponer problema, dado que en teoría la placa controladora habrá sido diseñada específicamente para tu modelo de pantalla, no obstante no está de más verificarlo para evitar que después obtengamos resoluciones inferiores a las esperadas.

Hecho el pedido de la placa ya sólo queda esperar a recibirlo.

![Componentes del pedido recibido](/images/posts/2020-monitor-portatil/pedido-recibido.jpg)

## Tercer paso: Diseño de la carcasa para la placa

Una vez hayamos recibido la placa, lo primero a realizar será comprobar que funciona correctamente. Una vez nos cercioremos del correcto funcionamiento, deberemos empezar a trabajar en una carcasa que vaya a contener la placa y la botonera, para después fijar esta carcasa a la parte posterior de la pantalla, o disponerla de alguna forma que nos permita utilizar la pantalla de forma ordenada y fácil.

Existen multitud de personas que han realizado proyectos como este, sin duda la mejor alternativa para crear la carcasa es a través de una impresión 3D. En mi caso no disponía de una impresora 3D, por lo que opté por utilizar una solución algo más modesta: Una caja de cartón.

![Carcasa para la pantalla](/images/posts/2020-monitor-portatil/caja-carton.jpg)

En primer lugar, y dado que había podido conservar la carcasa de la pantalla e iba a aprovecharla, limé el plástico para crear una pequeña ranura por la que saliese el cable de vídeo. En mi caso el plástico cerraba con bastante fuerza, con lo que de no haber hecho esto el cable de vídeo se hubiese acabado dañando.

![Carcasa limada](/images/posts/2020-monitor-portatil/limado.jpg)

Hecho esto, me hice con una caja de cartón de (más o menos) las medidas necesarias, y posicioné la placa dentro, para realizar los agujeros para las conexiones VGA, HDMI, así como la entrada de alimentación:

![Agujeros realizados para entrada de vídeo](/images/posts/2020-monitor-portatil/agujeros-video.jpg)

A continuación realizamos agujeros adicionales para poder incluir la botonera en la misma carcasa:

![Agujeros realizados para la botonera](/images/posts/2020-monitor-portatil/agujeros-botonera.jpg)

Y por último, realizamos una pequeña ranura en la base de la caja por la cual pasaría el cable de vídeo, de forma que éste quedase lo más recogido posible:

![Ranura en la base para cable de vídeo](/images/posts/2020-monitor-portatil/ranura-video.jpg)

## Cuarto paso: Fijando elementos

Diseñada la carcasa, el último paso es colocar la placa y la botonera, fijarlas, conectar todos los cables y fijar la carcasa a la pantalla.

Para este paso, en mi caso concreto opté por utilizar tornillos que tenía por casa. Cabe mencionar que los cables HDMI y VGA deben conectarse/desconectarse aplicando cierta fuerza, con lo que en caso de optar por soluciones poco robustas, la placa podría empezar a moverse pronto.

![Caja fijada con tornillos](/images/posts/2020-monitor-portatil/tornillos.jpg)

Por último, a modo de embellecedor y para que los circuitos no estuviesen tan expuestos a suciedad o líquidos, colocamos un plástico transparente sobre la carcasa que pegamos con *loctite*.

Asimismo, adherimos la carcasa a la pantalla utilizando velcro. Pegamos el velcro de forma que la posición de la carcasa dejase las conexiones de la pantalla en un lugar accesible, y asimismo asegurase que el recorrido del cable de vídeo era en línea recta para evitar tener que doblarlo. Gracias al velcro, además de poder retirar la carcasa en caso necesario, también es posible tener cierto margen para mover el cable de vídeo que habíamos pasado por la parte inferior de la caja.

![Caja fijada y con embellecedor](/images/posts/2020-monitor-portatil/embellecedor.jpg)

El resultado en resumen es este, no es una pantalla perfecta, pero mentiría si dijese que no va a ser útil para llevarla de viaje o a salas de reuniones en las que necesite algún tipo de apoyo adicional =).

![Pantalla en funcionamiento](/images/posts/2020-monitor-portatil/resultado-pantalla.jpg)