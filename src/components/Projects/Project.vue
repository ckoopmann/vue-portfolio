<template>
  <div class="col-md-8">
    <div class="card">
      <div class="card-head">
        <img class="rounded-circle img-custome" :src="logoPath" />
        <h2>{{ title }}</h2>
      </div>
      <hr />
      <div class="card-body">
        <p>{{ description }}</p>
        <a type="button" class="btn btn-outline-secondary" :href="githubLink">
          <img :src="githubIconPath" />
        </a>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: ["title", "logoPath", "description", "githubLink"],
  data() {
    return {
      githubIconPath: "/assets/GitHub-Mark-32px.png",
    };
  },
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
