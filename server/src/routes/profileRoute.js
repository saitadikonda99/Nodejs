const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()


router.get('/', (req, res)=>{
        const data = {name:"sai", age:20}
        res.send(data)  
})

module.exports = router;