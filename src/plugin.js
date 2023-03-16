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
           currentToast =  createToast({Vue,message, toastOptions})
        }
    }
}



function createToast ({Vue,message, toastOptions}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor(
        {
            propsData:toastOptions
               
           
        }
    )
    toast.$slots.default = [message] // 给toast传递了一个默认的插槽的内容
    toast.$mount() 
    
    document.body.appendChild(toast.$el) // 把元素放到body中

    return toast // 返回值是toast组件
}