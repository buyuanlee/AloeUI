<template>
    <button class="aloe-button" :class="{[`position-${iconPosition}`]:true,info,success,warning,danger}"
            @click="onClick">
        <aloe-icon class="icon" v-if="icon&&!selfLoading" :name="icon"></aloe-icon>
        <aloe-icon class="loading icon" v-if="loading&&selfLoading" name="loading"></aloe-icon>
        <div class="aloe-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'

    export default {
        name: "aloe-button",
        components: {'aloe-icon': Icon},
        methods: {
            onClick(e) {
                this.$emit('click', e);
                if(this.loading){
                this.selfLoading = !this.selfLoading;
                }
            }
        },
        data() {
            return {
                selfLoading: false
            }
        },
        props: {

            icon: {},
            iconPosition: {type: String, default: "left",
                validator(value) {return !(value !== 'left' && value !== 'right');}
            },
            loading:{type: Boolean, default: false},
            danger: {type: Boolean, default: false},
            info: {type: Boolean, default: false},
            warning: {type: Boolean, default: false},
            success: {type: Boolean, default: false},
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/basic";

    .icon {width: 1em;height: 1em;fill: currentColor;overflow: hidden;}

    .aloe-button {font-size: $font-size;font-weight: 500;color: $text;
        background: $main;border-color: $main;border-radius: $border-radius;
        padding: .5em 1em;display: inline-flex;justify-content: center;
        align-items: center;vertical-align: middle;outline: none;

        &:hover {background: $main-hover;border-color: $main-hover;}

        &:active {background: $main-active;border-color: $main-active;}

        &:focus {background: $main-hover;border-color: $main-hover;}

        &.danger {background: $danger;border-color: $danger}

        &.success {background: $success;border-color: $success}

        &.warning {background: $warning;border-color: $warning}

        &.info {background: $info;border-color: $info}

        > .icon {order: 1;margin-right: .3em}

        > .aloe-button-content {order: 2;}

        &.position-left {
            > .icon {order: 1;margin-right: .3em}

            > .aloe-button-content {order: 2;}
        }

        &.position-right {
            > .icon {order: 2;margin-right: 0;margin-left: .3em}

            > .aloe-button-content {order: 1;}
        }
    }
</style>
