const express = require('express');
const router = express.Router();
const { User } = require('../sequelize');
const jwt = require('jsonwebtoken');

router.post('/', async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email: email, password: password }});

    if (!user) {
        return res.status(402).send('Incorected email or password');
    }

    res.status(200).send('User found!');

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email, password: user.password },
        'secret', { expiresIn: '1h' });
    
    res.cookie('token', token, { maxAge: 900000 * 60, httpOnly: false });

    return res.json({ status: 200, message: 'User found' })
    
});

module.exports = router;
