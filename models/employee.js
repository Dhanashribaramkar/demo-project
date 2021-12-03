'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
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
        mobile_no: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(191),
            allowNull: false,
        },
        employeeId: {
            type: DataTypes.STRING(191),
            allowNull: true,
        },
        department_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN(true),
            allowNull: true,
        },
        created_by: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
        },
        updated_by: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        tableName: 'employees'
    });
    Employee.associate = function(models) {
        // associations can be defined here
        Employee.belongsTo(models.Department, {
            foreignKey: "department_id",
            as: "department",
        })
    };
    return Employee;
};