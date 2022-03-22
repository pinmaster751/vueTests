<template>
  <div>
    <input v-if="showEmailInput" name="email" ref="emailInput">
    <button @click="showEmailInput = true">Enter Email</button>
  </div>
</template>

<script>
export default {
  name: "InputFocus",
  data() {
    return {
      showEmailInput: false
    }
  },
  watch: {
    showEmailInput(value) {
      if (value !== false) {
        this.$nextTick(() => {
          const inp = this.$refs.emailInput;
          inp.focus();
        }
        )
        
      }
    }
  },
}
</script>

<style scoped>

</style>
