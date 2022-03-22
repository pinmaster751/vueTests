<template>
  <div>
    <p>
      {{text}}
    </p>
    <CustomInput v-model="text" ref="ci" />
  </div>
</template>

<script>
import CustomInput from "@/components/questions/5/CustomInput";
export default {
  name: "index",
  components: {CustomInput},
  data() {
    return {
      text: ''
    }
  },
  mounted () {
    this.$watch(
      
      "$refs.ci.val", new_val => this.text = new_val
    
    )
  }
}
</script>

<style scoped>

</style>
