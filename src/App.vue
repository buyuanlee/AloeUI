<template>
    <div id="app">
        <div class="show">
            <aloe-icon name="download"></aloe-icon>
        </div>
        <div class="show">
            <aloe-button>主要按钮</aloe-button>
        </div>
        <div class="show">
            <aloe-button icon="download" icon-position="left">左边
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
            <aloe-button-group>
            </aloe-button-group>
        </div>
        <div class="show">
            <aloe-input icon="left"></aloe-input>
            <aloe-input disabled value="我是不可用"></aloe-input>
            <aloe-input readonly="" value="我是只读内容"></aloe-input>
            <aloe-input warning="请检查输入格式"></aloe-input>
        </div>
        <div class="show">
            <aloe-input></aloe-input>
            <aloe-input></aloe-input>
        </div>
        <div class="show">
            <aloe-row>
                <aloe-col></aloe-col>
                <aloe-col></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col></aloe-col>
                <aloe-col></aloe-col>
                <aloe-col></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="2"></aloe-col>
                <aloe-col span="22"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="10"></aloe-col>
                <aloe-col span="14"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="6"></aloe-col>
                <aloe-col span="18"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="4"></aloe-col>
                <aloe-col span="16" offset="4"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="10"></aloe-col>
                <aloe-col span="14"></aloe-col>
            </aloe-row>
            <hr>
            <aloe-row gutter="30">
                <aloe-col></aloe-col>
                <aloe-col></aloe-col>
            </aloe-row>
        </div>
    </div>
</template>

<script>
    import Icon from './components/icon'
    import Button from './components/button'
    import ButtonGroup from './components/button-group'
    import Input from './components/input'
    import Col from './components/col'
    import Row from './components/row'

    export default {
        name: 'app',
        components: {
            'aloe-icon': Icon,
            'aloe-button': Button,
            'aloe-button-group': ButtonGroup,
            'aloe-input': Input,
            'aloe-row': Row,
            'aloe-col': Col
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
