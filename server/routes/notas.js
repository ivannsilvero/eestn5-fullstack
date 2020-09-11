const express = require('express');
const app = express();
const pool = require('../mysql/mysql');
const bodyParser = require('body-parser');

const moment = require('moment');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/administrador/notas', (req, res) => {
    pool.query(`
            SELECT notas.id AS notas_id, notas.post, notas.entidad_id, notas.fecha, autoridades.nombre, autoridades.cargo 
            FROM notas INNER JOIN autoridades ON notas.entidad_id = autoridades.id`, 
        (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
});

app.get('/administrador/notas/:id', (req, res) => {
    const id = req.params.id;
    pool.query(`
            SELECT notas.id AS notas_id, notas.post, notas.entidad_id, notas.fecha, autoridades.nombre, autoridades.cargo 
            FROM notas INNER JOIN autoridades ON notas.entidad_id = autoridades.id WHERE notas.id = ?`, id,
        (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
});

app.post('/administrador/notas', urlencodedParser, (req, res) => {
    const nota = req.body.nota;
    pool.query(`INSERT INTO notas (post, fecha) VALUES (?, ?)`, [nota, moment().format('YYYY-MM-DD hh:mm:ss')], (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            mensaje: `Nota creada`
        });
    });
});

app.put('/administrador/notas/:id', urlencodedParser, (req, res) => {
    const nota = req.body.nota;

    const id = req.params.id;


    pool.query(`UPDATE notas SET post = '${ nota }' WHERE id = ${ id }`, (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            mensaje: `Nota con id ${ id } actualizada`
        });
    });

});


module.exports = app;