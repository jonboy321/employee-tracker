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