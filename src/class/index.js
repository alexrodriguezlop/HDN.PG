/*
Función manejadora que recibirá los parametros en una petición asincrona 
y realizará las llamadas pertinentes

Creará una imagen a partir de un fichero imagen.
index -> Imagen -> Raw

Raw es la imagen en un bufer
imagen contiene dicho bufer y además los metadatos extraidos de la imagen 

*/

const Imagen = require('./imagen');
//const Funciones = require('./funciones');
const fs = require('fs')



/**
 * Función manejadora:
 * Extrae el nombre del fichero y el mensaje y lo carga para despues cifrarlo.
 * 
 * LLegan dos parámetros (IMG y cadena)
 * Se preparan los parametros y se mandan sengún la ruta 
 */
fs.readFile('./30.pgm', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //Hacer si no hay error:
    var filas = numFilasMeta(data);
    var meta = leerMeta(data);
    
    //TIPO; ANCHO; ALTO; VALOR_MAX; BIN;
    img = new Imagen(data, meta[0], meta[1], meta[2], meta[3], meta[4]);
    console.log(data)
    console.log(filas)
    console.log(meta)
  })

