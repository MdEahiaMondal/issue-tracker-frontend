<template>
  <div class="bg-red-400 m-auto h-60">
    <div class="h-32 m-auto p-10">
      <h2 class="font-bold text-3xl">Login</h2>
      <div class="mb-3">
        <label for="email">Email: </label>
        <input v-model="email" type="text" class="p-2 rounded-full outline-none" id="email" placeholder="Email">
      </div>
      <div>
        <label for="Password">Password: </label>
        <input v-model="password" id="Password" class="p-2 rounded-full outline-none" type="text"
               placeholder="Password">
      </div>

      <button @click="login" class="p-2 bg-white text-red-400 mt-3 rounded-full px-7">Login</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data() {
    return {
      email: 'mdeahiyakhan@gmail.com',
      password: '12345678'
    }
  },
  methods: {
    login() {
      axios.post(' http://127.0.0.1:8000/api/login/', {
        email: this.email,
        password: this.password,
      })
      .then(res => {
        this.$router.replace('dashboard')
        localStorage.setItem('token', res.data.access_token)
      })
    }
  }
}
</script>
