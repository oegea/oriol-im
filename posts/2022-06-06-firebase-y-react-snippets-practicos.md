---
title: "Firebase y React: Snippets prácticos"
slug: "firebase-y-react-snippets-practicos"
date: "2022-06-06"
excerpt: "Introducción Firebase es un conjunto de herramientas proporcionadas por Google, que destaca por permitir desplegar una base de datos orientada a documentos, en tiempo real, interactuando a través de la librería oficial disponible. En la práctica, podemos crear una aplicación sin necesidad de desarrollar un servicio web que actúe como backend, reduciendo el tiempo requerido &hellip; Sigue leyendo Firebase y React: Snippets prácticos"
status: "publish"
type: "post"
id: "996"
categories:
  - "Sin categoría"
---

## Introducción

Firebase es un conjunto de herramientas proporcionadas por Google, que destaca por permitir desplegar una base de datos orientada a documentos, en tiempo real, interactuando a través de la librería oficial disponible. En la práctica, podemos crear una aplicación sin necesidad de desarrollar un servicio web que actúe como *backend*, reduciendo el tiempo requerido para poner en marcha la aplicación, o al menos un prototipo.

Firebase se ofrece como servicio, con lo que conviene tener en mente dos aspectos; el primero, que si el diseño implementado en la aplicación es correcto, su escalado debe resultar sencillo; el segundo, que los costes, como cualquier PaaS, pueden llegar a ser elevados. Afortunadamente, respecto a este punto, Firebase ofrece una capa gratuita, que es la utilizada durante el desarrollo de esta publicación.

Conviene mencionar además que no se trata de una tecnología de nueva creación, sino que sus inicios se remontan a 2012, siendo en 2014 cuando fue adquirida por Google, lo cual es indicador del estado de madurez tecnológico.

