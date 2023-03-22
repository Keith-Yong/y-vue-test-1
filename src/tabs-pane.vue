<template>
    <div class="tabs-pane">
    <slot></slot>
    </div>
</template>

<script>
   export default {
    name:'YVueTabsPane',
    inject:['eventBus'],
    created() {
        console.log('爷爷给pane的eventBus组件')
        console.log(this.eventBus)
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })

    }
   }
</script>

<style>
    .tabs-pane {
        
    }
</style>