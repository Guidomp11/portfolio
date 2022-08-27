module.exports = (sequelize, dataTypes) => {
    const alias = "Chat";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: true,
        },
    };

    const config = {
        tablename: "chats",
        timestamps: true,
        underscored: true
    };

    const Chat = sequelize.define(alias, cols, config);

    return Chat;
}