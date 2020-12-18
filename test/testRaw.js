const Raw = require('../src/class/raw');
var assert = require('chai').assert;
const fs = require('fs')
const fu = require('../src/funciones')

describe("RAW CLASS TEST", function() { 
    let file = fs.readFileSync('./Img/Ejemplo.pgm');
    let raw = new Raw(file);

    context('2. setPixel', function(){
        raw.setPixel(0b01, 1);

        it("1.1 Debería haber establecido el pixel 1 a 1 (00000001)", function() {
            assert.equal(raw.getPixel(1), 0b01, "Debería ser 1 (00000001)");
        });
        
    });

    context('3. Enciende', function(){
        it("1.1 Debería Encender el bit 7 del pixel 1 (10000001)", function() {
            raw.enciende(1,7);
            assert.equal(raw.getPixel(1), 0b10000001,"Debería ser 10000001")
        });
        it("1.1 Debería Encender el bit 4 del pixel 1 (10010001)", function() {
            raw.enciende(1,4);
            assert.equal(raw.getPixel(1), 0b10010001,"Debería ser 10010001")
        });
    });

    context('4. Apaga', function(){
        it("1.1 Debería Apagar el bit 7 del pixel 1 (00010001)", function() {
            raw.apaga(1, 7);
            assert.equal(raw.getPixel(1), 0b10001,"Debería ser 00010001")
        });
        it("1.1 Debería Apagar el bit 4 del pixel 1 00000001", function() {
            raw.apaga(1, 4);
            assert.equal(raw.getPixel(1), 0b01,"Debería ser 00000001")
        });
    });

    context('5. Checkea', function(){
        raw.setPixel(0b01, 0);// Pixel0 = 00000001

        it("1.1 Debería devolver True (00000001)", function() {      
            assert.isTrue(raw.check(0,0),"Debería ser True")
        });
        it("1.1 Debería devolver False (00000001)", function() {    
            assert.isFalse(raw.check(0,1),"Debería ser False")
        });
    });

});