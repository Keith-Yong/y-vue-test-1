import Vue from "vue"
import Button  from './button.vue'
import Icon from './icon.vue'
// 注册一个全局的组件名称
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
new Vue({
            
    el: '#app',
    // 这里定义的变量可以在indexhtml中导入vue组件后使用
    data: {
        loading1:false,
        loading2:true,
        loading3:false,
    }
    
})