'use strict'

module.exports = {
    up: async (queryInterface, sequelize) => {
        return queryInterface.createTable('chats', {
            id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: sequelize.DataTypes.STRING,
                allowNull: true,
            },
            created_at: sequelize.DataTypes.DATE,
            updated_at: sequelize.DataTypes.DATE
        });
    },
    down: async (queryInterface) => {
        return queryInterface.dropTable('chats');
    }
};