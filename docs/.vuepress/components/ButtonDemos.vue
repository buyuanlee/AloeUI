<template>
        <div>
            <aloe-button >默认按钮</aloe-button>
            <aloe-button danger>危险按钮</aloe-button>
            <aloe-button warning>警告按钮</aloe-button>
            <aloe-button info>信息按钮</aloe-button>
            <aloe-button success>成功按钮</aloe-button>
            <aloe-button icon="good">点赞</aloe-button>
            <aloe-button icon="setting" icon-position="right">设置</aloe-button>
            <aloe-button icon="download" loading>点击加载</aloe-button>
        </div>
</template>

<script>
    import Button from '../../../src/components/button'
    export default {
        name: "ButtonDemos",
        components: {'aloe-button': Button}
    }
</script>

<style lang="scss" scoped>
    div {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 40px;
        color:#3eaf7c ;
        box-shadow: 2px 2px 5px 2px rgba(0,0,0,.2);
    }
    .aloe-button{
        margin: 40px;
    }
</style>
