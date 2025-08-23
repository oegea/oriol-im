---
title: "Actualizando Debian 8 (Jessie) a 9 (Stretch) y posteriormente a Debian 10 (Buster)"
slug: "actualizando-debian-8-jessie-a-9-stretch"
date: "2020-06-01"
excerpt: "El fin del soporte extendido para Debian 8 se acerca. Concretamente el 30 de junio dejará de recibir actualizaciones de seguridad, con lo cual es necesario actualizarlo cuanto antes. En este caso concreto, (y dado que no soy mucho de ir instalando a todas horas el último sistema, sino que aprovecho todo el tiempo de &hellip; Sigue leyendo Actualizando Debian 8 (Jessie) a 9 (Stretch) y posteriormente a Debian 10 (Buster)"
status: "publish"
type: "post"
id: "673"
categories:
  - "Administración de sistemas"
tags:
  - "2020"
  - "Debian"
  - "Jessie"
  - "June"
  - "php"
  - "Stretch"
  - "update"
  - "upgrade"
---

El fin del soporte extendido para Debian 8 se acerca. Concretamente el 30 de junio dejará de recibir actualizaciones de seguridad, con lo cual es necesario actualizarlo cuanto antes.

En este caso concreto, (y dado que no soy mucho de ir instalando a todas horas el último sistema, sino que aprovecho todo el tiempo de soporte que se ofrece) me encuentro en la versión 8 de Debian, pero quiero llegar hasta la 10 (ya puestos a actualizar, lo haremos hasta la última versión disponible), con lo que veremos el proceso completo para actualizar primero a Debian Stretch y luego a Debian Buster.

A modo de pequeño *snippet*, vamos a ver cómo podemos actualizarlo:

## Antes de empezar

Realiza una copia de seguridad de tus ficheros, bases de datos, ficheros de configuración, etcétera. En caso de disponer de un servicio de *snapshot*, seguramente sea la opción más rápida y efectiva. Recuerda que aunque el proceso de actualización es relativamente seguro si el sistema se encuentra «limpio», nada te asegura que no pueda producirse algún tipo de fallo. Mejor estar prevenidos.

## Actualizando a Debian 9 Stretch

En primer lugar, nos aseguramos de haber actualizado previamente todos los paquetes:

```bash
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo apt autoremove
```

Una vez actualizados los paquetes, reemplazamos el contenido de nuestro fichero **/etc/apt/sources.list** para que incluya los repositorios de Debian 9, sustituyendo los de Debian 8. Los repositorios a incluir son los siguientes:

```bash
deb http://httpredir.debian.org/debian stretch main contrib non-free
deb http://httpredir.debian.org/debian stretch-updates main contrib non-free
deb http://security.debian.org stretch/updates main contrib non-free
```

Por último, actualizamos el sistema:

```bash
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
reboot
```

El último comando reiniciará el sistema. Dado que Debian 9 incluye una versión más actualizada del kernel de Linux, es necesario hacerlo.

Podemos comprobar la versión instalada mediante el comando:

```bash
cat /etc/os-release
```

Asimismo, después de actualizar es recomendable realizar nuevamente el comando autoremove, para eliminar paquetes en desuso:

```bash
sudo apt autoremove
```

## Actualizar también PHP

Una vez actualizado, puede ser necesario actualizar adicionalmente algunos servicios o paquetes. Por ejemplo, en mi caso he aprovechado para actualizar PHP: Si en Debian Jessie habíamos instalado la versión 5 de PHP, el sistema seguirá conservándola por defecto.

Para poder instalar la versión 7.3 de PHP, que a día de hoy es la última versión disponible, realizamos lo siguiente:

```bash
sudo apt install apt-transport-https lsb-release ca-certificates
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
sudo sh -c 'echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
sudo apt update
```

A continuación instalamos los paquetes que necesitemos de **php7.3**, por ejemplo:

```bash
sudo apt install -y php7.3 php7.3-gd php7.3-imagick php7.3-common php7.3-cli php7.3-fpm php7.3-mysql php7.3-xml php7.3-curl php7.3-mbstring php7.3-zip
```

Esto actualizará los binarios de php. Si estábamos actualizando desde php5 podemos eliminar los antiguos binarios mediante:

```bash
sudo apt purge php5-*
```

Para finalizar, puede que necesitemos actualizar algunos aspectos más. Por ejemplo: En mi caso **nginx** utilizaba **php5-fpm** para servir contenido dinámico, por lo que tuve que iniciar el servicio de **php7.3-fpm**, y actualizar la configuración de mi sitio de nginx.

## Actualizando a Debian Buster

Ahora que estamos en Debian 9, vamos a repetir el proceso para subir a Debian Buster. El proceso es el mismo que el citado anteriormente, tan sólo deberemos asegurarnos que incluímos los repositorios de Debian Buster cuando lleguemos al paso de modificar el fichero **/etc/apt/sources.list**.

Estos son los repositorios a incluir:

```bash
deb http://deb.debian.org/debian buster main
deb http://deb.debian.org/debian buster-updates main
deb http://security.debian.org/debian-security buster/updates main
```

**Aviso para actualizantes:** En el entorno en el que realicé las pruebas, al finalizar la actualización y ejecutar **apt autoremove**, el sistema eliminó el paquete de **mariadb**, por lo que la base de datos dejó de funcionar. Tuve que instalarlo nuevamente mediante el comando:

```bash
apt install mariadb-server
```

## Créditos

Este post surge de la necesidad de actualizar algunos servidores. Lo he realizado a través de otros blogs que publicaron antes cómo realizar estas actualizaciones, de los que adjunto los enlaces a continuación:

*   phoenixNAP: «[How To Upgrade Debian 8 Jessie To Debian Linux 9 Stretch](https://phoenixnap.com/kb/how-to-upgrade-debian-8-jessie-to-debian-9-stretch)»
*   Jesús Amieiro: «[Install PHP 7.3 on Debian 9](https://www.jesusamieiro.com/install-php-7-3-on-debian-9/)«