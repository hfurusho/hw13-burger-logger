const orm = require("../config/orm.js");

async function selectAllBurgers() {
  try {
    return await orm.selectAll("burgers");
  } catch (err) {
    console.log(err);
  }
}

async function insertOneBurger(burgerName) {
  return await orm.insertOne(
    "burgers",
    ["burger_name", "devoured"],
    [burgerName, false]
  );
}

async function updateOneBurger(setCol, setVal, whereCol, whereVal) {
  try {
    return await orm.updateOne("burgers", setCol, setVal, whereCol, whereVal);
  } catch (err) {
    console.log(err);
  }
}

async function deleteOneBurger(whereCol, whereVal) {
  try {
    return await orm.deleteOne("burgers", whereCol, whereVal);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  selectAllBurgers,
  insertOneBurger,
  updateOneBurger,
  deleteOneBurger
};
