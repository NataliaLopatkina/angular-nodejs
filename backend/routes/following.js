const express = require('express');
const router = express.Router();
const { Follower } = require('../sequelize');

router.post('/', async function (req, res) {
    const myId = req.user.id;
    const { userId } = req.body;
    const followingUser = await Follower.findAll({where: {follower: `${myId}`, following: `${userId}`}});

    if (followingUser[0]) {
        await Follower.destroy({ where: { follower: `${myId}`, following: `${userId}` } });
        return res.status(201).json({ message: 'You are removed from the subscribers of this user!'});

    } else {
        await Follower.create({ follower: myId, following: userId });
        return res.status(204).json({ message: 'You are added to the followers list of this user!' });
    }
});

module.exports = router;
