<template>
    <div class="tabs-item" @click="onClick" :class="classes">
    <slot></slot>
    </div>
</template>

<script>
//  item组件的作用：提供样式的变量active，计算属性计算样式的值，监听数据selected
   export default {
    name:'YVueTabsItem',
    inject:['eventBus'],//注入后孙组件可以使用爷组件的eventBus变量
    //  props和data有什么区别？
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
    // classes是计算属性函数：自动获取active变量的值和disabled的值
    computed: {
        classes () {
           
            return {
                // 返回disabled的值，外部不传递disabled的值就是false,传递值就是true
                disabled:this.disabled,

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
        
        onClick() {
            // 如果点击后true,则停止后面的流程
            if(this.disabled) {return}
            
            // 当用户点击后，触发xx函数，更新selected为this.name
        //这里的name的值是点击后选中标签的name
            this.eventBus.$emit('update:selected',this.name,this)
        }
    }

   }
</script>

<style lang="scss" scoped>
    $blue:blue;
    $disabled-text-color: grey;
    .tabs-item {
        
        flex-shrink: 0;
        /* 上下 0 左右2个字 */
        /* padding为什么会作用到每个元素上 */
        padding: 0 1em; 
        cursor: pointer;
        // border: 1px solid green;
        height: 100%;
        display: flex;
        &.active{
            // background: red;
            color:blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
        }

    }
</style>