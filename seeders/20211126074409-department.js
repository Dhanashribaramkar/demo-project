'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('departments', [
        {
            name: 'Accountant',
            employee_count: 1,
            status: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Development',
            employee_count: 1,
            status: true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('departments', null, {});
  }
};
