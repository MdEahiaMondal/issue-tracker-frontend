<template>
  <div class="about">
    <h1 v-if="$can('admin-dashboard')">This is an Admin Dashboard page</h1>
    <h1 v-if="$can('developer-dashboard')">This is an Developer Dashboard page</h1>
  </div>
</template>

<script>
import can from '../helpers/can'
export default {
  name: "Dashboard",
  mounted() {
    console.log(can('developer-dashboard'))
  }
}
</script>

<style scoped>

</style>
