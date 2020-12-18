const Imagen = require('../src/class/imagen');
const fs = require('fs');

/**
 * Cargar una imagen 
 * @param {*} path ruta de la imagen
 * @returns {Imagen} imagen cargada
 */
function cargar(path){
    //Mover a otro dir con otro nombre
    //fs.renameSync(path, nombre);
    let file = fs.readFileSync(path);
    let metadatos = leerMeta(file);
    let imagen = new Imagen(file, metadatos[0], metadatos[1], metadatos[2], metadatos[3], metadatos[4]);

    return imagen;
}

/**
 * chequear una imagen 
 * @param {*} path ruta de la imagen
 * @returns {boolean} True en caso de contener mensaje
 */
function chequear(path){
    let img = cargar(path);
    return img.chequear();
}

/**
 * Cargar una imagen y oculta el mensaje 
 * @param {string} path ruta de la imagen
 * @param {string} mensaje a ocultar
 * @param {string} nombre del fichero 
 * @returns {Buffer} buffer
 */
function ocultar(path,nombre, mensaje){
    let img = cargar(path);
    img.ocultar(mensaje);
    
    //img.escribirImagen('../Img/'+nombre);
    
    return img.getDatos().getRaw();
}

/**
 * Cargar una imagen y revela el mensaje 
 * @param {*} path ruta de la imagen
 * @returns {string} msg contenido
 */
function revelar(path){
    let img = cargar(path);
    let msg = img.revelar();

    return msg;
}


/**
 * cuenta cuantas filas de metadatos tiene la imágen
 * Necesario por posible existencia de comentarios
 * @param {Buffer} file Buffer fs
 * @returns {int} filas número de filas que tienen metadatos.
 * 
 */
function numFilasMeta(file){
    
    var filas =  file.toString().split('\n').length - 1;
    return filas;
}

/**
 * Extrae los metadatos de una imagen.
 * @param {Buffer} file buffer fs
 * @returns {IntArray} metadata
 * Contenido de metadata:
 * TIPO; ANCHO; ALTO; VALOR_MAX; BIN; 
 */
function leerMeta(file){
    //***Leer metadata***
    var pos = 0;
    var metadata = [];
    var tmp;
    var comentario;
    var nFilas = numFilasMeta(file);
    var linea = file.toString();
    // Recorre por filas
    for(var f=0; f<nFilas; f++){
        tmp = "";
        comentario = false;
        //Recorre por caracteres en fila
        while( linea[pos] != '\n'){
            
            //Almacena valores separados de una misma fila como distintos elementos 
            if( linea[pos] == " "){
                //Caso de mas de un espacio
                while ( linea[pos +1] == " ")
                    pos ++;

                metadata.push(tmp);
                tmp = "";
            }
            else{
                //Salta comentarios en metadatos
                if( linea[pos] == "#"){
                    while( linea[pos +1] != '\n'){
                        pos ++;
                    }
                    comentario = true;
                }
                else
                    //Evita carcateres no deseados como retornos de carro
                    if( file[pos] > 48 &&  file[pos] < 57)
                        tmp = tmp +  linea[pos];
            }
            pos ++;
        }
        if(!comentario)
            metadata.push(tmp);
        
        pos ++;
    }
    //Comienzo binario
    metadata.push(pos);

    return metadata;
}


module.exports = {
    "ocultar": ocultar,
    "revelar": revelar,
    "chequear": chequear
};

//module.exports = {imgController}