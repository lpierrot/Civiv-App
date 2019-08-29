<template>
  <div id="nav" class="nav">
      <router-link to="/" class="brand">Lionel Pierrot</router-link>
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/About">About</router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #009688;
      height: 60px;
    }
    .nav > .brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      color: #000000;
      text-decoration: none;
    }
    .nav a {
        color: #000000;
        font-size: 1.5em;
        font-weight: 300;
    }
    /* .nav .nav-item {
      box-sizing: border-box;
      margin: 0 5px;
      color: #000000;
      text-decoration: none;
    } */
    /* .nav .nav-item.router-link-exact-active {
      color: #000000;
      border-bottom: solid 5px #39b982;
    } */
</style>