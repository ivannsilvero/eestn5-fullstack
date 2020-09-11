const express = require('express');
const router = express.Router();
const pool = require('../mysql/mysql');
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router
.route('/')
.get((_, res) => {
    pool.query('SELECT * FROM alumnos', (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
})
.post(urlencodedParser, (req, res) => {
    const dni = req.body.dni;
    const nombre = req.body.nombre;
    const telefono = req.body.telefono;

    pool.query(`INSERT INTO alumnos (dni, nombre, telefono) VALUES(${ escape(dni) }, '${ escape(nombre) }', '${ escape(telefono) }')`, (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            mensaje: `Alumno creado con DNI ${ dni }`
        });
    });
});

router
.route('/:id')
.get((req, res) => {
    const id = req.params.id;

    pool.query('SELECT * FROM alumnos WHERE id = ?', id, (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            result
        });
    });
})
.put(urlencodedParser, (req, res) => {
    const id = req.params.id;

    pool.query(`UPDATE alumnos SET dni = ${ req.body.dni } WHERE id = ${ id }`, (error, result) => {
        if(error) throw error;
        res.json({
            ok: true,
            mensaje: `Alumno con id ${ id } actualizado`
        });
    });

})
.delete((req, res) => {
    const id = req.params.id;

    pool.query(`DELETE FROM alumnos WHERE id = ${ id }`, (error, result) => {
        if (error) throw error;
        res.json({
            ok: true,
            mensaje: `Alumno con id ${ id } eliminado`
        });
    });
});

module.exports = router;