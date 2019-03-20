<template>
    <div class="box">
        <aloe-row gutter="5">
            <aloe-col span="35" :pad="{span:30}" :narrow-pc="{span:25}" :pc="{span:20}" :wide-pc="{span:15}">
                <div class="col-content dark"></div>
            </aloe-col>
            <aloe-col span="35" :pad="{span:40}" :narrow-pc="{span:50}" :pc="{span:60}" :wide-pc="{span:70}">
                <div class="col-content light"></div>
            </aloe-col>
            <aloe-col span="35" :pad="{span:30}" :narrow-pc="{span:25}" :pc="{span:20}" :wide-pc="{span:15}">
                <div class="col-content dark"></div>
            </aloe-col>
        </aloe-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/row'
    import Col from '../../../src/components/col'

    export default {
        name: "RespondLayoutDemos",
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
            .aloe-col{margin-bottom: 5px}
            .col-content {
                height: 30px;
                border-radius: $border-radius;


                &.dark {background-color: $main-active;}

                &.light {background-color: $main-hover;}
            }
        }

    }
</style>
