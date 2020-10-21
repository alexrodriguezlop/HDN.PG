/**
 * Clase raw
 * Representa la matriz de datos de la imagen (vector de pixeles)
 * */
class Raw {

	/**
     @constructor con parámetros
     Crea un buffer de bytes (pixeles) con valor 0x0. del tamaño de la imagen.   
	 * */ 
	constructor(filas = 0, columnas = 0){
        this._buffer = new ArrayBuffer(filas * columnas);
        this._datos = new Uint8Array(this._buffer);
    }

	/**
	Getter: Obtiene un array de pixeles.
	@returns {ArrayBuffer} array de píxeles.
	*/
	get getRaw() {
        return this._buffer;
	}
 

	/** 
	setter: Establece un array de pixeles.
    @param {ArrayBuffer} raw.
	*/ 
	set setRaw(raw) {
        this._buffer = raw;
	}


    /**
	Obtiene un pixel dada una posición.
	@returns {number} byte de píxeles.
	*/
	getPixel() {
		
	}
 

	/** 
	Establece un pixel dada una posición.
    @param {number} pixel.
    @param {int} posicion.
	*/ 
	setPixel(pixel, posicion) {
	}



	/**
	Enciende el bit menos significativo de un pixel. 
	@param {int} posición del pixel.

	*/
	enciende(posicion){
    }
    


    /**
	Apaga el bit menos significativo de un pixel. 
	@param {int} posición del pixel.

	*/
	apaga(posicion){
	} 

}
module.exports = Raw;