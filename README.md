# [HDN.PG](https://alexrodriguezlop.github.io/HDN.PG/)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Build Status](https://travis-ci.com/alexrodriguezlop/HDN.PG.svg?branch=master)](https://travis-ci.com/alexrodriguezlop/HDN.PG)
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
### Microservicio :new:  

Se ha dado solución a todas las HU y se ha alcanzado la funcionalidad completa de la aplicación.

#### Framework:

La elección del framework ha venido condicionada principalmente por la velocidad, ya que el proyecto se basa en el manejo de imágenes y buscaba transferencias muy rápidas.

Antes de determinar a **Restify** como el elegido he realizado una serie de comparativas que se pueden ver [aquí](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Elecci%C3%B3n%20de%20framework/Readme.md).

En ese documento se detallan los test realizados sobre **Restify** y **Express** junto con tablas comparativas.

También se detalla como he usado el framework.

#### Diseño:

El avance del proyecto ha obligado a realizar cambios en la estructura de ficheros.

A medida que he ido avanzando he encontrado dificultades para el tratamiento de las imágenes de forma que finalmente he tenido que desarrollar todos los métodos y funciones desde cero sin poder hacer uso de librerías para el manejo de imágenes. 

Una explicación más detallada del diseño se puede ver [aquí](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Dise%C3%B1o/README.md)

En ese documento se detalla la estructura y jerarquía seguida.

#### HU y Test:

Para el testeo de la API he realizado una serie de test que lanzando la una petición POST como si se realizara mediante el envío desde un formulario desde un frontend.
 
Se evalúa la respuesta proporcionada por la API en varios contextos:

- 1) Status de la respuesta

- 2) Formato de la respuesta

- 3) Contenido de respuesta correcto


A continuación se detalla más profundamente los test y las soluciones adoptadas para cada HU.

- [HU1](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/HU/HU1.md)
- [HU2](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/HU/HU2.md)
- [HU3](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/HU/HU3.md)
- [HU4](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/HU/HU4.md)


#### Sistema de logs:

He implementado el midleware [Morgan](https://www.npmjs.com/package/morgan) como sistema de log.

Lo he elegido por su simplicidad y fácil manejo además de su diseño como midelware.

```
var logger  = require('morgan')

server.use(logger('dev'));
```

#### Gestor de tareas:

He venido utilizando Gulp durante todo el proyecto.

Para la automatización he creado tres tareas y posteriormente las he unificado bajo default.

De esta forma la orden gulp ejecutará las tres tareas en el orden correcto. Además dichas tareas pueden ser lanzadas por separado.

[GulpFile](https://github.com/alexrodriguezlop/HDN.PG/blob/master/gulpfile.js)


#### Docker:

He creado un nuevo fichero dockerFile para adaptar el docker a las nuevas tareas de automatización.

También he reconfigurado Travis y CircleCi para lanzar los nuevos test.

[DockerFile](https://github.com/alexrodriguezlop/HDN.PG/blob/master/Dockerfile)

___
### Historias de usuario
- [Directorio](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/)

___
**Autor:** Alejandro Rodríguez López



