<template>
  <div></div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "SocialLogin",
  created() {
    this.socialLogin({code: this.$route.query.code})
    .then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapActions({
      socialLogin: 'user/socialLogin'
    })
  }
}
</script>

<style scoped>

</style>
