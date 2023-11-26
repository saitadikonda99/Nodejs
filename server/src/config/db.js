const express = require('express')
const mysql2 = require('mysql2')


const pool = mysql2.createPool({
    host : process.env.dbhostname,
    user : process.env.dbuser,
    password: process.env.dbpasscode,
    database: process.env.dbname
}).promise();

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection from pool:', err);
        return;
    }
});
console.log('Connected to MySQL database!');


module.exports = {
    pool
};