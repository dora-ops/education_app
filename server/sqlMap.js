var sqlMap = {
    costomers: {
      addCustomer: 'INSERT INTO customers (name, tel, password) VALUES (?, ?, ?)',//注册
      selectTel: 'select * from customers where tel = ?',//查询号码是否被注册
      selectName: 'select * from customers where name = ?',//查询号码是否被注册
      selectUser:'select * from customers where id = ?',
      changeName:'update customers set name = ? where id = ?',
      changePassword:'update customers set password = ? where id = ?',
      changeTel:'update customers set Tel = ? where id = ?'
    },
    courses: {
      getSaleCourse: 'select * from courses where ifSale = 1',
    //   getAllCourse: 'select * from courses',
      // getMyCourses: 'select * from classes where id = ?'
    },
    classes: {
      getMyClasses: 'select * from classes where'
    }
  }
  
  module.exports = sqlMap;