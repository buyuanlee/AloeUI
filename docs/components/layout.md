---
title:Layout-网页布局
---
# Layout-网页布局
用于建立网页布局的组件；可以自由组合建立常用的网页布局；   
- `<aloe-layout>`:外层包裹器，默认子元素垂直上下排列；当子元素包含`<aloe-aside>`时，会水平左右排列；
- `<aloe-header>`:头部内容包裹器；
- `<aloe-footer>`:底部内容包裹器；
- `<aloe-mian>`:主要内容包裹器；
- `<aloe-aside>`:侧边栏内容包裹器；

:::tip
组件默认无宽高，需要自己根据实际项目进行调整；以上组件采取flex布局，`<aloe-layout>`的子元素只能为`<aloe-header>`、`<aloe-footer>`、`<aloe-main>`、`<aloe-aside>`;反之亦然。
:::

**实例展示**

<ClientOnly>
<LayoutDemos></LayoutDemos>
</ClientOnly>

**示例代码**

```html
<div class="layout">
    <aloe-layout>
        <aloe-header>Header</aloe-header>
        <aloe-main>Main</aloe-main>
        <aloe-footer>Footer</aloe-footer>
    </aloe-layout>
</div>
<div class="layout">
    <aloe-layout>
        <aloe-header>Header</aloe-header>
        <aloe-layout>
            <aloe-aside>Aside</aloe-aside>
            <aloe-main>Main</aloe-main>
        </aloe-layout>
        <aloe-footer>Footer</aloe-footer>
    </aloe-layout>
</div>
<div class="layout">
    <aloe-layout>
        <aloe-aside>Aside</aloe-aside>
        <aloe-layout>
            <aloe-header>Header</aloe-header>
            <aloe-main>Main</aloe-main>
            <aloe-footer>Footer</aloe-footer>
        </aloe-layout>
    </aloe-layout>
</div>
</div>
```

**Attributes**

|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|--| --| -- |    --    |   --   |
