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
 
  //增加客户
  router.post('/addCustomer', (req, res) => {
    var addSql = $sql.costomers.addCustomer;
    var selectSql = $sql.costomers.selectTel;
    var params = req.body;
    conn.query(selectSql, [params.tel], function(err, result) {
        if (err) {
            console.log(err);
        }
        if(result){
            if(result[0]!=undefined){
                jsonWrite(res,'该手机号码已被注册')
            }else{
                conn.query(addSql, [params.name, params.tel, params.password], function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        jsonWrite(res, null);
                    }
                })
            }
        }
    })
  });

    //登陆账号
    router.get('/login', (req, res) => {
        var selectSql = $sql.costomers.selectTel;
        var params = req.query;
        var p
        if (params.tel) {
            p=params.tel
        }else{
            p=params.name
            selectSql=$sql.costomers.selectName;
        }
      
        conn.query(selectSql, [p], function(err, result) {
            if (err) {
                console.log(err);
            }
            if(result){
                if(result[0]==undefined){
                    jsonWrite(res,'该手机号码未注册')
                }else{
                    if(params.password == result[0].password){
                        jsonWrite(res, result[0]);
                    }else{
                        jsonWrite(res, '密码输入错误');
                    }
                }
            }
        })
    });

    //修改名字
    router.put('/changeName', (req, res) => {
        var updateSql = $sql.costomers.changeName;
        var params = req.body.customer;
        conn.query(updateSql, [params.name,params.id], function(err, result) {
            if (err) {
                console.log(err);
            }
            if(result){
                jsonWrite(res, 'null');
            }
        })
    });

    //修改密码
    router.put('/changePassword', (req, res) => {
        var updateSql = $sql.costomers.changePassword;
        var params = req.body.customer;
        conn.query(updateSql, [params.password,params.id], function(err, result) {
            if (err) {
                console.log(err);
            }
            if(result){
                jsonWrite(res, 'null');
            }
        })
    });

    //修改手机号码
    router.put('/changeTel', (req, res) => {
        var updateSql = $sql.costomers.changeTel;
        var selectSql = $sql.costomers.selectTel;
        var params = req.body.customer;
        conn.query(selectSql, [params.tel], function(err, result) {
            console.log(result[0])
            if(result[0]!=undefined){
                jsonWrite(res,'该手机号码已被注册')
            }else{
                conn.query(updateSql, [params.tel, params.id], function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        jsonWrite(res, null);
                    }
                })
            }
        })
    });
 
module.exports = router;