var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
 
// 连接数据库
var conn = mysql.createConnection(models.mysql);
 
conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

//获取我的课程
router.get('/getMyClasses', (req, res) => {
    var selectSql = $sql.classes.getMyClasses;
    var params = req.query;
    var courses = params.courses
    console.log(params)
    var result = []
    for(var i=0;i<courses.length;i++){
      if(i==0){
        selectSql = selectSql+" id = "+courses[i]
      }else{
        selectSql = selectSql+" or id = "+courses[i]
      }
    }
    console.log(selectSql)
    conn.query(selectSql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        if(res){
            jsonWrite(res, result);
        }
      })
  });


  module.exports = router;