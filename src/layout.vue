<template>
    <div class="layout">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name: 'YvueLayout',

   }
</script>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        border: 1px solid red;

    }
</style>