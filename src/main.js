import Vue from "vue";
import App from "./App.vue";
import CarbonComponentsVue from "@carbon/vue";
Vue.use(CarbonComponentsVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
