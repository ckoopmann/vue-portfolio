<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div id="title" class="slide">
          <h1 class="display-3">Projects</h1>
          <p class="lead" id="summary">
            Swipe right to read about my personal projects.
          </p>
        </div>
        <BaseProjectElement
          v-for="(project, index) in projectData"
          :key="index"
          v-bind="project"
        >
        </BaseProjectElement>
      </div>
    </div>
  </div>
</template>
<script>
import BaseProjectElement from "../components/BaseProjectElement.vue";
export default {
  components: { BaseProjectElement },
  data() {
    return {
      projectData: [
        {
          title: "Personal Website",
          summary: [
            "Implementation of this website using the Vue.js framework.",
          ],
          technologies: ["Javascript (Vue.js)", "HTML", "CSS (Bootstrap)"],
          githubLink: "https://github.com/ckoopmann/vue-portfolio",
        },
        {
          title: "Mandelbrot Set Visualization",
          summary: [
            "Interactive Visualization of the Mandelbrot set allowing to explore its topology at arbitrary position / zoom level",
            "Done as capstone project of the <a href='https://graduation.udacity.com/confirm/XNSCGCZA'>Udacity C++ Nanodegree Program</a>",
          ],
          technologies: ["C++", "make, CMake"],
          githubLink: "https://github.com/ckoopmann/mandelbrot",
        },
        {
          title: "Natural Gas Price Prediction",
          summary: [
            "Masterthesis on using LSTM Neural Networks to predict natural gas prices",
            "Includes Thesis itself and all data / code used to create it",
          ],
          technologies: ["Python (Keras, Tensorflos)", "R (ggplot2)", "LATEX"],
          githubLink: "https://github.com/ckoopmann/GasPricePrediction",
        },
        {
          title: "ToDo-API",
          summary: [
            "Simple Rest API to save / retrieve Todos",
            "Implemented as Microservice in the Nameko-Framework",
            "Done as take-home assignment in previous application process",
          ],
          technologies: ["Python (nameko)", "RabbitMQ", "Docker"],
          githubLink: "https://github.com/ckoopmann/toDoAPI",
        },
        {
          title: "Django Survey Tool",
          summary: [
            "Web tool designed to allow the user to conduct surveys, inspired by the Doodle application",
            "Done as capstone project of the <a href='https://courses.edx.org/certificates/979ec07e12db407d922c0b9c6335266c'>edX CS50 Web Development</a> Online Course",
          ],
          technologies: ["Python (Django)", "HTML", "CSS"],
          githubLink: "https://github.com/ckoopmann/cs50w_finalproject",
        },
        {
          title: "Earthquake Data-Visualization",
          summary: [
            "R-Package visualizing Earthquake data on a map",
            "Done as capstone project of the <a href='https://www.coursera.org/account/accomplishments/specialization/Y7R2ZZLVXTK9'>Mastering Software Development in R</a> Online Course",
          ],
          technologies: ["R (ggplot2)", "Travis-CI"],
          githubLink: "https://github.com/ckoopmann/EQVisualisation",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1,
#summary {
  color: white;
}

#summary {
  font-size: 2rem;
}
</style>
