<template>
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
</template>

<style scoped>
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

.left:hover polyline,
.left:focus polyline {
  stroke-width: 8;
}

.left:active polyline {
  stroke-width: 6;
  transition: all 100ms ease-in-out;
}

polyline {
  transition: all 250ms ease-in-out;
}
</style>
