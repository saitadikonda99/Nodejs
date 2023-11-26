const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const { pool } = require('../config/db');

const logEvents = async (message, logName) => {
    const dateTime = format(new Date(), 'yyyyMMdd HH:mm:ss');
    const logId = uuid(); // Generate the UUID separately

    try {
        // Create 'logs' table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS logs (
                id CHAR(36) PRIMARY KEY,
                timestamp DATETIME,
                message TEXT
            )
        `);

        // Ensure that the message is a string before inserting into the database
        const safeMessage = String(message);

        // Insert log entry into 'logs' table
        await pool.query('INSERT INTO logs (id, timestamp, message) VALUES (?, ?, ?)', [logId, dateTime, safeMessage]);
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvents;
