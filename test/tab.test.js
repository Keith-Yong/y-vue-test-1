const expect = chai.expect;
import Vue from "vue";
// 导入模块时，先命名模块名还是先导入，感觉有时反应不过来。命名变量也是这样，有什么快捷键吗？
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'


// 注册组件
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)


// 阻止生产信息
Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tabs',() => {
    // 断言Tabs组件是否存在
    it('存在', () => {
        expect(Tabs).to.exist
    })

    // 断言selected属性

    it('接受selected属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        // 在div内加入html结构
        div.innerHTML = `
        <g-tabs selected="finance">
            <g-tabs-head>
            <g-tabs-item name="woman"> 美女 </g-tabs-item>
            <g-tabs-item name="finance"> 财经 </g-tabs-item>
            <g-tabs-item name="sports"> 体育 </g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
            <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
            <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
            <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
            </g-tabs-body>
      </g-tabs>
        `

        // 问题：这是把div标签挂载还是vue实例化
        let vm = new Vue({el:div})
        // 问题：这里为什么用$nextTick
        vm.$nextTick(
            () => {
                let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
                expect(x.classList.contains('active')).to.be.true
                // 问题：done的作用到底是什么
                done()
            }
        )
        
        
    },

    it('可以接受direction prop', () => {

    })

    )

})