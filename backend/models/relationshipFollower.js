module.exports = (sequilize, type) => {
    return sequilize.define('relationship', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }
    })
}
