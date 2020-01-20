// const connection = require("./connection.js");
var connection = require("../config/connection.js");

function selectAll(table) {
  return new Promise(function(res, rej) {
    const query = `SELECT * FROM ??`;
    connection.query(query, [table], function(err, results) {
      if (err) rej(new Error(err));
      res(results);
    });
  });
}

// Insert into the given table with the given values [array] into the given column names [array]
function insertOne(table, colNames, values) {
  return new Promise(function(res, rej) {
    const query = `
      INSERT INTO ?? (??)
      VALUES (?)`;
    connection.query(query, [table, colNames, values], function(err, results) {
      if (err) rej(new Error(err));
      res(results);
    });
  });
}

function updateOne(table, setCol, setVal, whereCol, whereVal) {
  return new Promise(function(res, rej) {
    const query = `
      UPDATE ??
      SET ?? = ?
      WHERE ?? = ?`;
    connection.query(
      query,
      [table, setCol, setVal, whereCol, whereVal],
      function(err, results) {
        if (err) rej(new Error(err));
        res(results);
      }
    );
  });
}

function deleteOne(table, whereCol, whereVal) {
  return new Promise(function(res, rej) {
    const query = `
      DELETE FROM ??
      WHERE ?? = ?`;
    connection.query(query, [table, whereCol, whereVal], function(
      err,
      results
    ) {
      if (err) rej(new Error(err));
      res(results);
    });
  });
}

module.exports = {
  selectAll,
  insertOne,
  updateOne,
  deleteOne
};
