var sqlMap = {
    courses: {
      getAllCourse: 'select * from courses',
        getMyCourses: 'select * from courses where id = ?',
      page:function(listQuery) {
        var sql='SELECT * FROM `courses` WHERE 1=1 ';
          if (listQuery.name) {
              sql+=' AND `name` LIKE  "%'+listQuery.name+'%"'
          }
          if (listQuery.ifSale) {
             sql+=' AND `ifSale` = '+listQuery.ifSale
          }
          if (listQuery.page&&listQuery.limit) {
              var pos=(listQuery.page-1)*listQuery.limit
              var end=listQuery.page*listQuery.limit
              sql+=' LIMIT '+pos+','+end 
          }
          return sql
      },
      getSaleCourse: 'select * from courses where ifSale=1',
      count:function (listQuery) {
        var sql='SELECT count(*) as count FROM `courses` WHERE 1=1 ';
        if (listQuery.name) {
            sql+=' AND `name` LIKE  "%'+listQuery.name+'%"'
        }
        if (listQuery.ifSale) {
           sql+=' AND `ifSale` = '+listQuery.ifSale
        }
        return sql
      },
       updateifSale:'UPDATE `courses` SET `ifSale` = "?" WHERE (`id` = "?");'
    },
    classes:{
        getCourseClass: 'select * from classes where course ="?"',
    },
    customers:{
        page:function(listQuery) {
            var sql='SELECT * FROM `customers` WHERE 1=1 ';
              if (listQuery.name) {
                  sql+=' AND `name` LIKE  "%'+listQuery.name+'%"'
              }
              if (listQuery.tel) {
                sql+=' AND `tel` LIKE  "%'+listQuery.tel+'%"'
            }
              if (listQuery.ifBuy) {
                 sql+=' AND `ifBuy` = '+listQuery.ifBuy
              }
              if (listQuery.page&&listQuery.limit) {
                  var pos=(listQuery.page-1)*listQuery.limit
                  var end=listQuery.page*listQuery.limit
                  sql+=' LIMIT '+pos+','+end 
              }
              return sql
          },
          count:function (listQuery) {
            var sql='SELECT count(*) as count FROM `customers` WHERE 1=1 ';
            if (listQuery.name) {
                sql+=' AND `name` LIKE  "%'+listQuery.name+'%"'
            }
            if (listQuery.tel) {
                sql+=' AND `tel` LIKE  "%'+listQuery.tel+'%"'
            }
            if (listQuery.ifSale) {
               sql+=' AND `ifSale` = '+listQuery.ifSale
            }
            return sql
          },
          buyCourse:'UPDATE `customers` SET `courses` = "?" , `ifBuy` = "?" WHERE (`id` = "?");'
    }
   
  }
  
  module.exports = sqlMap;