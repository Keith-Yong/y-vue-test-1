<template>
    <!-- 动态绑定样式，值为true则展示样式，值为false则不展示样式 -->
    <div class="layout" :class="layoutClass">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name: 'YvueLayout',
    data() {
        return {
            //问题:这里返回的数据会被哪里接收到引用
            layoutClass: {
                hasSider:false
            }
        }
    },
    mounted() {
        this.$children.forEach(
            (vm) => {
                if(vm.$options.name === 'YVueSider') {
                    //问题：为什么让hasSider的值而不是layoutClass变成true
                    this.layoutClass.hasSider = true
                }
            }
        )
        // console.log(this.$children)
        
    
    
},

   }
 
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1; 
        display: flex;
        flex-direction: column;
        border: 1px solid red;
        &.hasSider {
            flex-direction: row;
        }

    }
</style>