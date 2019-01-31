var express = require('express');
var router = express.Router();
var db = require("../models/db");


router.get('/', function(req, res, next) {
    res.render('login',{});
});
router.post('/',function(req,resp){
    let userName=req.body.username;
    let passWord=req.body.password;
    let login_sql = ' select * from user where userName = ? and passWord = ? ';
    db.query(login_sql,[userName,passWord],function (rows) {
        console.log(rows);
        if(rows != null && rows.length > 0){
            //登录成功
            resp.redirect('Home');

        }else{
            //登录失败
            req.flash("err", "登录失败");
            resp.redirect('login');
        }
    });
});
module.exports = router;