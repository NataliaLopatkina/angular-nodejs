const express = require('express');
const router = express.Router();
const {User} = require('../models');
const jwt = require('jsonwebtoken');

router.post('/', async function (req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({where: {email: email, password: password }});

    if (!user) {
        return res.status(402).json({message: 'Incorected email or password!'});
    } else {
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email },
            'secret', { expiresIn: '1h' });

        return res.status(200).json({message: 'Logged in!', token: token, user: user});
    }
});

module.exports = router;
