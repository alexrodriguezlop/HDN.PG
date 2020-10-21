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
	Devuleve el valor de un pixel dada una posición
	@param {int} fila del pixel a devolver.
	@param {int} columna del pixel a devolver.
	@returns {int} valor entero del pixel correspondiente a la posición.

	Podría leer fuera del array, el método comprobará la posición.
	*/
	getPixel(fila, columna){
		var columnas = getColumnas();
		var i = columna * columanas + fila;

		return this._datos[i];
	} 


	/**
	Establece el valor de un pixel dada una posición
	@param {int} fila del la posición a insertar el pixel.
	@param {int} columna del la posición a insertar el pixel.
	@param {int} valor del pixel a insertar.

	Podría insertarse fuera del array, el método comprobará la posición.
	*/
	setPixel(fila, columna, pixel){
		var columnas = getColumnas();
		var i = columna * columanas + fila;

		this._datos[i]= pixel;
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