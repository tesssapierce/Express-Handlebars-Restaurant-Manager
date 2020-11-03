//has post/get calls and uses routers
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
  burger.all(function(data){
    var hbsObject = {burgers: data}
    res.render("index", hbsObject)
  });
});

router.post("/api/burgers/:id", function(req,res){
  var id = req.params.id
  console.log(id)
  burger.update(id, function(result){
    res.status(200).end()
  })
})

router.post("/api/burgers", function(req, res) {
  var burgerName = req.body.burger_name
  console.log(burgerName)
  burger.create(burgerName, function(data) {
    res.status(200).end()
  });
});

router.delete("/api/burgers/:id", function(req,res){
  var id = req.params.id
  console.log(id)
  burger.delete(id, function(result){
    res.status(200).end()
  })
})

module.exports = router ;