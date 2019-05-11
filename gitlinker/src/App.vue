<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-md-12"> 
            <Top/>
        </div>
    </div>
    <div class="row">
      
    </div>
  <button v-on:click="updateRepos">Add 1</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Top from './components/top.vue'
export default {
  name: 'app',
  components: {
    Top
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ...mapActions('ReposStore', [
      'pushRepos'
    ]),
    updateRepos: async function () {
      await this.pushRepos()
    }
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
