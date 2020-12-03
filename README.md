# [HDN.PG](https://alexrodriguezlop.github.io/HDN.PG/)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Build Status](https://travis-ci.org/alexrodriguezlop/HDN.PG.svg?branch=master)](https://travis-ci.org/alexrodriguezlop/HDN.PG)
[![CircleCI](https://circleci.com/gh/alexrodriguezlop/HDN.PG.svg?style=shield)](https://app.circleci.com/pipelines/github/alexrodriguezlop/HDN.PG)

___
### [README Completo](https://github.com/alexrodriguezlop/HDN.PG/blob/master/README_FULL.md)

___
### Motivación de la idea

La idea viene motivada por la necesidad de mantener seguras nuestras comunicaciones al mas estilo James Bond, Sí en efecto el propio agente 007 usaría este microservicio. Eso sí nunca te lo diría porque si no tendría que matarte.

La idea es muy sencilla. Si necesitamos comunicar un mensaje a alguien y este es alto secreto (porque la seguridad nacional está en juego) cogeremos esa imagen de gatitos que tan inofensiva parece y haciendo uso de esta maravilla de la tecnología ocultaremos en ella el mensaje. 
Ahora sí, tenemos una imagen inofensiva de la que nadie jamas sospecharía. Ya podemos mandarla por e-mail, telegram... cualquier servicio de mensajería lo mas banal posible.

Cuando su receptor la tenga en su poder bastará con pasarla de nuevo por el microservicio y este revelará la verdad entre otros datos posibles como la fuente , la fecha y la hora en que dicha información se ocultó.

La información no se almacena en los metadatos de la imagen, nada de eso. Este algoritmo es tecnología puntera.
Esta maravilla desgrana cada píxel de la imagen, añade la información y lo recompone. Como el mejor cirujano de Malibú.
Después de un trabajo que nada tiene que envidiar al de los ingenieros genéticos de jurassic park tu imagen está lista y si te hemos visto..pues no nos acordamos. 

Eso si, como dijo Ben Parker… Un gran poder conlleva una gran responsabilidad. Usalo bien.
___
### Solución planteada 
El planteamiento de la solución consiste en desarrollar un microservicio Restfull.
Esta opción brinda muchísimas ventajas frente a otras arquitecturas. 

Nos permitirá desarrollar el proyecto de forma ágil basando el desarrollo en test, adquiriendo un ciclo de desarrollo dinámico, rápido y eficaz.

Esta arquitectura presenta gran escalabilidad y versatilidad y node.js es un gran lenguaje para llevar a cabo el desarrollo de este tipo de arquitecturas debido a su simplicidad, ligereza y naturaleza.

El microservicio a desarrollar permitirá aplicar el algoritmo de cifrado sobre un texto y una imagen dando como resultado una nueva imagen. 
No se desarrollará un *frontend* para el servicio.

Su estructura en un principio estará formada por una **clase imagen**, objeto en el cual se codificará la imagen sobre la que se aplicará el cifrado. 
Existirá una segunda **clase Raw** que contendra el vector de píxeles. 

El microservicio pretende incorporar un sistema de **log** con el fin de poder realizar un mejor seguimiento de los problemas que presente, para ello se utilizará el paquete npm [morgan](https://www.npmjs.com/package/morgan).

El microservicio en un principio se desarrollará haciendo uso de [restify](http://restify.com/), un ligero framework para el desarrollo de aplicaciones en js.
Aunque quizás use la libreria [micro](https://github.com/vercel/micro).

Se están utilizando algunas herramientas más.  
He elegido [Gulp](https://gulpjs.com/) para automatización de tareas, esta decisión ha estado motivada en gran medida por su facilidad de uso. Aunque también me ha gustado por ser una herramienta muy bien documentada y que aporta una gran cantidad de soluciones a la automatización de tareas. 
Entre sus opciones destaco que Optimiza y comprime imágenes, cosa que en este proyecto puede resultar de gran utilidad. Aunque también sirve para testeo en ese caso me he decantado por [Mocha](https://mochajs.org/). Su elección ha venido motivada por sencillez y flexibilidad.
Para complementar utilizaré la librería de aserciones [Chai](https://www.chaijs.com/). Ya que es muy sencilla, detrás de ella hay una gran comunidad y es un proyecto muy documentado.


La estructura de directorios se plantea de la siguiente forma: 
- src
 - class (Entidades) 
  - [imagen.js](https://github.com/alexrodriguezlop/HDN.PG/blob/master/src/class/imagen.js) (Entidad principal)
  - [raw.js](https://github.com/alexrodriguezlop/HDN.PG/blob/master/src/class/raw.js) 
 - test (Directorio de test)
  - [test.js](https://github.com/alexrodriguezlop/HDN.PG/blob/master/test/test.js) 
  - [testImagen.js](https://github.com/alexrodriguezlop/HDN.PG/blob/master/test/testImagen.js) 
  - [testRaw.js](https://github.com/alexrodriguezlop/HDN.PG/blob/master/test/testRaw.js) 
  
___
### Serverless :new:

Para el **Hito5** se han desplegado dos funciones del proyecto. 
Una de ellas haciendo uso de Azure Functions y la otra, como un Bot para Telegram haciendo uso de Vercel.

Ambas funciones pretenden dar solución a [HU4](https://github.com/alexrodriguezlop/HDN.PG/issues/13) 
*(Conocer que día y a que hora fue cifrado el mensaje en una imagen).*

Para llevar a cabo dicha solución se han planteado contar con un registro de los cifrados que se realizan.
Con el fin de salvaguardar la intimida, el sistema no almacenará el mensaje, sino que almacenará su hash, la fecha y la hora del cifrado con lo que el usuario podrá acceder a esta información introduciendo exactamente la misma cadena que fue cifrada.

Para llevar a cabo el registro de la fecha y hora del cifrado se ha desarrollado una función, la cual ha sido desplegada haciendo uso de Azure function.

[Guía de desarrollo](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Azure/Readme.md)

[URL](https://hashinsert.azurewebsites.net/api/hashInsert?msg=cadena%20de%20prueba) de la función desplegada.


Para llevar a cabo la consulta de dichos datos se ha desarrollado un bot de Telegram.

[Guía de desarrollo del bot](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/TelegramBot)

[Acceso al BOT @H20DTbot](https://t.me/H20DTbot)

La decisión de usar Azure ha venido motivada por su potencial, es una plataforma de pago y he tenido la posibilidad de usar su versión educación. Hasta 100$.
Aunque es una plataforma muy compleja aporta gran cantidad de funcionalidades y diciendo gran cantidad me quedo corto, ya que es una de las más potentes y versátiles del mercado.

Vercel sin embargo el una plataforma muy simple y en su simpleza está su sencillez. 
Dispone de las funcionalidades justas, ya que se centra únicamente en el despliegue de pequeñas funciones, pero está muy depurada.
Su uso es muy sencillo al igual que su integración con GitHub.
Dispone de un log muy útil a la hora de encontrar errores.

**Nota para el corrector:**
Tanto el desarrollo de la función como del Bot de Telegram comenzaron en un repositorio diferente, con lo cual en la migración al repositorio principal algunos issues han quedado allí. 
Dejo un [enlace](https://github.com/alexrodriguezlop/HashFinderDT/issues?q=is%3Aissue+is%3Aclosed) por si fuera necesario.
___
### Últimos ficheros añadidos :new:

- [Fichero **5.json**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/5.json) :new: 

- [Fichero **iv.yaml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/iv.yaml) :new:


___
### Historias de usuario
- [Directorio](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/)


___
**Autor:** Alejandro Rodríguez López



