<template>
  <div id="app">
    <div class="p-4 bg-red-400 flex items-center justify-between px-12 border-b-2 border-ash-400">
      <div class="">
        <router-link to="/" class="p-4 text-white font-bold text-2xl cursor-pointer">Home</router-link>
      </div>
      <div class="space-x-2">
        <router-link v-if="!isLoggedIn" to="/register" class="p-4 text-white font-bold text-xl cursor-pointer">Register</router-link>
        <router-link  v-if="!isLoggedIn" to="/login" class="p-4 text-white font-bold text-xl cursor-pointer">Login</router-link >
        <router-link  v-if="!isLoggedIn" to="/password/forgot" class="p-4 text-white font-bold text-xl cursor-pointer">Forgot Password</router-link >
        <router-link  v-if="isLoggedIn" to="/dashboard" class="p-4 text-white font-bold text-xl cursor-pointer">Dashboard</router-link >
        <router-link  v-if="isLoggedIn" to="/profile" class="p-4 text-white font-bold text-xl cursor-pointer">Profile</router-link >
        <button v-if="isLoggedIn" @click="logoutUser" class="p-4 text-white font-bold text-xl cursor-pointer">Logout</button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'app',
  data(){
    return {}
  },
  computed: {
    ...mapState('user', {
      isLoggedIn: 'isLoggedIn'
    }),
  },
  created(){
    if (localStorage.getItem('token')){
      this.setUserIsLoggedIn(true)
    }else{
      this.setUserIsLoggedIn(false)
    }
    if (this.isLoggedIn){
      this.setAuthUser()
    }
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
      setUserIsLoggedIn: 'user/setUserIsLoggedIn',
      setAuthUser: 'user/setAuthUser'
    }),
    logoutUser(){
      this.logout()
      .then(res => {
        this.$router.push({name: 'login'})
      })
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
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
