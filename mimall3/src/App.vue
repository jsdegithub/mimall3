<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        mounted() {
            console.log("------------------------------");
            console.log("------------------------------");
            console.log(
                "该页面的window.location.hash值为：" + window.location.hash
            );
            console.log("------------------------------");
            console.log("------------------------------");
            console.log(
                "该页面的window.location.href值为：" + window.location.href
            );
            console.log("------------------------------");
            console.log("------------------------------");
            console.log("该页面的this.$router值为：" + this.$router);

            console.log("------------------------------");
            console.log("------------------------------");
            console.log("该页面的this.$route.path值为：" + this.$route.path);

            if (this.$cookie.get("userId")) {
                this.getUser();
                this.getCartCount();
            }
        },
        methods: {
            getUser() {
                this.axios
                    .get("/user")
                    .then((res = {}) => {
                        this.$store.dispatch("saveUserName", res.username || "");
                    })
                    .catch((res = {}) => {
                        this.$store.dispatch("saveUserName", res.username || "");
                    });
            },
            getCartCount() {
                this.axios
                    .get("/carts/products/sum")
                    .then((res = 0) => {
                        this.$store.dispatch("saveCartCount", res);
                    })
                    .catch((res = 0) => {
                        this.$store.dispatch("saveCartCount", res);
                    });
            },
        },
    };
</script>

<style lang="scss">
    @import "./assets/scss/reset.scss";
    @import "./assets/scss/config.scss";
    @import "./assets/scss/button.scss";
</style>
