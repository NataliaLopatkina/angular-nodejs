const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const PostModel = require('./models/post');
const FollowerModel = require('./models/follower');
const RelationshipModel = require('./models/relationshipFollower');

const sequelize = new Sequelize('social', 'postgres', 'tosovu96', {
    dialect: 'postgres',
    define: {
      timestamps: false,
    }
});

const User = UserModel(sequelize, Sequelize);
const Post = PostModel(sequelize, Sequelize);
const Follower = FollowerModel(sequelize, Sequelize);
const Relationship = RelationshipModel(sequelize, Sequelize);

User.hasMany(Post);
Post.belongsTo(User);
User.belongsToMany(Follower, {through: Relationship, foreignKey: 'userId'});
Follower.belongsToMany(User, { through: Relationship, foreignKey: 'followingId'});

sequelize.sync()
  .then(() => {
    console.log('Databases and tables created!')
})

module.exports = {
  User,
  Post,
  Follower,
};
