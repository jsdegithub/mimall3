import Vue from "vue";
import axios from "axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import env from "./env";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

axios.defaults.baseURL = "/api";
// 根据开发环境获取不同的 api 接口域名
debugger
axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function(res) {
    var data = res.data;
    if (res.status === 0) {
        return data;
    } else if (res.status === 10) {
        window.location.href = "/#/login";
    } else {
        alert(res.msg);
    }
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
