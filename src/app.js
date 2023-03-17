import Vue from "vue"
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
//装了任何包都需要重新npx parcel
import chai from 'chai'
import spies from 'chai-spies'
import Input from './input.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import plugin from './plugin';

chai.use(spies)

// 注册一个全局的组件名称
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
//  use会去执行plugin中的install方法,use会把Vue实例传给plugin.js中。plugin.js中不需要导入Vue
Vue.use(plugin)

new Vue({

    el: '#app',
    // 这里定义的变量可以在indexhtml中导入vue组件后使用
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi', //message为什么注册在这里的data,而不是app.vue组件中的data
    },
    //
    methods: {
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
          },
        showToast(position) {
            this.$toast(`你需要充值 ${parseInt(Math.random() * 100)}元`,

                {
                    position: position,
                    enableHtml: false,
                    closeButton: {
                        text: '已充值',
                        callback(toast) {
                            // toast可以接收一个变量，然后引用变量的方法
                            toast.log(),
                                console.log('用户说他已充值')
                        }
                    },
                    autoClose: false,
                    autoCloseDelay: 3,
                })
        }
    }
})
