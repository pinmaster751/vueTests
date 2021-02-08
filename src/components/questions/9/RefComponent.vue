<template>
  <div>
    <!-- FIXME: Значение в value не изменяется при первом нажатии на кнопку -->
    <div>
      Текущее значение input: {{value}}
    </div>
    <input ref="inp" v-model="text" disabled />
    <button @click="fix">Исправить ошибку</button>
  </div>

</template >

<script>
export default {
  name: "RefComponent",
  data() {
    return {
      text: 'Првет мир',
      value: 'Првет мир'
    }
  },
  methods: {
    fix() {
      this.text = 'Привет мир'
      this.value = this.$refs.inp.value
    }
  },
}
</script>

<style scoped>

</style>
