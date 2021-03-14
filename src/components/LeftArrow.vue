<template>
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

.right {
  left: 90%;
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
