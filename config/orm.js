//this is where you do querying

const connection = require("./connection.js");

//view all non-devoured return res
//export
var orm = {
  all: function(table, cb){
    var queryString = "SELECT * FROM " + table + " WHERE devoured = 0;";
    connection.query(queryString,function(err,res){
      if (err) throw err;
      cb(res)
    })
  },
  delete: function(table, val, cb){
    var queryString = "UPDATE " + table + " SET ? WHERE ?"
    connection.query(queryString, [{devoured: true}, {id: val}], function(err,res){
      if (err) throw err;
      cb(res)
    })
  },
    create: function(table, val, cb){
    var queryString = "INSERT INTO " + table + " SET ?";
    connection.query(queryString,{burger_name: val, devoured:false}, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  }
}

module.exports = orm