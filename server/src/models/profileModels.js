const express = require('express')
const router = express.Router();
const { pool } = require('../config/db')

const viewProfile = async () => {
    try {
        const [rows, fields] = await pool.query(`SELECT * FROM users`)
        return rows;
    } catch (error) {
        console.log(error)
    }
}

const removeUser = async (user_id) => {
    try {
        const [row, fields] = await pool.query(`
            DELETE FROM users
            WHERE user_id = ?`,
            [user_id])
        
    console.log(`user removed : ${row[0]}`);
    } catch (error)  {
        console.log(error)
    }
}

const updateUser = async (user_id, { username, password } ) => {
    try {
        pool.query(`
            UPDATE users
            SET username = ?, password = ?`,
            [username, password])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    viewProfile,
    removeUser,
    updateUser
}