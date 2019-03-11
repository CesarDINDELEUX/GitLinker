import axios from 'axios'

export default {
  getCurrentUserInformations () {
    axios
      .get('https://api.github.com/user', {
        headers: {
          'Authorization': 'token 51ee3e578e1ddd6cc4df833ccd452a31c845a043'
        }
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch(err => {
        document.body.textContent = 'Error: ' + err.stack
      })
  }
}
