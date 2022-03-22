<template>
  <div>
    <form ref="form" :action="action">
      <input placeholder="Enter email" name="email" />
    </form>
    <button @click.prevent="submit">Send</button>
  </div>

</template>

<script>
export default {
  name: "RefComponent",
  data() {
    return {
      action: 'https://example.com'
    }
  },
  methods: {
    submit(e) {
      this.action = 'https://test.com';
      this.$nextTick(() => {
        this.$refs.form.submit();
      })
    }
  },
}
</script>

<style scoped>

</style>
