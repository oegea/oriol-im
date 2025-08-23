---
title: "SOAP Salesforce en NodeJS como un ORM: Sencillo y rápido"
slug: "soap-salesforce-en-nodejs-como-un-orm-sencillo-y-rapido"
date: "2017-09-19"
excerpt: "Si echaste un vistazo a la publicación «Utilizando el servicio SOAP de Salesforce desde NodeJS»&nbsp;te habrás percatado que resulta complicado utilizar la librería soap_salesforce&nbsp;sin implementar una clase que gestione y aproveche recursos y encapsule algunos procedimientos repetitivos (como la gestión de las sesiones activas en Salesforce o la transformación de un objeto Javascript a sObject). &hellip; Sigue leyendo SOAP Salesforce en NodeJS como un ORM: Sencillo y rápido"
status: "publish"
type: "post"
id: "482"
categories:
  - "Desarrollo"
tags:
  - "API"
  - "database"
  - "easy"
  - "enterprise"
  - "express"
  - "integration"
  - "javascript"
  - "NodeJS"
  - "orm"
  - "Salesforce"
---

Si echaste un vistazo a la publicación [«Utilizando el servicio SOAP de Salesforce desde NodeJS»](https://www.oriol.im/utilizando-el-servicio-soap-de-salesforce-desde-nodejs/) te habrás percatado que resulta complicado utilizar la librería [soap\_salesforce](https://www.npmjs.com/package/soap_salesforce) sin implementar una clase que gestione y aproveche recursos y encapsule algunos procedimientos repetitivos (como la gestión de las sesiones activas en Salesforce o la transformación de un objeto Javascript a sObject).

Esto es así, dado que la finalidad de dicha librería era simplemente la de enmascarar el procedimiento de autenticación contra el servicio web. No obstante en un proyecto real, es imperativo evitar la repetición de algunos procedimientos que pueden hacer que la lógica de nuestra aplicación sea difícil de leer e interpretar.

Para solucionar esto, y crear un entorno de trabajo más eficaz, publiqué hace algunos meses la librería [salesforce\_orm](https://www.npmjs.com/package/salesforce_orm) en NPM, la cual desarrollaremos brevemente en este post.

## 1\. Prerequisitos

Como siempre, los prerequisitos que debemos cumplir son mínimos, basta con tener instalado NodeJS, NPM, y tener a mano nuestras credenciales de acceso a Salesforce, el token de autenticación a la API, y el fichero WSDL que describe el servicio SOAP.

## 2\. Instalación

Igual de sencillo es el proceso de instalación de la librería, que puede ser descargada a través del gestor de paquetes NPM:

```bash
npm install --save salesforce_orm
```

## 3\. Inicialización

Al igual que en la mayoría de librerías, antes de poder utilizar salesforce\_orm, deberemos instanciarla, e indicar como parámetros del constructor nuestras credenciales de acceso a Salesforce, así como el token de acceso a la API, y la ruta donde se encuentra el fichero WSDL.

```javascript
let Salesforce = require('salesforce_orm');
let username = 'your@salesforce-user.com';
let password = 'yourPassword';
let token = 'yourToken';
let wsdlPath = __dirname+'/config/production.wsdl.xml';

let salesforce = new Salesforce(username, password, token, wsdlPath);
```

## 4\. Añadiendo un nuevo modelo

Tal y como su nombre indica, salesforce\_orm actúa como un punto intermedio entre Salesforce y nuestra aplicación, y nos provee de una estructura ORM, donde podemos efectuar cambios y consultas sobre la base de datos de Salesforce, trabajando directamente con los objetos que la conforman. Así,  
podemos modificar, por ejemplo, el nombre de una cuenta, e invocar el método «update» sobre ella, para que se actualice en el CRM directamente.

No obstante, para que esto sea posible el sistema requiere conocer la estructura de los objetos sobre los que vamos a trabajar, y aunque esto podría realizarse de forma automática, por el momento es necesario declarar los modelos de datos de forma manual.

```javascript
this.salesforce.addModel({
    name: 'Account',
    fields: ["Id", "Name"] //Add here all API Names of Account fields
});
```

## 5\. Instanciando un modelo

Ahora que hemos definido el modelo de datos (nótese que lo anterior era un ejemplo, y para que la aplicación funcione según lo esperado, deberemos indicar todos los campos que deseamos obtener y/o modificar), podemos empezar a utilizar salesforce\_orm. Para ello, deberemos instancia un objeto,  
es decir: Transformar un objeto Javascript normal y corriente, y dotarlo de funcionalidades para que represente un registro real de Salesforce, y para que cualquier cambio que realicemos sobre él, se refleje inmediatamente sobre nuestro CRM.

```javascript
let newObjectInstance = salesforce.instanceNewObject('Account');
```

El código anterior creará un nuevo objeto de tipo Account en la variabe «newObjectInstance», pero…

¿Qué sucede si ya disponemos de un objeto con los campos relativos a Salesforce? Muy sencillo, veamos un ejemplo:

```javascript
let existentObjectInstance = salesforce.instanceExistentObject(
    'Account',
    { Id: '1234567890123456' }
); //Here you can pass any model's properties
```

## 6\. Recuperando datos de un registro

Una vez tenemos un objeto javascript, instanciado mediante salesforce\_orm, si queremos dotar a este objeto de la información de un registro de Salesforce concreto, basta con que le definamos la propiedad «Id» al identificador de Salesforce correspondiente, e invoquemos al método get, de la siguiente forma.

```javascript
existentObjectInstance.get().then(()=>{
    console.log(`Hello world! My name is ${existentObjectInstance.Name}`);
});
```

## 7\. Creando y actualizando registros

Si queremos crear un nuevo registro, es aún más sencillo. Bastará con cumplimentar todas las propiedades del objeto de Salesforce que sean obligatorias, e invocar el método «create».

```javascript
newObjectInstance.Name = 'My awesome new account';
newObjectInstance.create().then(()=>{
    console.log(`Hello world! My new account's name is ${newObjectInstance.Name}`);
});
```

En caso de querer actualizar un objeto ya instanciado, y que dispone del parámetro «Id» definido, tenemos a nuestra disposición el método «update».

```javascript
existentObjectInstance.Name = `${existentObjectInstance.Name} (edited)`;
existentObjectInstance.update().then(()=&amp;amp;amp;gt;{
    console.log(`Oh! My existent account has been edited and its name is now ${existentObjectInstance.Name}`);
});
```

## 8\. Borrado de registros

En la misma línea, podemos eliminar un registro llamando al método «remove», siempre que el objeto tenga definido el parámetro «Id».

```javascript
existentObjectInstance.remove().then(()=>{
    console.log(`I'm so sad D=, an account has been removed from Salesforce.`);
});
```

## 9\. Búsqueda de registros

Por último, es posible buscar registros de forma sencilla, tal y como se muestra en el ejemplo. Esta acción retornará un array de objetos, donde encontraremos los registros que cumplen con los parámetros de búsqueda especificados.

El segundo parámetro, hace referencia a las cláusulas de búsqueda, y en él pueden indicarse cláusulas tal y como se indicarían en una consulta SOQL habitual.

```javascript
salesforce.search("Account", "Name = 'My awesome new account'").then((records)=>{
    console.log(`${records.length} records have been found.`);
    for(let i in records){
        let record = records[i];
            console.log(`${record.Name} found! (${record.Id})`);

            //And here magic happens... Feel free to use all available methods (as delete or update) with these results...
            record.Name = 'Changed name';
            record.update();
      }
});
```

Cabe mencionar, que este comando puede recibir un tercer parámetro donde podemos indicar campos adicionales a recuperar (además de los especificados en el fichero que inicializa el modelo de datos). Este tercer parámetro es útil para indicar por ejemplo, campos obtenidos a través de campos relacionales (lookup). Su uso podría ser similar a lo siguiente:

```javascript
let additionalFields = ["Contract__r.ContractNumber"];
salesforce.search("Account", "Name = 'My awesome new account'", additionalFields).then((records)=>{});
```

Siguiendo el ejemplo anterior, cada uno de los registros retornados por la búsqueda, tendrá (en caso de disponer de un Contrato relacionado) los parámetros «Contract\_\_r» y en el interior de éste, el parámetro «ContractNumber».

## Advertencias y consejos

*   Se trata de una librería en fase experimental, que por el momento no dispone de tests unitarios o control de la mayoría de errores que puede arrojar Salesforce. Úsala bajo tu propio riesgo.
*   Puede utilizarse mediante funciones asíncronas y el comando «await», dado que implementa promesas para retornar resultados.
*   En caso de querer retornar un registro o grupo de registros (a través de Express, por ejemplo, mediante el comando res.json), deberemos obtener una copia de cada uno de los registros, retirándoles los métodos que la librería inserta en ellos. Para que esto sea posible, cada instancia de registro dispone de un método llamado \_getObjectValues, que retorna un objeto Javascript (sin los métodos propios de salesforce\_orm) que es apto para ser tratado como un objeto habitual, y retornado como JSON.