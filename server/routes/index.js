const express = require('express');
const app = express();

app.use(require('./notas'));

app.use(require('./administrador'));

app.use(require('./everyone'));

module.exports = app;