const express = require('express');
const router = express.Router();
const { Post } = require('../models');
const { User } = require('../models');
const { Follower } = require('../models');
const Sequelize = require('sequelize');

router.get('/', async function (req, res) {
    const { type } = req.query;
    const userId = req.user.id;
    const Op = Sequelize.Op;

    if (type == 'MyPosts') {
        const posts = await Post.findAll({ where: { authorId: userId } });

        if (posts.length > 0) {
            return res.status(200).json({ posts: posts, message: 'Posts found!' });

        } else {
            return res.status(404).json({ message: 'Posts not found!' });
        }

    } else if (type == 'FriendsPosts') {

        const user = await User.findOne({
            where: { id: userId },
            include: [{
                model: Follower,
                as: 'followers',
            }]
        })

        const ids = user.followers.map(follower => follower.following);

        const posts = await Post.findAll({
            where: { authorId: { [Op.in]: ids } }
        })

        if (posts.length > 0) {
            return res.status(200).json({ posts: posts, message: 'Posts found!' });

        } else {
            return res.status(404).json({ message: 'Posts not found!' });
        }
    }
});

module.exports = router;
