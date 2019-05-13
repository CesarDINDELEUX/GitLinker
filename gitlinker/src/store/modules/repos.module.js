/* eslint-disable */
import ReposService from '@/services/repos.service.js'
import Axios from 'axios';

export default {
  namespaced: true,
  state: { // DATA
    bearer: '',
    repos: [],
    globalReposInformations : ''
  },
  mutations: {
    MUTE_LOADED_REPOS: (state, loadedRepos) => {
        state.repos = []
        state.repos = loadedRepos
      },
      MUTE_GLOBAL_REPOS_INFOS: (state, reposInfos) => {
        state.globalReposInformations = ''
        state.globalReposInformations = reposInfos
      },
      setBearer(state, data) {
        state.bearer = data
      }
  },
  getters: {
    getReposChargees(state){
      return state.repos
    },
    getInfosRepos(state){
      return state.globalReposInformations
    },
    getOrgName(state) {
      if (state.repos.length > 0)
      {
      return state.repos[0].owner.login
      }
    },
    getPreferedLanguage(state) {
      if (state.repos.length > 0)
      {
        return state.globalReposInformations.languageMap[1][0] + ' and ' + state.globalReposInformations.languageMap[2][0]
      }
    }
  },
  actions: {
    async pushRepos ({commit}) {
      console.log('Pushing repos')
      let repos = await ReposService.load_Repos_Array()
      let infos = await ReposService.getCrucialInformations(repos)
      commit('MUTE_GLOBAL_REPOS_INFOS', infos)
      commit('MUTE_LOADED_REPOS',repos)
    },
    async pushGlobalInfos ({commit}) {
      console.log('Pushing infos')
      let infos = ''
      // await ReposService.load_Repos_Array()
      commit('MUTE_GLOBAL_REPOS_INFOS',infos)
    }
  }
}
