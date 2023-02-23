<template>
    <button class ="g-button">
        <slot></slot>
    </button>
</template>

<script>
   export default {}


</script>

<style lang="scss">
 .g-button {
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);

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
        }
       

</style>