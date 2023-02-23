<template>
    
    <button  class ="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <!--:等价于v-bind动态绑定，{icon}是模板变量，``是反引号使模板变量生效  -->
    <!--  icon变量存在才用svg -->
        <svg v-if="icon" class="icon"><use :xlink:href="`#I-${icon}`"></use></svg>
        <!-- slot标签内不能添加样式，所以需要加一个div标签 -->
        <div class="content">
        <slot></slot>
        </div>
    </button>
</template>

<script>
   export default {
    props:['icon','iconPosition']
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
            > .icon{
                order: 1;
            }
            > .content{
                order:2;
            }

            &.icon-right{
                > .icon{
                    order: 2;
                }
                > .content{
                    order: 1;
                }

            }
            }
            

</style>