Aunque a día de hoy [existen alternativas de considerable solidez](https://supabase.com/), en esta publicación se expondrá como Firebase puede ser una plataforma solvente para desarrollar aplicaciones funcionales, que permiten autenticar usuarios y almacenar información persistente, siendo el esfuerzo requerido para implementar estas funcionalidades, muy inferior en comparación con otras herramientas de desarrollo.

Por último, esta publicación se enfoca a cómo pueden realizarse operaciones básicas de lectura y escritura, así como de autenticación, en Firebase, utilizando React como librería para renderizar la interfaz web, y aprovechando la API de contexto para recibir actualizaciones de la base de datos en tiempo real.

En muy poco tiempo, podremos desplegar un prototipo de esa aplicación que siempre hemos querido desarrollar, pero para la que requeríamos colaboradores. ¡Pongámonos manos a la obra!

Nota: Pese a que la introducción ha sido extensa, esta publicación expondrá ejemplos de código de forma escueta. Existe documentación adicional en el caso de que el lector requiera más información, así como [un curso bastante instructivo en Frontendmasters](https://frontendmasters.com/courses/firebase-react-v2/) del cual te comparto mis apuntes [aquí](https://rough-anise-4e1.notion.site/Curso-Firebase-376948f3daea4848a14afbe7993f5f74).

Nótese, que los apuntes compartidos se encuentran «en sucio», y se realizan con la versión 8 de la API de Firebase. Esta publicación cubre parcialmente el contenido de dichos apuntes, pero lo hace de forma más estructurada, limpia, y utilizando la API versión 9 de Firebase.

Quede claro pues, que el objetivo de esta publicación es servir como punto de iniciación a Firebase, utilizando la última versión de su SDK. Pero que en caso de querer profundizar, convendrá leer e investigar utilizando otros recursos.

## Inicializando el proyecto

En primer lugar, es necesario instalar la librería correspondiente en nuestro proyecto, podemos hacerlo utilizando npm:

```bash
npm i -s firebase
```

A continuación, en el panel de control de Firebase, debemos generar un nuevo proyecto, así como activar la funcionalidad de Cloud Firestore (la base de datos en tiempo real), así como el servicio de autenticación, para el cual por el momento sólo utilizaremos Google como proveedor.

Al activar el servicio Cloud Firestore, por el momento, podemos indicar que deseamos que la base de datos se encuentre desprotegida, dado que estableceremos mecanismos de protección manualmente durante este artículo.

Al finalizar la inicialización, Firebase nos indicarán los datos de configuración de nuestro proyecto, los cuales podremos incluir en un fichero al que, por ejemplo, llamaremos firebase.js. En este fichero, además de exponer los parámetros de configuración, expondremos las funciones de firebase que vamos a utilizar.

```javascript
import { initializeApp } from "firebase/app";
// Third party dependencies
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signOut,
  signInWithPopup,
  GoogleAuthProvider 
} from "firebase/auth";
import {
  addDoc, 
  collection, 
  deleteDoc,  
  doc,
  getDoc, 
  getDocs,
  getFirestore,
  limit,
  query,
  setDoc,
  updateDoc,
  writeBatch,
  where
} from "firebase/firestore";

// Basic configuration
const firebaseConfig = {
  apiKey: "-",
  authDomain: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-",
  measurementId: "-"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider()

export const collectIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};

// Firestore wrapper
export const fireStore = {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  setDoc,
  updateDoc,
  writeBatch,
  where
};

// Firebase Auth wrapper
export const fireAuth = {
  getAuth,
  signOut
}

export const auth = getAuth();
export const db = getFirestore();
export const  signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;
```

En este fichero se utilizan múltiples funciones cuyo funcionamiento aún no se ha explicado, pero conviene mantenerlas pues se utilizarán a lo largo de esta publicación.

## Autenticando usuarios con Google

Autenticar usuarios a través de Firebase es sencillo. Hacerlo utilizando Google como proveedor, es doblemente sencillo, pues la configuración es mínima al ser Google el propietario de Firebase.

Para habilitar la autenticación, basta con acudir al apartado de autenticación del proyecto de Firebase, pulsar sobre «añadir proveedores», y añadir el proveedor «Google». Con tan sólo un clic, estaremos listos para autenticar a usuarios, sin necesidad de realizar complejas configuraciones.

¿Cómo hacerlo? En primer lugar, es conveniente definir un contexto en React, encargado de recibir los datos de autenticación, y exponerlos a la aplicación. Esto nos permitirá conocer si el usuario se encuentra identificado y, en tiempo real, cuando este modifique su estado, bien sea por haberse identificado o por haber cerrado sesión, recibir una notificación y poder alterar la interfaz web.

```javascript
import React, { Component, createContext } from 'react';
import {auth} from 'firebase.js';

export const UserContext = createContext();

class UserProvider extends Component {
	state = { user: null };

	unsubscribe = null;

	componentDidMount = async () => {
            this.unsubscribe = auth.onAuthStateChanged( user => {
                this.setState({ user });
            });
	};
	
	componentWillUnmount = () => {
		if (this.unsubscribe !== null)
			this.unsubscribe();
	}

	render() {
		const { user } = this.state;
		const { children } = this.props;

		return (
			{ children }
		);
	}

}

export default UserProvider;
```

En el snippet anterior, se crea un Contexto de React que, cuando recibe un cambio en el estado de autenticación, lo propaga a través del valor expuesto. Esto se hace a través de la función **onAuthStateChanged**, importada del fichero **firebase.js** creado en el paso inicial.

Conviene mencionar, que al renderizar la aplicación por primera vez, si el usuario se encuentra logueado, se recibirán los datos de su sesión como si se tratase de un cambio en el estado de autenticación, por lo que con este código por si sólo, ya es posible diferenciar si el usuario se ha autenticado, quien es y cuáles son sus datos, sin realizar ninguna implementación adicional.

¿Y cómo le ofrecemos al usuario la posibilidad de identificarse? ¡Muy sencillo! Basta con ejecutar la función **signInWithGoogle** exportada también en **firebase.js**. Esta función iniciará el flujo de autenticación que, en caso de finalizar con éxito, alterará el valor del Contexto de autenticación definido.

```javascript
import {signInWithGoogle} from 'firebase.js';
const LoginButton = () => <button onClick={signInWithGoogle}>Sign in with Google!</button>
```

Nada más. Un sistema sencillo que podemos extender y mejorar si lo deseamos pero que, tan sólo con lo expuesto, ya es funcional.

## Escribiendo documentos

Ya disponemos del sistema de autenticación funcional, con lo que es posible permitir la escritura de documentos.

Un documento es un registro de la base de datos, que se encuentra contenido en una colección. De forma muy similar a otras bases de datos como MongoDB. Conviene destacar, que no es necesario crear una colección, pues al momento de crear un documento ya especificamos a qué colección pertenece, y en caso de no existir, se procede a crear una nueva colección.

Veámos un ejemplo de código que permite crear un nuevo documento, en una colección de posts.

```javascript
import { db, fireStore } from './firebase.js';

const { addDoc, collection } = fireStore;

export const createDocument = async (collection, document) => {

    const collectionRef = collection(db, collection);

    let docRef = await addDoc(collectionRef, document);

    return docRef;
}
```

## Lectura de documentos mediante suscripción

De igual forma que en puntos previos de esta publicación se creaba un contexto que actualizaba su valor cada vez que se producía un cambio en la sesión del usuario, es posible también disponer de actualizaciones en tiempo real, cada vez que una colección se actualiza, así como cada vez que una *query* ve alterados sus resultados.

En este caso, se expone como ejemplo la suscripción a una *query* determinada, lo que permite realizar un filtro sobre los datos de una colección, reduciendo así el número de documentos recuperados, y optimizando el número de lecturas, lo cual comporta de facto una reducción de costes y un incremento de rendimiento de la aplicación:

```javascript
// Third party dependencies
import React, { Component, createContext } from 'react';
import { collection, onSnapshot, where, query, limit } from "firebase/firestore";
// Own libraries
import { db, collectIdsAndDocs} from './firebase.js';

export const PostsContext = createContext();

class PostsProvider extends Component {
	state = { posts: [] };

	unsubscribe = null;

	componentDidMount = () => {
		this.subscribe();
	}

	componentDidUpdate = () => {
		this.subscribe();
	}
	
	componentWillUnmount = () => {
		if (this.unsubscribe !== null)
			this.unsubscribe();
	}

	subscribe = () => {
		if (this.unsubscribe !== null )
			return

		const q = query(collection(db, "posts"), where("owner", "==", “someone”), limit(10));
        this.unsubscribe = onSnapshot(q, (snapshot) => {
            const posts = snapshot.docs.map(collectIdsAndDocs);
            this.setState({ posts });
        });
	}

	render() {
		const { posts } = this.state;
		const { children } = this.props;

		return (
			<PostsContext.provider value={posts}>{ children } </PostsContext.provider>
		);
	}

}

export default PostsProvider;
```

## Modificando un documento

De forma similar a como se crean documentos, la función **updateDoc**, permite modificar un documento ya existente:

```javascript
import { db, fireStore } from './firebase.js';

const { updateDoc, doc } = fireStore;

export const editDocument = async (collection, docId, document) => {

    const docRef = doc(db, collection, docId);

    updateDoc(docRef, document);
}
```

Asimismo, cabe mencionar que existe también la función [**setDoc,** que permite modificar un documento, y en caso de que éste no exista, crearlo. Lo cual permite simplificar este tipo de operaciones.](https://firebase.google.com/docs/firestore/manage-data/add-data)

## Eliminando un documento

Eliminar un documento es sencillo, basta con cargar la referencia a éste a través de su ruta, y posteriormente invocar a la función a tal efecto.

```javascript
import { db, fireStore } from './firebase.js';

const { deleteDoc } = fireStore;

export const deleteDocument = (collection, docId) => {
    const docRef = doc(db, collection, docId);
    deleteDoc(docRef);
}
```

Al igual que en ocasiones anteriores, al estar suscritos a esta colección, o a una *query* de esta colección, recibiremos los valores de ésta actualizados, por lo que la interfaz web se renderizará utilizando valores actualizados de forma casi inmediata.

## Permisos de documentos

En cualquier aplicación en la que conviven distintos usuarios, es necesario poder limitar el acceso a los registros base de datos, y establecer algún tipo de sistema de permisos.

En los ejemplos de lectura de documentos de esta publicación, se ha esbozado una colección llamada **posts**, que contiene un campo llamado **owner**. Si entendemos que esta colección contiene publicaciones, y que el campo **owner** define el autor, sería entendible querer, por ejemplo, que cualquier usuario pudiese leer una publicación, pero sólo su autor pudiese editarla o eliminarla.

Esto es algo, que podemos realizar en la sección **«Reglas»** de la base de datos, y resultaría en algo similar a lo siguiente:

```rust

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    
    match /posts/{postId} {
    	allow read: if 
      	request.auth.uid != null;
      allow delete: if
      	request.auth.uid != null && 
        resource.data.owner == request.auth.uid;
      allow create: if 
      	request.auth.uid != null && 
        request.resource.data.owner == request.auth.uid;
      allow update: if 
      	request.auth.uid != null && 
        resource.data.owner == request.auth.uid;
    }
  }
}
```

En el párrafo anterior, definimos que cualquier usuario logueado (**request.auth.id != null**) tiene capacidad para leer cualquier documento de la colección **posts**. Y que sólo aquellos cuyo identificador coincida con la propiedad **owner**, podrán modificar y eliminar documentos.

Además, se especifica que al momento de crear un documento, la propiedad owner de este debe coincidir con el identificador del usuario.

Por último, en el primer bloque, cabe resaltar que se ha bloqueado el libre acceso a la base de datos. Al inicializar la base de datos, se ha especificado un acceso libre no limitado por permisos. Esta primera instrucción, revoca el acceso a cualquier documento, siempre y cuando las reglas escritas debajo no lo autoricen de forma expresa.

## Subcolecciones

En los anteriores puntos, se ha expuesto la forma de acceder y modificar a la base de datos de Firebase, que organiza y expone los datos de forma muy similar a otras bases de datos como MongoDB. No obstante, existe una funcionalidad adicional que puede ser muy útil si queremos agrupar documentos: Las subcolecciones.

Una subcolección, es similar a una colección estándar, pero se encuentra ”contenida” o asociada a un documento concreto.

Por ejemplo, si disponemos de la colección ”usuarios”, en la que encontramos el documento con identificador ”abc123”, este documento puede contener una subcolección llamada ”publicaciones”, que a su vez tenga asociados un conjunto de documentos que representen las publicaciones realizadas por el usuario ”abc123”.

Se trata de un concepto similar a los subdirectorios, aunque cabe mencionar que tan sólo podemos disponer de un nivel de subcolecciones, es decir que un documento contenido en una subcolección, no puede tener asociada otra subcolección adicional. Expresado en términos del ejemplo anterior: una publicación perteneciente a un usuario, no podría tener una subcolección de comentarios. En este caso, posiblemente lo más prudente sería articular una colección llamada ”publicaciones”, dónde cada registro incluyese un campo que definiese el autor de la publicación, y que desplegase una subcolección de comentarios.

La forma de acceder a una subcolección, o a un registro de una subcolección, es sencilla, basta con utilizar las funciones que ya hemos visto en los puntos anteriores.

Por ejemplo, de esta forma eliminaríamos un documento contenido en una subcolección:

```javascript
import { db, fireStore } from './firebase.js';

const { deleteDoc } = fireStore;

export const deleteDocument = (collection, parentDocId, subCollection, docId) => {
    const docRef = doc(db, collection, parentDocId, subCollection, docId);
    deleteDoc(docRef);
}
```

Se trata pues de especificar la ruta que permite acceder al documento final, de forma similar a como se realiza con las rutas de directorios, pero en lugar de contener la ruta en un string separado por barras o contrabarras, debe separarse la ruta utilizando parámetros en la función utilizada para referenciar el documento o la colección o subcolección.

### Al eliminar un documento con subcolecciones

Al eliminar un documento que contiene subcolecciones, ten en consideración que no se eliminarán los documentos relacionados que se contienen en subcolecciones. En su lugar, es necesario iterar cualquiera de estos documentos, y eliminarlo manualmente. Idealmente, se recomienda hacerlo a través de una **cloud function**, que se encuentran fuera del alcance de esta publicación.

### Reglas para subcolecciones

Es posible definir reglas para las subcolecciones. De hecho, podemos incluso habilitar el acceso a los documentos de una subcolección, aún cuando un usuario no disponga de acceso al documento principal.

Para ello, sólo es necesario introducir reglas adicionales, anidadas en las colecciones, tal y como se realiza en este ejemplo:

```rust

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    
    match /posts/{postId} {
    	allow read: if 
      	request.auth.uid != null;
      allow delete: if
      	request.auth.uid != null && 
        resource.data.owner == request.auth.uid;
      allow create: if 
      	request.auth.uid != null && 
        request.resource.data.owner == request.auth.uid;
      allow update: if 
      	request.auth.uid != null && 
        resource.data.owner == request.auth.uid;

      match /comments/{commentId} {
      	allow create: if 
        	request.auth.uid != null;
        
        allow read: if
        	get(/databases/$(database)/documents/posts/$(postId)).data.owner == request.auth.uid;
        
        allow delete: if
        	get(/databases/$(database)/documents/posts/$(postId)).data.owner == request.auth.uid;
      }
    }
  }
}
```

En el bloque de código anterior, se amplian las reglas anteriormente escritas, para que en los documentos de la subcolección **comments** pueda leer y crear documentos cualquier usuario identificado, pero de forma en que sólo el autor de la publicación pueda eliminar los comentarios insertados.

Nótese que se utiliza la función **get** para tal fin. La función get resulta muy útil, dado que permite recuperar documentos de la base de datos y realizar comparaciones al escribir nuestras reglas. Debe tenerse en consideración no obstante, que la instrucción contabilizará como una operación de lectura adicional.

## Aprendiendo más

Esto ha sido tan sólo una guía rápida y breve para iniciarse en Firebase utilizando React. No obstante, quedan muchas funcionalidades pendientes, cada cual más profesional que la anterior, y algunas sólo disponibles cuando habilitamos un plan de Firebase de pago (por ejemplo, las cloud functions, que pese a estar disponibles en la capa gratuíta, sólo lo están con una versión deprecada de NodeJS, lo que en la práctica imposibilita utilizarlas hasta que se utiliza un plan de pago).

Lo ideal es indagar en la [documentación oficial](https://firebase.google.com/docs), y quizás realizar algún curso adicional para ver ejemplos prácticos de uso.

Antes de finalizar, conviene recordar nuevamente el apunte realizado al inicio de este post: precaución en caso de abandonar la capa gratuíta, pues Firebase factura según operaciones de lectura y escritura (entre otras), y en caso de exceder el límite gratuíto, y tener deficiencias de diseño, podemos llegar a recibir facturas de cuantía muy elevada. Puedes comprobarlo por ti mismo leyendo [el caso de una startup que recibió una factura de 30.000USD](https://hackernoon.com/how-we-spent-30k-usd-in-firebase-in-less-than-72-hours-307490bd24d) por una implementación de código deficiente.