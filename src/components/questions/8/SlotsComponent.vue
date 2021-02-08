<template>
  <div>
    <SlotsComponentUser>
      <!-- FIXME: не выводится username -->
      <span>Username: {{username}}</span>
    </SlotsComponentUser>
  </div>
</template>

<script>
import SlotsComponentUser from "@/components/questions/8/SlotsComponentUser";
export default {
name: "SlotsComponent",
  components: {SlotsComponentUser},
}
</script>

<style scoped>

</style>
