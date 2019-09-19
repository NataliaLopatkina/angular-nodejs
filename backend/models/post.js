module.exports = (sequilize, type) => {
    return sequilize.define('post', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        title: {
            type: type.STRING,
            allowNull: false,
        },

        text: {
            type: type.STRING,
            allowNull: false,
        },

        date: {
            type: type.DATE,
            allowNull: false,
        }
    })
}
