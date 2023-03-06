const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import Icon from '../src/icon'
import Sinon from 'sinon';
Vue.component('g-icon',Icon)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    // BDD行为驱动测试 mocha引入
    // 期待Input组件可以存在
   it('存在', () =>  {
    expect(Input).to.exist
   })
}
)

describe( 'props', () => {
    const Constructor = Vue.extend(Input)

    let vm 
    afterEach(
        () => {
            vm.$destroy()
          } 
    )
   // 对input组件的value进行测试
   it('接收 value', () => {
    
    
     vm = new Constructor({
        propsData: {
            value: '1234'
        }
    }).$mount()
    const InputElement = vm.$el.querySelector('Input')
    expect(InputElement.value).to.equal('1234')
   
})

    // 对input组件的disabled进行测试
    it('接收 disabled', () => {
    //问题:为什么这里在变量前加const关键字会导致用例执行failed
    //   const   vm = new Constructor({
           vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const InputElement = vm.$el.querySelector('Input')
        expect(InputElement.disabled).to.equal(true)
        
    })

    
    // 对input组件的readonly进行测试
    it('接收 readonly', () => {
       
         vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount()
        const InputElement = vm.$el.querySelector('input')
        expect(InputElement.readOnly).to.equal(true)
        
    })

     // 对input组件的error进行测试
     it('接收 error', () => {
      
         vm = new Constructor({
            propsData: {
                error: "你错了"
            }
        }).$mount()
        // 问题：errorMessage为什么要这样才能获得
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#I-error')
        const   errorMessage  = vm.$el.querySelector('.errorMessage')
        expect(errorMessage.innerText).to.equal("你错了")
        
    })

})


describe('事件', () => {
    // TDD测试驱动开发
    const Constructor = Vue.extend(Input)
    let vm 
    //每个事件测试完成后数据都进行销毁
    afterEach(
        () => {
            vm.$destroy()
        }
    )
        //对input标签的change等事件进行测试
    it('支持 change/input/focus/blur事件'), () => {
        ['change','input','focus','blur']
        .forEach(
            (eventName) => {
                vm = new Constructor({}).$mount()
                const callback = Sinon.fake()
                vm.$on(eventName,callback)
                // 触发input的change事件
                let event = new Event(eventName);
                let InputElement = vm.$el.querySelector('input')
                InputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)

            }
        )
    }
})