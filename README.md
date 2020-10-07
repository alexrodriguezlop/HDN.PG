# [HDN.PG](https://alexrodriguezlop.github.io/HDN.PG/)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 

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
### Solución planteada :new:
El planteamiento de la solución consiste en desarrollar un microservicio Restfull.
Esta opción brinda muchísimas ventajas frente a otras arquitecturas. 

Nos permitirá desarrollar el proyecto de forma ágil basando el desarrollo en test, adquiriendo un ciclo de desarrollo dinámico, rápido y eficaz.

Esta arquitectura presenta gran escalabilidad y versatilidad y node.js es un gran lenguaje para llevar a cabo el desarrollo de este tipo de arquitecturas debido a su simplicidad, ligereza y naturaleza.

El microservicio a desarrollar permitirá aplicar el algoritmo de cifrado sobre un texto y una imagen dando como resultado una nueva imagen. 
No se desarrollará un *frontend* para el servicio con lo que las peticiones se realizaran usando [postman](https://www.postman.com/).

Su estructura en un principio estará formada por una **clase imagen**, objeto en el cual se codificará la imagen sobre la que se aplicará el cifrado. y un **módulo cifrado**.
Este será el encargado de llevar a cabo todas las operaciones sobre el objeto imagen.

El microservicio pretende incorporar un sistema de **log** con el fin de poder realizar un mejor seguimiento de los problemas que presente, para ello se utilizará el paquete npm [morgan](https://www.npmjs.com/package/morgan).

El microservicio en un principio se desarrollará haciendo uso de [restify](http://restify.com/), un ligero framework para el desarrollo de aplicaciones en js.
Aunque quizás use la libreria [micro](https://github.com/vercel/micro).

Se ha planteado la incorporación de algunas herramientas más.  [Gulp](https://gulpjs.com/) para automatización de tareas y  [Mocha](https://mochajs.org/) para testeo aunque no son una elección definitiva.

La estructura de directorios se plantea de la siguiente forma:
- src
  - class (Entidades) 
  - class/cifrado.js (Entidad principal)

___
### Configuración 

- [Configuración de GitHub y de repositorios](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/configuraci%C3%B3n%20del%20repositorio)
- [Primeros pasos](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Primeros%20pasos) :new:

___
### Herramientas

Este proyecto se escribirá en **node.js**.
Dada su flexibilidad y escalabilidad. Además de la activa comunidad que se esconde tras este lenguaje.

- [Express](https://expressjs.com/)	(*Framework*)
- [Gulp](https://gulpjs.com/)	(*Automatización de tareas*)
- [Mocha](https://mochajs.org/)		(*Testeo y pruebas*)
___
### Historias de usuario :new:

- [HU1](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU1.md)
- [HU2](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU2.md)
- [HU3](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU3.md)

___
### Páginas de interés

[Documentación](https://alexrodriguezlop.github.io/HDN.PG/)

[Guía de Git](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Mini%20guias/Git.md)

___

**Autor:** Alejandro Rodríguez López