const express = require('express');
const router = express.Router();
const {Follower} = require('../models');

router.post('/', async function (req, res) {
    const follower = req.user.id;
    const { following } = req.body;
    const followingUser = await Follower.findOne({where: {follower: follower, following: `${following}`}});
      
    if (followingUser) {
        await Follower.destroy({ where: { follower: follower, following: `${following}` } });
        return res.status(200).json({ message: 'You are removed from the followers list of this user!', following: false });

    } else {
        await Follower.create({ follower, following});
        return res.status(201).json({ message: 'You are added to the followers list of this user!', following: true });
    }
});

module.exports = router;
