<template>
    <div class="g-button-group">
   
        <slot></slot>
    
    </div>
</template>

<script>
   export default {
    mounted(){
        //$el用于获取Vue实例关联的DOM元素
        for (let node of this.$el.children) {
            //  nodeName获取的标签名称永远是大写的，所以要转换成小写，否则控制台会重复warn
            let name = node.nodeName.toLowerCase()
            if (name !== 'button') {
                console.warn(`g-button-group的子元素应该全是g-button,但是你写的是${name}`)
            }
        }
    }
   }
</script>

<style lang="scss">
    .g-button-group{
        // 使得元素成为行元素不需要换行
        display: inline-flex;
        vertical-align: middle;
        >   .g-button {
           
            border-radius:0 ;
            &:not(:first-child) {
            margin-left: -1px;}
            //  不是第一个元素的左边框设置为none[如果一旦发现css代码错了,不要管为什么马上删除]
            // &:not(:first-child){
            //     border-left: none;
            // }
            

       
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            // 让后面的元素被触摸后浮动起来
            &:hover{
                
            position: relative;
            z-index: 1;
        }
        }

    }
</style>