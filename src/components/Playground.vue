<template>
  <div class="hello">
    <ClickComponent />
  </div>
</template>

<script>
import ClickComponent from "@/components/questions/11/ClickComponent";

export default {
  name: 'Playground',
  components: {ClickComponent},
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
