const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

hbs.registerPartials(path.join(__dirname, "../../", "/views/parciales"));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

module.exports = app;