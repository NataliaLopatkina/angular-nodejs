const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Follower } = require('../models');
const userService = require('../services/user');

exports.getUsers = async function(req, res, next) {
    const id = req.user.id;
    const { value } = req.query;
    const query = { where: { name: { [Op.iLike]: `%${value}%` }, id: { [Op.ne]: id } }, include: [{ model: Follower, as: 'followings' }]};

    try {
        const users = await userService.getUsers(query);

        if (users.length > 0) {
            return res.status(200).json({ users: users })
        }

        throw new Error('Users not found!')
    }

    catch(e) {
        res.status(404).json({ message: e.message });
    }
}
