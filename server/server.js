const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname , "../" , "/public")));

app.use(require('./routes/index'));

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${ port }`));