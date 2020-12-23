### Elección del framework

Para la elección de framework investigué sobre comparativas existentes que comparaban algunos framework del mercado como:

- [Comparativa](https://raygun.com/blog/2015/03/node-performance-hapi-express-js-restify/)

Al comienzo del proyecto.
Restify me pareció un framework muy interesante por su similitud con express y al mismo tiempo su diferenciación total de este, ya que no tienen nada que ver que el uno con el otro.

Ya que mi proyecto se centra en el tratamiento de imágenes me interesaba mucho la simplicidad, eficiencia y velocidad que pudiera aportar el framework.

Y decidí que la mejor forma de saber si era bueno para mi proyecto debía ser compararlo con express.

Para llevar a cabo la comparación cree un servicio con cada uno de los framework y lancé un test AB usando apache2-utils.

Instalación de apache2-utils:

`sudo apt install apache2-utils`

Arrancamos el servidor a testear y en otra terminal ejecutamos la simulación de peticiones:

 `ab -n 10000 -c 100 http://127.0.0.1:5050/.`

#### Resultados:

Si analizamos los datos obtenidos de la comparativa deducimos varias cosas:

||Restify|Express|
| -   | - | - |
|Time taken for tests:|1.752 seconds | 2.163 seconds|
|Requests per second:  (mean)  |5708.32 [#/sec] | 4622.60 [#/sec]
|Time per request: (mean)      |17.518 [ms] | 21.633 [ms]
|Time per request: (mean)      |0.175 [ms] | 0.216 [ms]
|Transfer rate:        |1159.50 [Kbytes/sec]| 1733.48 [Kbytes/sec]

En la tabla se aprecia como Restify presenta un mayor número de peticiones por segundo, Menor tiempo de respuesta y una mayor tasa de transferencia.
El hecho de que presente una mayor tasa de transferencia lo hace interesante para ser usado en mi proyecto.

*Connection Times (ms)*

| |min|min|mean|mean|[+/-sd]|[+/-sd]|median|median|max| max|
|-|-|-|-|-|-|-|-|-|-|-|
|           |EX |RES|EX |RES|EX |RES|EX |RES|EX |RES|
|Connect:   |  0| 0 |  1|1  |0.5|0.7| 1 |1  |4  |7  |
|Processing:|  6| 8 | 21|16 |6.6|6.2|19 |14 |52 |48 |
|Waiting:   |  3| 5 | 13|12 |5.1|5.0|13 |10 |48 |44 |
|Total:     |  8| 10| 22|17 |6.7|6.3|20 |15 |53 |52 |

Si analizamos la siguiente tabla podemos observar claramente que los tiempos mínimos de restify superan a los de express, pero sin embargo el resto de tiempos que presenta restify son más bajos que los de expres, incluidos la media y sus tiempos máximos. 

#### Resultados completos:

 **Restify:**
 
```
 alex@Alex-GE62-2QF:~$ ab -n 10000 -c 100 http://127.0.0.1:5050/.
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        restify
Server Hostname:        127.0.0.1
Server Port:            5050

Document Path:          /.
Document Length:        57 bytes

Concurrency Level:      100
Time taken for tests:   1.752 seconds
Complete requests:      10000
Failed requests:        0
Non-2xx responses:      10000
Total transferred:      2080000 bytes
HTML transferred:       570000 bytes
Requests per second:    5708.32 [#/sec] (mean)
Time per request:       17.518 [ms] (mean)
Time per request:       0.175 [ms] (mean, across all concurrent requests)
Transfer rate:          1159.50 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.7      1       7
Processing:     8   16   6.2     14      48
Waiting:        5   12   5.0     10      44
Total:         10   17   6.3     15      52

Percentage of the requests served within a certain time (ms)
  50%     15
  66%     18
  75%     21
  80%     22
  90%     25
  95%     29
  98%     38
  99%     49
 100%     52 (longest request)
```

 **Express:**

```
 alex@Alex-GE62-2QF:~$ ab -n 10000 -c 100 http://127.0.0.1:5050/.
This is ApacheBench, Version 2.3 <$Revision: 1807734 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking 127.0.0.1 (be patient)
Completed 1000 requests
Completed 2000 requests
Completed 3000 requests
Completed 4000 requests
Completed 5000 requests
Completed 6000 requests
Completed 7000 requests
Completed 8000 requests
Completed 9000 requests
Completed 10000 requests
Finished 10000 requests


Server Software:        
Server Hostname:        127.0.0.1
Server Port:            5050

Document Path:          /.
Document Length:        140 bytes

Concurrency Level:      100
Time taken for tests:   2.163 seconds
Complete requests:      10000
Failed requests:        0
Non-2xx responses:      10000
Total transferred:      3840000 bytes
HTML transferred:       1400000 bytes
Requests per second:    4622.60 [#/sec] (mean)
Time per request:       21.633 [ms] (mean)
Time per request:       0.216 [ms] (mean, across all concurrent requests)
Transfer rate:          1733.48 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    1   0.5      1       4
Processing:     6   21   6.6     19      52
Waiting:        3   13   5.1     13      48
Total:          8   22   6.7     20      53

Percentage of the requests served within a certain time (ms)
  50%     20
  66%     22
  75%     24
  80%     26
  90%     30
  95%     35
  98%     44
  99%     52
 100%     53 (longest request)
```

#### Contenido de los servicios utilizados para realizar el test comparativo:

*Restify:*

```
var restify = require("restify");
var server = restify.createServer();

server.get("/hello/:name", function(req, res, next) {
res.send("hello " + req.params.name);
});

server.listen(5050, function() {
console.log("Listening on port 5050");
});
```
*Express:*

```
var express = require("express");
var app = express();

app.get("/hello/:name", function(req, res){
res.send("hello " + req.params.name);
});

app.listen(5050);
console.log("Listening on port 5050");
```

----
#### Uso en mi api:

Para su uso requiere ser exportado.
Una vez exportado crearemos una instancia que será la que usará la API, en este caso la he denominado server.

He utilizado el midleware Morgan como sistema de logs.

```
const restify = require('restify');
var logger  = require('morgan')

// Creando el servidor
var server = restify.createServer();
```
He utilizado algunos plugins que pone a nuestra disposición el framework Restify.

- [**queryParser**](http://restify.com/docs/plugins-api/#queryparser)
Analiza la cadena de consulta HTTP. 
Al usarlo, el contenido analizado siempre estará disponible en req.query, además, los parámetros se fusionan en req.params.  

- [**bodyParser**](http://restify.com/docs/plugins-api/#bodyparser)
Bloquea su cadena al leer y analiza el cuerpo de la solicitud HTTP. Se enciende Content-Typey hace la lógica adecuada. 

Para el uso de ambos plugins me ha sido suficiente con su configuración por defecto.

Se indica a Morgan que trabaje en modo *dev*.

Se utilizan rutas post debido a que los parámetros deben ser recibidos desde un formulario.

En las rutas se extraen los parámetros, si los hubiera en la petición y se establecen la respuesta, la cabecera y el status correspondiente. 

La ejecución continua hasta la orden next() que pasará a la siguiente función de la cadena. 
En caso de no haber ninguna finalizará.

```
server.use(logger('dev'));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


/**
 * RUTAS
*/
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

Establecemos los parámetros con los que arrancará el servidor y lo exportamos como **server** para poder utilizarlos desde los test.

Le indico que arranque el puerto 8080 en caso de que no hubiera ningún puerto establecido en los secretos de GitHub.

```
/**
 * SERVIDOR
 */
server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


module.exports = {server};
```

