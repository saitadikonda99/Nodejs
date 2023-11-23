const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3001

// imports start here
const dbConnection = require('./db/db')   // MySQL Connection Status
const profile = require('./routes/profileRoute')


app.use(express.json());

app.use('/api', profile)

app.get('/', (req, res)=>{
    res.send("base page")
})

app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})

