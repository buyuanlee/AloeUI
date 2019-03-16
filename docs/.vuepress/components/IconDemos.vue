<template>
    <div>
        <aloe-icon name="down"></aloe-icon>
        <aloe-icon name="up"></aloe-icon>
        <aloe-icon name="left"></aloe-icon>
        <aloe-icon name="right"></aloe-icon>
        <aloe-icon name="download"></aloe-icon>
        <aloe-icon name="warning"></aloe-icon>
        <aloe-icon name="info"></aloe-icon>
        <aloe-icon name="good"></aloe-icon>
        <aloe-icon name="setting"></aloe-icon>
        <aloe-icon name="loading" loading></aloe-icon>
    </div>
</template>

<script>
    import Icon from '../../../src/components/icon'

    export default {
        name: "IconDemos",
        components: {
            'aloe-icon': Icon
        }
    }
</script>

<style scoped lang="scss">
    div {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        font-size: 40px;
        color:#3eaf7c ;
        box-shadow: 2px 2px 5px 2px rgba(0,0,0,.2);
    }
    .aloe-icon{
        margin: 15px;
    }
</style>
