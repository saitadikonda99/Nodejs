const express = require('express');
const app = express()
const router = express.Router()
const { removeUser } = require('../models/profileModels')

router.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await removeUser(id);
        res.status(200).send('User removed successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;