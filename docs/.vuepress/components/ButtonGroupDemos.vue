<template>
    <div class="box">
        <aloe-button-group>
            <aloe-button icon="left">上一页</aloe-button>
            <aloe-button>当前</aloe-button>
            <aloe-button icon="right" icon-position="right">下一页</aloe-button>
        </aloe-button-group>
        <aloe-button-group>
            <aloe-button icon="left">向左</aloe-button>
            <aloe-button icon="right" icon-position="right">向右</aloe-button>
        </aloe-button-group>
    </div>
</template>

<script>
    import ButtonGroup from '../../../src/components/button-group'
    import Button from '../../../src/components/button'

    export default {
        name: "ButtonGroupDemos",
        components: {
            'aloe-button-group': ButtonGroup,
            'aloe-button': Button
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        color: #3eaf7c;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
    }

    .aloe-button-group {
        margin: 15px;
    }
</style>
