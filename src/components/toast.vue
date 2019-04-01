<template>
    <div class="toast">

    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.prototype.$toast=function(){
        console.log('我是xx');
    };
    export default {
        name: "aloe-toast"
    }
</script>

<style scoped lang="scss">

</style>
