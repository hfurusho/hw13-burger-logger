const connection = require("./connection.js");

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

function updateOne(table, changeValsObj, identifierCol, identifierVal) {
  return new Promise(function(res, rej) {
    const query = `
      UPDATE ??
      SET ?
      WHERE ?? = ?`;
    connection.query(
      query,
      [table, changeValsObj, identifierCol, identifierVal],
      function(err, results) {
        if (err) rej(new Error(err));
        res(results);
      }
    );
  });
}

// FOR TESTING. TODO: DELETE LATER
// (async function testingSite() {
//   try {
//     console.log(await selectAll());
//     console.log(await updateOne("double bacon burger", true));
//     // console.log(await selectAll());
//   } catch (err) {
//     console.log(err);
//   }
// })();

module.exports = {
  selectAll,
  insertOne,
  updateOne
};
