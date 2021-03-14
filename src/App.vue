<template>
  <Navigation />
  <div>
    <LeftArrow />
    <router-view />
    <RightArrow />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import LeftArrow from "./components/LeftArrow.vue";
import RightArrow from "./components/RightArrow.vue";

export default {
  name: "App",
  components: {
    Navigation,
    LeftArrow,
    RightArrow,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: url(/assets/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
