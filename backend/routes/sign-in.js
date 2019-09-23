const express = require('express');
const router = express.Router();
const { User } = require('../sequelize');
const jwt = require('jsonwebtoken');

router.post('/', async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email: email, password: password }});

    if (!user) {
        return res.status(402).json({message: 'Incorected email or password!'});

    } else {
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email, password: user.password },
            'secret', { expiresIn: '1h' });

        //res.cookie('token', token, { maxAge: 900000 * 60, httpOnly: false });

        return res.status(200).json({ message: 'User found!', token: token})
    }
});

module.exports = router;
