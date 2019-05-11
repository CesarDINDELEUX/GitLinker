/* eslint-disable */
import OrganizationService from '@/services/organization.service.js'
import Axios from 'axios';

export default {
  namespaced: true,
  state: { // DATA
    bearer: '',
    organizations: []
  },
  mutations: {
    MUTE_LOADED_ORGS: (state, loadedOrganization) => {
        state.organizations = []
        state.organizations = loadedOrganization
      },
      setBearer(state, data) {
        state.bearer = data
      }
  },
  getters: {
    getOrganizationsChargees(state){
      return state.organizations
    }
  },
  actions: {
    async pushOrganizations ({commit}) {
      console.log('hello')
      let orgs = await OrganizationService.load_Organization_Array()
      commit('MUTE_LOADED_ORGS',orgs)
    }
  }
}
