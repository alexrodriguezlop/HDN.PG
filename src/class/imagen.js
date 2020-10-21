const Raw = require('./raw')

/**
 * Clase objeto imagen 
 * */
class Imagen {

	/**
	 @constructor con parámetros
	 * */ 
	constructor(nfilas = 0, ncolumnas = 0){

		this._nfilas = nfilas;
		this._ncolumnas = ncolumnas;

		this._datos = new Raw(this._nfilas, this._ncolumnas);
	}



	/**
	Getter: Obtiene la matriz de píxeles
	@returns {Array} de píxeles
	*/
	get getDatos() {
		return this._datos;
	}
 


	/** 
	Getter: Obtiene el número de filas 
	@returns {int} número de filas
	*/ 
	get getFilas() {
		return this._nfilas;
	}



	/** 
	Getter: Obtiene el número de columnas
	@returns {int} número de columnas
	*/ 
	get getColumnas() {
		return this._ncolumnas;
	}



	/** 
	setter: Establece el número de columnas
	@param {int} número de columnas
	*/ 
	set setColumnas(ncolumnas) {
		this._ncolumnas = ncolumnas;
	}


	
	/** 
	setter: Establece el número de filas
	@param {int} número de filas
	*/
	set setFilas(nfilas) {
		this._nfilas = nfilas;
	}
	


	/**
	Setter: Establece la matriz de píxeles
	@param {Array} datos de píxeles
	*/
	set setDatos(datos) {
		this._datos = datos;
	}
	 

	/**
	Carga una imagen desde un fichero 
	@param {string}  nombre del fichero que contiene la imagen
	@returns {boolean} true	si ha tenido éxito en la lectura o false en caso contrario.
	*/
	leerImagen(nombre){
	}


	/**
	Guarda una imagen desde un fichero 
	@param {string} nombre del fichero que contiene la imagen
	@returns {boolean} true	si ha tenido éxito en la escritura o false en caso contrario.
	*/
	escribirImagen(nombre){
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
		return this._datos[posicion];
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
		// Más un caracter para el Centinela
		//Tamaño de cadena
		var pixelsCadena = ((mensaje.length +1) * 8);

		//Tamaño de imagen
		var pixelsImagen = (this.getFilas * this.getColumnas);
	
		//Comprobar que la cadena cabe en la imagen
		if (pixelsCadena < pixelsImagen){
			
			//Creando un pixel temporal
			var pixelTmp;
			var pos=0;
	
			for(var i=0; i <= pixelsCadena; i++){
	
				for(var j=7; j>=0; j--){
					//Obtener el pixel a modificar
					pixelTmp = this.getPixel(i);
	
					//Modificar el pixel con el bit del mensaje
					//Si está encendido
					//Extrae cada caracter y de ese caracter sus bits
					var m = mensaje[i].readUInt8()
					if(m[j])//Obtiene la letra y el bit correspondiente
						this._datos.enciende(i);
					else
						this._datos.apaga(i);
						
					//Asignando pixel modificado
					this._datos.setPixel(pixelTmp, pos)
					pos ++;
	
				}
			}
		}
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