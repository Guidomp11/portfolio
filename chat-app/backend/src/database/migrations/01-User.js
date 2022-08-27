'use strict'

module.exports = {
    up: async (queryInterface, sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                type: sequelize.DataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            email: {
                type: sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            username: {
                type: sequelize.DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            password: {
                type: sequelize.DataTypes.STRING,
                allowNull: false,
            },
            avatar: {
                type: sequelize.DataTypes.STRING,
                allowNull: false,
            },
            created_at: sequelize.DataTypes.DATE,
            updated_at: sequelize.DataTypes.DATE
        });
    },
    down: async (queryInterface) => {
        return queryInterface.dropTable('users');
    }
};