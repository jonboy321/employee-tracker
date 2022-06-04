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
db.query('SELECT department_name, id FROM departments', function (err, results) {});

function mainMenu() {
  inquirer
  .prompt([
        {
            name: "mainMenu",
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
    ])
    .then((res) => {
      if(res.mainMenu == "VIEW_EMPLOYEES") {
        viewEmployees()
      } else if(res.mainMenu == "VIEW_DEPARTMENTS") {
        viewDepartments()
      } else if(res.mainMenu == "VIEW_ROLES") {
        viewRoles()
      } else if (res.mainMenu == "QUIT") {
        quit()
      } else if (res.mainMenu == "ADD_EMPLOYEE") {
        addEmployee()
      } else if (res.mainMenu == "ADD_DEPARTMENT") {
        addDepartment()
      } else if (res.mainMenu == "UPDATE_EMPLOYEE") {
        updateEmployee()
      }
    })
};

mainMenu();


// Function to view all Employees
function viewEmployees() {
 db.query('SELECT * FROM employees', (error, results) => {
    console.log("\n");
    console.log("List of all employees:")
    console.table(results)
    mainMenu();
  })
}
// Function to view all Departments
function viewDepartments() {
  db.query('SELECT * FROM departments', (error, results) => {
     console.log("\n");
     console.log("List of all departments:")
     console.table(results)
     mainMenu();
   })
 }
// Function to view all Roles
function viewRoles() {
  db.query('SELECT * FROM roles', (error, results) => {
     console.log("\n");
     console.log("List of all roles:")
     console.table(results)
     mainMenu();
   })
 }

//Function to add an employee
function addEmployee() {
db.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ?";
  var values = [
    ['Daryl', 'Hall', 4, 1],
    ['John', 'Oates', 5, 1]
  ];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Records inserted beginning at id: ");
    console.log(result.insertId);
    mainMenu();
  });
});
}

//Function to add a department
function addDepartment() {
db.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO departments (department_name) VALUES ?";
  var values = [
    ['Human Resources'],
    ['Public Relations']
  ];
  db.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Department added!");
    console.log(result.info);
    mainMenu();
  });
});
}

//Function to update an employee
function updateEmployee() {
  db.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE employees SET first_name = 'Tosin', last_name = 'Abasi' WHERE id = 7";
    // var values = [
    //   ['Daryl', 'Hall', 4, 1],
    //   ['John', 'Oates', 5, 1]
    // ];
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Records inserted beginning at id: ");
      console.log(result.insertId);
      mainMenu();
    });
  });
  }

// Function to quit the prompt
function quit() {
  console.log("Farewell, old chap!");
  process.exit();
};