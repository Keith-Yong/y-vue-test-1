---
title: Layout - 布局
---
# 布局
## 预览
&nbsp;
<ClientOnly>
    <layout-demos></layout-demos>
</ClientOnly>
## 使用方法
```vue
<template>
  <div class="wrapper">
    <g-layout>
      <g-header> header </g-header>
      <g-layout>
        <g-sider> sider </g-sider>
        <g-content> content </g-content>
      </g-layout>
      <g-footer> footer </g-footer>
    </g-layout>
    <br>
    <g-layout>
      <g-header> header </g-header>
      <g-content> content </g-content>
      <g-footer> footer </g-footer>
    </g-layout>
    <br>
    <g-layout>
      <g-header> header </g-header>
      <g-layout>
        <g-sider> sider </g-sider>
        <g-layout>
          <g-content> content </g-content>
          <g-footer> footer </g-footer>
        </g-layout>
      </g-layout>
    </g-layout>
  </div>
</template>
<style lang="scss" scoped>
$background: #3eaf7c;
.wrapper {
> .layout { height: 30vh;
  > .header { height: 3em; background: $background; }
  > .content{ background: lighten($background, 40%); }
  > .layout { height: 6em;
    > .sider { width: 3em; background: lighten($background, 15%); }
    > .content { background: lighten($background, 40%); }
    > .layout{
      > .content{ background: lighten($background, 40%); }
      > .footer { background: $background; }
    }
  }
  > .footer { background: $background; }
}
}
</style>
```

## 选项
提供基础布局，样式自定义。
### 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> g-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。