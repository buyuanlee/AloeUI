<template>
    <button class="aloe-button" :class="{[`position-${iconPosition}`]:true}"
            @click="$emit('click')">
        <aloe-icon class="icon" v-if="icon&&!loading" :name="icon"></aloe-icon>
        <aloe-icon class="loading icon" v-if="loading" name="loading"></aloe-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "aloe-button",
        components: {
            'aloe-icon': Icon
        },
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: "left",
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $bg-color: #409EFF;
    $font-color: #fff;
    $border-radius: 5px;
    .icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }

    .aloe-button {
        font-size: 14px;
        font-weight: 500;
        color: $font-color;
        background-color: $bg-color;
        border-radius: $border-radius;
        padding: 0 1em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {border-color: orangered;}

        &:active {border-color: bisque;}

        &:focus {border-color: green;}

        > .icon {order: 1;margin-right: .3em}

        > .content {order: 2;}

        &.position-left {
            > .icon {order: 1;margin-right: .3em}

            > .content {order: 2;}
        }

        &.position-right {
            > .icon {order: 2;margin-right: 0;margin-left: .3em}

            > .content {order: 1;}
        }
    }
</style>
