<template>
  <div>
    <section class="protfolio">
      <div id="title" class="mt-4 mb-4">
        <h1>Projects</h1>
        <p>Some of my private experiments / projects</p>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <Project
            v-for="(project, index) in projectData"
            :key="index"
            v-bind="project"
          ></Project>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Project from "../components/Projects/Project.vue";
export default {
  components: { Project },
  data() {
    return {
      projectData: [
        {
          title: "Mandelbrot Set Visualization",
          description:
            "Interactive visualization of the mandelbrot set, allowing exploration of arbitrary position / zoom level. Implemented in C++ using STL Framework.",
          logoPath: "/assets/mandelbrot.png",
          githubLink: "https://github.com/ckoopmann/mandelbrot",
        },
        {
          title: "Portfolio Website",
          description:
            "Implementation of this website using the Vue.js framework.",
          logoPath: "/favicon.ico",
          githubLink: "https://github.com/ckoopmann/vue-portfolio",
        },
      ],
    };
  },
};
</script>
<style lang="css" scoped>
#title {
  color: white;
}

</style>
