# [HDN.PG](https://alexrodriguezlop.github.io/HDN.PG/)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 

___
### [README Completo](https://github.com/alexrodriguezlop/HDN.PG/blob/master/README_FULL.md)
___
### Docker :new:
He echado un vistazo a las imágenes que la plataforma docker proporcionaba con el fin de encontrar una que se adapte a las necesidades del proyecto.
La idea es que el contenedor sea ligero y contenga los paquetes mínimos para un correcto funcionamiento.
Es importante también tener en cuenta el tiempo de creación de la imagen, un dato muy importante, ya que influirá en gran medida cuando levantemos el contenedor y se espera que este proceso transcurra lo más rápido posible. 

Después de revisar las opciones ofertadas por la plataforma he centrado mi atención en varias versiones oficiales de node (*siempre última LTS*), ya que me ofrece una gran cantidad de contenedores base y flexibilidad a la hora de elegir una versión de node debido a que dispone de muchisimas combinaciones.

Voy a estudiar las opciones para determinar cual es la mas apropiada.


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

Toda la comprartiva se ha documentado [graficamente](https://github.com/alexrodriguezlop/HDN.PG/tree/master/docs/Comparativa%20de%20docker).

Teniendo en cuenta la comparativa de tiempos he elegido entre **node:lts-buster-slim** y **node:lts-stretch-slim** decidiendome por **node:lts-stretch-slim**.
No es la más rapida a simple vista pero es la que tiene un mejor equilibrio entre sus tiempos y se encuentra entre las de menor tamaño.

He intentado que la imagen cumpla con una serie de requisitos:
- Propósito único y bien definido
- Diseño genérico con la capacidad de inyectar configuración en tiempo de ejecución
- Tamaño pequeño
- Fácil de entender

He optimizado la imagen reduciendo el tamaño de su capa ajustando las instrucciones de RUN.

Al final de cada instrucción RUN docker confirma los cambios como una capa de imagen adicional.
Con lo cual a menos instrucciones RUN, menos capas y menos peso.

Si en algún momento fuera necesario el cambio de imagen bastaría con editar la linea **FROM** del *dockerfile* y esta se reconstruiria automaticamente en dockerhub.

Ademas he configurado mi repositorio de DockerHub con un triger que reconstruye la imagen ante cualquier cambio en los ficheros relacionados con ella en mi repositorio de GitHub.

___
### Registros alternativos :new:
Como registro alternativo he utilizado GitHub, el uso es muy sencillo.

los pasos a seguir son:

1. Buid:
`docker build -t alexrodriguezlop/TAG .`

2. Tag
`docker tag ID_IMAGEN docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`

**Nota:** `docker image push is only supported with a tag of the format :owner/:repo_name/:image_name.`

3. Login:
`cat ./TOKEN.txt | docker login https://docker.pkg.github.com -u alexrodriguezlop@gmail.com --password-stdin`

**Nota:**
Es necesario crear un token de acceso y guardarlo en el fichero TOKEN.txt para poder realizar el login sin problemas. 

1. Push 
`docker push docker.pkg.github.com/alexrodriguezlop/hdn.pg/TAG:Versión`

___
### Últimos ficheros añadidos :new:

- [Fichero **package.json**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/package.json)

- [Fichero **package-lock.json**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/package-lock.json) 
  
- [Fichero **gulpfile.js**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/gulpfile.js) 
  
- [Fichero **Dockerfile**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/Dockerfile) :new:

- [Fichero **.dockerignore**](https://github.com/alexrodriguezlop/HDN.PG/blob/master/.dockerignore) :new:

___
### Historias de usuario
- [Directorio](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/)
- [HU1](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU1.md)
- [HU2](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU2.md)
- [HU3](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU3.md)
- [HU4](https://github.com/alexrodriguezlop/HDN.PG/blob/master/HU/HU4.md)

___

**Autor:** Alejandro Rodríguez López
