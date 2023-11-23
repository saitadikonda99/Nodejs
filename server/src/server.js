const express = require('express')
const app = express()
require('dotenv').config();
const PORT = process.env.PORT || 3001

// imports start here
const dbConnection = require('./db/db')   // MySQL Connection Status

app.get('/', (req, res, next)=>{
    res.send(`Server working PORT : ${PORT}`)
})



app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`)
})

