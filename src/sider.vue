<template>
     <transition name="slide">
        <div class="sider" v-if="visible">
        <slot></slot>
        <!-- 添加close按钮的功能，点击后sider页面隐藏，v-if变量控制sider页面是否隐藏 -->
            <!-- <button @click="visible=false">close</button> -->
        </div>
    </transition>
  </template>
  <script>
    export default {
      name: 'YVueSider',
      data () {
        return {
            visible:true
        }
    },
    methods: {

    }
    
}
   
  </script>
  
  <style lang="scss" scoped>
    .sider {
        position: relative;
        > button {
            position: absolute;
            top: 0;
            right:0;
        }
    }

    
    .slide-enter-active, .slide-leave-active {
        
        transition:  all .3s;
    }

    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
  </style>