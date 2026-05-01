const express = require("express");

//inicializando una app de express
const app = express();

app.get("/", function(req, res){
    return res.json({mensaje: "saludos desde mi app node (modificado)"})
});

app.listen(3000, function (){
    console.log("Servidor corriendo en el puerto 3000");
})