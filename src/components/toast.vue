<template>
    <div class="aloe-toast">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "aloe-toast"
    }
</script>

<style scoped lang="scss">
    @import "../../src/assets/basic";

    .aloe-toast {
        position: fixed;top: 0;left: 50%;
        color: #fff;transform: translateX(-50%);
        height: 40px;font-size: $font-size;
        display: flex;align-items: center;
        background-color: rgba(0, 0, 0, .75);
        border-radius: $border-radius;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        padding: 0 1.2em;
    }
</style>
