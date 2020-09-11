require('dotenv').config();

const mysql = require('mysql');

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
};

const pool = mysql.createPool(config);

module.exports = pool;