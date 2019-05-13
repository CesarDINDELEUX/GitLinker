/* eslint-disable brace-style */
import axios from 'axios'
export default {
  async load_Members_Array () {
    let members = []
    let apiFetch = await axios.get('https://api.github.com/orgs/Zenika/members')
    members = apiFetch.data
    return members
  },

  async getCrucialInformations (listOfMembers) {
    let informations = ''
    return informations
  },
  async sortMap (myMap) {
    return new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]))
  }
}
