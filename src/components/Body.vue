<template>
  <div class="row align-items-center ">
    <div class="col">
      <div id="carouselExampleControls" class="carousel slide">
        <div class="carousel-inner">
          <router-view />
        </div>
        <router-link class="carousel-control-prev" :to="previousView">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </router-link>
        <router-link class="carousel-control-next" :to="nextView">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0px;
}
</style>

<script>
export default {
  data() {
    return {
      viewList: ["/home", "/projects"],
    };
  },
  computed: {
    currentViewIndex() {
      const currentPath = this.$route.path;
      const index = this.viewList.findIndex((path) => path === currentPath);
      console.log("Current Path: ", currentPath);
      console.log("Current Index: ", index);
      return index;
    },
    previousView() {
      let previousIndex;
      if (this.currentViewIndex === 0) {
        previousIndex = this.viewList.length - 1;
      } else {
        previousIndex = this.currentViewIndex - 1;
      }
      return this.viewList[previousIndex];
    },
    nextView() {
      const nextIndex = (this.currentViewIndex + 1) % this.viewList.length;
      return this.viewList[nextIndex];
    },
  },
};
</script>
