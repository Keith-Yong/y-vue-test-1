<template>
    <div class="tabs-head">
        <slot></slot>
        <!--  这里可以接收2个插槽 -->
        <div class="actions-wrapper">
            <slot name="actions" ></slot>
        </div>
        
    </div>
</template>

<script>
   export default {
    name:'YVueTabsHead',
    inject:['eventBus'], // 注入后可以使用父组件的属性
    created() {
        // Vue的@update事件不会冒泡传递给爸爸组件
        // Vue的事件在哪个对象上调用，只能在那个对象上监听
        // '爷爷给爸爸的 eventBus'
        // console.log('爷爷给爸爸的 eventBus')
        // console.log(this.eventBus)
        this.$emit('update:selected','tabs-head 抛出的数据')
    }
   }
</script>

<style scoped lang="scss">
    $tab-height: 40px;
    .tabs-head {
        display:flex;
        height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        > .actions-wrapper {
            margin-left: auto; // 元素右对齐
        }
    }
</style>