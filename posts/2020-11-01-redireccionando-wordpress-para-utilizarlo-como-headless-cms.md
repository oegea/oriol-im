---
title: "Redireccionando WordPress para utilizarlo cómo headless CMS"
slug: "redireccionando-wordpress-para-utilizarlo-como-headless-cms"
date: "2020-11-01"
excerpt: "Un headless CMS es un sistema gestor de contenido que, a diferencia del modelo convencional, se centra en proporcionar un panel de administración mediante el que gestionar el contenido, y una API a través de la cual una aplicación pueda consumir ese contenido y ofrecerlo al público final. Podríamos decir pues, que es una especie &hellip; Sigue leyendo Redireccionando WordPress para utilizarlo cómo headless CMS"
status: "publish"
type: "post"
id: "847"
categories:
  - "Administración de sistemas"
tags:
  - "Frontity"
  - "nginx"
  - "redirecciones"
  - "redirect"
---

Un *headless CMS* es un sistema gestor de contenido que, a diferencia del modelo convencional, se centra en proporcionar un panel de administración mediante el que gestionar el contenido, y una API a través de la cual una aplicación pueda consumir ese contenido y ofrecerlo al público final.

Podríamos decir pues, que es una especie de CMS que tan sólo actúa como «backend», cómo gestor y editor de los datos, y que la responsabilidad de articular y desplegar la interfaz que ofrezca este contenido será de una tercera aplicación que se integrará con la API del CMS.

## WordPress cambia de paradigma

WordPress es un CMS tradicional, al menos lo era exclusivamente hasta hace relativamente poco. WordPress siempre nos ha ofrecido un panel de control completo mediante el que gestionar el contenido y la media de nuestro sitio, pero además incluye también un sistema altamente extensible, encargado de renderizar este contenido en forma de sitio web y/o blog.

No obstante, aunque es un sistema robusto y fiable (al menos siempre que nos aseguremos tener todos los servicios, aplicaciones y dependencias actualizados), tiene también sus puntos negativos, entre los que encontramos una baja velocidad, y un *stack tecnológico* (principalmente php del lado del servidor) que pese a ser fiable, puede no ser el preferido por todo el mundo.

Con la aparición del concepto de *headless CM*S, WordPress decidió hace ya algún tiempo implementar su API REST, con la que podemos acceder a cualquier aspecto del CMS programáticamente, lo cual elimina todos esos requerimientos tecnológicos previos que implicaba utilizar WordPress si decidimos utilizarlo como CMS, y nos permite conectar nuestra aplicación a través de dicha API.

## Un ejemplo: Frontity

Un ejemplo es [Frontity](https://frontity.org/), un framework que nos permite construir nuestro sitio web, aplicación o blog mediante ReactJS, y servir todo el contenido (posts y páginas) que tengamos en WordPress, en esa misma aplicación.

Ello implica que disponemos en la práctica de dos aplicaciones: Un sistema WordPress plenamente funcional, pero que tan sólo utilizamos para editar y gestionar nuestro contenido y media, y consumir dicho contenido a través de su API, y una aplicación que consume este contenido a través de dicha API, y lo renderiza a través de una aplicación ReactJS SSR (renderizada previamente por el servidor).

## La necesidad de redireccionar

Esta infraestructura puede ser conflictiva si no la optimizamos correctamente, dado que debemos asegurar que la API de WordPress es accesible, así como el panel de administración y la media (fotos, etcétera) subida. No obstante, no es deseable que nuestros posts o páginas sean accesibles a través del sistema convencional de renderización de WordPress: Nuestro objetivo es que todo el contenido sea consumido únicamente a través de nuestra aplicación de Frontity.

Para situarnos, utilizaremos este sitio como ejemplo, el cual dispone de WordPress instalado en un servidor VPS, en un subdominio del dominio principal, y por otro lado dispone de la aplicación realizada con Frontity, que es la que sirve el contenido y la que se entrega al visitar el dominio principal a través de [Vercel](https://vercel.com/).

Aunque no debería suceder (especialmente si la configuración está bien definida), si no nos aseguramos de redireccionar todo el contenido servido a través de wordpress a nuestro dominio principal, corremos el riesgo de que éste sea indexado en buscadores, y entre muchas otras cosas, nuestro wordpress podría canibalizar a nuestra aplicación final real.

## Redireccionando en Nginx

En este caso de ejemplo, WordPress se encuentra en un VPS cuyo servidor web es Nginx, con lo cual veremos cómo configurar nuestro bloque de servidor (server block) de Nginx para que redireccione todas nuestras páginas y entradas a nuestro dominio principal, pero siga sirviendo tanto el contenido de la API como el panel de administración, y ficheros estáticos (principalmente para servir nuestras imágenes y demás media).

Para ello, en nuestro bloque de servidor introduciremos lo siguiente:

```bash
error_page 404 = @redirectToFrontity;

location / {
	try_files $uri $uri/ =404;
}

location @redirectToFrontity {
	return 301 https://www.oriol.im$request_uri;
}

location /wp-json/ {
	try_files $uri $uri/ /index.php?q=$request_uri;
}
```

El código anterior permitirá continuar sirviendo todo el contenido, siempre y cuando éste exista en forma de fichero (es decir, para que el contenido cargue deberá existir, es decir, deberá tratarse o bien de imágenes o bien ficheros php como el panel de administración, o cualquier tipo de fichero), no obstante, en el caso de que no exista ningún fichero con dicho nombre (como es el caso cuando cargamos los posts utilizando el nombre de la URL para identificar el post solicitado, sin utilizar parámetros de la URL) el sistema ejecutará la redirección que encontramos en el bloque **@redirectToFrontity**, que nos llevará al dominio principal manteniendo el *slug* del post solicitado.

Para acabar, incluímos un bloque adicional para crear una excepción para la ruta *wp-json*, que es desde dónde se sirve la API REST de WordPress que necesita Frontity para funcionar, y que requiere ser procesada por el fichero **index.php** dado que se trata de una ruta virtual y no un fichero real.