<template>
  <div id="app">
    <Navigation/>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Projects />
      </div>
      <div class="section">
        <Home />
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
        anchors: ["page1", "page2"],
        sectionsColor: ["#41b883", "#ff5f45"],
      },
    };
  },
};
</script>

