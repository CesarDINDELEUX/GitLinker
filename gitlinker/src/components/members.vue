<template>
  <div class="container-fluid">
      hello ?
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters('MembersStore', [
      'getMembersCharges',
      'getInfosMembers'
    ]),
    getLanguageClassIcon: function (lang) {
      return 'devicon-' + lang + '-plain'
    },
    chartData2 () {
      return this.$store.state.ReposStore.globalReposInformations.languageMap
    },
    getTop3ReposByStars () {
      return 'ok'
    }
  },
  methods: {
    ...mapActions('MembersStore', [
      'pushMembers'
    ]),
    getLanguageClassIconMethod: function (lang) {
      return lang
    },
    updateRepos: async function () {
      await this.pushMembers()
    },
    test: function () {
    //   console.log(this.$store.state.ReposStore.globalReposInformations.languageMap)
    //   console.log(this.chartData)
    }
  },
  mounted () {
    this.pushMembers()
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
