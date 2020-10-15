const { strictEqual } = require('assert');
const Imagen = require('../src/class/imagen')
var assert = require('assert').strict;

describe("IMAGEN CLASS TEST", function() {
  it("Debería crear una imagen de 0x0 ", function() {
      let imagen = new Imagen();
      assert.notStrictEqual(imagen.columnas, 0);
      assert.notStrictEqual(imagen.filas, 0);
  });
  
  it("Debería cambiar las dimensiones de la imagen a 6x6 ", function() {
    let imagen = new Imagen(5,5);
    imagen.setFilas = 6;
    imagen.setColumnas = 6;

    assert.notStrictEqual(imagen.columnas, 6);
    assert.notStrictEqual(imagen.filas, 6);
  });

  it("Debería leer una imagen", function() {
    let imagen = new Imagen();
   
    assert.strictEqual(imagen.leerImagen(), true)
  });

  it("Debería escribir una imagen", function() {
    let imagen = new Imagen();
    assert.strictEqual(imagen.escribirImagen(), true)
  });

  it("Debería ocultar un mensaje", function() {
    let imagen = new Imagen();
    assert.strictEqual(imagen.ocultar(), true)
  });

  it("Debería chequear una imagen", function() {
    let imagen = new Imagen();
    assert.strictEqual(imagen.chequear(), true)
  });

  it("Debería revelar un mensaje oculto", function() {
    let imagen = new Imagen();
    assert.strictEqual(imagen.revelar(), true)
  });

  it("Debería obtener los metadatos del mensaje", function() {

    let imagen = new Imagen();
    assert.strictEqual(imagen.getMetadatos(), true)
  });
});
