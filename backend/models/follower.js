'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    follower: DataTypes.INTEGER,
    following: DataTypes.INTEGER
  }, {});
  Follower.associate = function(models) {
    Follower.belongsTo(models.User, {foreignKey: 'follower'})
    Follower.belongsTo(models.User, {foreignKey: 'following'})
  };
  return Follower;
};