const Imagen = require('../src/class/imagen');
const fu = require('../src/funciones');
const fs = require('fs');
var assert = require('chai').assert;
var expect = require('chai').expect;




describe("IMAGEN CLASS TEST", function() {
    // Carga una imágen 
    let file = fs.readFileSync('./Img/Ejemplo.pgm');
    let metadatos = fu.leerMeta(file);
    let imagen = new Imagen(file, metadatos[0], metadatos[1], metadatos[2], metadatos[3], metadatos[4]);

    context('5. getMaxTam', function(){
        it("5.1 Debería calcular el máximo número de caractéres que cabe en una imágen", function() {
            var maxTam = imagen.getMaxTam();

            expect(maxTam).to.be.a('number');
            expect(maxTam % 1).to.equal(0);
        });
    });

    context('14. Ocultar', function(){
        it("14.1 Debería OCULTAR el mensaje en una imagen", function() {
            var mensaje = "!ADIOS MUNDO 20202!";
            console.log("        Mensaje: " + mensaje);

            assert.isTrue(imagen.ocultar(mensaje), "Deberia devolver True");

            imagen.escribirImagen("./Img/oculto.pgm");
        });
    });

    context('16. Revelar', function(){
        it("16.1 Debería REVELAR el mensaje oculto en una imagen", function() {
            let fileMensaje = fs.readFileSync('./Img/oculto.pgm');
            let meta = fu.leerMeta(fileMensaje);
            let imagenMensaje = new Imagen(fileMensaje, meta[0], meta[1], meta[2], meta[3], meta[4]);
        
            var revelado = imagenMensaje.revelar();
            console.log("        Mensaje: " + revelado);
            assert.isString(revelado, "Deberia devolver un string (Hola)");
        });
    });
});
