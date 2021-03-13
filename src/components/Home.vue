<template>
  <div>
    <section class="section">
      <div class="container-fliud">
        <h1>Christian Koopmann</h1>
        <p>This is my personal website.</p>
        <a
          type="button"
          class="btn btn-primary btn-lg"
          :href="`mailto:${email}`"
        >
          Contact
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "c.k.e.koopmann@gmail.com",
    };
  },
};
</script>

<style lang="css" scoped>
.section {
  padding-top: 10%;
  padding-bottom: 10%;
}
</style>

<style>
body {
  background: url(../../assets/background.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
