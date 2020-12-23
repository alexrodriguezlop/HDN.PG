### HU2
##### Comprobar si una imagen oculta un mensaje:

Ruta para dar solución a [HU2](https://github.com/alexrodriguezlop/HDN.PG/issues/11):

**Solución:**
Consultamos en el sistema de persistencia el hash de la imagen con el mensaje oculto.

La imagen usada para los test la imagen creada en el test HU1.1 y la imagen modelo.

#### Ruta:
Recibe:

- PATH de la imagen subida al servidor

Esta ruta llama a la función chequear del fichero imagenController.

Tras realizarse la operación la función chequear del fichero imagenController devuleve **true** o **null**.

La respuesta se devuelve en formato JSON.

En caso de existir falta de parámetros en la petición la ruta devuelve el status 400.

En caso de que la imagen no contenga mensaje el status devuelto sería 404.

```
server.post('/chequear', (req, res, next) =>{
  if(req.files != undefined && req.files[''].size >0){
    var path = req.files[''].path;

    var chequeo = iC.chequear(path);
    if(chequeo == true){
      res.status(200); 
    }
    else{
      res.status(404);
    }
    res.setHeader("Content-Type","application/json");
    res.send(chequeo);
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

- HU2.1) Imagen contiene mensaje oculto
- HU2.2) Imagen no contiene mensaje oculto
- HU2.3) Falta de fichero


```

        it("HU2.1 La imágen debería contener mensaje oculto", function() {
            chai.request(server)
                .post('/chequear')
                .attach('', fs.createReadStream(PATH))
                .end( function(err,res){
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.true;
                });
        });
```


```
        it("HU2.2 La imágen NO debería contener mensaje oculto", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', fs.createReadStream(ORIGINAL))
            .end( function(err,res){ 
                assert.typeOf(null, 'null', 'null');
                expect(res).to.have.status(404);
            });
```


```
        it("HU2.3 Debería retornar 400, faltan elementos en la petición ", function() {
            chai.request(server)
            .post('/chequear')
            .attach('', '')
            .end( function(err,res){ 
                expect(res).to.have.status(400);
            });
        });

```