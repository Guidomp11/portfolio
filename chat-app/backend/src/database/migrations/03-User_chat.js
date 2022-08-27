'use strict'

module.exports = {
    up: async (queryInterface, sequelize) => {
        return queryInterface.createTable('user_chats', {
            id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            user_id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
            },
            chat_id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
            },
            created_at: sequelize.DataTypes.DATE,
            updated_at: sequelize.DataTypes.DATE
        });
    },
    down: async (queryInterface) => {
        return queryInterface.dropTable('user_chats');
    }
};