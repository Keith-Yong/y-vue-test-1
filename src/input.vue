<template>
    <div class="wrapper">
    <!-- 在属性前加:后面值是变量 -->
    <!-- 双向绑定,只有在input输入框中触发了事件,第一个参数规定必须是input名称,第二个值会被传递出去 这里是输入狂的值-->
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './icon.vue'

    export default{
        components:{Icon},
        name:'YVue-input', // 在浏览器安装了vue谷歌插件，添加Name属性为了直观看到组件名称
        props:{//定义本组件的属性value,disabled等
            value: {  
                type:String
            },
            disabled:{
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error:{
                type:String
            }
        }

    }
</script>

<style lang="scss" scoped> // 样式加了scoped属性后，该组件的标签会获得一个id，不会造成组件之间的样式冲突
// 加了选择器，所有的组件都是独特的

    $height: 32px;
    $border-color:#999;
    $border-color-hover: #666;
    $box-shadow-color:rgba(0, 0, 0, 0.5);
    $font-size:12px;
    $red: #F1453D;
    .wrapper{ font-size: $font-size;display:inline-flex;
        align-items: center;
        > :not(:last-child) {margin-right: .5em;}
        >input{
            height: 32px;
            border:1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
           
         &:hover {border-color:$border-color-hover;}
         &:focus {box-shadow: inset 0 1px 3px $box-shadow-color; outline: none;}
         &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
        }
        &.error {
            > input { border-color: $red; }
    }
        .icon-error { fill: $red; }
        .errorMessage { color: $red; }
        
          
        
    }
</style>