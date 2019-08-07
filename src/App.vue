<template>
  <div id="app">
    <img alt="Election images with stars from Pixabay" src="./assets/election.png">
    <Home msg="Civic App"/>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
