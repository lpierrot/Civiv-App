<template>
  <div id="app">
  <NavBar/>
  
  <!-- <div class="header">
      <p>This tool is designed to help you find elected officials by zipcode. Currently in production.
      </p>
    </div> -->
  
  <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default {
  name: 'app',
  components: {
    'NavBar': NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eeeeee;
}
html {
  background-color: #eeeeee;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
