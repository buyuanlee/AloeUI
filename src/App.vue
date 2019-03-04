<template>
    <div id="app">
        <div class="show">
            <aloe-icon name="download"></aloe-icon>
        </div>
        <div class="show">
            <aloe-button>主要按钮</aloe-button>
        </div>
        <div class="show">
            <aloe-button icon="download" icon-position="left" :loading="true">左边
            </aloe-button>
        </div>
        <div class="show">
            <aloe-button icon="download" :loading="true" icon-position="right">右边</aloe-button>
        </div>
        <div class="show">

            <aloe-button :loading="true">加载中</aloe-button>
        </div>
        <div class="show">
            <aloe-button :loading="true" icon-position="right">加载</aloe-button>
        </div>
        <div class="show">
            <aloe-button-group>
                <aloe-button icon="left">左边</aloe-button>
                <aloe-button>更多</aloe-button>
                <aloe-button icon="right" icon-position="right">右边</aloe-button>
            </aloe-button-group>
        </div>
        <div class="show">
            <aloe-input></aloe-input>
        </div>
    </div>
</template>

<script>
    import Icon from './components/icon'
    import Button from './components/button'
    import ButtonGroup from './components/button-group'
    import Input from './components/input'

    export default {
        name: 'app',
        components: {
            'aloe-icon': Icon,
            'aloe-button': Button,
            'aloe-button-group': ButtonGroup,
            'aloe-input': Input
        }
    }
</script>

<style lang="scss" scoped>
    @import "./assets/basic";

    .show {
        margin: 1em;
    }

    #app {
        text-align: center;
        margin-top: 60px;
    }
</style>
