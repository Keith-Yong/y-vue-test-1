<template>
    <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name:'YVueTabsItem',
    inject:['eventBus'],//注入后孙组件可以使用爷组件的eventBus变量
    // 问题： props和data有什么区别？
    // 如果需要前端开发传值则放在props中，data自身维护值， props相当于参数，data相当于局部变量，组件就是一个函数
    data() {
        return {
            active:false
        }
    },
    props: {
       
        disabled: {
            type: Boolean,
            default:false
        },
        // 这里的name的值是从外部传进去的name值，即当前的name的值
        // 和点击后选中的标签的name的值进行对比，如果相同的话则通过控制变量active进行样式的修改
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
        // console.log('爷爷给孙子的组件')
        // console.log(this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            if(name === this.name){
                console.log(`我${this.name}被选中了`)
                this.active = true
            }else{
                console.log(`我${this.name}没被选中`)
                this.active =false
            }
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

<style lang="scss" scoped>
    .tabs-item {
        
        flex-shrink: 0;
        /* 上下 0 左右2个字 */
        /* 问题：padding为什么会作用到每个元素上 */
        padding: 0 1em; 
        &.active{
            background: red;
        }

    }
</style>