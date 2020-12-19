const Storage = require('node-storage');

// Crea o carga DB
var db = new Storage('../data/data.db');

// Añade una entrada en DB a partir de una imagen cifrada
function registrar(hash){
    var now = new Date();

    var hora = now.getHours() + ":" + now.getMinutes();
    var fecha = now.getDate() + '-' + now.getMonth() + '-' + now.getFullYear();

    var obj = { 	
        "fecha":fecha,
        "hora": hora
    }

    // Inserta clave , valor
    db.put(hash, obj);
}

// busca una entrada en DB a partir de una imagen cifrada
function buscar(hash){
    var result = result = db.get(hash);

    return result; 
}



module.exports = {
    "registrar": registrar,
    "buscar": buscar
};
