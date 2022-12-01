const express = require("express");
const app = express();


app.get('/',(req, res) => res.json({ message: 'Hello desde azure bb '}));
app.listen(process.env.PORT || 4000);

