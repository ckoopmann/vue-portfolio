<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div id="title" class="slide">
          <h1 class="display-3">Work Experience</h1>
          <p class="lead" id="summary">
            A summary of my most recent work experience
          </p>
        </div>
        <BaseWorkElement
          v-for="(workElement, index) in workData"
          :key="index"
          v-bind="workElement"
        >
        </BaseWorkElement>
      </div>
    </div>
  </div>
</template>
<script>
import BaseWorkElement from "../components/BaseWorkElement.vue";
export default {
  components: { BaseWorkElement },
  data() {
    return {
      workData: [
        {
          title: "Software Engineer",
          employer: "envelio GmbH",
          timeframe: "April 2020 - Today",
          link: "https://envelio.de/en/",
          responsibilities: [
            "Development of SaaS platform for electricity grid operators",
            "Full-Stack implementation of new Features / improvement of existing ones",
            "Integration of third-party APIs (e.g. Charging Point Operators)",
            "Development of new microservices including CI-Pipeline",
            "Improvement and extension of Testing / QA-Framework",
          ],
          technologies: [
            "Python (Django, Flask)",
            "Javascript (Vue.js)",
            "CI-Tools (Gitlab-CI, Teamcity)",
            "Test-Frameworks (Pytest, Jest)",
            "Docker",
          ],
        },
        {
          title: "Data Scientist / Software Engineer",
          employer: "Athion GmbH (defunct)",
          timeframe: "Sept. 2019 - Mar. 2020",
          link: "https://www.crunchbase.com/organization/athion",
          responsibilities: [
            "Development of SaaS platform managing / optimizing very complex energy systems.",
            "Backend Development in a Microservice Architecture",
            "Development of ML-models for time series prediction from ideation to deployment",
            "Integration of third-party APIs (e.g. Market Data from European Energy Exchange)",
          ],
          technologies: [
            "Python (pandas, sklearn, scikit, nameko)",
            "CI-Tools (Gitlab-CI)",
            "Test-Frameworks (Pytest)",
          ],
        },
        {
          title: "Quantitative Analyst",
          employer: "Tipico Inc.",
          timeframe: "July 2018 - August 2019",
          link: "https://www.tipico-careers.com/en/",
          responsibilities: [
            "Developing quantitative methods and applications in the Bookmaking department",
            "Working on Projects including trading algorithms and risk management tools",
            "Development of dashboards illustrating KPIs regarding profitability / risk in different markets / sports",
          ],
          technologies: [
            "R (data.table, ggplot, shiny etc.)",
            "SQL (Postgres)",
            "Docker",
          ],
        },
        {
          title: "Analytics Associate",
          employer: "Boston Consulting Group",
          timeframe: "February 2018 - June 2018",
          link: "https://www.bcg.com/beyond-consulting/bcg-gamma/default",
          responsibilities: [
            "Working on data science projects in the specialized BCG Gamma business unit",
            "Implementation of a large scale data science / digitalisation project in the telecommunications sector",
          ],
          technologies: ["R", "Python", "SQL"],
        },
        {
          title: "Master Thesis Student",
          employer: "BASF AG",
          timeframe: "June 2017 - Nov. 2017",
          link: "https://www.basf.com/global/en/careers.html",
          responsibilities: [
            "Developing / Documenting various models to predict natural gas prices on the futures market",
            "Integration of third party data sources (e.g. Refinitiv)",
            "Evaluation of results including derivation of a trading strategy from probabilistic model forecasts",
          ],
          technologies: ["R", "Python", "SQL"],
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
