<template>
    <div id="app">
        <aloe-button @click="showToast">click me!</aloe-button>

    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {
        },
        methods: {
            showToast() {
                this.$toast('我是message')
            }
        },
    }
</script>

<style lang="scss">
    @import "./assets/basic";

    .demo {
        border: 1px solid $main;
        min-height: 100px;
    }

    .box {
        .aloe-row {margin-bottom: 10px;}

        .col-content {height: 30px;
            border-radius: $border-radius;

            &.dark {background-color: $main-active;}

            &.light {background-color: $main-hover;}
        }
    }

    .show {margin: 1em;}

    #app {text-align: center;margin-top: 60px;}
</style>
