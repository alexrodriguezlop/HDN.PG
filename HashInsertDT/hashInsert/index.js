
const  md5 = require('md5');
const Storage = require('node-storage');

// Crea o carga DB
var db = new Storage('../..data/data.db');

// Añade una entrada en DB a partir de una cadena
function registra(mensaje){
    var now = new Date();

    var hora = now.getHours() + ":" + now.getMinutes();
    var fecha = now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear();

    var hash = md5(mensaje);
    var obj = { 	
        "fecha":fecha,
        "hora": hora
    }

    // Inserta clave , valor
    db.put(hash, obj);

    var result = hash;
    return result; 
}

//https://hashinsert.azurewebsites.net/api/hashInsert?msg=
// Función principal manejadora de petición
module.exports = (context, req) => {
    //Captamos el parámetro
    //var parametro = req.query["msg"];
    //const parametro = (req.query.msg || (req.body && req.body.msg));
    var parametro = req.query.msg;
    
    if(parametro != null)
        result = "Su mensaje ha sido registrado bajo el hash: " + registra(parametro);
    else
        result = "No se pudo insertar";

    context.res.setHeader('content-type', 'text/javascript');
    context.res.status(200).send(result);
    
}
    