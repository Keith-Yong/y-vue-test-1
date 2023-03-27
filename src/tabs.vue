<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
//  tab组件的作用，提供selected双向绑定，提供eventBus全线变量，emit事件的传递
import Vue from 'vue'
export default {
    name: 'YVueTabs',
    props: {
        // selected可以和外部组件进行双向绑定
        selected: {
            type: String,
            required: true
        },
        // direction: {
        //     type: String,
        //     default: 'Horizontal',
        //     validator(value) {
        //         return ['horizontal', 'vertical'].indexOf(value) >= 0
        //     }

        // }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    // provide内定义的属性可以被子组件，孙组件访问到
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted() {
        
        // console.log('eventBus')
        // console.log(this.eventBus)
        // console.log(this.$children)
        if (this.$children.length === 0) {
            console && console.warn &&
            console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
        }
        // 找到当前选中的tabs-item元素
        this.$children.forEach( (vm) => {
            if (vm.$options.name === 'YVueTabsHead') {
                vm.$children.forEach(  (ChildVm) => {
                    // console.log('this.selected')
                    // console.log(this.selected)
                    if (ChildVm.$options.name === 'YVueTabsItem' && ChildVm.name === this.selected) {
                        // this.$emit('update:selected', '这是emit的数据') //必须update触发事件，.sysc才有用
                        this.eventBus.$emit('update:selected', this.selected  ,ChildVm) 
                    }
                })
               



            }
           
        }
            
        )

    }
}
</script>

<style>
.tabs-header {}
</style>