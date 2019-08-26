<template>
  <div id="app">
  <div class="intro">
    <Home msg="Civic App"/>
  </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f0e9e0;
  text-align: center;
  margin-top: 0;
  
}
.intro {
  height: 100vh;
  padding-top: 250px;
}

</style>
