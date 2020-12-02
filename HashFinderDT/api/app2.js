const data = require("../data/data.json" )
const  md5 = require('md5');


// Añade una tupla al fichero JSON a partir de una cadena
function registra(mensaje){
    var longitud = data.lista.length;
    var hora = getHours() + ":" + getMinutes();
    var fecha = getDate()+'-'+getMonth()+'-'+getFullYear();
    var hash = md5(mensaje);
    var obj = { 	
        "hash": hash,
        "fecha":fecha,
        "hora": hora,
        "comentario": ""
    }
    // Push devuleve la longitud del vector
    if(data.lista.push(obj > longitud))
        return true;
    else
        return false; 
}


// Función principal manejadora de petición
module.exports = (req, res) => {
   //Captamos el parámetro
  var parametro = req.query["msg"];

  if(parametro != null){
    result = registra(parametro);

    if(result){
      res.status(200).send("Insertado con éxito!."); 
    }
    else{
      res.status(404).send("El dato no fue registrado!");
    }
    
  }
  else {
    res.status(400).send('Formato incorrecto, PRUEBE:?msg="test".');
  }
}

