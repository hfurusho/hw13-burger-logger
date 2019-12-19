const orm = require("../config/orm.js");

async function selectAllBurgers() {
  return await orm.selectAll("burgers");
}

async function insertOneBurger(burgerName) {
  return await orm.insertOne(
    "burgers",
    ["burger_name", "devoured"],
    [burgerName, false]
  );
}

// TODO: FINISH ; colsToUpdate is an Array, newVals is an Array corresponding to colsToUpdate
async function updateOneBurger(colsToUpdate, newVals, burgerName) {
  let updateObj = {};
  for (let i = 0; i < colsToUpdate.length; i++) {
    updateObj[colsToUpdate[i]] = newVals[i];
  }

  return await orm.updateOne("burgers", false, "burger_name", burgerName);
}

// (async function testingGrounds() {
//   try {
//     console.log(
//       await updateOneBurger(["devoured"], [false], "double bacon burger")
//     );
//     console.log(await selectAllBurgers());
//   } catch (err) {
//     console.log(err);
//   }
// })();

module.exports = {
  selectAllBurgers,
  insertOneBurger,
  updateOneBurger
};
