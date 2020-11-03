//Create, update, all
//Will be a large object that calls the orm via key/value pairs

var orm = require("../config/orm.js");

var burgers = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res)
    });
  },
  update: function(val, cb) {
    orm.update("burgers", val, function(res) {
      cb(res)
    });
  },
  create: function(val, cb) {
    orm.create("burgers", val, function(res) {
      cb(res)
    });
  },
  delete: function(val, cb) {
    orm.delete("burgers", val, function(res) {
      cb(res)
    });
  }
};

module.exports = burgers