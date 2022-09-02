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

    Chat.associate = (models) => {
        Chat.belongsToMany(models.User, {
            as: "chat_user_",
            through: "user_chats",
            foreignKey: "chat_id",
            otherKey: "user_id"
        });

        Chat.hasMany(models.Message, {
            as: "chat_messages",
            foreignKey: "chat_id"
        });
    };

    return Chat;
}