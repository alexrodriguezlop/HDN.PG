const  md5 = require('md5');
const Storage = require('node-storage');

// Crea o carga DB
var db = new Storage('../data/data.db');

// Función principal manejadora de petición
module.exports = async (req, res) => {

  var chatID, msgID, mensaje, telegramRes, cadena, arg, clave;
  
  if(req.body.message != undefined){
    chatID = req.body.message.chat.id;
    msgID = req.body.message.message_id;
    cadena = req.body.message.text;
  }
  else{
    chatID = req.body.edited_message.chat.id;
    msgID = req.body.edited_message.message_id;
    cadena = req.body.edited_message.text;
  }

  arg = cadena.slice(0, 7).toLowerCase();
  clave = cadena.slice(8, cadena.length); 
  

  switch(arg) {
    // /BUSCAR
    case '/buscar':
      if(clave != ''){
        var result = db.get(md5(clave));

        if(result === null){
          mensaje = '\u{2716} *Su mensaje no ha sido cifrado y por tanto no hay registros*';
        }
        else{
          mensaje = '\u{1F4C6} *Fecha:* ' + result.fecha + ' \u{231A} *Hora:* ' + result.hora;
        }
      }
      else{
        mensaje = '\u{1F605} *No ha introducido el texto a buscar!* ';
      }
      break;
    // /HELP
    case '/help':
      mensaje = '\u{1F50D} Para buscar use la orden */buscar* seguida del texto.                   \u{27A1} *Ejemplo:* /buscar test';
      break;
    // Otro caso    
    default:
      mensaje = '\u{26A0} Comando desconocido, use */help*';
  }

  telegramRes = {
    text:mensaje, 
    method:"sendMessage", 
    chat_id:chatID, 
    reply_to_message_id: msgID, 
    parse_mode: 'Markdown'
  };

  res.setHeader("Content-Type","application/json");
  res.status(200).json(telegramRes);
}
