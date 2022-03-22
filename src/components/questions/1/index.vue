<template>
  <div>
    <template v-if="loginType === 'phone'">
      <label>Phone</label>
      <input v-model="val" placeholder="Enter your phone">
    </template>
    <template v-else>
      <label>Login</label>
      <input v-model="val" placeholder="Enter your login">
    </template>
    <button @click="switchMethod">Change login type</button>
  </div>
</template>

<script>
export default {
  name: "LoginType",
  data() {
    return {
      loginType: 'phone',
      val: ''
    }
  },
  watch: {
    loginType(new_value) {
      this.val = new_value
    }
  },
  methods: {
    switchMethod() {
      this.loginType = this.loginType === 'phone' ? 'email' : 'phone';
    }
  },
}
</script>

<style scoped>

</style>
