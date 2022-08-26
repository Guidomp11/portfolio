module.exports = (sequelize, dataTypes) => {
    const alias = "User_chat";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        chat_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
    };

    const config = {
        tablename: "user_chats",
        timestamps: true,
        underscored: true
    };

    const User_chat = sequelize.define(alias, cols, config);

    return User_chat;
}