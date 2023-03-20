const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
import Icon from '../src/icon'
import Sinon from 'sinon';
Vue.component('g-icon', Icon)
Vue.config.productionTip = false
Vue.config.devtools = false


describe('Toast', () => {
    // BDD行为驱动测试 mocha引入
    // 期待Input组件可以存在
    it('存在', () => {
        expect(Toast).to.exist
    })

    describe('props',function() {
        it('接受autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
                
            }).$mount(div)
            expect(document.body.contains(vm.$el)).to.eq(true)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            });
        })


        it('接受closeButton', () => {
            const callback = Sinon.fake()
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor(
                {
                    propsData: {
                        closeButton: {
                            text:' 关闭吧',
                            callback,

                        },
                    }
                }
            ).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.called
        })

        it('接受enableHtml', () =>{
            const Constructor = Vue.extend(Toast)
            const vm  = new Constructor({
                propsData: {enableHtml:true}
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })

        it('接受position', () => {
            const Constructor = Vue.extend(Toast)
            const vm  = new Constructor({
                propsData: {position: 'bottom'}
            }).$mount()
            // 问题：这里为什么是用classList去获取元素
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)

        })

    })
    
})

