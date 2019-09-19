const express = require('express');
const router = express.Router();
const { User } = require('../sequelize');

router.post('/', async function (req, res) {
    const { name, email, password } = req.body;
    const user = await User.findOne({where: {email: email}});

    if (!user) {
        await User.create({name, email, password});
        return res.status(201).send('User is registered');
    }

    res.status(403).send('User with this email is already registered');
});

module.exports = router;
