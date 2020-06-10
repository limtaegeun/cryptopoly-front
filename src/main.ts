import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./plugins/axios"

Vue.config.productionTip = false;
Vue.prototype.$CDN = "https://cdn.cryptopoly.kr";

const localhost = "http://localhost:3000";
const server = "https://api.cryptopoly.kr";
Vue.prototype.$API =
    process.env.NODE_ENV === "production" ? server : localhost;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
