var sqlMap = {
    courses: {
        getAllCourse: 'select * from courses',
        getMyCourses: 'select * from courses where id = ?',
        page: function (listQuery) {
            var sql = 'SELECT * FROM `courses` WHERE 1=1 ';
            if (listQuery.name) {
                sql += ' AND `name` LIKE  "%' + listQuery.name + '%"'
            }
            if (listQuery.ifSale) {
                sql += ' AND `ifSale` = ' + listQuery.ifSale
            }
            if (listQuery.page && listQuery.limit) {
                var pos = (listQuery.page - 1) * listQuery.limit
                var end = listQuery.page * listQuery.limit
                sql += ' LIMIT ' + pos + ',' + end
            }
            return sql
        },
        getSaleCourse: 'select * from courses where ifSale=1',
        count: function (listQuery) {
            var sql = 'SELECT count(*) as count FROM `courses` WHERE 1=1 ';
            if (listQuery.name) {
                sql += ' AND `name` LIKE  "%' + listQuery.name + '%"'
            }
            if (listQuery.ifSale) {
                sql += ' AND `ifSale` = ' + listQuery.ifSale
            }
            return sql
        },
        updateifSale: 'UPDATE `courses` SET `ifSale` = "?" WHERE (`id` = "?");',
        updateClasses: 'UPDATE `courses` SET `classes` = "?" WHERE (`id` = "?");',
        getCourseList: function (params) {
            var sql = 'select * from courses where id in ('
            for (let index = 0; index < params.length; index++) {
                const element = params[index];
                sql += element + ","
                
            }
            sql = sql.substring(0, sql.lastIndexOf(','))
            sql += ')'
            return sql;
        },
    },
    classes: {
        getResource: function (params) {
            var sql = 'select * from resource where id in ('
            //不可为空
            for (let index = 0; index < params.length; index++) {
                const element = params[index];
                sql += element + ","
                
            }
            // for (const id of params) {
            //     sql += id + ","
            // }
            sql = sql.substring(0, sql.lastIndexOf(','))
            sql += ')'
            return sql;
        },
        getCourseClass: 'select * from classes where course ="?"',
        getClassResource: 'select * from classes where id =?',
        getClassList: function (params) {
            var sql = 'select * from classes where id in ('
            for (let index = 0; index < params.length; index++) {
                const element = params[index];
                sql += element + ","
                
            }
            sql = sql.substring(0, sql.lastIndexOf(','))
            sql += ')'
            return sql;
        },
        updatePeople: function (params) {
            var sql = 'update classes set peopleQTY=peopleQTY+1 where id in ('
           
            for (let index = 0; index < params.length; index++) {
                const element = params[index];
                sql += element + ","
                
            }
          
            sql = sql.substring(0, sql.lastIndexOf(','))
            sql += ')'
            return sql;
        },
       
    },
    customers: {
        page: function (listQuery) {
            var sql = 'SELECT * FROM `customers` WHERE 1=1 ';
            if (listQuery.name) {
                sql += ' AND `name` LIKE  "%' + listQuery.name + '%"'
            }
            if (listQuery.tel) {
                sql += ' AND `tel` LIKE  "%' + listQuery.tel + '%"'
            }
            if (listQuery.ifBuy) {
                sql += ' AND `ifBuy` = ' + listQuery.ifBuy
            }
            if (listQuery.page && listQuery.limit) {
                var pos = (listQuery.page - 1) * listQuery.limit
                var end = listQuery.page * listQuery.limit
                sql += ' LIMIT ' + pos + ',' + end
            }
            return sql
        },
        count: function (listQuery) {
            var sql = 'SELECT count(*) as count FROM `customers` WHERE 1=1 ';
            if (listQuery.name) {
                sql += ' AND `name` LIKE  "%' + listQuery.name + '%"'
            }
            if (listQuery.tel) {
                sql += ' AND `tel` LIKE  "%' + listQuery.tel + '%"'
            }
            if (listQuery.ifSale) {
                sql += ' AND `ifSale` = ' + listQuery.ifSale
            }
            return sql
        },
        buyCourse: 'UPDATE `customers` SET `courses` = "?" , `ifBuy` = "?" WHERE (`id` = "?");',
        buyClasses: 'UPDATE `customers` SET `classes` = "?" , `ifBuy` = "1" WHERE (`id` = "?");',
        getUserInfo: 'select * from customers where id = ?',
        updateUserPhoto: 'UPDATE `customers` SET `photo` = "?"  WHERE (`id` = "?");',
        updateUserBuy: 'UPDATE `customers` SET `ifBuy` = "1"  WHERE (`id` = "?");',
        getMyClasses: 'select * from classes where id = ?'
    },
    resource:{
        getResource:'select * from resource where id = ?',
    }


}

module.exports = sqlMap;