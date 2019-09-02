<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "app",
  components: {
    NavBar: NavBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #eeeeee;
}
html {
  background-color: #eeeeee;
  scroll-behavior: smooth;
  /* scroll-behavior: auto; */
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
