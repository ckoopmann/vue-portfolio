<template>
  <div class="slide">
    <h2 class="display-4 mb-1 mt-1">{{ title }}</h2>
    <div class="card ml-2">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6 justify-content-center">
            <h5>Summary</h5>
            <ul class="list-unstyled">
              <li
                v-for="(summaryBullet, index) in summary"
                :key="index"
                class="mb-1"
                v-html="summaryBullet"
              ></li>
            </ul>
          </div>
          <div class="col-sm-6 justify-content-center" id="technologies">
            <h5>Technologies</h5>
            <ul class="list-unstyled">
              <li v-for="(technology, index) in technologies" :key="index">
                {{ technology }}
              </li>
            </ul>
          </div>
        </div>
        <a
          type="button"
          class="btn btn-secondary btn-lg ml-1"
          :href="githubLink"
        >
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a
          type="button"
          class="btn btn-secondary btn-lg ml-1"
          v-if="deploymentLink"
          :href="deploymentLink"
        >
          <i class="fas fa-globe fa-lg"></i>
        </a>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["title", "githubLink", "deploymentLink", "summary", "technologies"],
};
</script>

<style scoped>
h2 {
  color: white;
}
#timeframe {
  font-style: italic;
}

.card {
  max-height: 100vh;
}
</style>
