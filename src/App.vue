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
                <aloe-col span="1"></aloe-col>
                <aloe-col span="99"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="10"></aloe-col>
                <aloe-col span="90"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="30"></aloe-col>
                <aloe-col span="70"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="20"></aloe-col>
                <aloe-col span="60" offset="20"></aloe-col>
            </aloe-row>
            <aloe-row>
                <aloe-col span="40"></aloe-col>
                <aloe-col span="60"></aloe-col>
            </aloe-row>
            <hr>
            <aloe-row gutter="10">
                <aloe-col></aloe-col>
                <aloe-col></aloe-col>
            </aloe-row>
        </div>
        <div class="box">
            <aloe-row>
                <aloe-col span="20" :pad="{span:30}">
                    <div class="col-content dark"></div>
                </aloe-col>
                <aloe-col span="20" :pad="{span:10}">
                    <div class="col-content light"></div>
                </aloe-col>
            </aloe-row>
        </div>
        <aloe-layout style="height: 100vh">
            <aloe-aside class="demo">侧边栏</aloe-aside>
            <aloe-layout>
                <aloe-header class="demo">头部内容</aloe-header>
                <aloe-main class="demo">主要内容</aloe-main>
                <aloe-footer class="demo">底部内容</aloe-footer>
            </aloe-layout>
        </aloe-layout>
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

<style lang="scss">
    @import "./assets/basic";

    .demo {
        border: 1px solid $main;
        min-height: 100px;
    }

    .box {
        .aloe-row {margin-bottom: 10px;}

        .col-content {height: 30px;
            border-radius: $border-radius;

            &.dark {background-color: $main-active;}

            &.light {background-color: $main-hover;}
        }
    }

    .show {margin: 1em;}

    #app {text-align: center;margin-top: 60px;}
</style>
