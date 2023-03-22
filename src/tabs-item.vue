<template>
    <div class="tabs-item" @click="xxx">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name:'YVueTabsItem',
    inject:['eventBus'],//注入后孙组件可以使用爷组件的eventBus变量
    props: {
        disabled: {
            type: Boolean,
            default:false
        },
        // 这里的name的值是从外部传进去的name值，即当前的name的值
        // 和点击后选中的标签的name的值进行对比，如果相同的话则进行样式的修改
        name:{
            type:String | Number,
            require:true
        }
    
    },
    created() {
        console.log('爷爷给孙子的组件')
        console.log(this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    },
    methods: {
        // 当用户点击后，触发xx函数，更新selected为this.name
        //这里的name的值是点击后选中标签的name
        xxx() {
            this.eventBus.$emit('update:selected',this.name)
        }
    }

   }
</script>

<style>
    .tabs-item {
        
    }
</style>