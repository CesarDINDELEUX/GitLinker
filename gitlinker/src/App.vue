<template>
  <div id="app">
    <div id="nav">
      <button v-on:click="updateOrga">Add 1</button>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About222</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
    ...mapActions('OrganizationStore', [
      'pushOrganizations'
    ]),
    updateOrga: async function () {
      await this.pushOrganizations()
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
