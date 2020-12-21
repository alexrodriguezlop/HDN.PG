const Imagen = require('../src/class/imagen');
const fu = require('../src/funciones');
const fs = require('fs');
var assert = require('chai').assert;
var expect = require('chai').expect;
const path = require("path");
const homedir = require('os').homedir();


// Estableciendo rutas relativas para las imagenes de testeo
const ORIGINAL = path.resolve(__dirname, "Img/original.pgm");
const MENSAJE = "Hola mundo!!";
const PATH = homedir+"/TestClases.pgm"

describe("IMAGEN CLASS TEST", function() {
    // Carga una imágen 
    let file = fs.readFileSync(ORIGINAL);
    let metadatos = fu.leerMeta(file);
    let imagen = new Imagen(file, metadatos[0], metadatos[1], metadatos[2], metadatos[3], metadatos[4]);

    context('5. getMaxTam', function(){
        it("5.1 Debería calcular el máximo número de caractéres que cabe en una imágen", function() {
            var maxTam = imagen.getMaxTam();

            // Comprobar que es un número entero.
            expect(maxTam).to.be.a('number');
            expect(maxTam % 1).to.equal(0);
        });
    });

    context('14. Ocultar (HU1)', function(){
        it("14.1 Debería OCULTAR el mensaje en una imagen", function() {
            assert.isTrue(imagen.ocultar(MENSAJE), "Deberia devolver True");
            // Guarda la imagen resultante
            //imagen.escribirImagen("./test/Img/oculto.pgm");
            fs.writeFileSync(PATH,  imagen.getDatos().getRaw());
        });
    });

    context('16. Revelar (HU2)', function(){
        it("16.1 Debería REVELAR el mensaje oculto en una imagen", function() {
            let fileMensaje = fs.readFileSync(PATH);
            let meta = fu.leerMeta(fileMensaje);
            let imagenMensaje = new Imagen(fileMensaje, meta[0], meta[1], meta[2], meta[3], meta[4]);
        
            var revelado = imagenMensaje.revelar();
            assert.isString(revelado);
            expect(revelado).to.equal(MENSAJE);
        });
    });
});
