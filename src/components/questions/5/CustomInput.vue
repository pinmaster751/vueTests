<template>
  <input type="text" v-model="val" />
</template>

<script>
export default {
  name: "CustomInput",
  data () {
    return {
      val: ''
    }
  }
}
</script>

<style scoped>
input {
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #c00;
  font: bold 1.5em/1.5em "Georgia, serif";
  text-align: center;
}
</style>
