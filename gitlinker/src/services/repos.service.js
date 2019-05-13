/* eslint-disable brace-style */
import axios from 'axios'
export default {
  async load_Repos_Array () {
    let arrayRepos = []
    let apiFetch = await axios.get('http://localhost:3001/orgs/Zenika')
    arrayRepos = apiFetch.data
    return arrayRepos
  },

  async getCrucialInformations (listOfRepos) {
    // eslint-disable-next-line no-new-object
    var informations = new Object()
    var languageMap = new Map()
    var forkMap = new Map()
    var watchersMap = new Map()
    let totalStars = 0
    for (let index = 0; index < listOfRepos.length; index++) {
      const curRepository = listOfRepos[index]
      totalStars += curRepository.stargazers_count
      let language = curRepository.language
      watchersMap.set(curRepository.name, curRepository.watchers)
      forkMap.set(curRepository.name, curRepository.forks)
      if (language === null) {
        language = 'Unknown language'
        if (languageMap.get(language) !== undefined) {
          languageMap.set(language, languageMap.get(language) + 1)
        } else {
          languageMap.set(language, 1)
        }
      }
      else {
        if (languageMap.get(language) !== undefined) {
          languageMap.set(language, languageMap.get(language) + 1)
        } else {
          languageMap.set(language, 1)
        }
      }
    }
    watchersMap = Array.from(await this.sortMap(watchersMap))
    languageMap = Array.from(await this.sortMap(languageMap))
    forkMap = Array.from(await this.sortMap(forkMap))
    informations.watchersMap = watchersMap
    let languageMapArray = [
      ['Language', 'Used Times']
    ]
    for (let index = 0; index < languageMap.length; index++) {
      const element = languageMap[index]
      languageMapArray.push(element)
    }
    informations.languageMap = languageMapArray
    informations.forkMap = forkMap
    informations.totalStars = totalStars
    return informations
  },
  async sortMap (myMap) {
    return new Map([...myMap.entries()].sort((a, b) => b[1] - a[1]))
  }
}
