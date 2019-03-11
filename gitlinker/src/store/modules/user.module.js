const UserStore = {
  namespaced: true,
  state: { // DATA
    userName: '', // Username
    userToken: '' // User Token
  },
  getters: { // GETTER : getters and format data
  },
  mutations: { // Setter :  update state data
    setUserName (state, data) {
      state.userName = data
    },
    setUserToken (state, data) {
      state.userToken = data
    }
  },
  actions: { // Calling mutations (commit) and can call actions (dispatch)
  }
}

export default UserStore
