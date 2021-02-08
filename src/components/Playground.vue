<template>
  <div class="hello">
    <ComponentForTest/>
  </div>
</template>

<script>
import ComponentForTest from "@/components/questions/11/ComponentForTest";

export default {
  name: 'Playground',
  components: {ComponentForTest},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
