const express = require('express')
const app = express()
const route = express.Router()


route.get('/', (req, res)=>{
    res.send('update page')
})

module.exports;
