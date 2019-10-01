const { Post } = require('../models');

exports.createPost = async function(query) {
    return await Post.create(query);
}

exports.getPosts = async function(query) {
    return await Post.findAll(query);
}
