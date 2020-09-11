const express = require('express');
const router = express.Router();
const pool = require('../mysql/mysql');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router
.route('/')
.get((req, res) => {
    pool.query('SELECT * FROM autoridades', (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
})
.post(urlencodedParser, (req, res) => {
    const nombre = req.body.nombre;
    const cargo = req.body.cargo;
    pool.query(`INSERT INTO autoridades (nombre, cargo) VALUES ('${ nombre }', '${ cargo }')`, (error, results) => {
        if(error) throw error;
        res.json({
            ok: true,
            mensaje: 'Todo bien'
        });
    });
});

router
.route('/:id')
.get((req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM autoridades WHERE id = ?', id, (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
});



module.exports = router;