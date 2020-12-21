const iC = require('../src/imagenController');
const restify = require('restify');
var logger  = require('morgan')

// Creando el servidor
var server = restify.createServer();

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


/**
 * SERVIDOR
 */
server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});


module.exports = {server};