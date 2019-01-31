var express = require('express');
var router = express.Router();
var db = require("../models/db");


router.get('/', function(req, res, next) {
    res.render('register',{});
});

router.post('/',function(req,resp) {
    let Email = req.body.email;
    let userName = req.body.username;
    let passWord = req.body.password;
    let insert_sql = ' insert into user (userName,passWord,Email) values (?,?,?) ';
    db.query(insert_sql, [userName, passWord, Email], function (rows) {
        resp.redirect('login');
        console.log(rows);
    });
});

module.exports = router;
