import Toast from './toast'
/* 
生成一个toast组件放到body中
*/
export default {
    install(Vue, options) {

       
        Vue.prototype.$toast = function(message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message] // 给toast传递了一个默认的插槽的内容
            toast.$mount() 
            
            document.body.appendChild(toast.$el) // 把元素放到body中

        }
    }
}