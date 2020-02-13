// Set up MySQL connection.
const mysql = require("mysql");
require("dotenv").config();

let connection;

//dbURL: us-cdbr-iron-east-04.cleardb.net
if (process.env.CLEARDB_GRAY_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_GRAY_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "veggie_db"
  });
}

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.catch = err => {
  console.log("CONNECTION ERROR", err);
}

// Export connection for our ORM to use.
module.exports = connection;
