<template>
  <div id="app">
    <Navigation />
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="aboutSection">
        <About />
      </div>
      <div class="section" id="workSection">
        <Work />
      </div>
      <div class="section" id="projectsSection">
        <Projects />
      </div>
    </full-page>
  </div>
</template>

<script>
import About from "./views/About";
import Projects from "./views/Projects";
import Work from "./views/Work";
import Navigation from "./components/Navigation";
export default {
  name: "app",
  metaInfo: {
    title: "Christian Koopmann",
  },
  components: {
    About,
    Projects,
    Work,
    Navigation,
  },
  data() {
    return {
      options: {
        scrollOverflow: false,
        scrollBar: false,
        menu: "#menu",
        anchors: ["about", "work", "projects"],
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

#aboutSection {
  background-image: url(/assets/about.jpg);
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
  bottom: 50px;
  opacity: 0.8;
}
.fp-slidesNav {
  z-index: 0;
}

@media screen and (max-width: 600px) {
  .fp-controlArrow {
    visibility: hidden;
  }
}

h1 {
  font-size: 5vh !important;
  color: white;
}
p {
  font-size: 2vh !important;
  color: white;
}

h2 {
  font-size: 4vh !important;
}

h4 {
  font-size: 2.5vh !important;
}

h5 {
  font-size: 2.5vh !important;
}

.fp-controlArrow.fp-next {
  opacity: 0.8;
  z-index: 0;
}
.fp-controlArrow.fp-prev {
  opacity: 0.8;
  z-index: 0;
}

.card {
  max-height: 80vh;
}

.card-body {
  overflow-y: auto;
}
</style>
