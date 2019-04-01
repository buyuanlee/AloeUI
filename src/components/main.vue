<template>
    <div class="aloe-main">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-main"
    }
</script>

<style scoped lang="scss">
    .aloe-main {
       flex-grow: 1;
    }
</style>
