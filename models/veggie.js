// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const veggie = {
  all: function(cb) {
    orm.all("veggies", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("veggies", cols, vals, function(res) {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("veggies", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("veggies", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller veggiesController.js).
module.exports = veggie;
