<template>
  <div class="Home">
    <h2>Civic App</h2>
    <p>
    <router-link to="/results">Learn more about cancidates and upcoming elections.</router-link>
    </p>
    <form v-on:submit.prevent="findResults">
      <p>Enter your address: <input type="text" v-model="elections"> <button type="submit">Search</button></p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: #f0e9e0;
}
</style>
