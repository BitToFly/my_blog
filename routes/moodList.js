var express = require('express');
var router = express.Router();
var db = require("../models/db");
var infosqls1  ='select * from moodList limit ?,?';


router.get('/', function(req, res, next) {
    res.render('moodList',{});
});
router.post('/',function(req,resp){
    // resp.render('moodList',{});
    let page = req.body.page;
    let line = req.body.line;
    db.query(infosqls1,[page,line ],function (rows) {
        resp.json(rows);

    })
});
module.exports = router;