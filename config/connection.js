const mysql = require("mysql");
require("dotenv").config({ path: "./.env" });

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: process.env.BURGERSDB_PW,
  database: "burgers_db"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to burgers_db with id: " + connection.threadId);
});

module.exports = connection;
