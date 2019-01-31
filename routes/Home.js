var express = require('express');
var router = express.Router();
var db = require("../models/db");
var infosqls  ='select * from article limit ?,?';


router.get('/', function(req, res, next) {
        res.render('Home',{});
});
router.post('/',function(req,resp){
    let page = req.body.page;
    let line = req.body.line;
    db.query(infosqls,[page,line],function (rows) {
        resp.json(rows);
    })
});
module.exports = router;