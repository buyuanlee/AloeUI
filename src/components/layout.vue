<template>
    <div class="aloe-layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-layout",
        data() {
            return {
                layoutClass: {
                    hasAside: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'aloe-aside') {
                    this.layoutClass.hasAside = true
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    .aloe-layout {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    &.hasAside{
        flex-direction: row;
    }
    }
</style>
