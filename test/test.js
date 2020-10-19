const Imagen = require('../src/class/imagen')
var assert = require('chai').assert;


describe("IMAGEN CLASS TEST", function() { 
  let imagen = new Imagen(3,3);

  it("Debería crear una imagen de 3x3 con sus valores de pixel a 0", function() {
    assert.notEqual(3, 4, 'these numbers are not equal');

    assert.equal(imagen.getFilas, 3, "Debería ser 3");
    assert.equal(imagen.getColumnas, 3, "Debería ser 3");

      for (var i = 0; i < 9; i++) {
        assert.equal(imagen.getPixel(i), 0, "Píxel distinto de 0");
      }
  });
  
  it("Debería cambiar las dimensiones de la imagen a 6x6 ", function() {
    imagen.setFilas = 6;
    imagen.setColumnas = 6;

    assert.notStrictEqual(imagen.columnas, 6);
    assert.notStrictEqual(imagen.filas, 6);
  });
});
