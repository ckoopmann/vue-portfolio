<template>
  <div class="slide">
    <h2 class="display-4 mb-1 mt-1">{{ title }}</h2>
    <div class="card ml-1 mr-1">
      <div class="card-head mt-3">
        <h4>
          <a v-if="link" :href="link">{{ employer }} </a>
          <span v-else>{{ employer }}</span>
        </h4>
        <h4 id="timeframe">{{ timeframe }}</h4>
      </div>
      <hr />
      <div class="card-body">
        <div class="row">
          <div class="col-sm-6 justify-content-center">
            <h5>Responsibilities</h5>
            <ul class="list-unstyled">
              <li
                v-for="(responsibility, index) in responsibilities"
                :key="index"
                class="mb-1"
              >
                {{ responsibility }}
              </li>
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
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "employer",
    "link",
    "timeframe",
    "responsibilities",
    "technologies",
  ],
};
</script>

<style scoped>
h2 {
  color: white;
}

#timeframe {
  font-style: italic;
}
</style>
