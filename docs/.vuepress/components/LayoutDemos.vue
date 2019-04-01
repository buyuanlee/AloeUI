<template>
    <div class="box">
        <div class="layout">
            <aloe-layout>
                <aloe-header>Header</aloe-header>
                <aloe-main>Main</aloe-main>
                <aloe-footer>Footer</aloe-footer>
            </aloe-layout>
        </div>
        <div class="layout">
            <aloe-layout>
                <aloe-header>Header</aloe-header>
                <aloe-layout>
                    <aloe-aside>Aside</aloe-aside>
                    <aloe-main>Main</aloe-main>
                </aloe-layout>
                <aloe-footer>Footer</aloe-footer>
            </aloe-layout>
        </div>
        <div class="layout">
            <aloe-layout>
                <aloe-aside>Aside</aloe-aside>
                <aloe-layout>
                    <aloe-header>Header</aloe-header>
                    <aloe-main>Main</aloe-main>
                    <aloe-footer>Footer</aloe-footer>
                </aloe-layout>
            </aloe-layout>
        </div>
    </div>
</template>

<script>
    import Layout from '../../../src/components/layout'
    import Header from '../../../src/components/header'
    import Footer from '../../../src/components/footer'
    import Main from '../../../src/components/main'
    import Aside from '../../../src/components/aside'

    export default {
        name: "LayoutDemos",
        components: {
            'aloe-layout': Layout,
            'aloe-header': Header,
            'aloe-footer': Footer,
            'aloe-main': Main,
            'aloe-aside': Aside
        }
    }
</script>
<style scoped lang="scss">
    @import "../../../src/assets/basic";


    .box {
        font-size: 24px;
        color: #fff;

        .layout {
            margin-bottom: 10px;
        }

        .aloe-header, .aloe-footer {
            height: 60px;line-height: 60px;
            background-color: $main;text-align: center;
        }

        .aloe-aside {
            display: flex;align-items: center;justify-content: center;
            width: 20%;background: $main*1.2;}

        .aloe-main {
            height: 160px;line-height: 160px;
            background-color: $main*1.4;text-align: center;
        }
    }
</style>
