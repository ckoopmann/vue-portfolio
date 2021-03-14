<template>
  <div class="row">
    <div class="col">
      <router-view v-slot="{ Component }">
        <transition :name="transition">
          <component :is="Component" />
        </transition>
      </router-view>
      <button class="carousel-control-prev" @click="previous">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" @click="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewList: ["/home", "/projects"],
      transition: null,
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
  methods: {
    next() {
      this.transition = "slide_next";
      this.$router.push(this.nextView);
    },
    previous() {
      this.transition = "slide_previous";
      this.$router.push(this.previousView);
    },
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key =="ArrowLeft") {
          e.preventDefault();
          this.previous();
      }
      else if (e.key =="ArrowRight") {
          e.preventDefault();
          this.next();
      }
    });
  },
};
</script>

<style scoped>
.row {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0px;
}

button {
  background-color: transparent;
  border-color: transparent;
}

.slide_next-enter-active,
.slide_next-leave-active {
  position: absolute;
  width: inherit;
  transition: all 0.75s ease-out;
}

.slide_next-enter-to {
  position: absolute;
  right: 0;
}

.slide_next-enter-from {
  position: absolute;
  right: -100%;
}

.slide_next-leave-to {
  position: absolute;
  left: -100%;
}

.slide_next-leave-from {
  position: absolute;
  left: 0;
}

.slide_previous-enter-active,
.slide_previous-leave-active {
  position: absolute;
  width: inherit;
  transition: all 0.75s ease-out;
}

.slide_previous-enter-to {
  position: absolute;
  right: 0;
}

.slide_previous-enter-from {
  position: absolute;
  right: 100%;
}

.slide_previous-leave-to {
  position: absolute;
  left: 100%;
}

.slide_previous-leave-from {
  position: absolute;
  left: 0;
}
</style>
