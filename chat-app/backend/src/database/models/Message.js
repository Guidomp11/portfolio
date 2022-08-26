module.exports = (sequelize, dataTypes) => {
    const alias = "Message";

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        owner_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        chat_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
        },
        message: {
            type: dataTypes.VARCHAR(255),
            allowNull: false,
        },
    };

    const config = {
        tablename: "messages",
        timestamps: true,
        underscored: true
    };

    const Message = sequelize.define(alias, cols, config);

    return Message;
}