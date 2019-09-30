const express = require('express');
const router = express.Router();
const {User} = require('../models');

router.post('/', async function (req, res) {
    const { name, email, password } = req.body;
    const user = await User.findOne({where: {email: email}});

    if (!user) {
        await User.create({name, email, password});
        return res.status(201).json({ message: 'User is registered!'})

    } else {
        return res.status(403).json({message: 'User with this email is already registered!'})
    }
});

module.exports = router;
