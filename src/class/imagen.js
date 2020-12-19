const Raw = require('./raw');
//const fs = require('fs');


/**
 * Clase objeto imagen 
 * */
class Imagen {

	/**
	 @constructor con parámetros
	**/ 
	constructor(data, tipo, ancho, alto, valorMax, posBin){
		// Tipo de imágen: 5: Binaria, 2: Ascii.
		this._tipo = tipo;
		this._ncolumnas = ancho;
		this._nfilas = alto;
		// Maximo valor de pixel en la imágen
		this._valorMax = valorMax;
		// Posición donde comienza la imágen
		this._posBin = posBin;
		this._datos = new Raw(data);
	}



	/**
	Getter: Obtiene la matriz de píxeles
	@returns {Array} de píxeles
	*/
	getDatos() {
		return this._datos;
	}
 


	/** 
	Getter: Obtiene el número de filas 
	@returns {int} número de filas
	*/ 
	getFilas() {
		return this._nfilas;
	}


		/** 
	Getter: Obtiene el el comienzo de la imagen 
	@returns {int} pos binaria en el bufer
	*/ 
	getPosBin() {
		return this._posBin;
	}



	/** 
	Getter: Obtiene el número de columnas
	@returns {int} número de columnas
	*/ 
	getColumnas() {
		return this._ncolumnas;
	}


	/** 
	Getter: Obtiene el número de carcateres maximo de un mensaje
	@returns {int} número caracteres
	*/ 
	getMaxTam() {
		return parseInt((this._ncolumnas * this._nfilas)/8);
	}
	

	/**
	 * setter: Establece el número de columnas
	 * @param {int} ncolumnas número de columnas
	 */
	setColumnas(ncolumnas) {
		this._ncolumnas = ncolumnas;
	}


	
	/**
	 * setter: Establece el número de filas
	 * @param {int} nfilas número de filas
	 */
	setFilas(nfilas) {
		this._nfilas = nfilas;
	}
	


	/**
	Setter: Establece la matriz de píxeles
	@param {Array} datos de píxeles
	*/
	setDatos(datos) {
		this._datos = datos;
	}
	 

	/**
	Carga una imagen desde un fichero 
	@param {string}  nombre del fichero que contiene la imagen
	@returns {boolean} true	si ha tenido éxito en la lectura o false en caso contrario.
	*/
	leerImagen(path){

	}


	/**
	Guarda una imagen desde un fichero 
	*/
	escribirImagen(path){
		//fs.writeFileSync(path,  this._datos.getRaw());
	} 


	/**
	Calcula una posición dadas sus coordenadas x,y
	@param {int} x  número de fila.
	@param {int} y número de columna.
	@return {int} valor de índice.
	*/
	getIndice(x, y){
		var columnas = getColumnas();
		var i = y * columanas + x;

		return i;
	} 

	/**
	Devuleve el valor de un pixel dada una posición
	@param {int} posicion del pixel a devolver.
	@returns {int} valor entero del pixel correspondiente a la posición.

	Podría leer fuera del array, el método comprobará la posición.
	*/
	getPixel(posicion){
		return this._datos.getPixel(posicion);
	} 


	/**
	Devuleve el tamaño en pixeles de la imagen
	@returns {int} tamaño en pixeles de la imagen
	*/
	getNumPixel(){
		return 	parseInt(this._ncolumnas * this._nfilas);
	}


	/**
	Establece el valor de un pixel dada una posición
	@param {int} posicion a insertar el pixel.
	@param {int} valor del pixel a insertar.

	Podría insertarse fuera del array, el método comprobará la posición.
	*/
	setPixel(posicion, pixel){
		this._datos[posicion]= pixel;
	} 


