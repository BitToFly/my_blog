var express = require('express');
var router = express.Router();
var db = require("../models/db");


router.get('/', function(req, res, next) {
    res.render('game',{});
});
router.post('/',function(req,resp){
    resp.render('game',{});
});
module.exports = router;