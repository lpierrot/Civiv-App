<template>
  <div id="app">
  <div class="image" <img src="./assets/election.png" alt="Election images with stars from Pixabay">
    <Home msg="Civic App"/>
  </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Results from './components/Results.vue'

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

</style>
