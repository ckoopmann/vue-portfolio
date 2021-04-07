import Vue from "vue";
import App from "./App.vue";
import VueFullPage from "vue-fullpage.js";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(VueFullPage);
Vue.use(VueMeta);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
