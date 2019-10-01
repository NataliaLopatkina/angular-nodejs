const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { Follower } = require('../models');
const postService = require('../services/post');
const userService = require('../services/user');

exports.getPosts = async function(req, res, next) {
    const { type } = req.query;
    const userId = req.user.id;
    const queryMyPosts = { where: { authorId: userId }};
    const queryUserFollowers = { where: { id: userId }, include: [{ model: Follower, as: 'followers', }] };

    if (type == 'MyPosts') {
        try {
            const posts = await postService.getPosts(queryMyPosts);

            if (posts.length > 0) {
                return res.status(200).json({ posts: posts, message: 'Posts found!' });
            }

            throw new Error('Posts not found!');
        }

        catch (e) {
            return res.status(404).json({ message: e.message });
        }

    } else if (type == 'FriendsPosts') {
        try {
            const user = await userService.getUserFollowers(queryUserFollowers);
            const ids = user.followers.map(follower => follower.following)
            const queryFriendsPosts = { authorId: { [Op.in]: ids } };
            const posts = await postService.getPosts(queryFriendsPosts);

            if(posts.length > 0) {
                return res.status(200).json({ posts: posts, message: 'Posts found!' });
            }

            throw new Error('Posts not found!');
        }

        catch(e) {
            return res.status(404).json({ message: e.message });
        }
    }
}
