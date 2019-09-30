var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const { User } = require('../models');
const { Follower } = require('../models');

router.get('/', async function (req, res) {
    const id = req.user.id;
    const { value } = req.query;
    const Op = Sequelize.Op;

    const users = await User.findAll({
        where: { name: { [Op.iLike]: `%${value}%` }, id: { [Op.ne]: id } },
        include: [{
            model: Follower,
            as: 'followings',
        }]
    })
    if (users.length > 0) {
        res.status(200).json({ users: users })
    } else {
        res.status(404).json({ message: 'Users not found!' });
    }
});

module.exports = router;
