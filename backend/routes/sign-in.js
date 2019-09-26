const express = require('express');
const router = express.Router();
const { User } = require('../sequelize');
const jwt = require('jsonwebtoken');
const tokensList = {};

router.post('/', async function (req, res) {
    const { email, password } = req.body;
    const secret = 'secret';
    const refreshTokenSecret = 'secretRefresh';

    const user = await User.findOne({where: {email: email, password: password }});
    const userData = { id: user.id, name: user.name, email: user.email, password: user.password };

    if (!user) {
        return res.status(402).json({message: 'Incorected email or password!'});

    } else {
        const token = jwt.sign(userData, secret, { expiresIn: '900' });
        const refreshToken = jwt.sign(userData, refreshTokenSecret, { expiresIn: '86400' });
        const response = {message: 'Logged in!', token: token, user: user};
        tokensList[refreshToken] = response;
        return res.status(200).json(response);
    }
});

module.exports = router;
