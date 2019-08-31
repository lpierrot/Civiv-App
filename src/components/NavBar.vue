<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Civic App</router-link>
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
  display: grid;
  grid-template-areas: "nav nav";
  background-color: #009688;
  background-color: #009688;
  height: 60px;
  margin: 10px 10px 15px 10px;
  align-items: center;
}
.nav > .brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  padding-top: 10px;
  color: #000000;
  text-decoration: none;
}
.nav a {
  color: #000000;
  font-size: 1.5em;
  font-weight: 300;
}
.nav .nav-item.router-link-exact-active {
  color: #000000;
  border-bottom: solid 5px;
  cursor: pointer;
}
</style>