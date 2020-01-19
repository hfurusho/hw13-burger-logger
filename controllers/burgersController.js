let express = require("express");
let burger = require("../models/burger.js");

let router = express.Router();

router.get("/", async function(req, res) {
  try {
    let data = await burger.selectAllBurgers();
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/burgers", async function(req, res) {
  try {
    let result = await burger.insertOneBurger(req.body.burgerName);
    res.json({ id: result.insertId });
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/burgers/:id", async function(req, res) {
  try {
    const id = req.params.id;

    let results = await burger.updateOneBurger("devoured", true, "id", id);
    if (results.changedRows === 0) {
      return res.status(404).end();
    }
    return res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
