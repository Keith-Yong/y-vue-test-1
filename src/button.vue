<template>
    
    <button  class ="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
        <slot></slot>
        </div>
    </button>
</template>

<script>
   export default {
    // props:['icon','iconPosition']
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
        }
    }
   }


</script>

<style lang="scss">
 .g-button {
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);

            display: inline-flex;
            justify-content: center;
            align-items: center;
            // 遇到scss样式中不对齐的统一使用vertical-align
            vertical-align: middle;

             /* 点击按钮后的样式 */
             &:hover {
            border-color: var(--border-color-hover);
        }
        /* 移除按钮后的样式 */
            &:active {
            background-color: var(--button-active-bg);
        }
        /*  移除按钮后的样式 */
            &:focus {
            outline: none;
        }
        // 问题：为什么这里有两种.icon .icontent的样式，怎么理解
            > .icon{
                order: 1;
                margin-right:  .1em;
            }
            > .content{
                order:2;
            }

            &.icon-right{
                > .icon{
                    order: 2;
                    margin-right: 0;
                    margin-left:  .1em;
                }
                > .content{
                    order: 1;
                }

            }
            }
            

</style>