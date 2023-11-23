const express = require('express')
const app = express()
const router = express.Router()
const update = require('../controller/Update')
const view = require('../controller/view')
const removeUser = require('../controller/remove')

router.use('/', update)
router.use('/', view)
router.use('/', removeUser)

module.exports = router;