'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING(191),
        allowNull: false,
    },
    employee_count: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    },
  }, {});
  return Department;
};