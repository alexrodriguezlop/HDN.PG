### HU1
##### Ocultar un mensaje en una imagen:

Ruta para dar solución a [HU1](https://github.com/alexrodriguezlop/HDN.PG/issues/10):

**Solución:**
Para ocultar el mensaje se utiliza el bit menos significativo de cada byte. De forma que cada 8 bytes podemos almacenar un carácter. 

Cuando se oculta un mensaje en una imagen se almacena en un sistema de persistencia la información referente a su hash una vez oculto el mensaje y la fecha y hora.

La imagen usada para los test es una imagen modelo alojada en test/Img/original.pgm

#### Ruta:
Recibe:

- PATH de la imagen subida al servidor
- Nombre del fichero
- Mensaje a ocultar

Esta ruta llama a la función ocultar del fichero imagenController.

Tras realizarse la operación la función ocultar del fichero imagenController devuelve la imagen generada y la ruta la sirve como respuesta.

En caso de existir falta de parámetros en la petición la ruta devolverá el status 400.

```
server.post('/ocultar',(req, res, next) =>{
  if(req.files[''] != undefined && req.files[''].size >0 && req.body.msg != undefined){
    var path = req.files[''].path;
    var nombre = req.files[''].name;
    var msg = req.body.msg;

    // Oculto el mensaje
    var buffer = iC.ocultar(path,nombre, msg);
    res.status(200);
    res.header('content-type', 'img/pgm');
    res.send(buffer);
  }
  else{
    res.status(400);
    res.send();
  }
  next();
});
```
#### Test:

Para verificar el correcto funcionamiento de HU1 se realizan 3 test:

- HU1.1) Parámetros correctos
- HU1.2) Falta de fichero
- HU1.3) Falta de mensaje

Para verificar las respuestas de la API ante las distintas situaciones.

La imagen generada por el test HU1.1 es reutilizada en el resto con el fin de verificar que el tratamiento de la imagen se realiza correctamente.

```

        it("HU1.1 Debería OCULTAR el mensaje en una imagen", async function() {
            await new Promise(resolve =>
                chai.request(server)
                .post('/ocultar')
                .attach('', fs.createReadStream(ORIGINAL))
                .field('msg', MENSAJE)
                .pipe(fs.createWriteStream(PATH))
                .on('finish', resolve));
        });

```
La HU1.1 Realiza la Petición para ocultar un mensaje.
No he conseguido incorporar la comprobación de status para este caso concreto.

La llamada devuelve una imagen que se usará posteriormente en los demás test de forma que la función es asíncrona para una correcta recepción de la imagen.

```
        it("HU1.2 Debería retornar 400, falta IMG en la petición ", function() {
            chai.request(server)
                .post('/ocultar')
                .attach('','')
                .field('msg', MENSAJE)
                .end(async function(err,res) {
                    expect(res).to.have.status(400);
                });
        });

```


```

        it("HU1.2 Debería retornar 400, falta MENSAJE en la petición ", function() {
            chai.request(server)
                .post('/ocultar')
                .attach('', fs.createReadStream(ORIGINAL))
                .end(async function(err,res) {
                    expect(res).to.have.status(400);
                });
        });

```
