import Vue from "vue"
import Button  from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
// 注册一个全局的组件名称
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
            
    el: '#app',
    // 这里定义的变量可以在indexhtml中导入vue组件后使用
    data: {
        loading1:false,
        loading2:true,
        loading3:false,
    }
    
})
//装了任何包都需要重新npx parcel
import chai from 'chai'

const expect = chai.expect
// 单元测试
// 拿到构造函数，创造实例，获取元素，获取标签，断言

{
    // 测试icon属性
    const Constructor = Vue.extend(Button)
    const vm = new Constructor( {
        propsData: {
            icon: 'settings',
            
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#I-settings')
    vm.$el.remove()
    vm.$destroy()


}

{
    // 测试i-loading属性
    const Constructor = Vue.extend(Button)
    const vm = new Constructor( {
        propsData: {
            icon: 'settings',
            loading: true
            
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#I-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    // 问题：这段代码测试是什么？div变量的作用是什么
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor( {
        propsData: {
            icon: 'settings',
           
            
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}

{ //测试iconPositions属性:断言依据：order的值
    const div =  document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor( {
        propsData: {
            icon:'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} =window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}


{   // spy 制作mock数据 具体执行的逻辑
    const Constructor = Vue.extend(Button)
    const vm = new Constructor( {
        propsData: {
            icon:'settings',
        }
    })
    vm.$mount()
    // 使空函数成为mock对象，即点击元素后会触发这个空的函数
    let spy = chai.spy(function(){})
    
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

}










