import Vue from "vue";

// Lib imports
import axios, {AxiosStatic} from "axios";

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
  }
}
Vue.prototype.$http = axios;
