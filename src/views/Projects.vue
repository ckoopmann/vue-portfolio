<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div id="title" class="slide">
          <h1 class="display-3">Projects</h1>
          <p class="lead" id="summary">
            Swipe right to read about my personal projects.
          </p>
        </div>
        <BaseProjectElement
          v-for="(project, index) in projectData"
          :key="index"
          v-bind="project"
        >
        </BaseProjectElement>
      </div>
    </div>
  </div>
</template>
<script>
import BaseProjectElement from "../components/BaseProjectElement.vue";
export default {
  components: { BaseProjectElement },
  data() {
    return {
      projectData: [
        {
          title: "Personal Website",
          summary: [
            "Implementation of this website using the Vue.js framework.",
          ],
          technologies: [
            "Javascript (Vue.js)",
            "HTML",
            "CSS (Bootstrap)",
          ],
          githubLink: "https://github.com/ckoopmann/vue-portfolio",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
#summary {
  color: white;
}

#summary {
  font-size: 2rem;
}
</style>
