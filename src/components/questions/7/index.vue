<template>
    <div>
      <input v-model="value" class="phone" placeholder="+7 (XXX) XXX-XX-XX" /><br>
      <span v-if="error">Не правильно введен номер телефона. Номер должен соответствовать виду +7 (XXX) XXX-XX-XX</span>
    </div>

</template>

<script>
export default {
  name: "PhoneValidation",
  props: {
    mask: {
      type: RegExp,
      default() {
        return /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
        //не только МСК
        //return /^\+\d+?\s\(\d+?\)\s\d{2,3}-\d{2}-\d{2}$/
      }
    },
    initial: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      error: Boolean,
      value: String
    }
  },
  created () {
    this.value = this.initial
  },
  watch: {
    value(val) {
      this.error = val.match(this.mask) ? false : true
    }
  }
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
