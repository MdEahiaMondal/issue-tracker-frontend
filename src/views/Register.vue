<template>
  <div class="bg-red-400 m-auto h-60">
    <div class="h-32 m-auto p-10">
      <h2 class="font-bold text-3xl">Login</h2>
      <div class="mb-3">
        <label for="email">Name: </label>
        <input v-model="name" type="text" class="p-2 rounded-full outline-none" id="name" placeholder="name">
      </div>
      <div class="mb-3">
        <label for="email">Email: </label>
        <input v-model="email" type="text" class="p-2 rounded-full outline-none" id="email" placeholder="Email">
      </div>
      <div>
        <label for="Password">Password: </label>
        <input v-model="password" id="Password" class="p-2 rounded-full outline-none" type="text"
               placeholder="Password">
      </div>
      <button @click="registerUsert" class="p-2 bg-white text-red-400 mt-3 rounded-full px-7">Register</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      name: 'mdeahiyakha',
      email: 'mdeahifdyakhan@gmail.com',
      password: '12345678'
    }
  },
  methods: {
    ...mapActions({
      register: 'user/register',
    }),
    registerUsert() {
      this.register({
        name: this.name,
        email: this.email,
        password: this.password,
      })
      .then(res =>{
        this.$router.replace('login')
      })
    }
  }
}
</script>
