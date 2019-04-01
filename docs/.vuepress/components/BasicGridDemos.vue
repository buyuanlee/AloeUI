<template>
    <div class="box">
        <!--一栏-->
        <aloe-row>
            <aloe-col><div class="col-content dark"></div></aloe-col>
        </aloe-row>
        <!--两栏-->
        <aloe-row>
            <aloe-col><div class="col-content dark"></div></aloe-col>
            <aloe-col><div class="col-content light"></div></aloe-col>
        </aloe-row>
        <!--三栏-->
        <aloe-row>
            <aloe-col><div class="col-content dark"></div></aloe-col>
            <aloe-col><div class="col-content light"></div></aloe-col>
            <aloe-col><div class="col-content dark"></div></aloe-col>
        </aloe-row>
        <!--四栏-->
        <aloe-row>
            <aloe-col><div class="col-content dark"></div></aloe-col>
            <aloe-col><div class="col-content light"></div></aloe-col>
            <aloe-col><div class="col-content dark"></div></aloe-col>
            <aloe-col><div class="col-content light"></div></aloe-col>
        </aloe-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/row'
    import Col from '../../../src/components/col'

    export default {
        name: "BasicGridDemos",
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
