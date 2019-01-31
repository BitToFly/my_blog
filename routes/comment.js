var express = require('express');
var router = express.Router();
var db = require("../models/db");


router.get('/', function(req, res, next) {
    res.render('comment',{});
});
router.post('/',function(req,resp){
    resp.render('comment',{});
});
module.exports = router;