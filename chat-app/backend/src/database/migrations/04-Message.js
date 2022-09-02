'use strict'

module.exports = {
    up: async (queryInterface, sequelize) => {
        return queryInterface.createTable('messages', {
            id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            owner_id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            chat_id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                allowNull: false,
                references: {
                    model: 'chats',
                    key: 'id'
                }
            },
            message: {
                type: sequelize.DataTypes.STRING,
                allowNull: false,
            },
            created_at: sequelize.DataTypes.DATE,
            updated_at: sequelize.DataTypes.DATE
        });
    },
    down: async (queryInterface) => {
        return queryInterface.dropTable('messages');
    }
};