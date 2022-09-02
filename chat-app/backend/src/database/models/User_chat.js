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

    User_chat.associate = (models) => {
        User_chat.belongsTo(models.User, {
            as: "a_user_chats",
            foreignKey: "user_id"
        });

        User_chat.belongsTo(models.Chat, {
            as: "a_chat_user",
            foreignKey: "chat_id"
        });
    };

    return User_chat;
}