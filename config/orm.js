const connection = require("./connection.js");

function selectAll() {
  return new Promise(function(res, rej) {
    const query = "SELECT * FROM burgers";
    connection.query(query, function(err, results) {
      if (err) rej(new Error(err));
      res(results);
    });
  });
}

function insertOne(burgerName) {
  return new Promise(function(res, rej) {
    const query = `
      INSERT INTO burgers (burger_name, devoured)
      VALUES (?, FALSE)`;
    connection.query(query, [burgerName.toLowerCase()], function(err, results) {
      if (err) rej(new Error(err));
      res(results);
    });
  });
}

function updateOne(burgerName, devoured) {
  return new Promise(function(res, rej) {
    const query = `
      UPDATE burgers
      SET devoured = ?
      WHERE burger_name = ?`;
    connection.query(query, [devoured, burgerName.toLowerCase()], function(
      err,
      results
    ) {
      if (err) rej(new Error(err));
      res(results);
    });
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
