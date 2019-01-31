var express = require('express');
var router = express.Router();
var db = require("../models/db");

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query("select * from user",function (rows) {
    console.log(rows);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
