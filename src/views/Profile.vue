<template>
  <div class="w-full">
    <div class="h-auto bg-yellow-200">
      <div class="p-3">
        <h1 class="text-ash-800 text-xl">Profile</h1>
      </div>
      <div class="bg-yellow-100">
        <p class="text-bold">Name: {{ userInfo.name }}</p>
        <p class="text-bold">Email: {{ userInfo.email }}</p>
        <p class="text-bold">Created At: {{ userInfo.created_at }}</p>
      </div>
    </div>

    <div class="h-auto bg-yellow-200 my-10 shadow-md">
      <div class="p-3">
        <h1 class="text-ash-800 text-xl">Change Details</h1>
      </div>
      <div class="bg-yellow-100 py-4 space-y-2">
        <p class="text-bold">Name: <input type="text" v-model="userInfo.name" class="p-1 rounded-full"></p>
        <p class="text-bold">Email: <input type="text" v-model="userInfo.email" class="p-1 rounded-full"></p>
        <button class="p-2 px-10 bg-yellow-200 rounded-full" @click="saveUserDetails">Save</button>
      </div>
    </div>


    <div class="h-auto bg-yellow-200 my-10 shadow-md">
      <div class="p-3">
        <h1 class="text-ash-800 text-xl">Change Password</h1>
      </div>
      <div class="bg-yellow-100 py-4 space-y-2">
        <p class="text-bold">Current Password: <input type="text" v-model="pass.oldPassword" class="p-1 rounded-full"></p>
        <small class="text-red-800" v-if="errors['oldPassword']">{{ errors['oldPassword'][0] }}</small>
        <p class="text-bold">New Password: <input type="text" v-model="pass.newPassword" class="p-1 rounded-full"></p>
        <small class="text-red-800" v-if="errors['newPassword']">{{ errors['newPassword'][0] }}</small>
        <p class="text-bold">Confirm New Password: <input type="text" v-model="pass.confirmNewPassword"
                                                          class="p-1 rounded-full"></p>
        <button class="p-2 px-10 bg-yellow-200 rounded-full" @click="userPasswordChange">Change</button>
      </div>
    </div>


  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "Profile",
  data() {
    return {
      pass: {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
      errors: []
    }
  },
  computed: {
    ...mapState('user', {
      userInfo: 'userInfo'
    }),
  },
  methods: {
    ...mapActions({
      saveUserChange: 'user/saveUserChange',
      passwordChange: 'user/passwordChange'
    }),
    saveUserDetails() {
      this.saveUserChange(this.userInfo)
        .then(res => {
          if (res.data.success) {
            alert(res.data.message)
          }
        })
    },
    userPasswordChange() {
      this.passwordChange(this.pass)
        .then(res => {
          if (res.data.success) {
            alert(res.data.message)
          }else{
            console.warn(res.data.message)
          }
        })
      .catch(error => {
        if (error.response.status === 422){
          this.errors = error.response.data.errors
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
