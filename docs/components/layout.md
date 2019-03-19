---
title:Layout-布局
---
# Layout-布局
通过100分栏，可以迅速的创建各种比例的布局

## 基础布局
:::tip
不设置`span`时，将按照等比例划分
:::
**实例展示**

<ClientOnly>
<BasicLayoutDemos></BasicLayoutDemos>
</ClientOnly>

**示例代码**

```html
<!--一栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
</aloe-row>
<!--两栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
</aloe-row>
<!--三栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
    <aloe-col><div class="col-content dark"></div></aloe-col>
</aloe-row>
<!--四栏-->
<aloe-row>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
    <aloe-col><div class="col-content dark"></div></aloe-col>
    <aloe-col><div class="col-content light"></div></aloe-col>
</aloe-row>
```

## 比例布局
:::tip
通过设置`span`时，将`<aloe-col>`按照固定比例创建
:::

<ClientOnly>
<ScaleLayoutDemos></ScaleLayoutDemos>
</ClientOnly>

**示例代码**
```html
<aloe-row>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="70"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="50"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="20"><div class="col-content light"></div></aloe-col>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="10"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="15"><div class="col-content light"></div></aloe-col>
    <aloe-col span="30"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="45"><div class="col-content light"></div></aloe-col>
</aloe-row>
```

**Attributes**
:::tip
当设置loading时，默认不展示，点击出现loading状态，再次点击消失
:::
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|danger  | 危险按钮| Boolean |    --    |   false   |
|success | 成功按钮| Boolean |    --    |   false   |
|info    | 信息按钮| Boolean |    --    |   false   |
|warning | 警告按钮| Boolean |    --    |   false   |
|position | 图标位置| String |left,right|   left    |
|loading | 加载中| Boolean   |   ----   |   false   |

