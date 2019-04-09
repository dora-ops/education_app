import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cart from '@//pages/buyCourse/cart'
import login from '@/pages/login/login.vue'
import register from '@/pages/login/register.vue'
import myCourse from '@/pages/myCourse/myCourse.vue'
import courseDetail from '@/pages/myCourse/courseDetail.vue'
import buyCourse from '@/pages/buyCourse/buyCourse.vue'
import forum from '@/pages/forum/forum.vue'
import addPost from '@/pages/forum/addPost.vue'
import personalCenter from '@/pages/personalCenter/personalCenter.vue'
import chooseEdit from '@/pages/personalCenter/chooseEdit.vue'
import changeName from '@/pages/personalCenter/change/changeName.vue'
import changePasssword from '@/pages/personalCenter/change/changePassword.vue'
import changePhoto from '@/pages/personalCenter/change/changePhoto.vue'
import changeTel from '@/pages/personalCenter/change/changeTel.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  // base:'/crm-wechat/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path: '/hello',
        name: 'hello',
        component: HelloWorld
      },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/myCourse',
      name: 'myCourse',
      component: myCourse
    },
    {
      path: '/buyCourse',
      name: 'buyCourse',
      component: buyCourse
    },
    {
      path: '/forum',
      name: 'forum',
      component: forum
    },
    {
      path: '/forum/addPost',
      name: 'addPost',
      component: addPost
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path: '/personalCenter/chooseEdit',
      name: 'chooseEdit',
      component: chooseEdit
    },
    {
      path: '/personalCenter/chooseEdit/changeName',
      name: 'changeName',
      component: changeName
    },
    {
      path: '/personalCenter/chooseEdit/changePhoto',
      name: 'changePhoto',
      component: changePhoto
    },
    {
      path: '/personalCenter/chooseEdit/changePasssword',
      name: 'changePasssword',
      component: changePasssword
    },
    {
      path: '/personalCenter/chooseEdit/changeTel',
      name: 'changeTel',
      component: changeTel
    },
    {
        path: '/courseDetail/:id',
        name: 'courseDetail',
        component: courseDetail
      },
      {
        path: '/cart/:id',
        name: 'cart',
        component: cart
      }
  ]
})
