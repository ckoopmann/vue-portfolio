<template>
  <div>
    <div id="title" class="mt-4 mb-4">
      <h1>Projects</h1>
      <p>Some of my private experiments / projects</p>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <BaseCard
          v-for="(project, index) in projectData"
          :key="index"
          v-bind="project"
        >
          <a
            type="button"
            class="btn btn-outline-secondary"
            :href="project.githubLink"
          >
            <img :src="githubIconPath" />
          </a>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
<script>
import BaseCard from "../components/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      githubIconPath: "/assets/GitHub-Mark-32px.png",
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

<style scoped>
h1,
p {
  color: white;
}
</style>
