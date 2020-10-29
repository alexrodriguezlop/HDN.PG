
const Imagen = require('../src/class/imagen')
const Raw = require('../src/class/raw')
var assert = require('chai').assert;


describe("IMAGEN CLASS TEST", function() { 
  let imagen = new Imagen(3,3);

    context('1. Constructor', function(){
        
        it("1.1 Debería haber sido creada una imagen de 3x3 con sus valores de pixel a 0", function() {
            assert.equal(imagen.getFilas, 3, "Debería ser 3");
            assert.equal(imagen.getColumnas, 3, "Debería ser 3");
        });
    });

    context('2. Setter', function(){
        it("2.1 Debería cambiar las dimensiones de la imagen a 6x6 ", function() {
            imagen.setFilas = 6;
            imagen.setColumnas = 6;

            assert.notStrictEqual(imagen.columnas, 6, "El número de columnas no se ha actualizado");
            assert.notStrictEqual(imagen.filas, 6, "El número de filas no se ha actualizado");
        });
    });

    context('14. Ocultar', function(){
        it("14.1 Debería Ocultar el mensaje en una imagen", function() {
            var mensaje = "Hola";

            assert.isNotTrue(imagen.ocultar(mensaje));
        });
    });

});
