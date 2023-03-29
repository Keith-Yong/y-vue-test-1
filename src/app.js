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
import Tabs  from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)



new Vue({

    el: '#app',
    // 这里定义的变量可以在indexhtml中导入vue组件后使用
    data: {
        selectedTab:'sports'
    },
    //
    methods: {
        yyy(data) {
            // 这里为什么是data
            console.log('yyy')
            console.log(data)
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3(){
            // 问题：下的toast依然会先向上再向左移动
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
                    autoClose: 3,
                    
                })
        }
    }
})
