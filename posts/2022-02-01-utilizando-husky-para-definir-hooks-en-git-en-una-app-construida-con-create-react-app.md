---
title: "Utilizando husky para definir hooks en git en una app construída con create-react-app"
slug: "utilizando-husky-para-definir-hooks-en-git-en-una-app-construida-con-create-react-app"
date: "2022-02-01"
excerpt: "Git permite definir hooks de forma nativa para extender su funcionalidad, de forma en que sea posible lanzar acciones personalizadas en momentos específicos, ampliando así el comportamiento estándar de git, y adaptándolo a necesidades del proyecto. El ejemplo más sencillo y claro lo encontramos al realizar un commit: De igual forma que nuestro entorno de &hellip; Sigue leyendo Utilizando husky para definir hooks en git en una app construída con create-react-app"
status: "publish"
type: "post"
id: "987"
categories:
  - "Desarrollo"
  - "Tools and Libs"
tags:
  - "cd"
  - "ci"
  - "desarrollo"
  - "husky"
  - "javascript"
  - "tools"
---

Git permite definir hooks de forma nativa para extender su funcionalidad, de forma en que sea posible lanzar acciones personalizadas en momentos específicos, ampliando así el comportamiento estándar de git, y adaptándolo a necesidades del proyecto.

El ejemplo más sencillo y claro lo encontramos al realizar un commit: De igual forma que nuestro entorno de CI/CD puede ejecutar los tests de la aplicación cuando se realiza un commit, y detener el proceso de build y deploy si éstos no son exitosos, también podemos ejecutar este tipo de comprobaciones en el entorno local del usuario antes de que se registre el commit en el repositorio, de forma que si algún test falla, se detenga el registro del commit para permitir al programador subsanar los errores antes de subir sus cambios.

Esto, permite detectar fallos y garantizar la calidad del código antes de que se realice el commit y se guarden los cambios en el repositorio, y en última instancia antes de que el sistema de CI/CD realice las comprobaciones oportunas. De esta forma, deberíamos ser capaces de maximizar la calidad, y ahorrar tiempo en el proceso de contribución.

Los hooks son una funcionalidad nativa de git, de la que puede leerse más [aquí](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), no obstante, podemos optar por utilizar una librería cómo [Husky](https://github.com/typicode/husky) para simplificar su creación y reducir el trabajo a pocos comandos.

En este tutorial, seguiremos la documentación oficial de Husky para definir una acción pre-commit que ejecute los tests de una aplicación creada utilizando create-react-app.

## Instalando y configurando husky

El primer paso es instalar husky como una dependencia de desarrollo:

```bash
npm i -D husky
```

A continuación, incluiremos en nuestro proyecto el script prepare, cuya finalidad será registrar los hooks definidos en git. Este comando, deberemos ejecutarlo una única vez cuando instalemos el proyecto en un nuevo entorno:

```bash
npm set-script prepare "husky install"
npm run prepare
```

## Ejecutando tests con create-react-app antes de realizar commits

Una vez inicializado husky, podemos añadir una nueva acción para que, antes de realizarse commits, se ejecuten y comprueben los tests de la aplicación, para ello ejecutamos lo siguiente:

```bash
npx husky add .husky/pre-commit "npm test -- --watchAll=false"
git add .husky/pre-commit
```

Tras el comando anterior, cada vez que realicemos commits se ejecutarán los tests de la aplicación, y en caso de no ser exitosos se detendrá la realización del commit.

## Conclusión

Husky nos provee de la posibilidad de definir git hooks de forma sencilla, en cuestión de minutos, y así maximizar la calidad del código, reduciendo el error humano y optimizando tiempos de espera (dado que es posible percatarse de errores antes de que éstos sean revisados por el sistema CI/CD).

En conclusión, no hay excusa para no utilizarlo 🙂

Puedes obtener más información en la documentación oficial de Husky y en su repositorio: [https://github.com/typicode/husky](https://github.com/typicode/husky)