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
            //return的值是什么时候返回的，初始化的时候吗
            layoutClass: {
                hasSider:false,
            },
           
        }
    },
    mounted() {
        this.$children.forEach(
            (vm) => {
                if(vm.$options.name === 'YVueSider') {
                   
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
       
        &.hasSider {
            flex-direction: row;
        }

    }
</style>