<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div id="title" class="slide">
          <h1 class="display-3">Work Experience</h1>
          <p class="lead" id="summary">
            A summary of my most recent work experience
          </p>
        </div>
        <BaseWorkElement
          v-for="(workElement, index) in workData"
          :key="index"
          v-bind="workElement"
        >
        </BaseWorkElement>
      </div>
    </div>
  </div>
</template>
<script>
import BaseWorkElement from "../components/BaseWorkElement.vue";
export default {
  components: { BaseWorkElement },
  data() {
    return {
      githubIconPath: "/assets/GitHub-Mark-32px.png",
      workData: [
        {
          title: "Backend Software Engineer",
          employer: "envelio GmbH",
          description:
            "Development of backend microservices for startup in the energy sector",
          timeframe: "April 2020 - Today",
          link: "https://envelio.de/en/",
          responsibilities: [
            "Development of SaaS platform for electricity grid operators",
            "Backend Development using Django / Flask",
            "Integration of third-party APIs (e.g. Charging Point Operators)",
            "Development of new microservices including CI-Pipeline",
            "Improvement and extension of Testing / QA-Framework",
          ],
          technologies: [
            "Python (Django, Flask)",
            "Javascript (Vue.js)",
            "CI-Tools (Gitlab-CI, Teamcity)",
            "Test-Frameworks (Pytest, Jest)",
            "Docker",
          ],
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
