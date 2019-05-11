import UserService from '@/services/user.service.js'
import Axios from 'axios'

export default {
  namespaced: true,
  state: {
    initFinished: false,
    connectedUser: ''
  },
  mutations: {
    setInitFinished (state, data) {
      state.initFinished = data
    },
    setConnectedUser (state, data) {
      state.connectedUser = data
    }
  },
  getters: {
    connectedUser (state) {
      if (state.connectedUser) {
        return state.connectedUser
      }
    }
  }
}
