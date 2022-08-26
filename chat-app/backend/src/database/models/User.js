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
            type: dataTypes.VARCHAR(255),
            allowNull: false,
        },
        username: {
            type: dataTypes.VARCHAR(255),
            allowNull: false,
        },
        password: {
            type: dataTypes.VARCHAR(255),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.VARCHAR(255),
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