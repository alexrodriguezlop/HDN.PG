var Imagen = require('./imagen.js')

/**
 * Módulo encargado de realizar operaciones de cifrado sobre una imágen 
 * */


/**
Oculta una cadena dentro de una imagen 
Parámetro A cadena que contendra el mensaje a ocultar
Parámetro B Imagen destino
Devolverá el estado de la ejecución de la operación a modo de bool

La cadena debera tener un tamaño adecuado, en caso de 
no caber en la imagen se producirá un error.

HU-1 Ocultar mensaje
*/
function ocultar(A, B){		

}

/**
Comprueba si existe una cadena dentro de una imagen 
Devolverá el estado de la ejecución de la operación a modo de bool
Parámetro A Imagen fuente

HU-2 Comprobar si existe mensaje
*/
function chequear(A){		

}


/**
Recupera una cadena oculta en una imagen 
Parámetro A Imagen fuente

Devolverá la cadena oculta en la imagen.
Existe el caso de error en que la imagen no contenga mensaje oculto

HU-3 Revelar mensaje oculto
*/
function revelar(A){

}

/**
Recupera los metadatos de cifrado en una imagen 

Devolverá una cadena con los metadatos de la imagen.
Existe el caso de error en que la imagen no contenga metadatos.

Parámetro A Imagen fuente

HU-4 Conocer fecha y hora del cifrado
*/
function getMetadatos(A){

}

