import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes.js";
// Vue.config.productionTip = false

//root router instance
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: "history",
  //default mode is has mode '#'
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
