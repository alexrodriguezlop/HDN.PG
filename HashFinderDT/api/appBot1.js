const data = require("../data/data.json" )
const  md5 = require('md5');


// Extrae una tupla del fichero JSON a partir de una clave hash 
function obtener(valor){
  var result = null;

  for(var i = 0; i < data.lista.length; i++){
    if(data.lista[i].hash === valor)
     result = data.lista[i];
  }
  return result;
}


// Función principal manejadora de petición
module.exports = async (req, res) => {
  console.log(req);
  if(req.body.message != undefined){
    const chatID = req.body.message.chat.id;
    const cadena = req.body.message.text;
    const msgID = req.body.message.message_id;

    const arg = cadena.slice(0, 7).toLowerCase();
    const clave = cadena.slice(7, cadena.length); 
    var mensaje;

    console.log(req.body.message);
    console.log(arg);
    console.log(clave);


    switch(arg) {
      // /BUSCAR
      case '/buscar':
        if(clave != ''){
          var result = obtener(md5(clave));
    
          if(result === null){
            mensaje = '*Su mensaje no ha sido cifrado y por tanto no hay registros*';
          }
          else{
            mensaje = '*Fecha:* ' + result.fecha + ' *Hora:* ' + result.hora;
          }
        }
        else{
          mensaje = 'No ha introducido el texto a buscar';
        }
        break;
      // /HELP
      case '/help':
        mensaje = 'Para buscar usa la orden * /buscar* seguida del texto';
        break;
      // Otro caso    
      default:
        mensaje = 'Comando desconocido, use * /help*';
    }

    const telegramRes = {
      text:mensaje, 
      method:"sendMessage", 
      chat_id:chatID, 
      reply_to_message_id: msgID, 
      parse_mode: 'Markdown'
    };

    res.setHeader("Content-Type","application/json");
    res.status(200).json(telegramRes);
  }
  res.status(200);
}


/*
    if(arg == '\buscar' && clave != ''){
      var result = obtener(md5(clave));

      console.log('A');

      if(result === null){
        //Telegram espera un metodo, un identificador de chat y un mensaje.
        mensaje = '*Su mensaje no ha sido cifrado y por tanto no hay registros*';

        console.log('B');

        //Vercel espera cabecera especificando tipo, status y body
        //res.setHeader("Content-Type","application/json");
        //res.status(400).json(telegramRes);
      }
      else{
        console.log('C');
        mensaje = '*Fecha:* ' + result.fecha + ' *Hora:* ' + result.hora;
      }
    }
    const telegramRes = {
                          text:mensaje, 
                          method:"sendMessage", 
                          chat_id:chatID, 
                          reply_to_message_id: msgID, 
                          parse_mode: 'Markdown'
                        };
    console.log('D');
    res.setHeader("Content-Type","application/json");
    res.status(200).json(telegramRes);
  }*/


  /*
    if(req.body.message != undefined){
    console.log('A' + req.body.message);
    const chatID = req.body.message.chat.id;
    const msgID = req.body.message.message_id;
    const cadena = req.body.message.text;
  }
  else{
    console.log('B' + req.body.edited_message);
    const chatID = req.body.edited_message.chat.id;
    console.log(chatID);
    const msgID = req.body.edited_message.message_id;
    console.log(msgID);
    const cadena = req.body.edited_message.text;
    console.log(cadena);
  }
  */


  /* 


// Función principal manejadora de petición
module.exports = async (req, res) => {

console.log(req.body.message);
const chatID = req.body.message.chat.id;
const msgID = req.body.message.message_id;

var mensaje = '';


const telegramRes = {
  text:mensaje, 
  method:"sendMessage", 
  chat_id:chatID, 
  reply_to_message_id: msgID, 
  parse_mode: 'Markdown'
};

res.setHeader("Content-Type","application/json");
res.status(200).json(telegramRes);
}
  
  */










  /*
    const chatID = req.body.message.chat.id;
    const msgID = req.body.message.message_id;
    const cadena = req.body.message.text;

    const arg = cadena.slice(0, 7).toLowerCase();
    const clave = cadena.slice(7, cadena.length); 

    var mensaje = '';

    switch(arg) {
      // /BUSCAR
      case '/buscar':
        if(clave != ''){
          var result = obtener(md5(clave));
    
          if(result === null){
            mensaje = '*Su mensaje no ha sido cifrado y por tanto no hay registros*';
          }
          else{
            mensaje = '*Fecha:* ' + result.fecha + ' *Hora:* ' + result.hora;
          }
        }
        else{
          mensaje = 'No ha introducido el texto a buscar';
        }
        break;
      // /HELP
      case '/help':
        mensaje = 'Para buscar usa la orden * /buscar* seguida del texto';
        break;
      // Otro caso    
      default:
        mensaje = 'Comando desconocido, use * /help*';
    }

    const telegramRes = {
      text:mensaje, 
      method:"sendMessage", 
      chat_id:chatID, 
      reply_to_message_id: msgID, 
      parse_mode: 'Markdown'
    };

    res.setHeader("Content-Type","application/json");
    res.status(200).json(telegramRes);
}
*/