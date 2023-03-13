<template>
    <div class="toast">
        <slot></slot>
    </div>
       
</template>

<script>
   export default {
        name:'YVuetoast'
   }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast {
        border: 1px solid red;
        position: fixed;
        top:0;
        left: 50%; //没有使元素真正的居中
        transform: translateX(-50%); //使元素在中间
        font-size:  $font-size;
        line-height: 1.8;
        height:$toast-height;
        display: flex; //使元素flex布局内部文字居中
        align-items: center;
        color: white;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow:  0 0 3px  0  rgba(0, 0, 0, 0.50);
        padding:0 16px ; //问题：为什么这里的Padding会对文本有作用，我是message是一个元素吗？那它的外部元素是哪个

    }
</style>

