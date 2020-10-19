const { strictEqual } = require('assert');
const Imagen = require('../src/class/imagen')
var assert = require('assert').strict;

describe("IMAGEN CLASS TEST", function() { 
  let imagen = new Imagen();

  it("Debería crear una imagen de 0x0 ", function() {
     
      assert.notStrictEqual(imagen.columnas, 0);
      assert.notStrictEqual(imagen.filas, 0);
  });
  
  it("Debería cambiar las dimensiones de la imagen a 6x6 ", function() {
    imagen.setFilas = 6;
    imagen.setColumnas = 6;

    assert.notStrictEqual(imagen.columnas, 6);
    assert.notStrictEqual(imagen.filas, 6);
  });
});
