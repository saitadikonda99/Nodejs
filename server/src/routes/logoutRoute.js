const express = require('express')
const cors = require('cors')
const router = express.Router()

const { handleLogout } = require('../controller/logoutController')

router.get('/', handleLogout );


module.exports = router;