const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3001
const cors = require('cors')
const cookieParser = require('cookie-parser')
const refresh = require('./routes/refreshRoute')
const logout = require('./routes/logoutRoute')
const login = require('./routes/loginRoute')
const logger = require('./middleware/logEvents')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')


// jwt token
const verifyJWT = require('./middleware/verifyJWT')

// roles
const verifyRoles = require('./middleware/verifyRoles')

// imports start here
const {dbConnection, pool} = require('./config/db')   // MySQL Connection Status
const profile = require('./routes/profileRoute')

app.use(cookieParser());
// Handle options credentials check - before CORS!
app.use(cors(corsOptions));


// and fetch cookies credentials requirement
app.use(credentials);
app.options('/*', (req, res) => {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', true);
    res.sendStatus(200);
});

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// verify jwt for profile 

app.use('/api', login)
app.use('/refresh', refresh)
app.use('/logout', logout)


app.use('/profile', verifyJWT, verifyRoles('student', 'admin'), profile)

app.get('/', (req, res)=>{
    res.send("base page")
})

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})