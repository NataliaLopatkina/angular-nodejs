'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    authorId: DataTypes.STRING,
    date: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    Post.belongsTo(models.User, {foreignKey: 'authorId', as: 'user'})
  };
  return Post;
};