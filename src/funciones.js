
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
    "numFilasMeta": numFilasMeta,
    "leerMeta": leerMeta
};