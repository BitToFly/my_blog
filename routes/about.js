var express = require('express');
var router = express.Router();
var db = require("../models/db");


router.get('/', function(req, res, next) {
    res.render('about',{});
});
router.post('/',function(req,resp){
    resp.render('about',{});
});
module.exports = router;