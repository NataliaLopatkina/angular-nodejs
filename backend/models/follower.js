module.exports = (sequelize, type) => {
    return sequelize.define('follower', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        follower: {
            type: type.INTEGER,
            allowNull: false,
        },

        following: {
            type: type.INTEGER,
            allowNull: false,
        },
    })
}
