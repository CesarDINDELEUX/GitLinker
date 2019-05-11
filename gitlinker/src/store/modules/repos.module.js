/* eslint-disable */
import ReposService from '@/services/repos.service.js'
import Axios from 'axios';

export default {
  namespaced: true,
  state: { // DATA
    bearer: '',
    repos: []
  },
  mutations: {
    MUTE_LOADED_REPOS: (state, loadedRepos) => {
        state.repos = []
        state.repos = loadedRepos
      },
      setBearer(state, data) {
        state.bearer = data
      }
  },
  getters: {
    getReposChargees(state){
      return state.repos
    }
  },
  actions: {
    async pushRepos ({commit}) {
      console.log('hello')
      let repos = await ReposService.load_Repos_Array()
      commit('MUTE_LOADED_REPOS',repos)
    }
  }
}
