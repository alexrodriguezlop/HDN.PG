# [HDN.PG](https://github.com/alexrodriguezlop/HDN.PG)
Microservicio para el cifrado y descifrado de mensajes en imágenes.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 

## Hablemos de esteganografía
La esteganografía es el arte de ocultar información.

En este [Articulo de xataka](https://www.xataka.com/historia-tecnologica/cuando-una-imagen-oculta-mas-informacion-de-lo-que-parece-que-es-y-como-funciona-la-esteganografia) se trata el tema desde sus origenes hasta la actualidad.

También podemos dar una vuelta por [wikipedia](https://es.wikipedia.org/wiki/Esteganograf%C3%ADa) para saber un poco mas del asunto.

El microservicio se centrará en la ocultación de información dentro de imágenes utilizando una tecnica que consiste enla inserción de información en el [bit menos significativo](https://es.wikipedia.org/wiki/Bit_menos_significativo) de cada pixel. 

Entendiendo que una imagen es una matriz de pixeles numéricos que proporcionan información de cada pixel como su color, etc..

![img](img/imagematrix.png) 


