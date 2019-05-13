import Vue from 'vue'
import Vuex from 'vuex'

import ReposStore from './modules/repos.module'
import MembersStore from './modules/members.module'
Vue.use(Vuex)

// Ajouter les stores aux Vuex default
export default new Vuex.Store({
  modules: {
    ReposStore,
    MembersStore
  }
})
