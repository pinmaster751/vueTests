<template>
  <div>
    <SlotsComponentUser>
      <template v-slot:default="{username}">
        <!-- FIXME: при переопределении слота, username не отображается -->
        <span>Login: {{username}}</span>
      </template>
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
