<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
   export default {
    name:"YVueCollapse",
    props: {
        single: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide () {

        // 问题：single在哪里传进来是true值
      if (this.single) {
        return {
          eventBus: this.eventBus
        }
      }
    },

   }
</script>

<style scoped lang="scss">

    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>