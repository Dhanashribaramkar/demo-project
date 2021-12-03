'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('employees', [
            {
                name: 'John',
                mobile_no: 8526398563,
                email: 'john@gmail.com',
                employeeId: 'J123',
                department_id: '1',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Brown',
                mobile_no: 8526398583,
                email: 'brown@gmail.com',
                employeeId: 'B123',
                department_id: '2',
                status: true,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('employees', null, {});
    }
};
