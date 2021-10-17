import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./registerServiceWorker";
import ToastNotification from "./plugins/ToastNotification";

Vue.config.productionTip = false;

Vue.use(ToastNotification);
Vue.use(VueAxios, axios);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
