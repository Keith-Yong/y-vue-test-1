import Vue from "vue"
import Button  from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
//装了任何包都需要重新npx parcel
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input.vue'

chai.use(spies)

// 注册一个全局的组件名称
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
            
    el: '#app',
    // 这里定义的变量可以在indexhtml中导入vue组件后使用
    data: {
        loading1:false,
        loading2:true,
        loading3:false,
    }
    
})
