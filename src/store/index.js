import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'

Vue.use(Vuex)

const mutations={
    set_toast(state, toast) {
        state.toast = toast
      },
}

const actions={
    set_toast(context, toast) {
        context.commit('set_toast', toast)
      },
}
const store = new Vuex.Store({
    modules:{
        user
    },
    actions,
    getters,
    mutations
})

export default store