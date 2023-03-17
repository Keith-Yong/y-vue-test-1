<template>
    <!-- 动态样式可以直接绑定函数toastClasses吗 -->
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
        <!-- enableHtml的值为什么是在app.js中toast函数传递过来的 -->
            <div class="message">
                <slot v-if="!enableHtml"></slot>
            
        <!-- 为什么在plugin中定义的slot可以在本文件中引用 -->
                <div  v-else v-html="$slots.default[0]"></div>
            </div>

            <div class="line" ref="line"></div>
            <span class= "close" v-if="closeButton" @click="onClickClose">
                
                {{closeButton.text}}
            </span>
        </div>
    </div>
       
</template>

<script>

    // 构造组件的选项
   export default {
        name:'YVuetoast',
        props: {
            autoClose: {
                type: Boolean,
                default:true
            },
            autoCloseDelay : {
                type: Number,
                default:50
            },
            closeButton : {
                type: Object,
                default: () => {
                    // 如果default的值是对象，数组，必须定义一个函数并用return将他们返回
                    
                   return {text: '关闭',callback: undefined
                }
            } 
        },
        enableHtml: {
        type:Boolean,
        default:true
    },
    position: {
        type: String,
        default:'top',
        // vue内置校验函数为什么这个validator不定义在methods里面,这个函数在什么时候被调用
        validator(value) {
            return ['left', 'right', 'middle', 'bottom'].indexOf(value) >= 0
        }

    }

        
    },
        created() {
            // console.log(this.closeButton) //在 vue2遇到bug的 调试方法
        },
        // mounted内的函数会在页面初始化就执行
        mounted() {
            this.updateStyles()
            this.execAutoClose()
        },
        // 计算属性函数:用于传递弹窗的方向
        computed: {
                toastClasses() {
                    return {
                        [`position-${this.position}`]:true
                    }
                   
                }
            },
           
            
           
        
        methods: {
            updateStyles() {
            // 怎么理解这个Api：解决了把height改成minheight后line高度消失的问题，mounted拿不到高度，需要在下一次才能拿到
            this.$nextTick(  () => {
                // 把line的高度引用wrapper元素的高度
                this.$refs.line.style.height = 
                 `${this.$refs.toast.getBoundingClientRect().height}px`
                })

            },
            
            execAutoClose () {
                if (this.autoClose) {
                setTimeout(() => {
                    this.close() //移除toast元素
                }, this.autoCloseDelay * 1000);
            }
            
            }
            ,
            close() {
                this.$el.remove()  // 移除元素并销毁
                this.$emit('close') // 这里的作用，$emit函数第一个函数一般都是函数名称吗？
                this.$destroy()   //销毁
            },
            log() {
                console.log('测试')
            },
            onClickClose() {
                // 关闭当前组件，并调用回调函数callback
                this.close() 
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this) // this就是当前实例
                }
            }
        }

   }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg:rgba(0,0,0,0.75);


    @keyframes slide-up {
        // 问题：translateY 100%此时元素在Y左边哪里
        0%{opacity: 0; transform: translateY(100%);}
        100%{opacity: 1;transform: translateY(0%);}
    }

    @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }

    @keyframes fade-in {
        0%{opacity: 0; }
        100%{opacity: 1;}
    }





    .wrapper {
        position: fixed;
        left: 50%; //没有使元素真正的居中
        transform: translateX(-50%); //使元素在中间
        $animation-duration:300ms;

         
        &.position-top {
            top: 0;
            // transform: translateX(-50%)
            // 弹窗左右下角的为圆角
            .toast{
                border-top-left-radius:0;
                border-top-right-radius: 0;
                animation: slide-down  $animation-duration;
            }

            
        }

        &.position-bottom {
            bottom: 0;
            // transform: translateX(-50%)
            .toast{
                border-bottom-left-radius:0;
                border-bottom-right-radius: 0;
            }
            animation:slide-up $animation-duration;
           
        }

        &.position-middle {
            top:50%;
            transform: translateX(-50%) translateY(-50%);
            .toast {
                animation: fade-in $animation-duration;
            }
            
        }

    }
    .toast {
        animation: slide-up 1s;
        border: 1px solid red;
        
        // top:0;
        
        
        font-size:  $font-size;
        line-height: 1.8;
        min-height:$toast-min-height;
        display: flex; //使元素flex布局内部文字居中
        align-items: center;
        color: white;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow:  0 0 3px  0  rgba(0, 0, 0, 0.50);
        padding:0 16px ; //问题：为什么这里的Padding会对文本有作用，我是message是一个元素吗？那它的外部元素是哪个


        .close {
            // border: 1px solid red;
            padding-left: 16px;
            flex-shrink:0 ;  // 让关闭按钮不会竖着排列
        
        }
        .line {
            height: 100%;
            border-left: 1px solid #666 ;
            margin-left: 16px;
        }

        .message {
            padding: 8px 0;
        }
       
    }

    

   

</style>

