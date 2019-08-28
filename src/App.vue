<template>
  <div id="app">
  <div class="intro">

      <!-- <p><router-link to="/About">About</router-link></p> -->
    <router-view/>
  
  </div>
  </div>
</template>

<script>


export default {
  name: 'app',
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
