const { User } = require('../models');

exports.getUser = async function(query) {
    return await User.findOne(query);
}

exports.createUser = async function(query) {
    return await User.create(query);
}

exports.getUserFollowers = async function(query) {
    return await User.findOne(query);
}

exports.getUsers = async function(query) {
    return await User.findAll(query);
}
