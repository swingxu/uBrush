<template lang="html">
    <div id="app">
      <Slide right>
        <router-link to='/' class = 'bm-item-list'>
          <a id="home"><span> Home </span></a>
        </router-link>
        <router-link to='/what' class = 'bm-item-list'>
          <a id="about"><span> What </span></a>
        </router-link>
        <router-link to='/how' class = 'bm-item-list'>
          <a id="about"><span> How </span></a>
        </router-link>
        <router-link to='/why' class = 'bm-item-list'>
          <a id="about"><span> Why </span></a>
        </router-link>
        <router-link to='/who' class = 'bm-item-list'>
          <a id="about"><span> Who </span></a>
        </router-link>
        <router-link to='/gallery' class = 'bm-item-list'>
          <a id="gallery"><span> gallery </span></a>
        </router-link>
      </Slide>
      <main id="page-wrap">
          <router-view></router-view>
      </main>
    </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: 'app',
  components: {
    Slide
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
}

#page-wrap{
  z-index: -1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: #838994;
}
.bm-item-list > * > span:hover {
  color: #2c3e50;
}
</style>