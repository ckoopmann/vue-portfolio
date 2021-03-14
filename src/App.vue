<template>
  <Navigation />
  <button class="arrow left position-absolute top-50 start-50">
    <svg width="60px" height="80px" viewBox="0 0 50 80" xml:space="preserve">
      <polyline
        fill="none"
        stroke="#FFFFFF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="
	45.63,75.8 0.375,38.087 45.63,0.375 "
      />
    </svg>
  </button>
  <button class="arrow right">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="60px"
      height="80px"
      viewBox="0 0 50 80"
      xml:space="preserve"
    >
      <polyline
        fill="none"
        stroke="#FFFFFF"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="
	0.375,0.375 45.63,38.087 0.375,75.8 "
      />
    </svg>
  </button>
  <router-view />
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
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
body {
  background: url(/assets/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

button {
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  outline: 0;
}

svg {
  padding: 5px;
}

.arrow {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: -45px;
  margin-left: -35px;
  width: 70px;
  height: 90px;
}

.left {
  left: 10%;
}

.right {
  left: 90%;
}

.left:hover polyline,
.left:focus polyline {
  stroke-width: 8;
}

.left:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
  stroke-width: 6;
}

.right:active polyline {
  stroke-width: 8;
  transition: all 100ms ease-in-out;
}

polyline {
  transition: all 250ms ease-in-out;
}
</style>
