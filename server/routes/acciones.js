const express = require('express');
const router = express.Router();

router
.route('/usuarios')
.get((req, res) => {
    res.render('acciones-usuarios');
});
router
.route('/autoridades')
.get((req, res) => {
    res.render('acciones-autoridades');
});
router
.route('/notas')
.get((req, res) => {
    res.render('acciones-notas');
});

module.exports = router;