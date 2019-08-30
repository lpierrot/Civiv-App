<template>
  <div id="app">
  <NavBar/>
  <div class="header">
      <p>This tool is designed to help you find elected officials by zipcode. Currently in production.
      </p>
    </div>
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
  margin-top: 0;
  background-color: #eeeeee;
  
}

</style>
