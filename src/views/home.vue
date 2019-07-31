<template>
  <div id='home'>
    <h1>Home</h1>
    <p>deecamp 21  niubi!</p>
      <croppa v-model="croppa" @new-image-drawn="onNewImage" @zoom="onZoom">
      </croppa>
  </div>
</template>

<script>
import Vue from "vue";
import Croppa from "vue-croppa";
import "vue-croppa/dist/vue-croppa.css";
 
Vue.use(Croppa);     

export default {
  name: 'home',
  components: {
    Croppa
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}c
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
