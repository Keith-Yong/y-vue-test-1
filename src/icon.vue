<template>
    <!--:等价于v-bind动态绑定，{icon}是模板变量，``是反引号使模板变量生效  -->
    <!--  icon变量存在才用svg -->
    <svg  class="g-icon"><use :xlink:href="`#I-${name}`"></use></svg>
        <!-- slot标签内不能添加样式，所以需要加一个div标签 -->
</template>

<script>
   export default {
    props: ['name']
   }
</script>

<style lang="scss">
 /* 使用em是为了和文字一样高 */
 .g-icon{
       width: 1em; 
       height:1em;
    }
</style>