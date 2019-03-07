<template>
        <div>
            <aloe-button>主要按钮</aloe-button>
            <aloe-button icon="download">下载</aloe-button>
            <aloe-button icon="setting" icon-position="right">设置</aloe-button>
            <aloe-button icon="download" icon-position="left" :loading="true">加载中
            </aloe-button>
        </div>
</template>

<script>

    import Button from '../../../src/components/button'

    export default {
        name: "ButtonDemos",
        components: {
            'aloe-button': Button
        }
    }
</script>

<style lang="scss" scoped>
</style>
