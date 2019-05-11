import Vue from 'vue'
import Vuex from 'vuex'

import OrganizationStore from './modules/organization.module'
Vue.use(Vuex)

// Ajouter les stores aux Vuex default
export default new Vuex.Store({
  modules: {
    OrganizationStore
  }
})
