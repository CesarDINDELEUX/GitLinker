/* eslint-disable brace-style */
import axios from 'axios'
export default {
  async load_Repos_Array () {
    let arrayRepos = []
    let apiFetch = await axios.get('http://localhost:3000/orga')
    arrayRepos = apiFetch.data
    console.log(arrayRepos[0])
    return arrayRepos
  }
}
