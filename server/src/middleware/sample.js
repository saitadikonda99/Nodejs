const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');


const verifyJWT = async (req, res, next) => {
    const token = req.cookies.jwt;
    console.log('token:', token);

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Missing token' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { algorithms: ['HS256'] });

        // Check if the user with the decoded information exists in the database
        const [userData, fields] = await pool.query(
            `
            SELECT * 
            FROM users
            WHERE id = ?`,
            [decoded.id]
        );

        if (userData.length > 0) {
            req.user = userData[0]; // Attach user information to the request object
            next(); // Move to the next middleware
        } else {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
    } catch (error) {
        console.error('Error during token verification:', error);
        return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = verifyJWT;
