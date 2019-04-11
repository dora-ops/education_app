import Cookies from 'js-cookie'

const userInfo=JSON.parse(sessionStorage.getItem(`userInfo`))||{}

const state = {
  name: userInfo.name,
  password: userInfo.password,
  tel: userInfo.tel,
  sex: userInfo.sex,
  courses: userInfo.courses,
  ifBuy: userInfo.ifBuy,
  id: userInfo.id,
  classes: userInfo.id
}

const mutations = {
  saveUserInfo(state,status){
    state.name = status.name
    state.tel = status.tel
    state.id = status.id
    state.sex = status.sex
    state.password = status.password
    state.courses = status.courses
    state.classes = status.classes
    state.ifBuy = status.ifBuy
  },
  updateUserName(state,status){
    state.name = status
  },
  updateUserTel(state,status){
    state.tel = status
  },
  updateUserPassword(state,status){
    state.password = status
  }
}

const actions = {
  saveUserInfo({commit},userInfo){
    commit('saveUserInfo',userInfo)
  },
  updateUserName({commit},userName){
    commit('updateUserName',userName)
  },
  updateUserTel({commit},userTel){
    commit('updateUserTel',userTel)
  },
  updateUserPassword({commit},userPassword){
    commit('updateUserPassword',userPassword)
  }
}


export default {
    state,
    mutations,
    actions
}
