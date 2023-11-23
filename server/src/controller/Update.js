const express = require('express')
const app = express()
const router = express.Router()
const { updateUser } = require('../models/profileModels')


router.put('/update/:id', async (req, res)=>{
    const id = req.params.id;
    const { username, password } = req.body;
    try {
        await updateUser(id, { username, password });
        res.status(200).send('User updated successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;