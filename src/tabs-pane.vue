<template>
    <!--  active为false的时候内容隐藏-->
    <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name:'YVueTabsPane',
    inject:['eventBus'],
    data() {

        return {
            active: false
        }
    },
    props:{
        name:{
            type:String | Number,
            require:true
        }
    },
     // 计算属性自动获取active变量的值
     computed: {
        classes () {
            return {

                active: this.active
            }
        }
    },
    created() {
        // console.log('爷爷给pane的eventBus组件')
        // console.log(this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            // console.log(name)
            if(name === this.name){
                console.log(`pane${this.name}被选中了`)
                this.active = true
            }else{
                console.log(`pane${this.name}没被选中`)
                this.active = false
            }
        })

    }
   }
</script>

<style scoped lang="scss">
    .tabs-pane {
        &.active{
            background: red;
        }
    }
</style>