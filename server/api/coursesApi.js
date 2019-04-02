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

//获取上架课程
router.get('/getAllCourse', (req, res) => {
  var selectSql = $sql.courses.getSaleCourse;
  conn.query(selectSql, [], function(err, result) {
    if (err) {
      console.log(err);
    }
    if(result){
      console.log(result,'返回结果')
      jsonWrite(res, result);
    }
  })
});






module.exports = router;