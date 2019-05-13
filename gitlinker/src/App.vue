<template>
  <div class="container-fluid">
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
    <div class="row">
        <div class="col-md-12">
            <Top/>
        </div>
    </div>
    <div v-if="getTop3ReposByStars.length > 0">
      <div>
        <br>
        <br>
        <div>
        <img :src=getReposChargees[0].owner.avatar_url alt="..." class="rounded mx-auto d-block">
        </div>
       <h2 class="text-center">{{ getOrgName }} seems to love {{ getPreferedLanguage }}, do you ?</h2>
       <GChart
        type="ColumnChart"
        :data="chartData2"
        :options="chartOptions"
        />
      </div>
      <br>
      <br>
      <div>
  <b-container class="bv-example-row">
  <h2>And ... they have {{ getReposChargees.length }} repos and a total of {{ getInfosRepos.totalStars }} <i class="em em-star2"></i> ... Not bad !</h2>
  <h4>And there are the winners ! The 3 most starred ones</h4>
  <b-row>
    <b-col v-for="item in getTop3ReposByStars" :key="item.id">
      <b-card
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-card-title>
    {{ item.name }} <i :class="getLanguageClassIconMethod(item.language)"></i>
  </b-card-title>
    <b-card-text v-if="item.description">
      {{ item.stargazers_count }} <i class="em em-star2"></i> {{ item.watchers_count }} <i class="em em-female-detective"></i> {{ item.forks_count }} <i class="em em-gear"></i><br>
      {{ item.description }}
    </b-card-text>
    <b-card-text v-else>
      {{ item.stargazers_count }} <i class="em em-star2"></i> {{ item.watchers_count }} <i class="em em-female-detective"></i>  {{ item.forks_count }} <i class="em em-gear"></i><br>
      There is no description. Bad habit ! <i class="em em--1"></i>
    </b-card-text>
    <b-button :href=item.html_url target="_blank" variant="primary">Open in github ! <i class="em em-rocket"></i></b-button>
  </b-card>
    </b-col>
  </b-row>
  <b-row>
    <MembersView/>
  </b-row>
  </b-container>
      </div>
  </div>
  <!-- <button v-on:click="test">Add 1</button> -->
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'
import Top from './components/top.vue'
import MembersView from './components/members.vue'
export default {
  name: 'app',
  components: {
    Top,
    MembersView
  },
  data () {
    return {
      chartOptions: {
        chart: {
          title: 'Language global usage',
          colors: ['red', 'green']
        }
      }
    }
  },
  watch: {
    getPreferedLanguage: function (val, oldVal) { // on observe l'utilisateur connecté
      return val
    },
    getOrgName: function (val, oldVal) { // on observe l'utilisateur connecté
      return val
    }
  },
  computed: {
    ...mapGetters('ReposStore', [
      'getOrgName',
      'getPreferedLanguage',
      'getReposChargees',
      'getInfosRepos'
    ]),
    getLanguageClassIcon: function (lang) {
      return 'devicon-' + lang + '-plain'
    },
    chartData2 () {
      return this.$store.state.ReposStore.globalReposInformations.languageMap
    },
    getTop3ReposByStars () {
      return this.getReposChargees.slice(0, 3)
    }
  },
  methods: {
    ...mapActions('ReposStore', [
      'pushRepos'
    ]),
    getLanguageClassIconMethod: function (lang) {
      lang = lang.toLowerCase()
      switch (lang) {
        case 'dockerfile':
          lang = 'docker'
          break
        case 'c#':
          lang = 'csharp'
          break
        case 'html':
          lang = 'html5'
          break
        default:
          break
      }
      let iconClass = 'devicon-' + lang + '-plain'
      console.log(iconClass)
      return iconClass
    },
    updateRepos: async function () {
      await this.pushRepos()
    },
    test: function () {
      console.log(this.$store.state.ReposStore.globalReposInformations.languageMap)
      console.log(this.chartData)
    }
  },
  mounted () {
    this.pushRepos()
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
