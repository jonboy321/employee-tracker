const mysql = require("mysql2");
const inquirer = require("inquirer");
const fs = require('fs');
require("console.table");

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

function mainMenu() {
  prompt([
        {
            type: "list",
            list: "choice",
            message: "What would you like to do?",
            choices: [
              {
                name: "View ALL Employees",
                value: "VIEW_EMPLOYEES"
              },
              {
                name: "View ALL Departments",
                value: "VIEW_DEPARTMENTS"
              },
              {
                name: "View ALL Roles",
                value: "VIEW_ROLES"
              },
              {
                name: "Add an Employee",
                value: "ADD_EMPLOYEE"
              },
              {
                name: "Add a Department",
                value: "ADD_DEPARTMENT"
              },
              {
                name: "Update an Employee",
                value: "UPDATE_EMPLOYEE"
              },
              {
                name: "Quit",
                value: "QUIT"
              }
            ]
        }
    ]).then(res => {
      let choices = res.choices;

    })
};

// Function to view all Employees
function viewEmployees() {
  db.findAllEmployees()
  .then(([rows]) => {
    let employees = rows;
    console.log("\n");
    console.table(employees)
  })
  .then(() => mainMenu());
}

// Function to view all Departments
function viewDepartments() {
  db.findAllDepartments()
  .then(([rows]) => {
    let departments = rows;
    console.log("\n");
    console.table(departments)
  })
  .then(() => mainMenu());
}

// Function to view all Roles
function viewRoles() {
  db.findAllRoles()
  .then(([rows]) => {
    let roles = rows;
    console.log("\n");
    console.table(roles)
  })
  .then(() => mainMenu());
}

// Function to quit the prompt
function quit() {
  console.log("Farewell!");
  process.exit();
};