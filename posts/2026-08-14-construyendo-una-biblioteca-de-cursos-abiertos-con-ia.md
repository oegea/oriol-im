---
title: "Construyendo una biblioteca de cursos abiertos con IA (y un curso sobre el oficio del software en esta era)"
slug: "construyendo-una-biblioteca-de-cursos-abiertos-con-ia"
date: "2026-08-14"
excerpt: "Desde hace unas semanas dedico algunos ratos libres a un proyecto que siempre quise hacer, y para el que creo sinceramente que no ha existido mejor momento que el actual: Una biblioteca de cursos abiertos, curados con IA. &hellip; Sigue leyendo Construyendo una biblioteca de cursos abiertos con IA (y un curso sobre el oficio del software en esta era)"
status: "publish"
type: "post"
id: "1057"
categories:
  - "General"
tags:
  - "cursos"
  - "formación"
  - "IA"
  - "Open Knowledge"
---

Desde hace unas semanas dedico algunos ratos libres a un proyecto que siempre quise hacer, y para el que creo sinceramente que no ha existido mejor momento que el actual: Una biblioteca de cursos abiertos, curados con IA.

Internet es una fuente de conocimiento brutal. Existen papers fundacionales de acceso libre, documentación técnica excelente, blogs de divulgadores de primerísimo nivel, e incluso carreras universitarias enteras publicadas en abierto. No obstante, todo este conocimiento no siempre se encuentra curado para que resulte ameno recorrerlo: A veces está disperso y sin conectar entre sí, a veces se encuentra en idiomas que no dominamos (o que sencillamente no nos apetece leer), y a veces es tan riguroso como árido, careciendo de una narrativa que nos ayude a interiorizarlo.

En esta tesitura, y ahora que la IA es capaz de investigar fuentes reales, contrastarlas, y redactar historias suficientemente buenas, me pareció que había llegado el momento de intentarlo: Pedirle que investigue material abierto sobre un tema, y que fabrique con ello un curso completo, tema a tema, donde cada sección se compone de un episodio de una historia continua que plantea el problema, la teoría que lo desarrolla con rigor (citando cada fuente, que para eso están), y un examen cuyo objetivo no es la nota, sino la explicación de cada respuesta.

## Open Knowledge Library

