import Vue from 'vue'
import Vuex from 'vuex'
import ReposStore from './store/modules/repos.module'
import MembersStore from './store/modules/members.module'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ReposStore,
    MembersStore
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
