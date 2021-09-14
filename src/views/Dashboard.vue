<template>
    <div class="about">
      <h1>This is an Dashboard page</h1>
    </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: "Dashboard",
  mounted(){
      this.setAuthUser()
  },
  methods: {
      ...mapActions('user', ['setAuthUser'])
  }
}
</script>

<style scoped>

</style>
