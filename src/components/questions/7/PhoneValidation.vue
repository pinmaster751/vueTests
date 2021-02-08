<template>
    <input :value="value" class="phone" placeholder="phone" />
</template>

<script>
export default {
  name: "PhoneValidation",
  props: {
    //TODO: реализовать валидацию входных данных свойства - тип телефон, вида +7(XXX)-XXX-XX-XX
    value: {},
  },
  data() {
    return {
      error: Boolean
    }
  },
}
</script>

<style scoped>
  .error {
    color: red
  }
</style>
