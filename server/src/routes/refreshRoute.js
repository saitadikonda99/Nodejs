const express = require('express')
const router = express.Router()
const cors = require('cors')

const { handlerefreshToken } = require('../controller/refreshController')

router.get('/', handlerefreshToken );


module.exports = router;