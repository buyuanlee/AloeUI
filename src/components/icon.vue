<template>
    <svg class="aloe-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import '../assets/svg'

    export default {
        name: "aloe-icon",
        props: {
            name: {
                type: String
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../assets/basic";

    .aloe-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }

    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .loading {
        animation: circle 2s linear infinite;
    }
</style>
