---
title: "Utilizando el servicio SOAP de Salesforce desde NodeJS"
slug: "utilizando-el-servicio-soap-de-salesforce-desde-nodejs"
date: "2016-02-13"
excerpt: "Utilizar la API SOAP de Salesforce nos permite integrar nuestra aplicación con el entorno de Salesforce sin utilizar el protocolo de autenticación OAuth, y puede ser una buena forma de implementar una capa intermedia entre la experiencia final de usuario, y la información almacenada en Salesforce. Algunos lenguajes de programación disponen de librerías propias, con &hellip; Sigue leyendo Utilizando el servicio SOAP de Salesforce desde NodeJS"
status: "publish"
type: "post"
id: "255"
categories:
  - "Desarrollo"
tags:
  - "API"
  - "consume"
  - "create"
  - "edit"
  - "enterprise"
  - "github"
  - "integration"
  - "javascript"
  - "library"
  - "Node"
---

Utilizar la API SOAP de Salesforce nos permite integrar nuestra aplicación con el entorno de Salesforce sin utilizar el protocolo de autenticación OAuth, y puede ser una buena forma de implementar una capa intermedia entre la experiencia final de usuario, y la información almacenada en Salesforce.

Algunos lenguajes de programación disponen de librerías propias, con las que es posible integrarse con el servicio SOAP de una forma sencilla. No obstante, si queremos utilizar el servicio SOAP de Salesforce desde nuestra aplicación NodeJS, no tenemos elección: Debemos realizar las llamadas SOAP sin utilizar ninguna librería proveída por Salesforce.

