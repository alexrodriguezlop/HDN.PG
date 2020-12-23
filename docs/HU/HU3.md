### HU3
##### Revelar el mensaje oculto en una imagen:

Ruta para dar solución a [HU3](https://github.com/alexrodriguezlop/HDN.PG/issues/12):

La imagen usada para los test la imagen creada en el test HU1.1 y la imagen modelo.

#### Ruta:

Recibe:

- PATH de la imagen subida al servidor

Esta ruta llama a la función chequear del fichero imagenController para verificar si la imagen contiene un mensaje oculto.

En caso de contenerlo se llama a la función revelar del fichero imagenController, la cual devolverá un string del mensaje.

La respuesta será en formato JSON en caso de existir mensaje.

En caso de existir falta de parámetros en la petición la ruta devolverá status 400 y si no contuviera mensaje status 404.

```
server.post('/revelar',(req, res, next) =>{
  if(req.files != undefined && req.files[''].size >0){
    var path = req.files[''].path;

    if(iC.chequear(path)== true){
      var msg = iC.revelar(path);
      res.status(200);
      res.setHeader("Content-Type","application/json");
      res.send(msg);
    }
    else{
      res.status(404);
      res.send();
    }
  }
  else{
    res.status(400);
    res.send();
  }
  next();
});
```

#### Test:

Para verificar el correcto funcionamiento de HU3 se realizan 3 test:

- HU3.1) Imagen contiene mensaje oculto
- HU3.2) Imagen no contiene mensaje oculto
- HU3.3) Falta de fichero


```
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
```


```
        it("HU3.1 Debería NO revelar mensaje oculto en una imagen", function() {
            chai.request(server)
            .post('/revelar')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){
                expect(res).to.have.status(404);
            });
        });
```


```
        it("HU3.1 Debería retornar 400, faltan elementos en la petición", function() {
            chai.request(server)
            .post('/revelar')
            .attach('', '')
            .end( function(err,res){
                expect(res).to.have.status(400);
            });
        });
```