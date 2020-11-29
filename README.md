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
### Integración continua :new:
**¿Por que [TravisCi](https://travis-ci.org/)?**

Me decanté por Travis como primera plataforma, en este caso por su versión **org** en la que ya disponia de una cuenta. 
Su elección se centra en dos motivos fundamentales, su fácil integración con GitHub y su coste, ya que es gratuito,no tiene costes de mantenimiento y permite el uso de jobs en paralelo. 
Es una herramienta muy robusta y bien documentada.
Además tanto su configuración como su uso son muy sencillos y presenta una interfaz muy clara y funcional.

He utilizado mi propia imagen Docker. Para ello basta con especificar su uso en el fichero [travis.yml](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.travis.yml).


**¿Por qué [CircleCi](https://circleci.com/)?**

Por otro lado CircleCi también dispone de integración con GitHub, su coste es gratuito y he verificado que es muchísimo más rápido que travis lo cual ha suscitado mi interés.
 
Su configuración es similar a la de Travis, se realiza mediante el uso de un fichero [config.yml](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.circleci/config.yml).

Aunque dispone de distintos planes el plan free incluye 1 trabajo simultáneo con acceso a Linux, lo cual es suficiente para mis necesidades.
Además cuenta con una gran comunidad y es sencillo encontrar información para resolver los problemas que puedan surgir.
Como su política es de pay-per-use la versión free dispone de 2.500 créditos.

Además, ambas herramientas proporcionan badges que podemos incluir en nuestro repositorio y nos permiten conocer fácilmente el estado de los test.

Las configuraciones llevadas a cabo se detallan [aquí](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Integraci%C3%B3n%20continua). 

___
### Serverless :new:

**Despliegue de una función usando Vercel:**

Se ha desarrollado una función que consulta la fecha y hora en que se cifró un texto en base a su hash.
Esta información se almacena en un fichero JSON y se compoine de:

```
{
    "lista":
    [
        { 	
            "hash": "098f6bcd4621d373cade4e832627b4f6",
            "fecha": "22-9-2020",
            "hora": "15:00",
            "comentario": "test (Los mensajes no se almacenan. esto es un comentario)"
        }
    ]
}
```

Esta función pretende dar solución a la [HU4](https://github.com/alexrodriguezlop/HDN.PG/issues/13)

[Explicación de su realización](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Vercel)
[código](https://github.com/alexrodriguezlop/HashFinderDT/blob/1f31f70c455102fb89d7b3222d2125cf8d5edf26/api/app.js)

**Despliegue de un bot para telegram usando vercel:**
Se ha desarrollado un bot para telegram que proporciona acceso a la fecha y hora en que se cifró un mensaje.

[Repositorio del bot](https://github.com/alexrodriguezlop/HashFinderDT)
[Acceso al BOT @H20DTbot](https://t.me/H20DTbot)
[Explicación de su desarrollo](https://github.com/alexrodriguezlop/HashFinderDT/blob/main/README.md)

Tanto el bot como la función han sido desarrolladas en un nuevo repositorio.
___
### Últimos ficheros añadidos :new:

- [Fichero **.travis.yml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.travis.yml) :new: 

- [Fichero **config.yml**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.circleci/config.yml) :new:


___
### Historias de usuario
- [Directorio](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/)


___
**Autor:** Alejandro Rodríguez López



