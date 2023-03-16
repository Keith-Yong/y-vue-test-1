import Toast from './toast'
/* 
生成一个toast组件放到body中
*/

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            // 问题： propsData: toastOptions为什么不可以写成toastOptions传进去
           currentToast =  createToast({Vue,message, propsData: toastOptions,
            // 传入回调函数onclose
            onclose: () => {
            currentToast = null
        }},
            
            )
        }
    }
}



//  封装函数

function createToast ({Vue,message, propsData,onclose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor(
        {
            propsData:propsData
               
           
        }
    )
    toast.$slots.default = [message] // 给toast传递了一个默认的插槽的内容
    toast.$mount() 
    toast.$on('close',onclose) // 监听到close函数执行后，调用onclose
    
    document.body.appendChild(toast.$el) // 把元素放到body中

    return toast // 返回值是toast组件
}