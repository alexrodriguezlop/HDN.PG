/**
 * Clase objeto imagen 
 * */
class Imagen {

	/**
	 @constructor con parámetros
	 * */ 
	constructor(nfilas, ncolumnas){
		this.datos //Matriz de píxeles
		this.nfilas = nfilas;
		this.ncolumnas = ncolumnas;

		console.log("CONSTRUYENDO UNA IMAGEN");
	}



	/**
	Getter: Obtiene la matriz de píxeles
	@returns {Array} de píxeles
	*/ 
	get datos() {
		return this.datos();
	}



	/** 
	Getter: Obtiene el número de filas 
	@returns {int} número de filas
	*/ 
	get filas() {
		return this.nfilas();
	}



	/** 
	Getter: Obtiene el número de columnas
	@returns {int} número de columnas
	*/ 
	get columnas() {
		return this.ncolumnas();
	}



	/** 
	setter: Establece el número de columnas
	@param {int} número de columnas
	*/ 
	set columnas(ncolumnas) {
		this.ncolumnas = ncolumnas;
	}


	
	/** 
	setter: Establece el número de filas
	@param {int} número de filas
	*/ 
	set filas(nfilas) {
		this.nfilas = nfilas;
	}
	


	/**
	Setter: Establece la matriz de píxeles
	@param {Array} datos de píxeles
	*/ 
	set datos(datos) {
		this.datos = datos;
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
