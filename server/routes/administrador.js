const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const administrador = require('./admin');

hbs.registerPartials(path.join(__dirname, "../../", "/views/parciales"));
app.set('view engine', 'hbs');

app.use('/administrador', administrador);

module.exports = app;