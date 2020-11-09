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
### Docker 
He echado un vistazo a las imágenes que la plataforma docker proporcionaba con el fin de encontrar una que se adapte a las necesidades del proyecto.
La idea es que el contenedor sea ligero y contenga los paquetes mínimos para un correcto funcionamiento.
Es importante también tener en cuenta el tiempo de creación de la imagen, un dato muy importante, ya que influirá en gran medida cuando levantemos el contenedor y se espera que este proceso transcurra lo más rápido posible. 

Después de revisar las opciones ofertadas por la plataforma he centrado mi atención en varias versiones oficiales de node (*siempre última LTS*), ya que me ofrece una gran cantidad de contenedores base y flexibilidad a la hora de elegir una versión de node debido a que dispone de muchísimas combinaciones.

Voy a estudiar las opciones para determinar cuál es la más apropiada.


**Medición del built:**
`time docker build -t alexrodriguezlop/tag .`

**Medición del run:**
`time docker run -t -v 'pwd':/test alexrodriguezlop/tag `

#### Comparativa:
| **Versión** | **Tiempo Build** | **Tiempo Run** | **Tamaño** | **Descripción**|
| -- | -- | -- | -- | -- |
|node:lts-alpine3.12| 1m33,689s | 0m14,055s | 168MB | Alpine 3.12 y Node:14.15 |
|node:lts-buster | 1m32,570s | 0m10,525s | 1GB |  Node:14.15 |
|node:lts-buster-slim| 1m47,808s| 0m9,684s | 265MB |  Node:14.15 | 
|node:lts-stretch| 2m41,508s| 0m12,411s | 1.02GB | Node:14.15 |
|node:lts-stretch-slim| 1m48,063s | 0m8,462s | 244MB |Node:14.15|

Toda la comparativa se ha documentado [gráficamente](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Comparativa%20de%20docker).

Teniendo en cuenta la comparativa de tiempos he elegido entre **node:lts-buster-slim** y **node:lts-stretch-slim** decidiéndome por **node:lts-stretch-slim**.
No es la más rápida a simple vista pero es la que tiene un mejor equilibrio entre sus tiempos y se encuentra entre las de menor tamaño.

He intentado que la imagen cumpla con una serie de requisitos:
- Propósito único y bien definido
- Diseño genérico con la capacidad de inyectar configuración en tiempo de ejecución
- Tamaño pequeño
- Fácil de entender

He optimizado la imagen reduciendo el tamaño de su capa ajustando las instrucciones de RUN.

Al final de cada instrucción RUN docker confirma los cambios como una capa de imagen adicional.
Con lo cual a menos instrucciones RUN, menos capas y menos peso.

Si en algún momento fuera necesario el cambio de imagen bastaría con editar la línea **FROM** del *dockerfile* y esta se reconstruiría automáticamente en dockerhub.
He configurado mi repositorio de DockerHub con un triger que reconstruye la imagen ante cualquier cambio en los ficheros relacionados con ella en mi repositorio de GitHub.

___
### Registros alternativos
Como registro alternativo he utilizado GitHub, el uso es muy sencillo.

Los pasos a seguir son:

1. Buid:  
`docker build -t alexrodriguezlop/TAG .`

1. Tag: 
`docker tag ID_IMAGEN docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`

**Nota:** 
`docker image push is only supported with a tag of the format :owner/:repo_name/:image_name.`

3. Login:
`cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u alexrodriguezlop@gmail.com --password-stdin`

**Nota:**
Es necesario crear un token de acceso y guardarlo en el fichero TOKEN.txt para poder realizar el login sin problemas. 

4. Push:  
`docker push docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`
___
### Usando contenedores :new:
#### DockerHub
`docker run -t -v 'pwd':/test alexrodriguezlop/hdn.pg`

#### GitHub container registry
`docker run -t -v 'pwd':/test docker.pkg.github.com/alexrodriguezlop/hdn.pg/hdn.pg`

___
### Integración continua :new:
**¿Por que TravisCi?**

