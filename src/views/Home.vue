<template>
  <div class="align-self-center">
    <div class="container-fluid">
      <h1>Christian Koopmann</h1>
      <p>This is my personal website.</p>
      <a type="button" class="btn btn-primary btn-lg" :href="`mailto:${email}`">
        Contact
      </a>
    </div>
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
