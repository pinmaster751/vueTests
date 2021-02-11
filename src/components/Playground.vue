<template>
  <div class="hello">
    <SlotsComponent />
  </div>
</template>

<script>
import SlotsComponent from "@/components/questions/8/SlotsComponent";

export default {
  name: 'Playground',
  components: {SlotsComponent},
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
