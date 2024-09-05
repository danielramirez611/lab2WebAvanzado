const express = require("express");
const path = require("path");
const routes = require('./rutas.js');

const app = express();
const port = 3000;

//aqui llamaos a todos los archvios que estan en la carpeta estatic
app.use(express.static(path.join(__dirname, 'static')));

app.use(routes);

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});
