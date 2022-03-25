<template>
  <div>
    <slot :username="username">
      Username: {{username}}
    </slot>
  </div>
</template>

<script>
export default {
  name: "SlotsComponentUser"
}
</script>

<style scoped>

</style>
