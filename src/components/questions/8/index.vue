<template>
  <div>
    <SlotsComponentUser>
      <span>Login: {{username}}</span>
    </SlotsComponentUser>
  </div>
</template>

<script>
import SlotsComponentUser from "@/components/questions/8/SlotsComponentUser";
export default {
  name: "SlotsComponent",
  components: {SlotsComponentUser},
  data () {
    return {
      username: 'Vasyan'
    }
  }
}
</script>

<style scoped>

</style>