	/**
	Oculta una cadena dentro de una imagen 
	@param {string} mensaje cadena que contendra el mensaje a ocultar
	@returns {boolean}  estado de la ejecución de la operación a modo de bool

	La cadena debera tener un tamaño adecuado, en caso de 
	no caber en la imagen se producirá un error.

	HU-1 Ocultar mensaje
	*/
	ocultar(mensaje){
		//Pixeles que ocupará:
		mensaje = mensaje + '\0'; 

		//(longituda * 8 bit para calcular cuantos pixeles ocupará)
		var totalPixelesMensaje = ((mensaje.length) * 8);
		var raw = this.getDatos();
		var estado = false;

		//Tamaño de imagen
		var pixelsImagen = this.getNumPixel();

		//Comprobar que la cadena cabe en la imagen
		if (totalPixelesMensaje < pixelsImagen){	
			var pos = this.getPosBin();
			var longitud;

			var bit;
			//Recorre caracteres del mensaje
			for(var i=0; i < mensaje.length; i++){
				longitud = mensaje.charCodeAt(i).toString(2).length;
				
				//Recorre los bits validos de cada caracter
				for(var j=0; j<mensaje.charCodeAt(i).toString(2).length; j++){

					// Salva los 0s a la izq
					while(longitud < 8){
						longitud ++;
						raw.apaga(pos,0);
						pos ++;
					}

					//Modificar el pixel con el bit del mensaje
					//True bit a 1 -> enciende el bit en el pixel
					if(mensaje.charCodeAt(i).toString(2)[j] == 1){
						//Chequea el estado y solo enciende cuando está apagado
						raw.enciende(pos,0);
					}
					else
						if(mensaje.charCodeAt(i).toString(2)[j] == 0)
							raw.apaga(pos,0);
					
					//Nota: Enciende y apaga lo hacen sobre el bit menos significativo (8) del pixel	
					pos ++;
				}
			}
			estado = true;
		}
		return estado;
	}


	/**
	Comprueba si existe una cadena dentro de una imagen 
	@returns {boolean} estado de la ejecución de la operación a modo de bool

	HU-2 Comprobar si existe mensaje
	*/
	chequear(){
		
	}



	/**
	Recupera una cadena oculta en una imagen 

	@returns {string} cadena oculta en la imagen.
	Existe el caso de error en que la imagen no contenga mensaje oculto

	HU-3 Revelar mensaje oculto
	*/
	revelar(){
		//Permite definir el punto de parada
		var estado = true;

		//Tamaño de la imagen en pixeles
		var pixelsImagen = this.getNumPixel();

		//maximo valor posible de mensaje
		var mensaje = new Raw(null,this.getMaxTam());

		//Contadores
		var pixelActual = this.getPosBin(); 
		var caracterActual = 0;
		var raw = this.getDatos(); 
		var bit;
	
		do{//Mientras caracter no sea centinela
			
			//Recorre los 8 bits de cada caracter
			for(var j = 7; j >=0  && estado; j--){
				//Calcula el bit menos significativo
				bit = raw.cuentaBits(pixelActual);

				if(raw.check(pixelActual, bit))
					//Encender en caracter la posicion correspondiente a ese bit
					mensaje.enciende(caracterActual, j);
				else
					//Apagar en caracter la posicion correspondiente a ese bit
					mensaje.apaga(caracterActual, j);
					
				pixelActual++;

				//Comprobacion de que no hay mensaje, recorre hasta el fin de la imagen.
				estado = (pixelActual <= pixelsImagen);
			}
			//console.log("CaracterActual: " + mensaje.getPixel(caracterActual));
			caracterActual++;

			if(estado == true)
				estado=(mensaje.getRaw().length <= this.getMaxTam());

		//Repite mientras no haya error y no se encuentre el final del mensaje.
		}while((mensaje.getPixel(caracterActual -1) !== "\0".charCodeAt()) && estado); 

		// Eliminar el sobrante de ceros
		return mensaje.getRaw().toString().slice(0,caracterActual-1);
	}



	/**
	Recupera los metadatos de cifrado en una imagen 

	@returns {string}  cadena con los metadatos de la imagen.
	Existe el caso de error en que la imagen no contenga metadatos.

	HU-4 Conocer fecha y hora del cifrado
	*/
	getMetadatos(){
	}

}
module.exports = Imagen;