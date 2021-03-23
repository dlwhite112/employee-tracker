const mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "employees_db",
  });
  
  connection.connect();
  
  module.exports = connection;