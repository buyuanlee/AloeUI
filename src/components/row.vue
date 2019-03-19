<template>
    <div class="aloe-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "aloe-row",
        props: {
            gutter: {type: [Number, String]},
            justify:{
                type:String,
                validator(value){
                    return['start','end','center','between','around'].includes(value)
                }

            }
        },
        computed: {
            rowStyle() {
                return {marginLeft: -this.gutter / 2 + 'px', marginRight: -this.gutter / 2 + 'px'}
            },
            rowClass(){
                return [
                    this.justify&&`justify-${this.justify}`
                ]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped lang="scss">
    .aloe-row {
        display: flex;
        &.justify-start{
            justify-content: flex-start;
        }
        &.justify-end{
        justify-content: flex-end;
    }
        &.justify-center{
            justify-content: center;
        }
        &.justify-between{
            justify-content: space-between;
        }
        &.justify-around{
            justify-content: space-around;
        }
    }
</style>
