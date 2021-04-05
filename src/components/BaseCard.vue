<template>
  <div class="slide col-md-12">
    <div class="card">
      <div class="card-head">
        <img class="rounded-circle img-custome" :src="logoPath" />
        <h2>{{ title }}</h2>
      </div>
      <hr />
      <div class="card-body">
        <p>{{ description }}</p>
        <slot> </slot>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["title", "logoPath", "description"],
};
</script>

<style lang="css" scoped>
.img-custome {
  width: 100px;
  height: 100px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
