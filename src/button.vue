<template>
    <!--点击后触发click函数  -->
    <!--事件触发后把click函数传递给外部组件-->
    <!-- ：这里用对象键值对的形式获取样式 -->
    <button  class ="g-button" :class="{[`icon-${iconPosition}`]:true}" 
    @click="$emit('click')" >
    <!-- button组件由一个Button按钮标签和两个g-icon组件构成 -->
    <!-- name指的是组件的属性名称,:指的是可以动态传递 -->
    <!-- 通过v-if的变量的布尔值控制该组件是否展示 -->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        
        <div class="g-button-content">
        <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon.vue'
    
   export default {
    name:'YVUe-Button',
    // props:['icon','iconPosition']
    components: {'g-icon': Icon},
    props: {
        icon:{},
        // props属性设置的第二种方法：设置默认值
        iconPosition: {
            type:String,
            default:'left',
            // 验证iconPosition的值
            validator(value) {
                return value === 'left' || value == 'right';
            }
        },
        loading: {
            type:Boolean,
            default:false,
        }
    }
   }


</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
//  使用动画@keyframes和animation制作加载中的样式
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
    // infinite无限，linear线性运动的样式
    .loading{
        animation: spin 2s infinite linear;

    }

 .g-button {
            font-size: $font-size;
            height: $button-height; 
            padding: 0 1em;
            border-radius: $border-radius; 
            border: 1px solid $border-color;
            background: $button-bg;


            display: inline-flex;
            justify-content: center;
            align-items: center;
            // 遇到scss样式中不对齐的统一使用vertical-align
            vertical-align: middle;

             /* 点击按钮后的样式 */
             &:hover {
            border-color: $border-color-hover;
        }
        /* 移除按钮后的样式 */
            &:active {
            background-color: $button-active-bg;
        }
        /*  移除按钮后的样式 */
            &:focus {
            outline: none;
        }
        // 当选择器icon-right存在的时候，icon和content选择器使用下面的两种
            > .icon{
                order: 1;
                margin-right:  .1em;
            }
            > .g-button-content{
                order:2;
                height: 14px;
                line-height: 1;
            }

            &.icon-right{
                > .icon{
                    order: 2;
                    margin-right: 0;
                    margin-left:  .1em;
                }
                > .g-button-content{
                    order: 1;
                }

            }
            }
            

</style>