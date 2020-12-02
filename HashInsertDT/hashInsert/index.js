

//https://hashinsert.azurewebsites.net/api/hashInsert?msg=
// Función principal manejadora de petición
module.exports = (context, req) => {
    //Captamos el parámetro
    //var parametro = req.query["msg"];
    //const parametro = (req.query.msg || (req.body && req.body.msg));

    result = "No se pudo insertar";

    context.res.setHeader('content-type', 'text/javascript');
    context.res.status(200).send(result);
    
}
    