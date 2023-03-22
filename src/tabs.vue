<template>
    <div class="tabs">
    <slot></slot>
    </div>
</template>

<script>
import  Vue from 'vue'
   export default {
    name:'YVueTabs',
    props: {
        selected : {
            type: String,
            required: true
        },
        direction: {
            type:String,
            default: 'Horizontal',
            validator (value) {
                return ['horizontal', 'vertical'].indexOf(value) >= 0
            }

        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    // provide内定义的属性可以被子组件，孙组件访问到
    provide() {
        return {
            eventBus:this.eventBus
        }
    },
    created(){
        // console.log('eventBus')
        // console.log(this.eventBus)
        // console.log(this)

        // this.$emit('update:selected', '这是emit的数据') //必须update触发事件，.sysc才有用
        // this.eventBus.$emit('update:selected', '这是emit的数据') //必须update触发事件，.sysc才有用
    }
   }
</script>

<style>
    .tabs-header {
        
    }
</style>