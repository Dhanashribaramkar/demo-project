'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('departments', {
            id: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING(191),
                allowNull: false,
            },
            employee_count: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            status: {
                type: Sequelize.BOOLEAN(true),
                allowNull: true,
            },
            created_by: {
                type: Sequelize.INTEGER(10),
                allowNull: true,
            },
            updated_by: {
                type: Sequelize.INTEGER(10),
                allowNull: true,
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('departments');
    }
};