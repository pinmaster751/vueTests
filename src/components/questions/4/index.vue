<template>
  <div>
    <span v-if="!Number.isInteger(value)" style="color: red">Вы ввели не число</span><br />
    <input v-model.number="value" />
  </div>
</template>

<script>
export default {
  name: "WrongType",
  data() {
    return {
      value: 1
    }
  },
}
</script>

<style scoped>

</style>
