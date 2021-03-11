import Vue from "vue";
import axios from "axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";

import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
// import env from "./env";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
Vue.prototype.$message = Message;

axios.defaults.baseURL = "/api";
// 根据开发环境获取不同的 api 接口域名
// debugger
// axios.defaults.baseURL = env.baseURL;
axios.defaults.timeout = 8000;
axios.interceptors.response.use(
    function(response) {
        let res = response.data;
        let path = location.hash;
        if (res.status == 0) {
            return res.data;
        } else if (res.status == 10) {
            // 如果在主页就不让它跳转到登陆页面，因为要允许未登录的人也能查看主页
            if (path != "#/index") {
                window.location.href = "/#/login";
            }
            return Promise.reject();
        } else {
            return Promise.reject(res);
        }
    },
    (error) => {
        let res = error.response;
        if (res.data.status == 500) {
            return Promise.reject();
        }
    }
);

Vue.use(VueLazyLoad, {
    loading: "/imgs/loading-svg/loading-bars.svg",
});
Vue.use(VueCookie);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
