const Raw = require('../src/class/raw')
var assert = require('chai').assert;


describe("RAW CLASS TEST", function() { 
  let raw = new Raw(3,3);

    context('1. Constructor', function(){

        it("1.1 Debería haber sido creado un objeto raw de 3x3", function() {
            assert.equal(raw.getRaw.byteLength, 9, "Debería ser 9");
        });
    });

    context('2. setPixel', function(){
        raw.setPixel(0b00000100, 1);

        it("1.1 Debería haber establecido el pixel 1 a 4 (00000100)", function() {
            assert.equal(raw.getPixel(1), 0b00000100, "Debería ser 4 (00000100)");
        });
    });

    context('3. Enciende', function(){
        raw.enciende(1);

        it("1.1 Debería Encender el bit menos significativo del pixel 1", function() {
            assert.isFalse(raw.check(1),"Debería ser True (Último Encendido)")
        });
    });

    context('4. Apaga', function(){
        raw.apaga(1);

        it("1.1 Debería Apagar el bit menos significativo del pixel 1", function() {
            assert.isFalse(raw.check(1),"Debería ser FALSE (Último apagado)")
        });
    });

});