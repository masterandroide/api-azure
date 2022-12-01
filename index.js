
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";


const express = require("express");
const app = express();


app.get('/', function (req, res) {
    res.json({resp: 'Saludos desde api de prueba para azure'});
  });


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

