<template>
    <div class="aloe-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-button-group",
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase();
                if (name !== 'button') {
                    console.warn(`button-group的子元素应该全部是button，而你的子元素包含了${name}标签`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/basic";

    .aloe-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .aloe-button {
            border-radius: 0;

            &:not(first-child) {
            }

            &:first-child {
                border-right: 1px solid #dcdfe6;
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }

            &:last-child {
                border-left: .5px solid #dcdfe6;
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
