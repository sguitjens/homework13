const express = require("express");

const router = express.Router();

// Import the model (veggies.js) to use its database functions.
const veggie = require("../models/veggie.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  veggie.all(data => {
    var hbsObject = {
      veggies: data
    };
    console.log("GET RESULT", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/veggies", (req, res) => {
  veggie.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/veggies/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  veggie.update({
    eaten: req.body.eaten
  }, condition, (result) => {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/veggies/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  veggie.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
