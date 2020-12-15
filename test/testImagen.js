const Imagen = require('../src/class/imagen');
var assert = require('chai').assert;
const fu = require('../src/class/funciones')
const fs = require('fs')


describe("IMAGEN CLASS TEST", function() { 
    let file = fs.readFileSync('./Img/3.pgm');
    let metadatos = fu.leerMeta(file);
    let imagen = new Imagen(file, metadatos[0], metadatos[1], metadatos[2], metadatos[3], metadatos[4]);

    context('14. Ocultar', function(){
        it("14.1 Debería OCULTAR el mensaje en una imagen", function() {
            var mensaje = "Hola";
            assert.isTrue(imagen.ocultar(mensaje), "Deberia devolver True");
        });
    });

    context('16. Revelar', function(){
        it("16.1 Debería REVELAR el mensaje oculto en una imagen", function() {
            var revelado = imagen.revelar();
            console.log(revelado);
            assert.isString(revelado, "Deberia devolver un string");
        });
    });

    imagen.escribirImagen("Prueba.pgm");

});
