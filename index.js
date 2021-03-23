const result = dotenv.config();
const cTable = require("console.table");
var inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "my_db",
});

connection.connect();
