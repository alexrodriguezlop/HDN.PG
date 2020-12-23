### HU4
##### devolver el día y la hora en que fue cifrado un mensaje:

Ruta para dar solución a [HU4](https://github.com/alexrodriguezlop/HDN.PG/issues/13):

**Solución:**
Consultamos los datos en el sistema de persistencia mediante el hash de la imagen.

La imagen usada para los test la imagen creada en el test HU1.1 y la imagen modelo.

#### Ruta:
Recibe:

- PATH de la imagen subida al servidor

Esta ruta llama a la función getMetadatos del fichero imagenController.

Tras realizarse la operación la función devolverá una estructura de datos con el resultado o un undefined en caso de no ser encontrado.

La respuesta se devuelve en formato JSON.

En caso de existir falta de parámetros en la petición la ruta devolverá el status 400.

En caso de no disponer de dicha información el status devuelto será 404.

```
server.post('/metadatos', (req, res, next) =>{
  if(req.files != undefined && req.files[''].size >0){
    var path = req.files[''].path;

    var metadatos = iC.getMetadatos(path);

    if(metadatos != undefined){
      res.status(200);
      res.setHeader("Content-Type","application/json");
      res.send(metadatos);
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

Para verificar el correcto funcionamiento de HU2 se realizan 3 test:

- HU4.1) Imagen con registro de metadatos
- HU4.2) Imagen sin registro de metadatos
- HU4.3) Falta de fichero


```

        it("HU4.1 Debería devolver el día y hora en que fue cifrado el mensaje", function() {
            chai.request(server)
            .post('/metadatos')
            .attach('', fs.createReadStream(PATH))
            .end( function(err,res){
                expect(res).to.have.status(200);
                assert.typeOf(JSON, 'JSON', 'JSON');
            });
        });
```




```
        it("HU4.2 NO debería devolver el día y hora en que fue cifrado el mensaje", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){
                expect(res).to.have.status(404);
            });
        });
```



```
        it("HU4.3 Debería retornar 400, faltan elementos en la petición", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', '')
            .end( function(err,res){
                expect(res).to.have.status(400);
            });
        });
```
