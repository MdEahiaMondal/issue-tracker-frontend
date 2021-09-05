<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button class="font-bold" @click="logout" v-if="isLogin"> | Logout</button>
      <button class="font-bold" v-if="isLogin"> | Dashboard</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isLogin: false
    }
  },
  created(){
    if (localStorage.getItem('token')){
      this.isLogin = true
    }
  },
  methods: {
    logout(){
      localStorage.removeItem('token')
      this.$router.push({name: 'login'})
      this.isLogin = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
