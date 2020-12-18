
const iC = require('../src/imagenController');
const restify = require('restify');

// Creando el servidor
var server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());


/**
 * RUTAS
*/

server.post('/ocultar',(req, res, next) =>{
  var path = req.files[''].path;
  var nombre = req.files[''].name;
  var msg = req.body.msg;

  // Oculto el mensaje
  var buffer = iC.ocultar(path,nombre, msg);

  res.status(200);
  res.header('content-type', 'img/pgm');
  res.send(buffer);

  next();
});


server.post('/revelar',(req, res, next) =>{
  var path = req.files[''].path;
  var msg = iC.revelar(path);
  
  res.status(200);
  res.setHeader("Content-Type","application/json");
  res.send(msg);

  next();
});


server.post('/chequear', (req, res, next) =>{
  var path = req.files[''].path;
  var chequeo = iC.chequear(path);

  res.status(200);
  res.setHeader("Content-Type","application/json");
  res.send(chequeo);
  next();
});


/**
 * SERVIDOR
 */
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


module.exports = {server};