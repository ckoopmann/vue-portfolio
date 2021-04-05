<template>
  <div>
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
export default {
  name: "App",
  components: { Home, Projects },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        anchors: ["home", "projects", "page3"],
        sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
    };
  },
};
</script>
