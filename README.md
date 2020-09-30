# [HDN.PG](https://alexrodriguezlop.github.io/HDN.PG/)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 
### Motivación de la idea
---
La idea viene motivada por la necesidad de mantener seguras nuestras comunicaciones al mas estilo James Bond, Sí en efecto el propio agente 007 usaría este microservicio. Eso sí nunca te lo diría porque si no tendría que matarte.

La idea es muy sencilla. Si necesitamos comunicar un mensaje a alguien y este es alto secreto (porque la seguridad nacional está en juego) cogeremos esa imagen de gatitos que tan inofensiva parece y haciendo uso de esta maravilla de la tecnología ocultaremos en ella el mensaje. 
Ahora sí, tenemos una imagen inofensiva de la que nadie jamas sospecharía. Ya podemos mandarla por e-mail, telegram... cualquier servicio de mensajería lo mas banal posible.

Cuando su receptor la tenga en su poder bastará con pasarla de nuevo por el microservicio y este revelará la verdad entre otros datos posibles como la fuente , la fecha y la hora en que dicha información se ocultó.

La información no se almacena en los metadatos de la imagen, nada de eso. Este algoritmo es tecnología puntera.
Esta maravilla desgrana cada píxel de la imagen, añade la información y lo recompone. Como el mejor cirujano de Malibú.
Después de un trabajo que nada tiene que envidiar al de los ingenieros genéticos de jurassic park tu imagen está lista y si te hemos visto..pues no nos acordamos. 

Eso si, como dijo Ben Parker… Un gran poder conlleva una gran responsabilidad. Usalo bien.
### Configuración 
---
[Configuración de GitHub y de repositorios](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/configuraci%C3%B3n%20del%20repositorio)

### Herramientas
---
Este proyecto se escribirá en **node.js**.
Dada su flexibilidad y escalabilidad. Además de la activa comunidad que se esconde tras este lenguaje.

Aunque aún no está muy decidido es posible que para el desarrollo me apoye en algunas de estas herramientas.

- [Moleculer](https://moleculer.services/)	(*Framework*)
- [Prisma](https://www.prisma.io/)		(*Gestión DB*)
- [Mocha](https://mochajs.org/)			(*Testeo y pruebas*)

[Aún sigo revisando unos cuantos framework](https://blog.nubecolectiva.com/5-principales-frameworks-para-node-js/)


### Páginas de interés
---
[Documentación](https://alexrodriguezlop.github.io/HDN.PG/)
[Guía de Git](https://github.com/alexrodriguezlop/HDN.PG/blob/master/docs/Mini%20guias/Git.md)




-------

** Autor:** Alejandro Rodríguez López
