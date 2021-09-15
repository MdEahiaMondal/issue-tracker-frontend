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
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "Profile",
  computed: {
    ...mapState('user', {
      userInfo: 'userInfo'
    }),
  }
}
</script>

<style scoped>

</style>
