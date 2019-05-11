/* eslint-disable brace-style */
import axios from 'axios'
export default {
  async load_Organization_Array () {
    let arrayOrgs = []
    let apiFetch = await axios.get('https://api.github.com/orgs/Zenika/repos')
    arrayOrgs = apiFetch.data
    console.log(arrayOrgs[0])
    return arrayOrgs
  }
}
