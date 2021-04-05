<template>
  <div id="app">
    <Navigation />
    <full-page :options="options" id="fullpage">
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
  name: "App",
  components: { Home, Projects, Navigation },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HERE",
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        anchors: ["page1", "page2"],
        sectionsColor: ["#41b883", "#ff5f45"],
      },
    };
  },
};
</script>
