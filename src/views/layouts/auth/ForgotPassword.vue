<template>
  <div class="bg-red-400 m-auto h-60">
    <div class="h-32 m-auto p-10">
      <h2 class="font-bold text-3xl">Forgot Password</h2>
      <div class="mb-3">
        <label for="email">Email: </label>
        <input v-model="email" type="text" class="p-2 rounded-full outline-none" id="email" placeholder="Email">
      </div>
      <button @click="forgotPasswordSend" class="p-2 bg-white text-red-400 mt-3 rounded-full px-7">Send</button>
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
    }
  },
  methods: {
    ...mapActions({
      forgotPassword: 'user/forgotPassword',
    }),
    forgotPasswordSend() {
      this.forgotPassword({
        email: this.email
      })
      .then(res =>{
       if (res.data.success){
         alert(res.data.message)
       }
      })
    }
  }
}
</script>
