const mysql = require("mysql");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

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
