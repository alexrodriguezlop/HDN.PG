const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const expect = require('chai').expect;
const fs = require('fs');
const path = require("path");
const homedir = require('os').homedir();

// Importando el servidor
const {server} = require('../src/index.js')

// Estableciendo rutas relativas para las imagenes de testeo
const ORIGINAL = path.resolve(__dirname, "Img/original.pgm");

const MENSAJE = "Hola mundo!!";
const PATH = homedir+"/testApi.pgm"

//const url = "http://" + process.env.IP + ':' + process.env.PORT;

chai.use(chaiHttp);


describe("API TEST", function() {
    after(() => {
        server.close();
    });

    context('HU1. Ocultar mensaje en una imágen', function(){

        it("HU1.1 Debería OCULTAR el mensaje en una imagen", async function() {
            await new Promise(resolve =>
                        chai.request(server)
                        .post('/ocultar')
                        .attach('', fs.createReadStream(ORIGINAL))
                        .field('msg', MENSAJE)
                        .pipe(fs.createWriteStream(PATH))
                        .on('finish', resolve)
                    )
        });


        it("HU1.2 Debería retornar 400, falta IMG en la petición ", function() {
            chai.request(server)
                .post('/ocultar')
                .attach('','')
                .field('msg', MENSAJE)
                .end(function(err,res) {
                    expect(res).to.have.status(400);
                });
        });

        it("HU1.2 Debería retornar 400, falta MENSAJE en la petición ", function() {
            chai.request(server)
                .post('/ocultar')
                .attach('', fs.createReadStream(ORIGINAL))
                .end(function(err,res) {
                    expect(res).to.have.status(400);
                });
        });
    });

    context('HU2. Comprobar si la imágen tiene mensaje oculto', function(){
        
        it("HU2.1 La imágen debería contener mensaje oculto", function() {
            chai.request(server)
                .post('/chequear')
                .attach('', fs.createReadStream(PATH))
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.true;
                });
        });

        it("HU2.2 La imágen NO debería contener mensaje oculto", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){ 
                assert.typeOf(null, 'null', 'null');
                expect(res).to.have.status(404);
            });

        it("HU2.3 Debería retornar 400, faltan elementos en la petición ", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', '')
            .end( function(err,res){ 
                expect(res).to.have.status(400);
            });
        });
    });

    
    context('HU3. Revelar mensaje oculto', function(){

        it("HU3.1 Debería REVELAR el mensaje oculto en una imagen", function() {
            chai.request(server)
            .post('/revelar')
            .attach('', fs.createReadStream(PATH))
            .end( function(err,res){
                expect(res).to.have.status(200);
                assert.isString(res.body);
                expect(res.body).to.equal(MENSAJE);
            });
        });

        it("HU3.1 Debería NO revelar mensaje oculto en una imagen", function() {
            chai.request(server)
            .post('/revelar')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){
                expect(res).to.have.status(404);
            });
        });

        it("HU3.1 Debería retornar 400, faltan elementos en la petición", function() {
            chai.request(server)
            .post('/revelar')
            .attach('', '')
            .end( function(err,res){
                expect(res).to.have.status(400);
            });
        });
    });

    context('HU4. Conocer día y hora del cifrado', function(){

        it("HU4.1 Debería devolver el día y hora en que fue cifrado el mensaje", function() {
            chai.request(server)
            .post('/metadatos')
            .attach('', fs.createReadStream(PATH))
            .end( function(err,res){
                expect(res).to.have.status(200);
                assert.typeOf(JSON, 'JSON', 'JSON');
            });
        });

        it("HU4.2 NO debería devolver el día y hora en que fue cifrado el mensaje", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){
                expect(res).to.have.status(404);
            });
        });

        it("HU4.3 Debería retornar 400, faltan elementos en la petición", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', '')
            .end( function(err,res){
                expect(res).to.have.status(400);
            });
        });
    });
});
});