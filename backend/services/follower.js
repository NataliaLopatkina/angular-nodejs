const { Follower } = require('../models');

exports.getFollower = async function(query) {
    return await Follower.findOne(query)
}

exports.destroyFollower = async function(query) {
    return await Follower.destroy(query)
}

exports.createFollower = async function(query) {
    return await Follower.create(query)
}
