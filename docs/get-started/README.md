---
title: 快速上手
---

# 快速上手


## 引入必要资源
```javascript
//  引入自己的库的名字，怎么查看自己的库的名字是什么
import {Button} from "y-vue-test-1";
import "Y-Vue-demo/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "g-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```
效果：
<ClientOnly>
  <get-started-button-demos></get-started-button-demos>
</ClientOnly>
