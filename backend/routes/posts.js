const express = require('express');
const router = express.Router();
const { Post } = require('../sequelize');
const Sequelize = require('sequelize');

router.get('/', async function (req, res) {
    const { type } = req.query;
    const userId = req.user.id;
    const Op = Sequelize.Op;

    if (type == 'MyPosts') {
        const posts = await Post.findAll({where: {authorId: userId}});

        if (posts.length > 0) {
            return res.status(200).json({posts: posts, message: 'Posts found!'});

        } else {
            return res.status(404).json({ message: 'Posts not found!' });
        }
        
    } else if (type == 'FriendsPosts') {
        const posts = await Post.findAll({ where: { authorId: { [Op.ne]: userId }}})

        if (posts.length > 0) {
            return res.status(200).json({posts: posts, message: 'Posts found!'});

        } else {
            return res.status(404).json({ message: 'Posts not found!' });
        }
    }


    // } else {
    //     const [posts] = await sequelize.query(`SELECT * FROM posts right join users on posts.author_id = users.id 
    //     where users.id in (SELECT following from followers where follower = '${id}') 
    //     and posts.author_id is not null`)
    // }

    
});

module.exports = router;
