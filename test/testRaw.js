const Raw = require('../src/class/raw')
var assert = require('chai').assert;


describe("RAW CLASS TEST", function() { 
  let raw = new Raw(3,3);

  it("Debería haber sido creado un objeto raw de 3x3", function() {
    assert.equal(raw.getRaw.byteLength, 9, "Debería ser 9");
   
  });

});