Me decanté por Travis como primera plataforma por dos motivos fundamentales. 
Su fácil integración con GitHub y su coste, ya que es gratuito,no tiene costes de mantenimiento y permite el uso de jobs en paralelo. 
Es una herramienta muy robusta y bien documentada.
Además tanto su configuración como su uso son muy sencillos y presenta una interfaz muy clara y funcional.

He utilizado mi propia imagen Docker. Para ello basta con especificar su uso en el fichero [travis.yml](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.travis.yml).


**¿Por qué CircleCi?**

Por otro lado CircleCi también dispone de integración con GitHub, su coste es gratuito y dice ser mas rápido que travis.
 
Su configuración es similar a la de Travis, se realiza mediante el uso de un fichero [config.yml](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.circleci/config.yml).

Aunque dispone de distintos planes el plan free incluye 1 trabajo simultáneo con acceso a Linux, lo cual es suficiente para mis necesidades.
Además cuenta con una gran comunidad y es sencillo encontrar información para resolver los problemas que puedan surgir.
Como su política es de pay-per-use la versión free dispone de 2.500 créditos.

Además, ambas herramientas proporcionan badges que podemos incluir en nuestro repositorio y nos permiten conocer fácilmente el estado de los test.

Las configuraciones llevadas a cabo se detallan [aquí](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Integraci%C3%B3n%20continua). 

___
### Últimos ficheros añadidos 

- [Fichero **imagen.js**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/src/class/imagen.js)

- [Fichero **raw.js**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/src/class/raw.js) 

- [Fichero **iv.yaml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/iv.yaml)

- [Fichero **package.json**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/package.json)

- [Fichero **package-lock.json**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/package-lock.json) 
  
- [Fichero **gulpfile.js**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/gulpfile.js) 
  
- [Fichero **Dockerfile**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/Dockerfile) 

- [Fichero **.dockerignore**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.dockerignore) 

- [Fichero **.travis.yml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.travis.yml)  

- [Fichero **config.yml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.circleci/config.yml) 

___
### Configuración 

- [Configuración de GitHub y de repositorios](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/configuraci%C3%B3n%20del%20repositorio)
- [Primeros pasos](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Primeros%20pasos)
- [Testeo y automatización](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Testeo%20y%20automatizaci%C3%B3n) 


___
### Herramientas

Este proyecto se escribirá en **node.js**.
Dada su flexibilidad y escalabilidad. Además de la activa comunidad que se esconde tras este lenguaje.

- [restify](http://restify.com/)	(*Framework*)
- [Gulp](https://gulpjs.com/)	(*Automatización de tareas*)
- [Mocha](https://mochajs.org/)		(*Testeo y pruebas*)
- [jsdocs](https://jsdoc.app/)     (*Documentación*)
  
___
### Historias de usuario
- [Directorio](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/)
- [HU1](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU1.md)
- [HU2](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU2.md)
- [HU3](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU3.md)
- [HU4](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU4.md)

___
### Instalación 

Clonamos el repositorio:

`git clone https://github.com/alexrodriguezlop/HDN.PG.git`

Nos situamos en su directorio:

`cd HDN.PG`

Instalamos las dependencias del proyecto:

`npm install` 

Ejecutar test:

`npm test`

___
### Páginas de interés

[Documentación](https://alexrodriguezlop.github.io/HDN.PG/)

[Guía de Git](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Mini%20guias/Git.md)

**Gulp:**

[Guía de GULP](https://frontendlabs.io/1669--gulp-js-en-espanol-tutorial-basico-primeros-pasos-y-ejemplos)

[Guía de GULP2](https://www.adictosaltrabajo.com/2016/04/27/primeros-pasos-con-gulp/)

**Docker:**

[Guía instalación](https://www.hostinger.es/tutoriales/como-instalar-y-usar-docker-en-ubuntu/)

[Guía borrado](https://www.vidaxp.com/tecnologia/como-borrar-imagenes-contenedores-y-volumenes-docker/)

[Desplegando](https://www.digitalocean.com/community/tutorials/how-to-build-a-node-js-application-with-docker-on-ubuntu-20-04)

[DockerFile](https://desarrollofront.medium.com/las-10-instrucciones-imprescindibles-para-crear-un-dockerfile-bb439ff836d9)
___

**Autor:** Alejandro Rodríguez López
