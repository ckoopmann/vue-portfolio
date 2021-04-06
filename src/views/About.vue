<template>
  <div class="align-self-center">
    <div class="container-fluid">
      <img class="rounded-circle img-custome" src="assets/profile.jpg" />
      <h1 class="display-3">Christian Koopmann</h1>
      <p class="lead">
        Data driven software engineer, eternal student and curious mind.
      </p>
      <a type="button" class="btn btn-primary btn-lg" :href="`mailto:${email}`">
        <i class="far fa-envelope fa-lg"></i>
      </a>
      <a type="button" class="btn btn-primary btn-lg ml-1" :href="linkedin">
        <i class="fab fa-linkedin fa-lg"></i>
      </a>
      <a type="button" class="btn btn-primary btn-lg ml-1" :href="github">
        <i class="fab fa-github fa-lg"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "c.k.e.koopmann@gmail.com",
      linkedin: "https://www.linkedin.com/in/christian-koopmann-a97ab55b/",
      github: "https://github.com/ckoopmann",
    };
  },
};
</script>

<style scoped>
h1,
p {
  color: white;
}

p {
  font-size: 2rem;
}

#logo {
  background-color: white;
}

.img-custome {
  width: 200px;
  height: 200px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
