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
        raw.setPixel(5, 1);
        it("1.1 Debería haber establecido el pixel 1 a 5", function() {
            assert.equal(raw.getPixel(1), 5, "Debería ser 5");
        });
    });

});