<template>

    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <!--  这里可以接收2个插槽 -->
        <div class="actions-wrapper">
            <slot name="actions" ></slot>
        </div>
        
    </div>
</template>

<script>
// head组件作用：整体的结构
   export default {
    name:'YVueTabsHead',
    inject:['eventBus'], // 注入后可以使用父组件的属性
    created() {
        this.eventBus.$on('update:selected',(item,vm) => {
            console.log(item)
        })

        
    }
   }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    $blue: blue;
    .tabs-head {
        display:flex;
        height: $tab-height;
        justify-content: flex-start;
       
        border: 1px solid red;
        position: relative;
        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: $blue;
            width: 100px;
        }
        > .actions-wrapper {
            margin-left: auto; // 元素右对齐
        }
    }
</style>