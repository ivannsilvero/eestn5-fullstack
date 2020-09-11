const express = require('express');
const router = express.Router();

const acciones = require('./acciones');
const alumnos = require('./alumnos');
const autoridades = require('./autoridades');

router.use('/acciones', acciones);
router.use('/alumnos', alumnos);
router.use('/autoridades', autoridades)

router
.route('/')
.get((req, res) => {
    res.render('administrador');
});

router
.route('/redactar')
.get((req, res) => {
    res.render('redactar');
});

module.exports = router;