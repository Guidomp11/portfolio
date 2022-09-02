module.exports = (sequelize, dataTypes) => {
    const alias = "User";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        username: {
            type: dataTypes.STRING(255),
            unique: true,
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(255),
            allowNull: false,
        },
    };

    const config = {
        tablename: "users",
        timestamps: true,
        underscored: true
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsToMany(models.Chat, {
            as: "user_chats_",
            through: "user_chats",
            foreignKey: "user_id",
            otherKey: "chat_id"
        });

        User.hasMany(models.Message, {
            as: "user_messages",
            foreignKey: "owner_id"
        });
    };

    return User;
}