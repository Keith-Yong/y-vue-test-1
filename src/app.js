import Vue from "vue"
import Button  from './button.vue'
import Icon from './icon.vue'
// 注册一个全局的组件名称
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
new Vue({
            
    el: '#app',
    
})