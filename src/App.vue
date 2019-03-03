<template>
    <div id="app">
        <aloe-icon name="download"></aloe-icon>
        <aloe-button icon="setting">设置</aloe-button>

    </div>
</template>

<script>
    import Icon from './components/icon'
    import Button from './components/button'

    export default {
        name: 'app',
        components: {
            'aloe-icon': Icon,
            'aloe-button': Button
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
