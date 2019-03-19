<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-col",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colStyle() {
                return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'}
            },
            colClass() {
                return [this.span && `col-${this.span}`, this.offset && `offset-${this.offset}`]
            }
        },
    }
</script>

<style scoped lang="scss">
    @import "../assets/basic";

    .col {
        height: 50px;
        background: $main;
        border: 1px solid $main*1.5;
        $class-prefix: col-;
        width: 100%;
        @for $n from 0 through 100 {
            &.#{$class-prefix}#{$n} {
                width: ($n/100)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 0 through 100 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/100)*100%;
            }
        }
    }
</style>
