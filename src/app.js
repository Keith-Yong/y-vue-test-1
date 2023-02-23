import Vue from "vue"
import Button  from './button.vue'
// 声明一个全局的组件名称
Vue.component('g-button',Button)
new Vue({
            
    el: '#app',
    
})