const express = require("express");
const app = express();


app.get('/test', function (req, res) {
    res.json({resp: 'Saludos desde ruta test'});
  });


app.get('/', function (req, res) {
  res.json({resp: 'Saludos desde api de prueba para azure'});
});


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});