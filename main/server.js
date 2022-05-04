const mysql = require("mysql2");
const inquirer = require("inquirer");
const fs = require('fs');

// Set up connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Hazelbasil96!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);

// Query database
db.query('SELECT department_name, id FROM departments', function (err, results) {
  console.table(results);
});

const employees = [];

const createEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            list: 'role',
            message: "What is the employee's role?",
        }
    ]);
};