const express = require('express')
const app = express()
const router = express.Router()
const { viewProfile } = require('../models/profileModels')

router.get('/view', async (req, res)=>{
    const result = await viewProfile();
    res.send(result);
})

module.exports = router;
