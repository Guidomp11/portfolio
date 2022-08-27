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

    return User;
}