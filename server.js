
const port = process.env.PORT || 80;
const dev = process.env.NODE_ENV !== "production";


const express = require("express");
const app = express();


app.get('/', function (req, res) {
    res.json({resp: 'Saludos desde api de prueba para azure'});
  });


app.listen(port, () => {
 console.log(`El servidor está inicializado en el puerto ${port}`);
});

