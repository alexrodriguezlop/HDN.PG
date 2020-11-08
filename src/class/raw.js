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
	Establece un pixel dada una posición.
    @param {number} pixel.
    @param {int} posicion.
	*/ 
	setPixel(pixel, posicion) {
        this._datos[posicion] = pixel;
    }


    /**
    Obtiene un pixel dada una posición.
    @param {int} posicion.
	@returns {number} byte de píxeles.
	*/
	getPixel(posicion) {
		return this._datos[posicion];
	}


	/**
	Enciende el bit menos significativo de un pixel. 
	@param {int} posición del pixel.

	*/
	enciende(posicion){
        this._datos[posicion] = (this._datos[posicion] | '00000001'); //enciende 
    }



    /**
	Comprueba si el bit menos significativo de un pixel está encendido o apagado. 
    @param {int} posición del pixel.
    @returns {boolean} estado. (TRUE - encendido | FALSE - apagado)

	*/
	check(posicion){
        if (this._datos[posicion] & '00000001' !== 0)
            return true;
        else    
            return false;  
    }
    

    /**
	Apaga el bit menos significativo de un pixel. 
	@param {int} posición del pixel.

	*/
	apaga(posicion){
        this._datos[posicion] = (this._datos[posicion] & '11111110') ; //apaga 
	} 

}
module.exports = Raw;