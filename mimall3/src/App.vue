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
            console.log(
                "该页面的this.$router值为：" + this.$router
            );
        },
    };
</script>

<style lang="scss">
</style>