Por esta razón, y respondiendo a requerimientos surgidos en el ámbito profesional, desarrolló una librería para encapsular la autenticación y configuración de la api SOAP de Salesforce Enterprise. Esta librería depende, entre otros, de la librería **[soap](https://www.npmjs.com/package/soap)**, así pues si has utilizado previamente *soap*, utilizar [**soap\_salesforce**](https://www.npmjs.com/package/soap_salesforce) te resultará sencillo, dado que, pese a que provee algunas funcionalidades adicionales, el cliente SOAP está gestionado enteramente por[la librería SOAP que podemos encontrar en NPM](https://www.npmjs.com/package/soap). Adicionalmente, soap\_salesforce depende de la librería **[q](https://www.npmjs.com/package/q)** para el uso de promesas.

## **Prerequisitos**

*   Un usuario de Salesforce con los permisos necesarios para utilizar la API SOAP.
*   Un entorno con NodeJS y NPM instalado.

## **1\. Descarga de soap\_salesforce**

Para lograr nuestro objetivo, necesitaremos situarnos en nuestro directorio de proyecto, y descargar la librería soap\_salesforce, tras haber inicializado previamente nuestro proyecto:

```bash
npm init
npm install --save soap_salesforce
```

soap\_salesforce es una librería creada para autenticarse en el servicio SOAP de Salesforce, y utilizar algunos métodos del API de forma más sencilla. Además, la librería incluye algunos métodos para ayudar a resolver algunos problemas comunes, tales como escapar las sentencias SOQL, o parsear objetos Javascript para ser utilizados como objetos de Salesforce (sObject) en el formato esperado por el API al crear, editar o borrar registros.

Tras estas operaciones, debería aparecer en nuestra carpeta de proyecto, un directorio llamado **node\_modules**, y en su interior un directorio llamado **soap\_salesforce**. Si es así, podemos empezar a definir el código de nuestra aplicación, que en este ejemplo llamaremos **Application.js**:

```javascript
var SoapSalesforce = require("soap_salesforce");
var salesforce = new SoapSalesforce("username","password","token","WSDL path");
```

El código anterior es simple, requerimos la librería soap\_salesforce, y la almacenamos en una variable llamada **SoapSalesforce**, tras lo cual la inicializamos y almacenamos en una variable llamada **salesforce**. Ten en cuenta que es necesario modificar los parámetros que recibe el contructor con un usuario, contraseña, token de API, y ruta a un fichero WSDL real.

## **2\. Descarga del fichero WSDL**

Cuando **soap\_salesforce** es inicializado recibe un argumento con la ruta hacia el fichero WSDL. Podemos obtener el fichero WSDL de nuestro entorno accediendo al entorno de configuración de Salesforce y navegando hacia «Develop», «API». En el interior de la página «API» es posible generar una versión actualizada del fichero Enterprise WSDL, haciendo clic en «Generate Enterpirse WSDL». En la mayoría de los casos esto abrirá una nueva pestaña en nuestro navegador, que contendrá el fichero WSDL solicitado.

Echemos un vistazo a cómo quedaría el código tras inicializarlo con parámetros reales. En este caso hemos almacenado el fichero WSDL en un subdirectorio llamado WSDL:

```javascript
var SoapSalesforce = require("soap_salesforce");
var salesforce = new SoapSalesforce("apiuser@oriol.im","I123324jsdfAfnjqr","Fadnf2iunAfn12234ADFn","./WSDL/salesforce.xml");
```

## **3\. Identificándonos en la API**

Ya casi estamos listos, solo falta completar un paso antes de empezar a interactuar con Salesforce: Identificarnos en el API y obtener el cliente SOAP. Para lograrlo, simplemente debemos añadir una línea de código más:

```javascript
var SoapSalesforce = require("soap_salesforce");
var salesforce = new SoapSalesforce("apiuser@oriol.im","I123324jsdfAfnjqr","Fadnf2iunAfn12234ADFn","./WSDL/salesforce.xml");
salesforce.Login().then(function(soapClient){
//Fantastic, now we can start!
});
```

El método «Login» retorna una promesa que es resuelta cuando finaliza la inicialización del login, esta promesa será la que nos retorne el objeto del cliente SOAP, con el que podremos empezar a trabajar. ¡Ahora sí estamos listos!

## **4\. Llamando a métodos del API**

El objeto del cliente SOAP contiene todos los métodos del API de Salesforce (tal y como haría la librería soap por sí sola), por lo que podemos ejecutar cualquier método, simplemente ejecutándolo como una propiedad más del cliente SOAP. Cada método requerirá recibir dos parámetros:

*   Un objeto con los parámetros esperados por el API.
*   El callback a ejecutar al finalizar la operación.

Ante este panorama, es posible ejecutar cualquier método de Salesforce, no obstante debemos conocer los parámetros que espera, los nombres de estos parámetros, y su formato.

Esto puede resultar algo frustrante dado que habitualmente no tenemos que preocuparnos por estos detalles, cuando utilizamos librerías proveídas por Salesforce, no obstante, podemos encontrar la estructura de los parámetros esperados a través de la documentación oficial de Salesforce.

En cualquier caso, soap\_salesforce provee funcionalidad suficiente para llevar a cabo dos operaciones típicas: sentencias SOQL, y la creación, edición y borrado de registros.

## **5\. Realizando consultas SOQL y escapando caracteres sensibles**

En el siguiente ejemplo se muestra como utilizar el método queryAll del API SOAP de Salesforce, utilizando dos métodos de la librería soap\_saesforce: EscapeSOQL, para escapar caracteres sensibles a ser utilizados como medios de inyección y ataque en nuestras consultas, y FormatQuery, para parsear un string que contiene una sentencia SOQL, al formato esperado por el cliente SOAP.

```javascript
var soapSalesforce = require("soap_salesforce");
var salesforce = new soapSalesforce("apiuser@oriol.im","I123324jsdfAfnjqr","Fadnf2iunAfn12234ADFn","./WSDL/salesforce.xml");
salesforce.Login().then(function(soapClient){
//Fantastic, now we can start!
var accountName = "Escape ' me % please _"; //Unescaped parameter
accountName = salesforce.EscapeSOQL(accountName); //Escaped parameter.
var query = salesforce.FormatQuery("SELECT Id FROM Account WHERE Name = '"+accountName+"' LIMIT 1");
soapClient.queryAll(query, function(error, result){
console.log(result);
});
});
```

## **6\. Creando o actualizando registros**

Crear o editar un registro requiere dos parámetros, la información que el registró contendrá, y el nombre del objeto con el que interactúa la aplicación. Para realizar esto, debemos definir un objeto Javascript e incluir en él cada uno de los campos que deseamos especificar. Hecho esto, el método FormatObject se encargará de transformar nuestro objeto de Javascript en el objeto esperado por Salesforce.

Ten en cuenta que FormatObject requiere dos parámetros: El objeto Javascript y el nombre del objeto.

Echa un vistazo a este ejemplo que pone en práctica el punto anterior:

```javascript
soapSalesforce = require("soap_salesforce");
var salesforce = new soapSalesforce("apiuser@oriol.im","I123324jsdfAfnjqr","Fadnf2iunAfn12234ADFn","./WSDL/salesforce.xml");
salesforce.Login().then(function(soapClient){
//Fantastic, now we can start!
//Define new account data
var newAccount = {
Name: "Fake account",
Description__c: "Another field here :)"
};
//Format it into an sObject
var newAccount = salesforce.FormatObject(newAccount, "Account");

//Now we can create the record
soapClient.create({sObjects: [newAccount]}, function(error, result){
console.log(result); //Result will be here, and the Id of the account we've just created.
});
});
```

## **7\. Conclusión**

soap\_salesforce es una librería simple, pero es suficiente para realizar integraciones básicas. Siéntete libre de registrar cualquier incidencia que encuentres en Github, o modificar la librería y redistribuirla (licencia AGPL).