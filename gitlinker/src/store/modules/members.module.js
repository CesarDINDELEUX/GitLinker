/* eslint-disable */
import MembersService from '@/services/members.service.js'
import Axios from 'axios';

export default {
  namespaced: true,
  state: { // DATA
    bearer: '',
    members: [],
    globalMembersInformations : ''
  },
  mutations: {
    MUTE_LOADED_MEMBERS: (state, loadedMembers) => {
        state.members = []
        state.members = loadedMembers
      },
      MUTE_GLOBAL_MEMBERS_INFOS: (state, membersInfos) => {
        state.globalMembersInformations = ''
        state.globalMembersInformations = membersInfos
      },
      setBearer(state, data) {
        state.bearer = data
      }
  },
  getters: {
    getMembersCharges(state){
      return state.members
    },
    getInfosMembers(state){
      return state.globalMembersInformations
    },
    getPreferedLanguage(state) {
      if (state.members.length > 0)
      {
        return state.globalMembersInformations
      }
    }
  },
  actions: {
    async pushMembers ({commit}) {
      console.log('Pushing members')
      let members = await MembersService.load_Members_Array()
      let infos = await MembersService.getCrucialInformations(members)
      commit('MUTE_GLOBAL_MEMBERS_INFOS', infos)
      commit('MUTE_LOADED_MEMBERS',members)
    },
    async pushGlobalInfos ({commit}) {
      console.log('Pushing infos')
      let infos = ''
      // await ReposService.load_Repos_Array()
      commit('MUTE_GLOBAL_MEMBERS_INFOS',infos)
    }
  }
}
