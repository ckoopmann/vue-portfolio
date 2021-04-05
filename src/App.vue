<template>
  <div id="app">
    <Navigation />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Home />
      </div>
      <div class="section">
        <Projects />
      </div>
    </full-page>
  </div>
</template>

<script>
import Home from "./views/Home";
import Projects from "./views/Projects";
import Navigation from "./components/Navigation";
export default {
  name: "app",
  components: { Home, Projects, Navigation },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        scrollOverflow: false,
        scrollBar: false,
        menu: "#menu",
        anchors: ["home", "projects"],
      },
    };
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
