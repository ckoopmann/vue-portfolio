<template>
  <div id="app">
    <Navigation />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="homeSection">
        <Home />
      </div>
      <div class="section" id="workSection">
        <Projects />
      </div>
      <div class="section" id="projectsSection">
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
        anchors: ["home", "work", "projects"],
        slidesNavigation: true,
        slidesNavPosition: "bottom",
        loopHorizontal: false,
        resetSliders: true,
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

#homeSection {
  background-image: url(/assets/home.jpg);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
}

#projectsSection {
  background-image: url(/assets/projects.jpg);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
}

#workSection {
  background-image: url(/assets/work.jpg);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
}


.fp-slidesNav.fp-bottom {
  bottom: 100px;
  color: red;
}
.fp-slidesNav.fp-bottom ul li a span {
  background: white;
}
</style>
