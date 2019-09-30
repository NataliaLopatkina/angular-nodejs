'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Post, {foreignKey: 'authorId', as: 'posts'})
    User.hasMany(models.Follower, {foreignKey: 'follower', as: 'followers'})
    User.hasMany(models.Follower, {foreignKey: 'following', as: 'followings'})
  };
  return User;
};