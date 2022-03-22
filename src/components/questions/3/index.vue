<template>
<div>
  <ul>
    <template v-for="user in users">
      <li       
          v-if="user.isActive"
          :key="user.id"
      >
        {{ user.name }}
      </li>
    </template>
  </ul>
</div>
</template>

<script>
export default {
  name: "UsersListVFor",
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Nagibator2005',
          isActive: true,
        },
        {
          id: 2,
          name: 'Nagibator2006',
          isActive: true,
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
