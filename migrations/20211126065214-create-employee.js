'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('employees', {
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
            mobile_no: {
                type: Sequelize.INTEGER(11),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(191),
                allowNull: false,
            },
            employeeId: {
                type: Sequelize.STRING(191),
                allowNull: true,
            },
            department_id: {
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
        return queryInterface.dropTable('employees');
    }
};