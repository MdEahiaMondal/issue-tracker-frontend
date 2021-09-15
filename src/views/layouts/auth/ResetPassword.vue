<template>
  <div class="bg-red-400 m-auto h-60">
    <div class="h-32 m-auto p-10">
      <h2 class="font-bold text-3xl">Forgot Password</h2>
      <div class="mb-3">
        <label for="email">Email: </label>
        <input v-model="email" type="text" class="p-2 rounded-full outline-none" id="email" placeholder="Email">
      </div>
      <div class="mb-3">
        <label for="email">New Password: </label>
        <input v-model="password" type="text" class="p-2 rounded-full outline-none" id="password" placeholder="new password">
      </div>
      <div class="mb-3">
        <label for="email">Confirm Password: </label>
        <input v-model="password_confirmation" type="text" class="p-2 rounded-full outline-none" id="password_confirmation" placeholder="new confirm  password">
      </div>
      <button @click="resetPasswordSend" class="p-2 bg-white text-red-400 mt-3 rounded-full px-7">Send</button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: 'mdeahiyakhan@gmail.com',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    ...mapActions({
      resetPassword: 'user/resetPassword',
    }),
    resetPasswordSend() {
      this.resetPassword({
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        token: this.$route.query.token,
      })
      .then(res =>{
       if (res.data.success){
        this.$router.replace({name: 'login'})
       }
      })
    }
  }
}
</script>
