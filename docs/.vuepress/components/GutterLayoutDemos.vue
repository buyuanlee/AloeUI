<template>
    <div class="box">
        <aloe-row gutter="20">
            <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
            <aloe-col span="25"><div class="col-content light"></div></aloe-col>
            <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
            <aloe-col span="25"><div class="col-content light"></div></aloe-col>
        </aloe-row>
        <aloe-row gutter="10">
            <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
            <aloe-col span="30"><div class="col-content light"></div></aloe-col>
            <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
            <aloe-col span="30"><div class="col-content light"></div></aloe-col>
        </aloe-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/row'
    import Col from '../../../src/components/col'

    export default {
        name: "GutterLayoutDemos",
        components: {
            'aloe-row': Row,
            'aloe-col': Col
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../src/assets/basic";

    .box {
        .aloe-row {
            margin-bottom: 10px;
        }

        .col-content {
            height: 30px;
            border-radius: $border-radius;

            &.dark {background-color: $main-active;}

            &.light {background-color: $main-hover;}
        }
    }
</style>
