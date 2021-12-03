const express = require('express');
const router = express.Router();

/* Routes for Employee */
const employeeControl = require('../controllers/EmployeeController');
router.route('/employees').get(employeeControl.getEmployees);
router.route('/calculate').post(employeeControl.subsetPairNotDivisibleByK);

module.exports = router;