El resultado es la [Open Knowledge Library](https://www.openknowledge.es), y creo que la forma más honesta de describirla es como un agregador: No pretende crear conocimiento nuevo, sino buscar fuentes abiertas de calidad, conectar ideas y conceptos que viven dispersos, y estructurarlos en una forma amena de aprender.

Un par de apuntes sobre la transparencia, porque me parecen importantes: Nadie se esconde aquí de que esto está confeccionado con IA (todos los cursos se encuentran marcados explícitamente como tal), toda fuente utilizada existe y se cita con su origen y licencia, y no existe apropiación alguna del conocimiento: La autoría pertenece a las fuentes originales y a sus autores, a quienes se reconoce en cada curso, mientras que quienes participamos en la biblioteca no figuramos como autores, sino como personas encargadas de supervisar la confección del material y mantenerlo. La IA se utiliza como lo que es: Una herramienta extraordinaria para investigar, ordenar y redactar, no para suplantar a quienes descubrieron las ideas, ni para ahorrarse el deber de verificar.

Y un último apunte sobre la intención, que es la parte que más me importa: Open Knowledge quiere ser, sencillamente, un regalo. Conocimiento de calidad, conectado y curado, en español (aunque la plataforma está preparada para servir bibliotecas en 13 idiomas), y accesible para cualquiera, independientemente de su situación. Por eso la aplicación que sirve la biblioteca es también [código abierto y auto-hospedable](https://github.com/oegea/open-knowledge): Para que cualquier persona u organización que quiera ofrecer una biblioteca abierta a su comunidad, pueda hacerlo sin pedir permiso.

Otro aspecto al que he querido prestar especial atención es el formato de lectura. La documentación en línea acostumbra a publicarse únicamente como página web, lo cual, en textos de cierta extensión, limita la experiencia de lectura y la relega a la pantalla. Open Knowledge genera bajo demanda el EPUB o el PDF de cualquier curso al completo, de forma que sea posible descargarlo y seguirlo desde un lector de tinta electrónica, o desde donde cada cual prefiera. Asimismo, los cursos no se limitan al texto: La plataforma soporta también materiales de audio y vídeo, además de los exámenes que comentaba anteriormente.

En cuanto a la privacidad, la propia naturaleza del proyecto la simplifica enormemente: No existen cuentas de usuario ni registro de ningún tipo, el progreso de cada curso se almacena únicamente en el navegador de quien lo sigue, y [el repositorio de cursos es público](https://github.com/oegea/open-library) y puede consultarse libremente.

De momento la biblioteca cuenta con cursos sobre radioafición, sobre código limpio y DDD, y desde esta semana, uno más del que quería hablaros hoy.

## El oficio y la máquina

[«El oficio y la máquina: el ingeniero de software en la era de la IA»](https://www.openknowledge.es/courses/ingeniero-de-software-en-la-era-de-la-ia) es un intento de responder, con las fuentes en la mano y sin *hype*, qué cambia (y qué permanece) en nuestro oficio ahora que las máquinas escriben código.

La historia sigue a una pequeña empresa de riego inteligente que una madrugada descubre en su repositorio un commit que ningún humano escribió, ni revisó, ni aprobó. Y a partir de ahí, el curso recorre desde la historia de las veces que el oficio «estuvo a punto de desaparecer» (los compiladores también iban a acabar con los programadores, según decían en los años cincuenta), hasta la parte más práctica del presente: Cómo escribir un agente desde cero, cómo construir su arnés (*harness engineering*), cómo probar con *evals* aquello que nunca responde dos veces igual, cómo montar flujos multi-agente y de *loop engineering*, y cómo mantener la soberanía sobre tu propio flujo de desarrollo sin quedar atado a ningún proveedor.

## Las tres ideas principales

Si tuviese que destilar el curso en tres ideas, serían estas:

1. **Programar es construir una teoría.** Lo escribió Peter Naur en 1985, y explica esta época mejor que muchos artículos recientes: El valor no está en el texto del código, sino en la comprensión del sistema que vive en cabezas humanas. La IA puede generar código a coste casi cero, pero genera código *sin teoría*, y esa comprensión no se puede delegar. En definitiva: Entender los sistemas por dentro, y no de oído, vale hoy más que nunca. No a pesar de la IA, sino a causa de ella.

2. **La inteligencia se alquila; el arnés se posee.** Los modelos son intercambiables (y conviene tratarlos como tales), pero todo lo que los rodea es tuyo: Los permisos, el contexto, los *prompts* versionados, las *evals*, y muy especialmente las barreras deterministas de siempre (tests, linters, *hooks* de git, CI) que se ejecutan siempre, se lo pidas o no al modelo, y frenan por igual a la máquina descuidada y al humano con prisas. Al fin y al cabo, estamos haciendo lo que siempre hicimos, amplificado. Y una derivada importante: Desconfía de todo acoplamiento que no puedas inspeccionar, porque lo que no puedes inspeccionar, no puedes sustituirlo.

3. **Quien firma, responde.** Crear software nunca ha sido tan fácil, y precisamente por eso la responsabilidad de crearlo bien nunca ha sido tan grande. Parece que hoy cualquiera puede hacer software, pero en un mundo inundado de software que se escribe solo, la diferencia profesional está entre quienes solo pueden generar un sistema, y quienes pueden responder de él. La máquina escribe, propone y acelera, pero responder sigue siendo cosa de personas.

## Abrir la puerta

Termino con una pequeña historia personal, que en el fondo es el motivo de todo lo anterior.

Cuando empecé a programar, allá por 2012, quien me enseñó a dar los primeros pasos fue César, un hombre de Tarragona de una comunidad de rol muy pequeña, que no me conocía absolutamente de nada. Cuando le dije que quería ayudarle a *scriptear* para la comunidad, podría haberme ignorado sin más (habría sido lo fácil, y seguramente lo esperable). En lugar de eso, me enseñó lo básico: Variables, funciones, condiciones... Me abrió la puerta a lo que él sabía hacer, sin pedirme nada a cambio.

Creo que eso es lo que tenemos que intentar conseguir, ahora que curar y conectar conocimiento es más fácil que nunca: Abrir puertas. El conocimiento abierto nos hace crecer, nos hace menos manipulables, y nos ayuda a prosperar. Y la colaboración sana y honesta entre personas y organizaciones es la mejor forma de multiplicarlo. Al fin y al cabo, esto va bastante menos de quien confecciona una biblioteca, y bastante más de las personas a las que pueda serles útil.

Dicho esto: El curso es gratuito, sus fuentes son abiertas, y puedes empezarlo [pulsando aquí](https://www.openknowledge.es/courses/ingeniero-de-software-en-la-era-de-la-ia). Y si hay algún tema sobre el que te gustaría encontrar formación curada de este estilo, no dudes en comentármelo, y lo añadimos a la biblioteca 🙂
