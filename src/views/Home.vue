<template>
  <div>
    <section class="section">
      <div class="container-fluid">
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
  color: white;

}
</style>

