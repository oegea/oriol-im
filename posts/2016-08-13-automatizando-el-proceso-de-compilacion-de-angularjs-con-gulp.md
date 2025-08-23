---
title: "Automatizando el proceso de compilación de AngularJS con GULP"
slug: "automatizando-el-proceso-de-compilacion-de-angularjs-con-gulp"
date: "2016-08-13"
excerpt: "AngularJS es un framework de fácil uso, que permite programar aplicaciones web de una forma más cómoda, y en menos tiempo. Pero crear una aplicación utilizando AngularJS sin implementar un proceso de compilado, puede incrementar el tiempo de carga de nuestra aplicación, y perjudicar la experiencia de usuario. Los gestores de tareas de Javascript (como &hellip; Sigue leyendo Automatizando el proceso de compilación de AngularJS con GULP"
status: "publish"
type: "post"
id: "364"
categories:
  - "Desarrollo"
tags:
  - "angular"
  - "angularjs"
  - "automation"
  - "build"
  - "concatenate"
  - "css"
  - "gulp"
  - "javascript"
  - "minify"
  - "process"
---

AngularJS es un framework de fácil uso, que permite programar aplicaciones web de una forma más cómoda, y en menos tiempo. Pero crear una aplicación utilizando AngularJS sin implementar un proceso de compilado, puede incrementar el tiempo de carga de nuestra aplicación, y perjudicar la experiencia de usuario.

Los gestores de tareas de Javascript (como Gulp, Grunt, o WebPack) permite gestionar nuestro proceso de compilado y automatizar multitud de tareas para concatenar y minificar nuestros controladores, servicios, directivas, templates y ficheros CSS.

Tras aplicar un proceso de compilación, nuestra aplicación cargará únicamente entre uno, y tres ficheros (en vez de cargar un fichero por cada controlador, directiva, servicio o template), por lo que reducirá enormemente el tiempo de carga de nuestra aplicación, especialmente cuando utilicemos directivas como «ng-load» para la carga de plantillas.

## 1\. Prerequisitos

Antes de empezar a programar nuestro script de Gulp, necesitamos tener instalado NodeJS, NPM y GIT, y un proyecto de AngularJS. En este caso utilizaremos una estructura de proyecto ficticia.

## 2\. Estructura de directorios

Para llevar a cabo este ejemplo, la estructura de directorios será la siguiente:

*   node\_modules
*   src
    *   modules
        *   module1
            *   module1Ctrl.js
            *   module1Service.js
            *   module1Template.html
    *   css
        *   style1.css
        *   style2.css
    *   app.js

Debemos cerciorarnos de que todas las carpetas del proyecto se encuentran en el interior de un directorio llamado «src», esto es necesario dado que una vez compilado el código, necesitaremos distinguir el código fuente de la aplicación, del código compilado, y que no podremos editar (cómodamente al menos) que almacenaremos en un directorio llamado «dist».

## 3\. Instalando los módulos requeridos

El primer paso a efectuar, es instalar gulp globalmente, tras inicializar el proyecto (si no lo hemos hecho previamente):

```bash
npm init
npm install -g gulp
```

Asimismo, necesitaremos instalar algunos plugins de gulp, de forma local en nuestro proyecto:

```bash
npm install --save-dev gulp gulp-concat gulp-uglify gulp-rename gulp-sourcemaps gulp-clean-css gulp-ng-html2js del
```

Tras ejecutar estos comandos, deberíamos ser capaces de empezar, pero antes es interesante conocer las funcionalidades de cada uno de los plugins que acabamos de instalar.

*   gulp-concat: Concatena en un único fichero varios ficheros.
*   gulp-uglify: Minifica el código javascript.
*   gulp-rename: Permite modificar el nombre de los ficheros de destino (los ficheros ya compilados).
*   gulp-sourcemaps: Crea ficheros *sourcemaps* para que podamos utilizar las herramientas de desarrollador y debugging utilizando los ficheros compilados.
*   gulp-clean-css: Minifica el código CSS.
*   gulp-ng-html2js: Concatena todas las plantillas de AngularJS en un único fichero, utilizando el servicio $templateCache.
*   del: Permite borrar ficheros y directorios. Se utiliza para borrar ficheros residuales o temporales.

## 4\. Descargando y creando nuestro fichero de tareas

Para poder ejecutar y compilar el código, necesitamos disponer de un fichero de tareas de Gulp, que debera ser almacenado en la carpeta raíz de nuestro proyecto con el nombre de «gulptasks.js». Para completar esta guía, utilizaremos una plantilla que es posible descargar desde [aquí,](https://github.com/oegea/angularjs-build) y que puede ser modificada y adaptada para cumplir con las necesidades de cada proyecto específico.

## 5\. Entendiendo las tareas definidas en el fichero

Tras descargar el fichero de ejemplo y copiarlo en la carpeta raíz del proyecto, será posible ejecutar las tareas de Gulp detalladas a continuación (a través de la línea de comandos):

*   gulp clean: Este comando eliminará el directorio «dist», donde se almacena el código compilado de nuestra aplicación.
*   gulp concatScripts: «concatScripts» ejecutará en primer lugar la tarea «concatViews» con el fin de concatenar en todas las plantillas de AngularJS de nuestro proyecto, tras esto, concatenará todos nuestros scripts y templates en un único fichero que almacenará en el directorio «dist».
*   gulp minifyScripts: Ejecuta «concatScripts» y minifica su resultado en un fichero que almacena en el directorio «dist».
*   gulp concatCss: Concatena todos los ficheros CSS.
*   gulp minifyCss: Obtiene los ficheros CSS concatenados, y los minifica.
*   gulp serve: Ejecuta la tarea «watchFiles». Esta tarea concatena ficheros Javascript y CSS cada vez que se produce un cambio sobre éstos.
*   gulp build: Ejecuta minifyScripts y concatScripts.
*   gulp: Ejecuta la tarea de gulp por defecto, que consiste en ejecutar la tarea «clean» y tras ello la tarea «build».

## 6\. Modificando el fichero de tareas

Si queremos adaptar el fichero de tareas Gulp utilizado en esta guía, a una estructura de directorios distinta, no debería resultar demasiado complicado, basta con modificar las variables «javascriptFiles», «cssFiles» y «viewFiles» del fichero, que originalmente almacenan los siguientes valores:

```javascript
var javascriptFiles = [
'src/app.js',
'src/modules//.js',
'dist/views.js'
];
var cssFiles = [
'src/css/.css'
];
var viewFiles = [
'src/modules//*.html'
];
```

## 7\. Flujo de desarrollo

Durante el desarrollo de la aplicación, es conveniente incluir en nuestra aplicación los ficheros de Javascript y CSS concatenados, con el fin de que el *debugger* de Javascript funcione  de igual forma que si estuviésemos utilizando los ficheros originales. Esto es posible gracias a los ficheros *sourcemaps* generados por el plugin «gulp-sourcemaps».

## 8\. Flujo de producción

No obstante, cuando despleguemos la aplicación en un entorno de producción, deberemos cargar los ficheros minificados. Gracias a estos ficheros, que tienen un menor tamaño que los ficheros concatenado, el tiempo de carga se verá optimizado, y reducido.