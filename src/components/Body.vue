<template>
  <div class="row">
    <div class="col">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" />
        </transition>
      </router-view>
      <router-link class="carousel-control-prev" :to="previousView">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </router-link>
      <router-link class="carousel-control-next" :to="nextView">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.row {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0px;
  vertical-align: middle;
}

.slide-enter-active,
.slide-leave-active {
  vertical-align: middle;
  position: absolute;
  width: inherit;
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
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
