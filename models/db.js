var express = require("express");
var mysql = require("mysql");
var db = {};
db.query = function (sql,queryArray, callback) {
    var connect = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "666666",
        database:"login",
        port:3306
    });
    connect.connect();
    connect.query(sql, queryArray, function(err,rows) {
        if(err)console.log(err);
        callback(rows);
    });
    connect.end();
};
module.exports = db;