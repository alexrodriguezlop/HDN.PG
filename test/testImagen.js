const Imagen = require('../src/class/imagen');
var assert = require('chai').assert;

describe("IMAGEN CLASS TEST", function() { 
  let imagen = new Imagen(25,25);

    context('1. Constructor', function(){
        
        it("1.1 Debería haber sido creada una imagen de 25x25 con sus valores de pixel a 0", function() {
            assert.equal(imagen.getFilas, 25, "Debería ser 25");
            assert.equal(imagen.getColumnas, 25, "Debería ser 25");
        });
    });

    context('2. Setter', function(){
        it("2.1 Debería cambiar las dimensiones de la imagen a 25x25 ", function() {
            imagen.setFilas = 30;
            imagen.setColumnas = 30;

            assert.equal(imagen.getColumnas, 30, "El número de columnas no se ha actualizado");
            assert.equal(imagen.getFilas, 30, "El número de filas no se ha actualizado");
        });
    });

    context('14. Ocultar', function(){
        it("14.1 Debería OCULTAR el mensaje en una imagen", function() {
            var mensaje = "Hola";
            assert.isTrue(imagen.ocultar(mensaje), "Deberia devolver True");
        });
    });

    context('16. Revelar', function(){
        it("16.1 Debería REVELAR el mensaje oculto en una imagen", function() {
            var mensaje = imagen.revelar(mensaje);
            //console.log("Mensaje " + mensaje);
            assert.isString(imagen.revelar(mensaje), "Deberia devolver un String");
        });
    });

});
