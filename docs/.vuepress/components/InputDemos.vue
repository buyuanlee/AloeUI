<template>
    <div class="box">
        <aloe-input value="默认输入框"></aloe-input>
        <aloe-input value="不可用输入框" disabled></aloe-input>
        <aloe-input warning="请检查输入格式"></aloe-input>
    </div>
</template>

<script>
    import Input from '../../../src/components/input'

    export default {
        name: "InputDemos",
        data(){
            return {
                message:"双向绑定"
            }
        },
        components: {
            'aloe-input': Input
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        color: #3eaf7c;
        box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .2);
    }

    .aloe-input {
    }
</style>
