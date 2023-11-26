const express = require('express')
const cors = require('cors')
const router = express.Router()

const { handleLogin } = require('../controller/authController')



router.post('/login', (req, res)=>{
    handleLogin(req, res)
})

module.exports = router;