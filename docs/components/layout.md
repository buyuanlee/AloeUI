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
通过`<aloe-col>`的`span`属性，将`<aloe-col>`按照固定比例创建
:::
**实例展示**

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

## 间隔布局
:::tip
通过`<aloe-row>`的`gutter`属性，设置`<aloe-col>`的间隔
:::

**实例展示**

<ClientOnly>
<GutterLayoutDemos></GutterLayoutDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row gutter="20">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row gutter="10">
    <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30"><div class="col-content light"></div></aloe-col>
    <aloe-col span="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30"><div class="col-content light"></div></aloe-col>
</aloe-row>

```

## 偏移布局
:::tip
通过`<aloe-col>`的`offset`属性，设置`<aloe-col>`见的间隔
:::

**实例展示**

<ClientOnly>
<OffsetLayoutDemos></OffsetLayoutDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row>
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25" offset="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="20" offset="20"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="30" offset="30"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row>
    <aloe-col span="50" offset="25"><div class="col-content dark"></div></aloe-col>
</aloe-row>
```

## 对齐方式
:::tip
通过`<aloe-row>`的`justify`属性，设置`<aloe-col>`的对齐方式。对应的是`flex`布局`justify-content`的五个属性
:::

**实例展示**

<ClientOnly>
<FlexLayoutDemos></FlexLayoutDemos>
</ClientOnly>

**示例代码**

```html
<aloe-row justify="center">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="end">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="start">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="between">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
<aloe-row justify="around">
    <aloe-col span="25"><div class="col-content dark"></div></aloe-col>
    <aloe-col span="25"><div class="col-content light"></div></aloe-col>
</aloe-row>
```

**Attributes `<aloe-row>`**
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|gutter  | 设置子元素的间隙| Number,String |    --    |   0   |
|justify | 设置对齐方式| String |start,end,center,between,around|   start   |

**Attributes `<aloe-col>`**
|  参数   | 说明   | 类型   | 可选参数| 默认参数 |
|--------|--------|--------|--------|--------|
|span  | 元素占比| Number,String |0-100|   --   |
|offset | 偏移占比| Number,String |0-100|   0   |

